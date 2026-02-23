import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRegistration extends Document {
  eventId:       string;
  eventTitle:    string;
  eventDate:     string;
  eventVenue:    string;
  eventCategory: string;

  name:       string;
  email:      string;
  year:       string;
  branch:     string;
  gender:     string;
  rollNumber: string;
  college:    string;

  teamName?:    string;
  teamMembers?: {
    name:       string;
    year:       string;
    branch:     string;
    rollNumber: string;
  }[];

  registeredAt: Date;
  ticketId:     string;
}

const TeamMemberSchema = new Schema({
  name:       { type: String, required: true },
  year:       { type: String, required: true },
  branch:     { type: String, required: true },
  rollNumber: { type: String, required: true },
});

const RegistrationSchema = new Schema<IRegistration>({
  eventId:       { type: String, required: true },
  eventTitle:    { type: String, required: true },
  eventDate:     { type: String, required: true },
  eventVenue:    { type: String, required: true },
  eventCategory: { type: String, required: true },

  name:       { type: String, required: true },
  email:      { type: String, required: true },
  year:       { type: String, required: true },
  branch:     { type: String, required: true },
  gender:     { type: String, required: true },
  rollNumber: { type: String, required: true },
  college:    { type: String, required: true },

  teamName:    { type: String },
  teamMembers: [TeamMemberSchema],

  registeredAt: { type: Date, default: Date.now },
  ticketId:     { type: String, required: true, unique: true },
});

// One email per event — same email can register for different events
RegistrationSchema.index({ email: 1, eventId: 1 }, { unique: true });

const Registration: Model<IRegistration> =
  mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", RegistrationSchema);

export default Registration;