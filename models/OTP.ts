import mongoose, { Schema, Model } from "mongoose";

interface IOTP {
  target: string; // email address
  otp: string;
  type: "email";
  createdAt: Date;
}

const OTPSchema = new Schema<IOTP>({
  target:    { type: String, required: true },
  otp:       { type: String, required: true },
  type:      { type: String, enum: ["email"], required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 }, // TTL: 10 minutes
});

// Ensure only one active OTP per email at a time
OTPSchema.index({ target: 1, type: 1 });

const OTPModel: Model<IOTP> =
  mongoose.models.OTP || mongoose.model<IOTP>("OTP", OTPSchema);

export default OTPModel;