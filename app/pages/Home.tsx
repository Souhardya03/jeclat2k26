"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Cinzel_Decorative, Eagle_Lake } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number; hours: number; minutes: number; seconds: number;
}

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700"],
});

const eagleLake = Eagle_Lake({
  variable: "--font-eagle-lake",
  subsets: ["latin"],
  weight: ["400"],
});

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
    exit: { opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  useEffect(() => {
    const targetDate = new Date("2026-04-28T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.main 
        key="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`relative h-screen w-full overflow-hidden bg-black text-white ${cinzel.variable} ${eagleLake.variable} flex flex-col`}
      >
        
        {/* --- BACKGROUND --- */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/assets/home-bg.png"
            alt=""
            fill
            priority
            className="object-cover blur-[1px]"
          />
          <div className="absolute inset-0 bg-radial-vignette"></div>
        </motion.div>

        {/* --- PARTICLE OVERLAY (Dust/Embers) --- */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-40 mix-blend-screen animate-pulse-slow">
           {/* Using a transparent noise texture to simulate particles */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-float-particles"></div>
        </div>

        {/* --- CONTENT OVERLAY --- */}
        <div className="z-10 relative flex flex-col h-full w-full px-6 py-4 md:px-12 md:py-6">
          
          {/* Header */}
          <motion.header variants={itemVariants} className="flex justify-between items-center shrink-0">
            <Image src="/assets/logo.png" alt="Logo" width={120} height={120} className="drop-shadow-glow" />
            <div className="text-right border-r-2 border-yellow-600/40 pr-4">
              <h2 className={`${cinzel.className} text-sm md:text-lg text-yellow-100`}>
                The Largest Cultural Fest of North Bengal
              </h2>
              <p className={`${eagleLake.className} text-yellow-500 text-xs`}>Legacy of JGEC</p>
            </div>
          </motion.header>

          {/* Central Hero Section */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-6 md:space-y-8">
            
            {/* Main Title */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[75vw] md:max-w-[55vw]"
            >
               <Image 
                src="/assets/jeclatfont.svg" 
                alt="Jeclat 2026" 
                width={1000} 
                height={300} 
                className="w-full h-auto brightness-110 drop-shadow-[0_0_25px_rgba(255,140,0,0.5)]"
              />
            </motion.div>

            {/* Date & Subtitle */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="flex items-center gap-4 text-yellow-200/90 mb-1">
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-[1px] bg-gradient-to-r from-transparent to-yellow-600"
                ></motion.span>
                <span className={`${eagleLake.className} text-xl md:text-3xl tracking-widest`}>28th April — 5th May</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-[1px] bg-gradient-to-l from-transparent to-yellow-600"
                ></motion.span>
              </div>
            </motion.div>

            {/* Countdown Display */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-4 md:gap-10 py-4 px-8 bg-black/40 backdrop-blur-sm border-y border-yellow-900/30 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <CompactUnit value={timeLeft.days} label="Days" />
              <span className="text-2xl text-yellow-700/50">:</span>
              <CompactUnit value={timeLeft.hours} label="Hours" />
              <span className="text-2xl text-yellow-700/50">:</span>
              <CompactUnit value={timeLeft.minutes} label="Mins" />
              <span className="text-2xl text-yellow-700/50">:</span>
              <CompactUnit value={timeLeft.seconds} label="Secs" />
            </motion.div>

            {/* --- EXPLORE THE REALM BUTTON --- */}
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative mt-4 px-10 py-3 overflow-hidden rounded-sm transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-700 via-yellow-900 to-[#1a1300] border border-yellow-500/50 shadow-[0_0_15px_rgba(0,0,0,0.8)]"></div>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>
              
              <div className="relative flex items-center gap-3">
                <span className={`${cinzel.className} text-sm md:text-base tracking-[0.2em] text-yellow-100 group-hover:text-white transition-colors`}>
                  Explore the Realm
                </span>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-200/50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-200/50"></div>
            </motion.button>
          </div>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="shrink-0 flex justify-center py-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-700 font-bold opacity-60">
                Prepare for Battle • Unleash the Soul
              </p>
          </motion.footer>
        </div>

        <style jsx global>{`
          .bg-radial-vignette {
            background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%);
          }
          .drop-shadow-glow {
            filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.3));
          }
          @keyframes floatParticles {
            0% { background-position: 0 0; }
            100% { background-position: 100px -100px; }
          }
          .animate-float-particles {
            animation: floatParticles 20s linear infinite;
          }
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
          .animate-pulse-slow {
            animation: pulseSlow 4s ease-in-out infinite;
          }
        `}</style>
      </motion.main>
    </AnimatePresence>
  );
}

function CompactUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
      <div className="relative h-[40px] md:h-[60px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-yellow-50 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm tabular-nums"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={`${cinzel.className} text-[9px] text-yellow-600 font-bold tracking-widest uppercase mt-1`}>
        {label}
      </span>
    </div>
  );
}