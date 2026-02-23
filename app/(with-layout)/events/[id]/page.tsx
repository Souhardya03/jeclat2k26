"use client";

import React from "react";
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
  ArrowLeft,
  ChevronDown,
  Scroll,
  Flame,
  Target,
  Shield,
  MapPin,
  Calendar,
} from "lucide-react";

import { eventData } from "@/data/eventData";
import RegistrationForm from "@/components/RegistrationForm";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "600", "700"] });
const rozha = Rozha_One({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });

// ==========================================
// --- UI PRIMITIVES ---
// (kept here as they may be used by other components in this file)
// ==========================================

const EpicLabel = ({ children }: { children: React.ReactNode }) => (
  <label className={`text-[10px] uppercase tracking-[0.2em] text-[#fbba06]/70 font-bold mb-2 block ${cinzel.className}`}>
    {children}
  </label>
);

const EpicInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative group">
    <input
      {...props}
      className={`block w-full border-b border-[#fbba06]/30 bg-transparent px-2 py-3 text-[#f0e6d2] placeholder:text-[#f0e6d2]/20 focus:border-[#fbba06] focus:ring-0 focus:outline-none transition-all font-serif ${props.className || ""}`}
    />
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#fbba06] transition-all duration-700 group-focus-within:w-full shadow-[0_0_10px_#fbba06]"></div>
  </div>
);

const EpicSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select" 
}: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
  options: string[]; 
  placeholder?: string;
}) => (
  <div className="relative group">
    <select 
      value={value} 
      onChange={onChange}
      className="block w-full appearance-none border-b border-[#fbba06]/30 bg-transparent px-2 py-3 text-[#f0e6d2] focus:border-[#fbba06] focus:ring-0 focus:outline-none cursor-pointer font-serif"
    >
      <option value="" disabled className="bg-[#1a0b0b] text-[#f0e6d2]/50">{placeholder}</option>
      {options.map(opt => (
        <option key={opt} value={opt} className="bg-[#1a0b0b] text-[#fbba06] py-2">
          {opt}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-2 top-4 h-4 w-4 opacity-70 pointer-events-none text-[#fbba06]" />
  </div>
);

// ==========================================
// --- MAIN PAGE COMPONENT ---
// ==========================================
export default function EventDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const event = eventData.find((e) => e.id === id);
  const { scrollY } = useScroll();
  
  // Opacity fade for background image only. 
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  if (!event) return null;

  return (
    <div className={`min-h-screen bg-[#0a0502] text-[#f0e6d2] ${montserrat.className} selection:bg-[#fbba06] selection:text-[#1a0b0b]`}>
      
      {/* --- FIXED BACKGROUND LAYER --- */}
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
               
               <h1 className={`${rozha.className} text-5xl md:text-9xl text-[#f0e6d2] leading-none mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]`}>
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
                  
                  {/* --- CONDITIONAL REGISTRATION RENDERING --- */}
                  {event.hideFromRegistration ? (
                     
                     /* 1. FINALS / QUALIFIER ONLY STATE */
                     <div className="p-8 border border-[#fbba06]/30 bg-black/60 backdrop-blur-md text-center rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fbba06]/50 to-transparent"></div>
                        <Target className="mx-auto h-14 w-14 text-[#fbba06] mb-4 opacity-80" />
                        <h3 className={`${cinzel.className} text-2xl text-[#fbba06]`}>The Final Battle</h3>
                        <p className={`${montserrat.className} text-sm text-[#f0e6d2]/70 mt-4 leading-relaxed`}>
                           Direct registration is not permitted. Warriors must prove their mettle and qualify from the preliminary rounds to enter this arena.
                        </p>
                     </div>

                  ) : event.registrationOpen ? (
                     
                     /* 2. REGISTRATION OPEN STATE */
                     <RegistrationForm event={event} />

                  ) : (
                     
                     /* 3. REGISTRATION CLOSED STATE */
                     <div className="p-8 border border-red-900/40 bg-[#1a0505]/80 backdrop-blur-md text-center rounded-lg">
                        <Shield className="mx-auto h-12 w-12 text-red-500 mb-4 opacity-60" />
                        <h3 className={`${cinzel.className} text-xl text-red-400`}>Portals Closed</h3>
                        <p className={`${montserrat.className} text-sm text-[#f0e6d2]/60 mt-2`}>
                           Registration for this event has concluded or not yet commenced.
                        </p>
                     </div>

                  )}
               </div>
            </div>

         </div>

      </div>
    </div>
  );
}