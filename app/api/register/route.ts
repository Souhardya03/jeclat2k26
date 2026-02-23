// app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { sendEmail, confirmationEmailTemplate } from "@/lib/brevo";
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
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await connectDB();

    // Check if this email is already registered for this specific event
    const existing = await Registration.findOne({ email: email.toLowerCase().trim(), eventId });
    if (existing) {
      return NextResponse.json(
        { error: "This email is already registered for this event." },
        { status: 409 }
      );
    }

    // Generate ticket ID e.g. JEC-FLASHM-A1B2C3D4
    const ticketId = `JEC-${eventId.toUpperCase().slice(0, 6)}-${uuidv4().slice(0, 8).toUpperCase()}`;

    await Registration.create({
      eventId,
      eventTitle,
      eventDate:    eventDate    || "TBA",
      eventVenue:   eventVenue   || "TBA",
      eventCategory: eventCategory || "",
      name,
      email: email.toLowerCase().trim(),
      year,
      branch,
      gender,
      rollNumber,
      college,
      teamName:    teamName    || undefined,
      teamMembers: teamMembers || [],
      ticketId,
    });

    // Send confirmation email with virtual ticket
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
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful! A confirmation has been sent to your email.",
      ticketId,
    });
  } catch (err: any) {
    console.error("Registration error:", err);
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "You are already registered for this event." },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}

// GET: Check if an email is already registered for a given event
// Used by the frontend before sending OTP to give early feedback
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email   = searchParams.get("email");
  const eventId = searchParams.get("eventId");

  if (!email || !eventId) {
    return NextResponse.json({ error: "email and eventId are required" }, { status: 400 });
  }

  await connectDB();

  const exists = await Registration.findOne({
    email: email.toLowerCase().trim(),
    eventId,
  });

  return NextResponse.json({ registered: !!exists });
}