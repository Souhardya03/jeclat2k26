// app/api/otp/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import OTPModel from "@/models/OTP";

export async function POST(req: NextRequest) {
  try {
    const { target, type, otp } = await req.json();

    if (!target || !type || !otp) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    const record = await OTPModel.findOne({ target, type });

    if (!record) {
      return NextResponse.json(
        { error: "OTP expired or not found. Please request a new one." },
        { status: 400 }
      );
    }

    if (record.otp !== otp.trim()) {
      return NextResponse.json(
        { error: "Incorrect OTP. Please try again." },
        { status: 400 }
      );
    }

    // Valid — delete the OTP record
    await OTPModel.deleteOne({ _id: record._id });

    return NextResponse.json({ success: true, message: "Verified successfully" });
  } catch (err: any) {
    console.error("OTP verify error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}