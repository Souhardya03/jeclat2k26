// app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { sendEmail, confirmationEmailTemplate } from "@/lib/brevo";
import { appendToSheet } from "@/lib/googleSheets";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      eventId, eventTitle, eventDate, eventVenue, eventCategory,
      name, email, year, branch, gender, rollNumber, college,
      teamName, teamMembers,
    } = body;

    // Validate required fields
    const required = [eventId, eventTitle, name, email, year, branch, gender, rollNumber, college];
    if (required.some((f) => !f || String(f).trim() === "")) {
      return NextResponse.json(
        { error: "Please fill in all required fields before submitting." },
        { status: 400 }
      );
    }

    await connectDB();

    // ── Normalise emails ──────────────────────────────────────────────────────
    const leaderEmail = email.toLowerCase().trim();

    // ── Check leader email isn't already registered for this event ────────────
    // (as leader OR as a team member in another registration)
    const leaderConflict = await Registration.findOne({
      eventId,
      $or: [
        { email: leaderEmail },
        { "teamMembers.email": leaderEmail },
      ],
    });
    if (leaderConflict) {
      return NextResponse.json(
        { error: `${email} has already been registered for this event. Each participant can only register once.` },
        { status: 409 }
      );
    }

    // ── Team-specific validation ───────────────────────────────────────────────
    const normalizedMembers: { name: string; email: string; year: string; branch: string; rollNumber: string }[] = [];

    if (teamName && teamName.trim()) {
      // Unique team name check (case-insensitive)
      const duplicateTeam = await Registration.findOne({
        eventId,
        teamName: {
          $regex: `^${teamName.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
          $options: "i",
        },
      });
      if (duplicateTeam) {
        return NextResponse.json(
          { error: `The team name "${teamName}" is already taken. Please choose a different name for your team.` },
          { status: 409 }
        );
      }

      // Validate & deduplicate each team member's email
      if (Array.isArray(teamMembers) && teamMembers.length > 0) {
        const seenEmails = new Set<string>([leaderEmail]);

        for (let i = 0; i < teamMembers.length; i++) {
          const m = teamMembers[i];
          if (!m.name?.trim() || !m.email?.trim() || !m.year || !m.branch || !m.rollNumber?.trim()) {
            return NextResponse.json(
              { error: `Please complete all details (including email) for Warrior ${i + 2} before submitting.` },
              { status: 400 }
            );
          }

          const memberEmail = m.email.toLowerCase().trim();

          // Duplicate within this team's submission
          if (seenEmails.has(memberEmail)) {
            return NextResponse.json(
              { error: `The email ${memberEmail} appears more than once in your team. Each team member must use a unique email address.` },
              { status: 409 }
            );
          }
          seenEmails.add(memberEmail);

          // Already registered for this event (as leader or member of another team)
          const memberConflict = await Registration.findOne({
            eventId,
            $or: [
              { email: memberEmail },
              { "teamMembers.email": memberEmail },
            ],
          });
          if (memberConflict) {
            return NextResponse.json(
              { error: `${m.name} (${memberEmail}) is already registered for this event and cannot be added to another team.` },
              { status: 409 }
            );
          }

          normalizedMembers.push({
            name:       m.name.trim(),
            email:      memberEmail,
            year:       m.year,
            branch:     m.branch,
            rollNumber: m.rollNumber.trim(),
          });
        }
      }
    }

    // ── Generate ticket ID ─────────────────────────────────────────────────────
    const ticketId = `JEC-${eventId.toUpperCase().slice(0, 6)}-${uuidv4().slice(0, 8).toUpperCase()}`;

    await Registration.create({
      eventId,
      eventTitle,
      eventDate:    eventDate    || "TBA",
      eventVenue:   eventVenue   || "TBA",
      eventCategory: eventCategory || "",
      name,
      email: leaderEmail,
      year,
      branch,
      gender,
      rollNumber,
      college,
      teamName:    teamName    || undefined,
      teamMembers: normalizedMembers,
      ticketId,
    });

    // ── Google Sheets append (fire-and-forget) ────────────────────────────────
    appendToSheet({
      eventTitle,
      eventId,
      eventCategory: eventCategory || "",
      eventDate:     eventDate     || "TBA",
      eventVenue:    eventVenue    || "TBA",
      name,
      email: leaderEmail,
      year,
      branch,
      gender,
      rollNumber,
      college,
      teamName:    teamName    || "",
      teamMembers: normalizedMembers,
      ticketId,
      registeredAt: new Date().toISOString(),
    }).catch((err) => console.error("[Sheets] Failed to append row:", err));

    // ── Send confirmation email to the team leader ────────────────────────────
    await sendEmail({
      to: email,
      toName: name,
      subject: `JECLAT 2026 — Registration Confirmed: ${eventTitle}`,
      htmlContent: confirmationEmailTemplate({
        name, eventTitle,
        eventDate:    eventDate    || "TBA",
        eventVenue:   eventVenue   || "TBA",
        eventCategory: eventCategory || "",
        ticketId,
        teamName,
        role: normalizedMembers.length > 0 ? "Team Leader" : undefined,
      }),
    });

    // ── Send confirmation email to each team member ───────────────────────────
    if (normalizedMembers.length > 0) {
      await Promise.allSettled(
        normalizedMembers.map((member) =>
          sendEmail({
            to: member.email,
            toName: member.name,
            subject: `JECLAT 2026 — You've been added to a team: ${eventTitle}`,
            htmlContent: confirmationEmailTemplate({
              name: member.name,
              eventTitle,
              eventDate:    eventDate    || "TBA",
              eventVenue:   eventVenue   || "TBA",
              eventCategory: eventCategory || "",
              ticketId,
              teamName,
              role: "Team Member",
              teamLeaderName: name,
            }),
          })
        )
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful! Confirmation emails have been sent to all team members.",
      ticketId,
    });
  } catch (err: any) {
    console.error("Registration error:", err);
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "It looks like you've already registered for this event. Each participant can only register once." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again in a moment, or contact the organizers if the issue persists." },
      { status: 500 }
    );
  }
}

// ── GET: Check email / team name availability ──────────────────────────────────
// Used by the frontend for real-time feedback before form submission.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email       = searchParams.get("email");
  const eventId     = searchParams.get("eventId");
  const teamName    = searchParams.get("teamName");
  const memberEmail = searchParams.get("memberEmail"); // check a member email

  if (!eventId) {
    return NextResponse.json({ error: "eventId is required" }, { status: 400 });
  }

  await connectDB();

  // ── Team name uniqueness check ─────────────────────────────────────────────
  if (teamName) {
    const teamExists = await Registration.findOne({
      eventId,
      teamName: {
        $regex: `^${teamName.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
        $options: "i",
      },
    });
    return NextResponse.json({ taken: !!teamExists });
  }

  // ── Member email uniqueness check ─────────────────────────────────────────
  // Checks if a prospective member email is already used in this event
  // either as a leader or as a member of any existing team.
  if (memberEmail) {
    const norm = memberEmail.toLowerCase().trim();
    const exists = await Registration.findOne({
      eventId,
      $or: [
        { email: norm },
        { "teamMembers.email": norm },
      ],
    });
    return NextResponse.json({ registered: !!exists });
  }

  // ── Leader email already-registered check ─────────────────────────────────
  if (email) {
    const norm = email.toLowerCase().trim();
    const exists = await Registration.findOne({
      eventId,
      $or: [
        { email: norm },
        { "teamMembers.email": norm },
      ],
    });
    return NextResponse.json({ registered: !!exists });
  }

  return NextResponse.json({ error: "email, memberEmail, or teamName is required" }, { status: 400 });
}