// app/api/otp/send/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import OTPModel from "@/models/OTP";
import { sendEmail, otpEmailTemplate } from "@/lib/brevo";

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { target, name } = await req.json();

    if (!target || typeof target !== "string" || !target.includes("@")) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    const email = target.toLowerCase().trim();

    await connectDB();

    const otp = generateOTP();

    // Delete any existing OTP for this email, then create fresh one
    await OTPModel.findOneAndDelete({ target: email, type: "email" });
    await OTPModel.create({ target: email, otp, type: "email" });

    // Send OTP email via Brevo
    await sendEmail({
      to: email,
      toName: name || "Warrior",
      subject: "JECLAT 2026 — Email Verification OTP",
      htmlContent: otpEmailTemplate(otp, name || "Warrior"),
    });

    return NextResponse.json({ success: true, message: "OTP sent to your email." });
  } catch (err: any) {
    console.error("[OTP SEND ERROR]", err?.message || err);
    return NextResponse.json(
      { error: err.message || "Failed to send OTP. Please try again." },
      { status: 500 }
    );
  }
}