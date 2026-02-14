"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cinzel,
  Montserrat,
  Cormorant_SC,
  Rozha_One,
} from "next/font/google";
import {
  Plus,
  Trash2,
  ArrowLeft,
  ChevronDown,
  Scroll,
  Flame,
  Target,
  Shield,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { eventData } from "@/data/eventData";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "600", "700"] });
const rozha = Rozha_One({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });

// ==========================================
// --- UI PRIMITIVES ---
// ==========================================

const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-10 opacity-60">
    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#fbba06]"></div>
    <div className="rotate-45 w-2 h-2 border border-[#fbba06] bg-[#4a0404]"></div>
    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#fbba06]"></div>
  </div>
);

const EpicLabel = ({ children }: { children: React.ReactNode }) => (
  <label className={`text-[10px] uppercase tracking-[0.2em] text-[#fbba06]/70 font-bold mb-2 block ${cinzel.className}`}>
    {children}
  </label>
);

const EpicInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative group">
    <input
      {...props}
      className={`block w-full border-b border-[#fbba06]/30 bg-transparent px-2 py-3 text-[#f0e6d2] placeholder:text-[#f0e6d2]/20 focus:border-[#fbba06] focus:ring-0 focus:outline-none transition-all font-serif ${props.className}`}
    />
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#fbba06] transition-all duration-700 group-focus-within:w-full shadow-[0_0_10px_#fbba06]"></div>
  </div>
);

const EpicSelect = ({ value, onChange, options, placeholder = "Select" }: { value: string, onChange: (e: any) => void, options: string[], placeholder?: string }) => (
  <div className="relative group">
    <select 
      value={value} 
      onChange={onChange}
      className="block w-full appearance-none border-b border-[#fbba06]/30 bg-transparent px-2 py-3 text-[#f0e6d2] focus:border-[#fbba06] focus:ring-0 focus:outline-none cursor-pointer font-serif"
    >
      <option value="" disabled className="bg-[#1a0b0b] text-[#f0e6d2]/50">{placeholder}</option>
      {options.map(opt => <option key={opt} value={opt} className="bg-[#1a0b0b] text-[#fbba06] py-2">{opt}</option>)}
    </select>
    <ChevronDown className="absolute right-2 top-4 h-4 w-4 opacity-70 pointer-events-none text-[#fbba06]" />
  </div>
);

// ==========================================
// --- SANKALP FORM COMPONENT ---
// ==========================================
function SankalpForm({ event }: { event: any }) {
  const isSolo = event.maxMembers === 1;
  const [teamName, setTeamName] = useState("");
  const [captain, setCaptain] = useState({ name: "", email: "", dept: "", year: "", phone: "" });
  const [members, setMembers] = useState<{ name: string; dept: string; year: string }[]>([]);

  const addMember = () => {
    if (members.length < event.maxMembers - 1) {
      setMembers([...members, { name: "", dept: "", year: "" }]);
    }
  };

  const removeMember = (index: number) => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...members];
    // @ts-ignore
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ teamName, captain, members, eventId: event.id });
    alert("Pratigya Accepted. Prepare for Battle.");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-16 p-8 border-y-2 border-[#fbba06]/10 bg-[#000000]/60 backdrop-blur-md relative">
      
      {/* Decorative Corner Borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#fbba06]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#fbba06]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#fbba06]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#fbba06]"></div>

      {/* 1. IDENTITY SECTION */}
      <div className="space-y-8">
        <div className="text-center">
           <h3 className={`${cinzel.className} text-2xl text-[#fbba06]`}>Pratham Adhyaya: Parichay</h3>
           <p className={`${cormorant.className} text-[#fbba06]/60 italic`}>&quot;Identity of the Warrior&quot;</p>
        </div>

        <div className="grid gap-8">
           {!isSolo && (
             <div>
               <EpicLabel>Sena Naam (Team Name)</EpicLabel>
               <EpicInput 
                 placeholder="Name your legion..." 
                 value={teamName}
                 onChange={(e) => setTeamName(e.target.value)}
                 required
               />
             </div>
           )}
           <div className="grid md:grid-cols-2 gap-8">
              <div>
                <EpicLabel>{isSolo ? "Yoddha Name" : "Maharathi Name"}</EpicLabel>
                <EpicInput placeholder="Full Name" value={captain.name} onChange={e => setCaptain({...captain, name: e.target.value})} required />
              </div>
              <div>
                <EpicLabel>Sampark (Contact)</EpicLabel>
                <EpicInput type="tel" placeholder="+91..." value={captain.phone} onChange={e => setCaptain({...captain, phone: e.target.value})} required />
              </div>
              <div className="md:col-span-2">
                <EpicLabel>Patra (Email)</EpicLabel>
                <EpicInput type="email" placeholder="warrior@college.edu" value={captain.email} onChange={e => setCaptain({...captain, email: e.target.value})} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                   <EpicLabel>Vibhag (Dept)</EpicLabel>
                   <EpicSelect options={["CSE", "IT", "ECE", "EE", "ME", "CE"]} value={captain.dept} onChange={e => setCaptain({...captain, dept: e.target.value})} />
                 </div>
                 <div>
                   <EpicLabel>Varsh (Year)</EpicLabel>
                   <EpicSelect options={["1st", "2nd", "3rd", "4th"]} value={captain.year} onChange={e => setCaptain({...captain, year: e.target.value})} />
                 </div>
              </div>
           </div>
        </div>
      </div>

      <Divider />

      {/* 2. SQUADRON SECTION */}
      {!isSolo && (
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <div>
                 <h3 className={`${cinzel.className} text-xl text-[#fbba06]`}>Dwitiya Adhyaya: Sena</h3>
                 <p className={`${cormorant.className} text-[#fbba06]/60 italic`}>&quot;Assemble your Army&quot;</p>
              </div>
              {members.length < event.maxMembers - 1 && (
                 <button type="button" onClick={addMember} className="flex items-center gap-2 px-4 py-2 border border-[#fbba06]/40 text-[#fbba06] text-xs uppercase tracking-widest hover:bg-[#fbba06] hover:text-[#1a0b0b] transition-all">
                    <Plus size={14} /> Aahvan
                 </button>
              )}
           </div>

           <div className="space-y-6">
              {members.map((member, idx) => (
                 <div key={idx} className="relative p-6 border border-[#fbba06]/10 bg-[#fbba06]/5">
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#fbba06]"></div>
                    <div className="flex justify-between items-center mb-4">
                       <span className={`${cinzel.className} text-xs text-[#fbba06]/50`}>Sainik 0{idx + 1}</span>
                       <button type="button" onClick={() => removeMember(idx)} className="text-[#fbba06]/30 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                       </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div><EpicInput placeholder="Name" value={member.name} onChange={(e) => updateMember(idx, 'name', e.target.value)} required /></div>
                       <div className="grid grid-cols-2 gap-4">
                          <EpicSelect placeholder="Dept" options={["CSE", "IT", "ECE", "EE", "ME", "CE"]} value={member.dept} onChange={(e) => updateMember(idx, 'dept', e.target.value)} />
                          <EpicSelect placeholder="Year" options={["1st", "2nd", "3rd", "4th"]} value={member.year} onChange={(e) => updateMember(idx, 'year', e.target.value)} />
                       </div>
                    </div>
                 </div>
              ))}
              {members.length === 0 && (
                 <div className="text-center py-8 opacity-40">
                    <Users className="mx-auto mb-2 text-[#fbba06]" />
                    <p className={`${cormorant.className} text-[#fbba06]`}>The ranks are empty.</p>
                 </div>
              )}
           </div>
        </div>
      )}

      {/* 3. OATH & SUBMIT */}
      <div className="pt-8 text-center space-y-6">
         <p className={`${cormorant.className} text-lg text-[#f0e6d2]/80 italic max-w-lg mx-auto`}>
            &quot;I hereby pledge my skill and honor to the arena. I accept the Dharma of the competition.&quot;
         </p>
         <button 
            type="submit"
            className="group relative inline-flex flex-col items-center justify-center"
         >
            <div className="w-20 h-20 rounded-full border-2 border-[#fbba06] flex items-center justify-center bg-[#1a0b0b] group-hover:bg-[#fbba06] transition-colors duration-500 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
               <Target size={32} className="text-[#fbba06] group-hover:text-[#1a0b0b] transition-colors duration-500" />
            </div>
            <span className={`${cinzel.className} text-[#fbba06] mt-4 text-sm tracking-[0.3em] font-bold`}>
               PRATIGYA
            </span>
         </button>
      </div>
    </form>
  );
}

// ==========================================
// --- MAIN PAGE COMPONENT ---
// ==========================================
export default function EventDetailsPage() {
  const { id } = useParams();
  const event = eventData.find((e) => e.id === id);
  const { scrollY } = useScroll();
  
  // Opacity fade for background image only. 
  // IMPORTANT: Removed 'y' transform to fix "image scrolling down" issue.
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  if (!event) return null;

  return (
    <div className={`min-h-screen bg-[#0a0502] text-[#f0e6d2] ${montserrat.className} selection:bg-[#fbba06] selection:text-[#1a0b0b]`}>
      
      {/* --- FIXED BACKGROUND LAYER --- */}
      {/* 'fixed' ensures the image stays perfectly still while the page scrolls */}
      <div className="fixed inset-0 w-full h-screen z-0 bg-black">
         <motion.div style={{ opacity }} className="relative w-full h-full">
            <Image 
              src={event.image} 
              alt={event.eventInfo.title} 
              fill 
              className="object-cover" 
              priority 
            />
            {/* Gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502]/40 via-[#0a0502]/80 to-[#0a0502]"></div>
            <div className="absolute inset-0 bg-[#4a0404]/20 mix-blend-multiply"></div>
         </motion.div>
         
         {/* Fixed Decorative Mandalas */}
         <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] border-[1px] border-[#fbba06]/10 rounded-full animate-spin-slow pointer-events-none"></div>
      </div>

      {/* --- SCROLLABLE CONTENT LAYER --- */}
      {/* 'relative' positioning keeps this in the document flow */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-40">
         
         {/* 1. HEADER */}
         <div className="mb-32 text-center relative">
            <Link href="/events" className="absolute left-0 top-0 hidden md:flex items-center gap-2 text-[#fbba06]/60 hover:text-[#fbba06] transition-colors">
               <ArrowLeft size={18} /> <span className={`${cinzel.className} text-xs tracking-widest`}>Back to Yudh</span>
            </Link>

            <motion.div 
               initial={{ opacity: 0, y: 30 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 1 }}
            >
               <div className="inline-flex items-center gap-2 border-b border-[#fbba06]/50 pb-2 mb-6">
                  <Flame size={16} className="text-[#fbba06]" />
                  <span className={`${cormorant.className} text-lg text-[#fbba06] font-bold tracking-widest uppercase`}>
                     {event.type.replace("-", " ")}
                  </span>
                  <Flame size={16} className="text-[#fbba06]" />
               </div>
               
               <h1 className={`${rozha.className} text-5xl   md:text-9xl text-[#f0e6d2] leading-none mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]`}>
                  {event.eventInfo.title}
               </h1>
               
               <div className="flex justify-center gap-8 text-[#fbba06]/80 font-serif italic md:text-lg text-sm">
                  <span className="flex items-center gap-2"><Calendar size={18} />{event.eventInfo.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> {event.eventInfo.venue}</span>
               </div>
            </motion.div>
         </div>

         {/* 2. MAIN CONTENT GRID */}
         <div className="grid lg:grid-cols-12 gap-16 mb-20">
            
            {/* LEFT COL: Katha (Story) & Dharma (Rules) */}
            <div className="lg:col-span-7 space-y-20">
               
               {/* Katha */}
               <section>
                  <h2 className={`${cinzel.className} text-3xl text-[#fbba06] mb-6 flex items-center gap-3`}>
                     <Scroll size={28} /> Katha <span className="text-sm opacity-50 ml-2 font-sans tracking-wide">(The Tale)</span>
                  </h2>
                  <div className="p-8 border-l-2 border-[#fbba06]/30 bg-gradient-to-r from-[#fbba06]/5 to-transparent">
                     <p className={`${cormorant.className} md:text-2xl text-xl leading-relaxed text-[#f0e6d2]/90`}>
                        {event.eventInfo.description}
                     </p>
                  </div>
                  
                  {/* Command Structure */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-6">
                     {event.coordinators.map((group: any, idx: number) => (
                        <div key={idx}>
                           <h4 className={`${cinzel.className} text-[#fbba06] text-sm mb-3 border-b border-[#fbba06]/20 pb-1 inline-block`}>{group.type}</h4>
                           {group.members.map((m: any, i: number) => (
                              <div key={i} className="mb-2">
                                 <div className={`${cormorant.className} text-xl font-bold text-white`}>{m.name}</div>
                                 {m.contact && <div className="text-xs text-[#fbba06]/60 font-mono tracking-wider">{m.contact}</div>}
                              </div>
                           ))}
                        </div>
                     ))}
                  </div>
               </section>

               {/* Dharma */}
               <section>
                  <h2 className={`${cinzel.className} text-3xl text-[#fbba06] mb-6 flex items-center gap-3`}>
                     <Shield size={28} /> Dharma <span className="text-sm opacity-50 ml-2 font-sans tracking-wide">(The Rules)</span>
                  </h2>
                  <div className="space-y-4">
                     {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-6 items-start group">
                           <div className="mt-1 w-8 h-8 rounded-full border border-[#fbba06]/30 flex items-center justify-center text-[#fbba06] font-serif group-hover:bg-[#fbba06] group-hover:text-black transition-colors shrink-0">
                              {i}
                           </div>
                           <p className={`${montserrat.className} text-sm leading-7 text-[#f0e6d2]/70 pt-1`}>
                              Warriors must adhere to the timeline strictly. Weapons (equipment) must be verified by the committee before the duel commences.
                           </p>
                        </div>
                     ))}
                  </div>
               </section>

            </div>

            {/* RIGHT COL: Ranbheri (Registration) */}
            <div className="lg:col-span-5 relative">
               <div className="sticky top-24">
                  <div className="mb-6 flex items-center gap-3">
                     <div className="h-[2px] flex-grow bg-[#fbba06]/30"></div>
                     <h2 className={`${cinzel.className} text-3xl text-[#fbba06] text-center`}>Ranbheri</h2>
                     <div className="h-[2px] flex-grow bg-[#fbba06]/30"></div>
                  </div>
                  
                  {event.registrationOpen ? (
                     <SankalpForm event={event} />
                  ) : (
                     <div className="p-8 border border-[#fbba06]/30 bg-[#fbba06]/10 text-center">
                        <Shield className="mx-auto h-12 w-12 text-[#fbba06] mb-4 opacity-50" />
                        <h3 className={`${cinzel.className} text-xl text-[#fbba06]`}>Portals Closed</h3>
                        <p className="text-sm text-[#f0e6d2]/60 mt-2 font-serif">Registration for this event has not yet commenced.</p>
                     </div>
                  )}
               </div>
            </div>

         </div>

      </div>
    </div>
  );
}