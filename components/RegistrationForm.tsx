"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cinzel, Cormorant_SC, Montserrat, Space_Mono } from "next/font/google";
import {
  CheckCircle2,
  Loader2,
  Swords,
  Flame,
  Plus,
  Trash2,
  ChevronDown,
  Mail,
  XCircle,
  ShieldCheck,
} from "lucide-react";

const cinzel     = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const cormorant  = Cormorant_SC({ subsets: ["latin"], weight: ["400", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const mono       = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

// ─── PRIMITIVE COMPONENTS ─────────────────────────────────────────────────────

const EpicLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className={`${cinzel.className} text-[10px] uppercase tracking-[0.2em] text-[#fbba06]/70 font-bold mb-2 flex items-center gap-1`}>
    {children}
    {required && <span className="text-red-500">*</span>}
  </label>
);

const EpicInput = (props: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) => {
  const { error, ...rest } = props;
  return (
    <div className="relative group">
      <input
        {...rest}
        className={`block w-full border-b ${error ? "border-red-500" : "border-[#fbba06]/30"} bg-transparent px-2 py-3 text-[#f0e6d2] placeholder:text-[#f0e6d2]/20 focus:border-[#fbba06] focus:ring-0 focus:outline-none transition-all ${montserrat.className} text-sm`}
      />
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#fbba06] transition-all duration-700 group-focus-within:w-full shadow-[0_0_10px_#fbba06]" />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
};

const EpicSelect = ({
  value, onChange, options, placeholder, error,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  error?: string;
}) => (
  <div className="relative group">
    <select
      value={value}
      onChange={onChange}
      className={`block w-full appearance-none border-b ${error ? "border-red-500" : "border-[#fbba06]/30"} bg-transparent px-2 py-3 text-[#f0e6d2] focus:border-[#fbba06] focus:ring-0 focus:outline-none cursor-pointer text-sm ${montserrat.className}`}
    >
      <option value="" disabled className="bg-[#1a0b0b] text-[#f0e6d2]/50">{placeholder || "Select"}</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-[#1a0b0b] text-[#fbba06]">{opt}</option>
      ))}
    </select>
    <ChevronDown className="absolute right-2 top-4 h-4 w-4 opacity-70 pointer-events-none text-[#fbba06]" />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-8">
    <h3 className={`${cinzel.className} text-xl text-[#fbba06]`}>{title}</h3>
    <p className={`${cormorant.className} text-[#fbba06]/60 italic text-sm mt-1`}>{subtitle}</p>
    <div className="flex items-center justify-center gap-3 mt-4 opacity-40">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#fbba06]" />
      <div className="w-2 h-2 rotate-45 border border-[#fbba06]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#fbba06]" />
    </div>
  </div>
);

// ─── EMAIL OTP FIELD ──────────────────────────────────────────────────────────
type OTPStatus = "idle" | "sending" | "sent" | "verifying" | "verified";

function EmailOTPField({
  email, name, eventId, onEmailChange, onVerified, error, checkAsMember = false,
}: {
  email: string;
  name: string;
  eventId: string;
  onEmailChange: (v: string) => void;
  onVerified: () => void;
  error?: string;
  /** When true, the pre-flight check uses the /memberEmail endpoint so it also
   *  detects conflicts where this email appears as a member of another team. */
  checkAsMember?: boolean;
}) {
  const [otp, setOtp]         = useState("");
  const [status, setStatus]   = useState<OTPStatus>("idle");
  const [message, setMessage] = useState("");
  const isVerified = status === "verified";

  const handleEmailChange = (v: string) => {
    onEmailChange(v);
    if (status !== "idle") { setStatus("idle"); setOtp(""); setMessage(""); }
  };

  const sendOTP = async () => {
    if (!email.trim()) { setMessage("Please enter your email first."); return; }
    setStatus("sending"); setMessage("");
    try {
      // Pre-flight: check if this email is already registered for this event
      const param  = checkAsMember ? "memberEmail" : "email";
      const checkRes  = await fetch(
        `/api/register?${param}=${encodeURIComponent(email)}&eventId=${encodeURIComponent(eventId)}`
      );
      const checkData = await checkRes.json();
      if (checkData.registered) {
        setStatus("idle");
        setMessage("This email is already registered for this event.");
        return;
      }
      const res  = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: email, type: "email", name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setStatus("sent"); setMessage("OTP sent! Check your inbox.");
    } catch (err: any) { setStatus("idle"); setMessage(err.message); }
  };

  const verifyOTP = async () => {
    if (!otp.trim()) { setMessage("Please enter the OTP."); return; }
    setStatus("verifying");
    try {
      const res  = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: email, type: "email", otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Verification failed");
      setStatus("verified"); setMessage("Email verified!"); onVerified();
    } catch (err: any) { setStatus("sent"); setMessage(err.message); }
  };

  return (
    <div className="space-y-3">
      <EpicLabel required><Mail size={12} /><span className="ml-2">Patra (Email)</span></EpicLabel>
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <EpicInput
            type="email"
            placeholder="warrior@college.edu"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            disabled={isVerified}
            error={error}
          />
        </div>
        {!isVerified && (
          <button
            type="button"
            onClick={sendOTP}
            disabled={status === "sending" || status === "verifying"}
            className={`${cinzel.className} text-[10px] tracking-widest uppercase px-4 py-3 border transition-all duration-300 whitespace-nowrap shrink-0 ${
              status === "sending"
                ? "border-[#fbba06]/30 text-[#fbba06]/40 cursor-wait"
                : "border-[#fbba06] text-[#fbba06] hover:bg-[#fbba06] hover:text-black"
            }`}
          >
            {status === "sending" ? <Loader2 size={14} className="animate-spin" /> : status === "sent" ? "Resend" : "Send OTP"}
          </button>
        )}
        {isVerified && <CheckCircle2 className="text-green-500 shrink-0 mb-3" size={22} />}
      </div>

      <AnimatePresence>
        {(status === "sent" || status === "verifying") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex gap-3 items-end mt-2">
              <div className="flex-1">
                <EpicInput
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                />
              </div>
              <button
                type="button"
                onClick={verifyOTP}
                disabled={status === "verifying"}
                className={`${cinzel.className} text-[10px] tracking-widest uppercase px-4 py-3 border transition-all duration-300 whitespace-nowrap shrink-0 flex items-center justify-center min-w-[80px] ${
                  status === "verifying"
                    ? "border-[#fbba06]/30 text-[#fbba06]/40 cursor-wait"
                    : "border-[#fbba06] text-[#fbba06] hover:bg-[#fbba06] hover:text-black"
                }`}
              >
                {status === "verifying" ? <Loader2 size={14} className="animate-spin" /> : "Verify"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {message && (
        <p className={`text-xs ${isVerified ? "text-green-400" : "text-red-400"}`}>{message}</p>
      )}
    </div>
  );
}

// ─── TEAM NAME FIELD WITH UNIQUENESS CHECK ────────────────────────────────────
type TeamNameStatus = "idle" | "checking" | "available" | "taken";

function TeamNameField({
  value, eventId, onChange, error,
}: {
  value: string;
  eventId: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  const [status, setStatus]   = useState<TeamNameStatus>("idle");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!value.trim()) { setStatus("idle"); return; }
    setStatus("checking");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(
          `/api/register?eventId=${encodeURIComponent(eventId)}&teamName=${encodeURIComponent(value.trim())}`,
        );
        const data = await res.json();
        setStatus(data.taken ? "taken" : "available");
      } catch {
        setStatus("idle");
      }
    }, 600);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [value, eventId]);

  const borderColor =
    status === "taken"     ? "border-red-500"
    : status === "available" ? "border-green-500"
    : "border-[#fbba06]/30";

  return (
    <div>
      <EpicLabel required>Sena Naam (Team Name)</EpicLabel>
      <div className="relative group">
        <input
          type="text"
          placeholder="Name your legion..."
          value={value}
          onChange={onChange}
          className={`block w-full border-b ${error || status === "taken" ? "border-red-500" : borderColor} bg-transparent px-2 py-3 pr-8 text-[#f0e6d2] placeholder:text-[#f0e6d2]/20 focus:border-[#fbba06] focus:ring-0 focus:outline-none transition-all ${montserrat.className} text-sm`}
        />
        <div className="absolute right-2 top-3.5">
          {status === "checking"  && <Loader2      size={15} className="animate-spin text-[#fbba06]/50" />}
          {status === "available" && <CheckCircle2 size={15} className="text-green-500" />}
          {status === "taken"     && <XCircle      size={15} className="text-red-500" />}
        </div>
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#fbba06] transition-all duration-700 group-focus-within:w-full shadow-[0_0_10px_#fbba06]" />
      </div>
      {status === "taken"     && <p className="text-red-400 text-xs mt-1">This team name is already taken. Choose another.</p>}
      {status === "available" && <p className="text-green-400 text-xs mt-1">This team name is available!</p>}
      {error && status !== "taken" && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

// Hidden bridge: syncs team-name "taken" status to parent ─────────────────────
function TeamNameStatusBridge({
  teamName, eventId, onStatusChange,
}: {
  teamName: string;
  eventId: string;
  onStatusChange: (taken: boolean) => void;
}) {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!teamName.trim()) { onStatusChange(false); return; }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(
          `/api/register?eventId=${encodeURIComponent(eventId)}&teamName=${encodeURIComponent(teamName.trim())}`,
        );
        const data = await res.json();
        onStatusChange(!!data.taken);
      } catch { onStatusChange(false); }
    }, 700);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [teamName, eventId, onStatusChange]);
  return null;
}

// ─── TYPES & CONSTANTS ────────────────────────────────────────────────────────
type TeamMember = {
  name:       string;
  email:      string;   // NEW
  year:       string;
  branch:     string;
  rollNumber: string;
  verified:   boolean;  // NEW — OTP gate
};

type FormData = {
  name: string; email: string; year: string; branch: string;
  gender: string; rollNumber: string; college: string; teamName: string;
};

const YEARS    = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const BRANCHES = [
  "Computer Science & Engineering", "Information Technology",
  "Electronics & Communication",   "Electrical Engineering",
  "Mechanical Engineering",         "Civil Engineering", "Other",
];
const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];

// ─── MAIN REGISTRATION FORM ───────────────────────────────────────────────────
export default function RegistrationForm({ event }: { event: any }) {
  const isSolo      = event.maxMembers === 1;
  const maxTeamSize = event.maxMembers || 1;

  const [form, setForm] = useState<FormData>({
    name: "", email: "", year: "", branch: "", gender: "",
    rollNumber: "", college: "", teamName: "",
  });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [emailVerified,  setEmailVerified]  = useState(false);
  const [errors,         setErrors]         = useState<Partial<FormData>>({});
  const [submitting,     setSubmitting]      = useState(false);
  const [submitted,      setSubmitted]       = useState(false);
  const [submitError,    setSubmitError]     = useState("");
  const [ticketId,       setTicketId]        = useState("");
  const [teamNameTaken,  setTeamNameTaken]   = useState(false);

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // ── helpers ──────────────────────────────────────────────────────────────────
  const updateMember = (idx: number, patch: Partial<TeamMember>) =>
    setTeamMembers((prev) => prev.map((m, i) => i === idx ? { ...m, ...patch } : m));

  const addMember = () =>
    setTeamMembers((prev) => [
      ...prev,
      { name: "", email: "", year: "", branch: "", rollNumber: "", verified: false },
    ]);

  const removeMember = (idx: number) =>
    setTeamMembers((prev) => prev.filter((_, i) => i !== idx));

  const allMembersVerified = teamMembers.every((m) => m.verified);

  // ── validation ───────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())       e.name       = "Name is required";
    if (!form.email.trim())      e.email      = "Email is required";
    if (!form.year)              e.year       = "Year is required";
    if (!form.branch)            e.branch     = "Branch is required";
    if (!form.gender)            e.gender     = "Gender is required";
    if (!form.rollNumber.trim()) e.rollNumber = "Roll number is required";
    if (!form.college.trim())    e.college    = "College name is required";
    if (!isSolo && !form.teamName.trim()) e.teamName = "Team name is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── submit ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!emailVerified) { setSubmitError("Please verify your email before submitting."); return; }
    if (!isSolo && teamNameTaken) { setSubmitError("Please choose a different team name — that one is already taken."); return; }
    if (!isSolo && !allMembersVerified) {
      setSubmitError("All team members must verify their email before submitting.");
      return;
    }

    setSubmitting(true); setSubmitError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId:       event.id,
          eventTitle:    event.eventInfo.title,
          eventDate:     event.eventInfo.date,
          eventVenue:    event.eventInfo.venue,
          eventCategory: event.eventInfo.category,
          ...form,
          teamMembers: isSolo
            ? []
            : teamMembers.map(({ verified: _v, ...rest }) => rest), // strip UI-only field
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      setTicketId(data.ticketId);
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // ── success state ─────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-8 border border-[#fbba06]/40 bg-[#0a0502]/80 backdrop-blur-md text-center rounded-lg"
      >
        <div className="absolute top-0 left-0  w-4 h-4 border-t-2 border-l-2 border-[#fbba06]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#fbba06]" />
        <div className="absolute bottom-0 left-0  w-4 h-4 border-b-2 border-l-2 border-[#fbba06]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#fbba06]" />
        <Flame className="mx-auto text-[#fbba06] mb-4" size={48} />
        <h3 className={`${cinzel.className} text-2xl text-[#fbba06] mb-2`}>Pratigya Sweekar!</h3>
        <p className={`${cormorant.className} text-[#f0e6d2]/80 italic mb-6`}>
          &quot;Your pledge has been accepted, O Warrior&quot;
        </p>
        <div className="bg-[#fbba06]/10 border border-[#fbba06]/30 rounded-lg p-4 mb-4">
          <p className={`${cinzel.className} text-[10px] tracking-widest text-[#fbba06]/70 mb-2`}>YOUR TICKET ID</p>
          <p className={`${mono.className} text-[#fbba06] text-lg tracking-widest`}>{ticketId}</p>
        </div>
        <p className={`${montserrat.className} text-sm text-[#f0e6d2]/60`}>
          Confirmation emails with the virtual ticket have been dispatched to{" "}
          <span className="text-[#fbba06]">{form.email}</span>
          {teamMembers.length > 0 && " and all team members"}.
        </p>
      </motion.div>
    );
  }

  // ── form ─────────────────────────────────────────────────────────────────────
  const canSubmit =
    emailVerified &&
    !(teamNameTaken && !isSolo) &&
    (isSolo || allMembersVerified);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-10 p-8 border border-[#fbba06]/20 bg-[#000000]/70 backdrop-blur-md rounded-lg"
    >
      {/* Corner decorations */}
      <div className="absolute top-0    left-0  w-5 h-5 border-t-2 border-l-2 border-[#fbba06]" />
      <div className="absolute top-0    right-0 w-5 h-5 border-t-2 border-r-2 border-[#fbba06]" />
      <div className="absolute bottom-0 left-0  w-5 h-5 border-b-2 border-l-2 border-[#fbba06]" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#fbba06]" />

      {/* ── SECTION 1: Basic Info ── */}
      <div className="space-y-6">
        <SectionHeading title="Pratham Adhyaya: Parichay" subtitle='"Identity of the Warrior"' />

        <div>
          <EpicLabel required>Yoddha Naam (Full Name)</EpicLabel>
          <EpicInput placeholder="Enter your full name" value={form.name} onChange={set("name")} error={errors.name} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <EpicLabel required>Varsh (Year)</EpicLabel>
            <EpicSelect value={form.year} onChange={set("year") as any} options={YEARS} placeholder="Select Year" error={errors.year} />
          </div>
          <div>
            <EpicLabel required>Gender (Ling)</EpicLabel>
            <EpicSelect value={form.gender} onChange={set("gender") as any} options={GENDERS} placeholder="Select" error={errors.gender} />
          </div>
        </div>

        <div>
          <EpicLabel required>Shaakha (Branch)</EpicLabel>
          <EpicSelect value={form.branch} onChange={set("branch") as any} options={BRANCHES} placeholder="Select Branch" error={errors.branch} />
        </div>

        <div>
          <EpicLabel required>Vidyalaya (College Name)</EpicLabel>
          <EpicInput placeholder="Your college / institution" value={form.college} onChange={set("college")} error={errors.college} />
        </div>

        <div>
          <EpicLabel required>Anukram Ank (Roll Number)</EpicLabel>
          <EpicInput placeholder="Your roll number" value={form.rollNumber} onChange={set("rollNumber")} error={errors.rollNumber} />
        </div>
      </div>

      {/* ── SECTION 2: Email Verification (Leader) ── */}
      <div className="space-y-6">
        <SectionHeading title="Dwitiya Adhyaya: Satyapan" subtitle='"Prove thy identity, O Warrior"' />
        <EmailOTPField
          email={form.email}
          name={form.name}
          eventId={event.id}
          onEmailChange={(v) => setForm((f) => ({ ...f, email: v }))}
          onVerified={() => setEmailVerified(true)}
          error={errors.email}
          checkAsMember={false}
        />
      </div>

      {/* ── SECTION 3: Team (conditional) ── */}
      {!isSolo && (
        <div className="space-y-6">
          <SectionHeading title="Tritiya Adhyaya: Sena" subtitle='"Assemble thy warriors"' />

          {/* Team name */}
          <TeamNameField
            value={form.teamName}
            eventId={event.id}
            onChange={(e) => {
              set("teamName")(e);
              setTeamNameTaken(false);
            }}
            error={errors.teamName}
          />

          <TeamNameStatusBridge
            teamName={form.teamName}
            eventId={event.id}
            onStatusChange={(taken) => setTeamNameTaken(taken)}
          />

          {/* Team member cards */}
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative border border-[#fbba06]/20 p-4 space-y-4 bg-[#fbba06]/5 rounded"
            >
              {/* Header row */}
              <div className="flex justify-between items-center">
                <span className={`${cinzel.className} text-[#fbba06] text-xs tracking-widest flex items-center gap-2`}>
                  WARRIOR {idx + 2}
                  {member.verified && (
                    <span className="inline-flex items-center gap-1 text-green-400 text-[9px]">
                      <ShieldCheck size={12} /> Verified
                    </span>
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => removeMember(idx)}
                  className="text-red-500/60 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              {/* Name, Year, Branch, Roll */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <EpicLabel>Name</EpicLabel>
                  <EpicInput
                    placeholder="Full Name"
                    value={member.name}
                    disabled={member.verified}
                    onChange={(e) => updateMember(idx, { name: e.target.value })}
                  />
                </div>
                <div>
                  <EpicLabel>Year</EpicLabel>
                  <EpicSelect
                    value={member.year}
                    onChange={(e) => updateMember(idx, { year: e.target.value })}
                    options={YEARS}
                  />
                </div>
                <div>
                  <EpicLabel>Branch</EpicLabel>
                  <EpicSelect
                    value={member.branch}
                    onChange={(e) => updateMember(idx, { branch: e.target.value })}
                    options={BRANCHES}
                  />
                </div>
                <div>
                  <EpicLabel>Roll Number</EpicLabel>
                  <EpicInput
                    placeholder="Roll No."
                    value={member.rollNumber}
                    disabled={member.verified}
                    onChange={(e) => updateMember(idx, { rollNumber: e.target.value })}
                  />
                </div>
              </div>

              {/* Per-member email OTP verification */}
              <div className="pt-2 border-t border-[#fbba06]/10">
                <EmailOTPField
                  email={member.email}
                  name={member.name || `Warrior ${idx + 2}`}
                  eventId={event.id}
                  onEmailChange={(v) => updateMember(idx, { email: v, verified: false })}
                  onVerified={() => updateMember(idx, { verified: true })}
                  checkAsMember={true}
                />
              </div>

              {!member.verified && (
                <p className={`${montserrat.className} text-[#fbba06]/40 text-[10px] text-center`}>
                  This warrior must verify their email to confirm consent.
                </p>
              )}
            </motion.div>
          ))}

          {/* Add warrior button */}
          {teamMembers.length < maxTeamSize - 1 && (
            <button
              type="button"
              onClick={addMember}
              className={`${cinzel.className} flex items-center gap-2 text-[10px] tracking-widest text-[#fbba06]/70 hover:text-[#fbba06] border border-dashed border-[#fbba06]/30 hover:border-[#fbba06] py-3 px-4 w-full justify-center transition-all`}
            >
              <Plus size={14} /> Add Warrior
            </button>
          )}

          {/* Team readiness indicator */}
          {teamMembers.length > 0 && (
            <div className={`text-center text-xs ${allMembersVerified ? "text-green-400" : "text-[#fbba06]/50"}`}>
              {allMembersVerified
                ? `✓ All ${teamMembers.length} warrior${teamMembers.length > 1 ? "s" : ""} verified and ready`
                : `${teamMembers.filter((m) => m.verified).length} / ${teamMembers.length} warrior${teamMembers.length > 1 ? "s" : ""} verified`
              }
            </div>
          )}
        </div>
      )}

      {/* ── SUBMIT ── */}
      {submitError && (
        <p className={`${montserrat.className} text-red-400 text-sm text-center`}>{submitError}</p>
      )}

      {!emailVerified && (
        <p className={`${montserrat.className} text-[#fbba06]/50 text-xs text-center`}>
          Verify your email to unlock registration.
        </p>
      )}

      {emailVerified && !isSolo && !allMembersVerified && teamMembers.length > 0 && (
        <p className={`${montserrat.className} text-[#fbba06]/50 text-xs text-center`}>
          All team members must verify their email before you can register.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || !canSubmit}
        className={`${cinzel.className} relative w-full py-4 uppercase tracking-[0.3em] text-sm font-bold overflow-hidden group transition-all duration-500 border
          ${canSubmit
            ? "border-[#fbba06] text-[#fbba06] hover:text-black cursor-pointer"
            : "border-[#fbba06]/20 text-[#fbba06]/20 cursor-not-allowed"
          }`}
      >
        {canSubmit && (
          <div className="absolute inset-0 bg-[#fbba06] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        )}
        <span className="relative flex items-center justify-center gap-3">
          {submitting
            ? <><Loader2 size={16} className="animate-spin" /> Registering...</>
            : <><Swords size={16} /> Pratigya Lo — Register</>
          }
        </span>
      </button>
    </form>
  );
}