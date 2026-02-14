"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cinzel,
  Cormorant_SC,
  Tiro_Devanagari_Sanskrit,
  Montserrat,
} from "next/font/google";
import { 
  Calendar as CalendarIcon, 
  X, 
  MapPin, 
  Clock, 
  Users,
  Swords, 
  Sparkles,
  Flame,
  Crown
} from "lucide-react";

// Assuming eventData is correctly exported from this path
import { eventData } from "@/data/eventData";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const sanskrit = Tiro_Devanagari_Sanskrit({ subsets: ["devanagari"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function WarCalendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<string>("Day 1");

  // Dynamically extract and sort unique days/categories
  const days = useMemo(() => {
    const uniqueDays = Array.from(new Set(eventData.map((e) => e.eventInfo.category.split(" (")[0])));
    return uniqueDays.sort((a, b) => {
        if (a.includes("Pre")) return -1;
        if (b.includes("Pre")) return 1;
        return a.localeCompare(b);
    });
  }, []);

  const activeEvents = useMemo(() => {
    return eventData.filter((e) => e.eventInfo.category.includes(activeDay));
  }, [activeDay]);

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const getDayLabel = (dayStr: string) => {
      if (dayStr.includes("Pre")) return { title: "Phase", num: "PRE" };
      const num = dayStr.replace("Day ", "");
      return { title: "Day", num: num };
  };

  return (
    <>
      {/* --- THE TRIGGER BUTTON --- */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1a0505] border border-[#d97706]/30 hover:border-[#d97706] transition-all duration-500 overflow-hidden rounded-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#d97706]/0 via-[#d97706]/10 to-[#d97706]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <CalendarIcon size={20} className="text-[#fcd34d] group-hover:scale-110 transition-transform relative z-10" />
        <span className={`${cinzel.className} text-[#fef3c7] text-sm uppercase tracking-widest font-bold relative z-10 group-hover:text-[#fcd34d] transition-colors`}>
          Summon the Calendar
        </span>
      </button>

      {/* --- COMPACT FLOATING MODAL OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-[#0a0202] text-[#fef3c7] border border-[#d97706]/40 rounded-sm shadow-[0_0_50px_rgba(217,119,6,0.15)] overflow-hidden"
            >
              {/* Modal Background Textures */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(153,27,27,0.15)_0%,rgba(0,0,0,1)_80%)] pointer-events-none"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-screen"></div>

              {/* --- HEADER --- */}
              <div className="relative pt-8 pb-6 px-6 text-center flex-shrink-0 z-10 bg-[#1a0505]/80 border-b border-[#d97706]/20">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-red-950/30 text-red-400 hover:text-red-300 hover:bg-red-900/50 border border-red-900/30 rounded-full transition-all group"
                  >
                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <h2 className={`${sanskrit.className} text-[#d97706] text-lg mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                      || कालचक्र ||
                  </h2>
                  <h1 className={`${cinzel.className} text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fef3c7] to-[#d97706] tracking-[0.1em] drop-shadow-lg uppercase`}>
                      The Battlefield Agenda
                  </h1>
                  
                  {/* Decorative Divider */}
                  <div className="flex items-center justify-center gap-4 mt-4 opacity-60">
                      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#d97706]"></div>
                      <Flame size={16} className="text-[#d97706]" />
                      <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#d97706]"></div>
                  </div>
              </div>

              {/* --- DAY NAVIGATOR (The Golden Bridge) --- */}
              <div className="relative z-10 border-b border-[#d97706]/20 bg-[#0a0202]/80 backdrop-blur-md shadow-md">
                  <div className="flex overflow-x-auto hide-scrollbar py-3 gap-2 md:gap-4 justify-start md:justify-center items-center min-w-max px-4">
                      {days.map((day) => {
                          const { title, num } = getDayLabel(day);
                          const isActive = activeDay === day;
                          
                          return (
                              <button
                                  key={day}
                                  onClick={() => setActiveDay(day)}
                                  className={`relative shrink-0 flex items-center gap-3 px-5 py-2 transition-all duration-300 border-x border-[#d97706]/10 ${
                                      isActive 
                                      ? 'bg-gradient-to-b from-[#d97706]/20 to-transparent scale-105' 
                                      : 'hover:bg-[#d97706]/5 opacity-60 hover:opacity-100'
                                  }`}
                              >
                                  {/* Active Diamond Indicator */}
                                  <div className={`w-2.5 h-2.5 rotate-45 transition-colors duration-300 ${isActive ? 'bg-[#d97706] shadow-[0_0_8px_#d97706]' : 'border border-[#d97706]/50 bg-transparent'}`}></div>
                                  
                                  <div className="text-left flex flex-col">
                                      <span className={`${montserrat.className} text-[9px] uppercase font-bold tracking-[0.2em] ${isActive ? 'text-[#fcd34d]' : 'text-gray-400'}`}>
                                          {title}
                                      </span>
                                      <span className={`${cinzel.className} text-lg font-bold leading-none ${isActive ? 'text-white' : 'text-gray-500'}`}>
                                          {num}
                                      </span>
                                  </div>

                                  {isActive && (
                                      <motion.div layoutId="navGlow" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d97706] shadow-[0_-2px_10px_#d97706]"></motion.div>
                                  )}
                              </button>
                          )
                      })}
                  </div>
              </div>

              {/* --- EVENTS GRID (The War Banners) --- */}
              <div className="flex-1 overflow-y-auto px-6 py-8 relative z-0">
                  {activeEvents.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <AnimatePresence mode="popLayout">
                              {activeEvents.map((event, idx) => (
                                  <motion.div 
                                      key={event.id}
                                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                      animate={{ opacity: 1, scale: 1, y: 0 }}
                                      exit={{ opacity: 0, scale: 0.95 }}
                                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                                      className="group relative flex flex-col bg-gradient-to-b from-[#1a0505] to-[#0a0202] border border-[#d97706]/20 hover:border-[#d97706]/60 transition-colors duration-500"
                                  >
                                      {/* Banner Top Accent */}
                                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b45309] via-[#fcd34d] to-[#b45309]"></div>
                                      
                                      {/* Banner Hanging Rings (Decorative) */}
                                      <div className="absolute -top-2 left-4 w-1.5 h-3 border border-[#d97706] rounded-full bg-[#0a0202]"></div>
                                      <div className="absolute -top-2 right-4 w-1.5 h-3 border border-[#d97706] rounded-full bg-[#0a0202]"></div>

                                      <div className="p-6 flex flex-col flex-1 mt-1">
                                          
                                          {/* Event Icon & Type */}
                                          <div className="flex flex-col items-center text-center mb-4">
                                              <div className="w-12 h-12 rounded-full bg-[#2a0a0a] border border-[#d97706]/40 flex items-center justify-center text-[#d97706] mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,119,6,0.15)] group-hover:bg-[#d97706] group-hover:text-[#2a0a0a]">
                                                  {event.type.includes('pre') ? <Sparkles size={20} /> : event.type.includes('non') ? <Crown size={20} /> : <Swords size={20} />}
                                              </div>
                                              <span className={`${montserrat.className} text-[9px] text-[#fcd34d] font-bold uppercase tracking-[0.2em]`}>
                                                  {event.type.replace('-', ' ')}
                                                  {event.eventInfo.category.includes('(') && ` • ${event.eventInfo.category.split('(')[1].replace(')', '')}`}
                                              </span>
                                          </div>

                                          {/* Title & Description */}
                                          <div className="text-center flex-1">
                                              <h3 className={`${cinzel.className} text-xl text-[#fef3c7] font-bold mb-3 group-hover:text-[#fcd34d] transition-colors line-clamp-2`}>
                                                  {event.eventInfo.title}
                                              </h3>
                                              <p className={`${cormorant.className} text-base text-[#fef3c7]/60 italic leading-relaxed line-clamp-3`}>
                                                  "{event.eventInfo.description}"
                                              </p>
                                          </div>

                                          {/* Footer Meta Details */}
                                          <div className="mt-6 pt-4 border-t border-[#d97706]/20 flex flex-col gap-2">
                                              <div className="flex items-center gap-3 text-xs text-[#fef3c7]/80">
                                                  <div className="p-1 bg-[#d97706]/10 rounded text-[#d97706]"><Clock size={12} /></div>
                                                  <span className={`${montserrat.className} font-medium`}>{event.eventInfo.date}</span>
                                              </div>
                                              <div className="flex items-center gap-3 text-xs text-[#fef3c7]/80">
                                                  <div className="p-1 bg-[#d97706]/10 rounded text-[#d97706]"><MapPin size={12} /></div>
                                                  <span className={`${montserrat.className} font-medium truncate`}>{event.eventInfo.venue}</span>
                                              </div>
                                              {event.maxMembers > 0 && (
                                                  <div className="flex items-center gap-3 text-xs text-[#fef3c7]/80">
                                                      <div className="p-1 bg-[#d97706]/10 rounded text-[#d97706]"><Users size={12} /></div>
                                                      <span className={`${montserrat.className} font-medium`}>Team Limit: {event.maxMembers}</span>
                                                  </div>
                                              )}
                                          </div>
                                      </div>
                                  </motion.div>
                              ))}
                          </AnimatePresence>
                      </div>
                  ) : (
                      <div className="h-full flex flex-col items-center justify-center opacity-50 py-16">
                          <motion.div 
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             className="flex flex-col items-center"
                          >
                              <div className="w-20 h-20 rounded-full border border-[#d97706]/30 flex items-center justify-center mb-4 bg-[#1a0505]">
                                  <Swords size={32} className="text-[#d97706]/50" />
                              </div>
                              <h3 className={`${cinzel.className} text-2xl text-[#d97706] font-bold`}>Silence in the Arena</h3>
                              <p className={`${cormorant.className} text-lg text-[#fef3c7]/60 mt-2 italic`}>No encounters are recorded for this cycle.</p>
                          </motion.div>
                      </div>
                  )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hide Scrollbar Globals */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </>
  );
}