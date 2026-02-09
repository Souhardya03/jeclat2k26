"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cinzel, Montserrat, Cormorant_SC } from "next/font/google";
import { Lock, ArrowLeft, Hourglass, Star } from "lucide-react";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "700"] });

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-[#F2E8CF] overflow-hidden selection:bg-yellow-500/30">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>
        {/* Gold Glow from bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-900/10 blur-[100px] rounded-full"></div>
      </div>

      {/* --- FLOATING PARTICLES --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.5, 0], y: -100 }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute bg-yellow-500/30 w-1 h-1 rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* LOCK ANIMATION */}
        <div className="relative mb-12">
          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-yellow-800/40 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-yellow-600/20 rounded-full"
          />

          {/* Central Icon Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-24 h-24 bg-[#0a0502] border border-yellow-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.15)] rotate-45"
          >
             <div className="-rotate-45">
                <Lock size={40} className="text-yellow-500/80" />
             </div>
             
             {/* Small accent dots */}
             <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-yellow-600 rounded-full"></div>
             <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-yellow-600 rounded-full"></div>
          </motion.div>
        </div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 border border-yellow-900/30 bg-yellow-900/10 px-3 py-1 rounded-full mb-4">
            <Hourglass size={12} className="text-yellow-500" />
            <span className={`${montserrat.className} text-[10px] uppercase tracking-widest text-yellow-500/80 font-bold`}>
              Work In Progress
            </span>
          </div>

          <h1 className={`${cormorant.className} text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-800 drop-shadow-sm`}>
            Coming Soon
          </h1>

          <p className={`${montserrat.className} text-gray-400/80 text-sm md:text-base tracking-wide leading-relaxed`}>
            The architects of JECLAT are currently constructing this realm. 
            <br className="hidden md:block" />
            Return shortly to witness its unveiling.
          </p>
        </motion.div>

        {/* ACTION BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/">
            <button className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-md transition-all hover:bg-yellow-900/20">
              <div className="absolute inset-0 border border-yellow-700/40 rounded-md group-hover:border-yellow-500/80 transition-colors"></div>
              
              <div className="relative flex items-center gap-3">
                <ArrowLeft size={16} className="text-yellow-500 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className={`${cinzel.className} text-sm font-bold text-yellow-100 uppercase tracking-widest`}>
                  Return to Home
                </span>
              </div>
            </button>
          </Link>
        </motion.div>

      </div>

      {/* --- DECORATIVE BORDER --- */}
      <div className="fixed bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-900/40 to-transparent"></div>
    </div>
  );
}