"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cinzel, Cormorant_SC, Tiro_Devanagari_Sanskrit } from "next/font/google";
import { Flame } from "lucide-react";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "600", "700"] });
const sanskrit = Tiro_Devanagari_Sanskrit({ subsets: ["devanagari"], weight: ["400"] });

interface EpicLoaderProps {
  fullScreen?: boolean;
  text?: string;
}

export default function EpicLoader({ fullScreen = true, text = "Summoning the Realm..." }: EpicLoaderProps) {
  return (
    <div 
      className={`flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ${
        // Changed to semi-transparent black with a blur effect
        fullScreen 
          ? "fixed inset-0 z-[100] h-screen w-full backdrop-blur-md" 
          : "w-full h-full min-h-[400px] rounded-lg relative backdrop-blur-sm"
      }`}
    >
      {/* Background Ambience (Adjusted to not block the background) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0%,transparent_80%)] pointer-events-none"></div>
      
      {/* --- THE KALACHAKRA (Spinning Rings) --- */}
      <div className="relative flex items-center justify-center w-40 h-40 mb-8">
        
        {/* Outer Ring (Slow Clockwise) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-[#d97706]/40"
        ></motion.div>

        {/* Middle Ring (Faster Counter-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-2 border-dotted border-[#fcd34d]/50"
        ></motion.div>

        {/* Inner Solid Ring (Pulsing Glow) */}
        <motion.div
          animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-6 rounded-full border border-[#d97706] shadow-[0_0_20px_rgba(217,119,6,0.5)] bg-[#1a0505]/80 backdrop-blur-sm"
        ></motion.div>

        {/* Central Core Element (The Eternal Flame) */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 text-[#fcd34d] drop-shadow-[0_0_15px_rgba(252,211,77,0.8)]"
        >
          <Flame size={36} fill="#d97706" />
        </motion.div>

        {/* Floating Embers (Particles) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, -80], 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.6,
              ease: "easeOut" 
            }}
            className="absolute w-1.5 h-1.5 bg-[#fcd34d] rounded-full shadow-[0_0_5px_#fcd34d]"
            style={{ left: `${40 + i * 10}%`, bottom: '40%' }}
          ></motion.div>
        ))}
      </div>

      {/* --- TYPOGRAPHY --- */}
      <div className="flex flex-col items-center text-center z-10">
        <motion.h2 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`${sanskrit.className} text-[#d97706] text-xl mb-3 drop-shadow-md`}
        >
          || प्रतीक्षा ||
        </motion.h2>

        <motion.h1 
          animate={{ letterSpacing: ["0.1em", "0.2em", "0.1em"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`${cinzel.className} text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b45309] via-[#fcd34d] to-[#b45309] uppercase drop-shadow-lg`}
        >
          {text}
        </motion.h1>

        <p className={`${cormorant.className} text-[#fef3c7]/70 mt-4 text-lg italic tracking-widest drop-shadow-md`}>
          Sharpening the blades...
        </p>
      </div>
    </div>
  );
}