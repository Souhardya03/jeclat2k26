"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Cinzel_Decorative, Eagle_Lake } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
// import MahabharataNavbar from "../../components/Navbar"; // Kept commented as per your original code
import Link from "next/link";

 interface TimeLeft {
  days: number; hours: number; minutes: number; seconds: number;
}


// Particle Interface
interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
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
  // --- COMMENTED OUT TIMER STATE ---
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });
  

  // State for particles
  const [fireParticles, setFireParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const particles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 2,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 20,
      drift: Math.random() * 20 - 10,
    }));
    setFireParticles(particles);

     // --- COMMENTED OUT COUNTDOWN LOGIC ---
    const targetDate = new Date("2026-03-30T00:00:00");
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

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
    exit: { opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } as any }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } as any }
  };

  return (
    <AnimatePresence mode="wait">
      {/* <MahabharataNavbar/> */}
      <motion.main 
        key="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`relative h-screen w-full no-scrollbar overflow-auto bg-black text-white ${cinzel.variable} ${eagleLake.variable} flex flex-col`}
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
            alt="Background"
            fill
            preload
            className="object-cover blur-[1px]"
          />
          <div className="absolute inset-0 bg-radial-vignette"></div>
        </motion.div>

        {/* --- LAYER 1: ATMOSPHERIC DUST --- */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-30 mix-blend-screen animate-pulse-slow">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-float-particles"></div>
        </div>

        {/* --- LAYER 2: RISING FIRE PARTICLES --- */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          {fireParticles.map((p) => (
            <div
              key={p.id}
              className="absolute bottom-[-20px] rounded-full bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 blur-[0.5px]"
              style={{
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: 0,
                boxShadow: `0 0 ${p.size * 2}px ${p.size}px rgba(255, 100, 0, 0.6)`,
                animation: `fireRise ${p.duration}s linear infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* --- CONTENT OVERLAY --- */}
        <div className="z-10 relative flex flex-col h-full w-full px-4 py-4 md:px-12 md:py-2">
          
          {/* Header */}
          <motion.header variants={itemVariants} className="flex justify-between items-center shrink-0">
            <Image src="/assets/logo.png" preload alt="Logo" width={120} height={120} className="drop-shadow-glow" />
            <div className="text-right border-r-2 border-yellow-600/40 pr-4">
              <h2 className={`${cinzel.className} text-sm md:text-lg text-yellow-100`}>
                The Largest Cultural Fest of North Bengal
              </h2>
              <p className={`${eagleLake.className} text-yellow-500 text-xs`}>Legacy of JGEC</p>
            </div>
          </motion.header>

          {/* Central Hero Section */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-8 md:space-y-4 lg:space-y-8">
            
            {/* Main Titl */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[75vw] md:max-w-[55vw]"
            >
               <Image 
                src="/assets/jeclatfont.svg" 
                alt="Jeclat 2026" 
                preload
                width={1000} 
                height={300} 
                className="w-full h-auto brightness-110 drop-shadow-[0_0_25px_rgba(255,140,0,0.5)]"
              />
            </motion.div>

            {/* --- OLD DATE & SUBTITLE (COMMENTED OUT) --- */}
            <motion.div variants={itemVariants} className="flex flex-col -mt-4 items-center">
              <div className="flex items-center gap-4 text-yellow-200/90 mb-1">
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-[1px] bg-gradient-to-r from-transparent to-yellow-600"
                ></motion.span>
                <span className={`${eagleLake.className} text-sm text-center md:text-lg lg:text-3xl tracking-widest`}>30th March — 5th April</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-[1px] bg-gradient-to-l from-transparent to-yellow-600"
                ></motion.span>
              </div>
            </motion.div>
           

            {/* --- OLD COUNTDOWN DISPLAY (COMMENTED OUT) --- */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-4 md:gap-10 lg:py-4 px-8 bg-black/40 backdrop-blur-sm border-y border-yellow-900/30 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <CompactUnit value={timeLeft.days} label="Days" />
              <span className="text-2xl text-yellow-700/50">:</span>
              <CompactUnit value={timeLeft.hours} label="Hours" />
              <span className="text-2xl text-yellow-700/50">:</span>
              <CompactUnit value={timeLeft.minutes} label="Mins" />
              <span className="text-2xl text-yellow-700/50">:</span>
              <CompactUnit value={timeLeft.seconds} label="Secs" />
            </motion.div>
           

            {/* --- NEW STAY TUNED SECTION --- */}
            {/* <motion.div 
              variants={itemVariants} 
              className="flex flex-col items-center justify-center space-y-3 py-6"
            >
              <div className="flex items-center gap-4 w-full justify-center">
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1.5 }}
                  className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"
                />
                <h3 className={`${cinzel.className} text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b text-center from-yellow-100 to-yellow-600 tracking-[0.2em] font-bold drop-shadow-sm`}>
                  STAY TUNED
                </h3>
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1.5 }}
                  className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"
                />
              </div>
              
              <p className={`${eagleLake.className} text-center text-yellow-500/80 text-sm md:text-xl tracking-wider animate-pulse`}>
                Dates To Be Announced Soon
              </p>
            </motion.div> */}

            {/* --- UPDATED EPIC EXPLORE BUTTON --- */}
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative mt-6 flex items-center"
            >
              {/* Left Ornamental Arrow (Rotated 180deg) */}
              <div className="relative w-14 md:w-24 h-14 transform rotate-180 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image 
                  src="/assets/arrow.png" 
                  alt="" 
                  fill 
                  className="object-contain drop-shadow-[0_0_5px_rgba(255,140,0,0.6)]"
                />
              </div>

              {/* Button Body */}
              <Link href={"/about"} className="relative px-8 py-3 mx-2 overflow-hidden rounded-sm">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-700 via-yellow-900 to-[#1a1300] border border-yellow-500/50 shadow-[0_0_15px_rgba(0,0,0,0.8)]"></div>
                {/* Shine Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>
                
                {/* Text Content */}
                <span className={`${cinzel.className} truncate relative z-10 text-sm md:text-base md:tracking-[0.2em] text-yellow-100 group-hover:text-white transition-colors`}>
                  Explore the Realm
                </span>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-200/50"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-200/50"></div>
              </Link>

              {/* Right Ornamental Arrow */}
              <div className="relative w-14 md:w-24 h-14 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image 
                  src="/assets/arrow.png" 
                  alt="" 
                  fill 
                  className="object-contain drop-shadow-[0_0_5px_rgba(255,140,0,0.6)]"
                />
              </div>
            </motion.button>
          </div>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="shrink-0 text-center flex justify-center py-2">
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
          /* --- DUST ANIMATIONS --- */
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

          /* --- FIRE EMBER ANIMATION --- */
          @keyframes fireRise {
            0% {
              transform: translateY(0) scale(1) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1; /* Fade in quickly */
            }
            100% {
              transform: translateY(-120vh) scale(0) translateX(20px); /* Move up, shrink, drift right */
              opacity: 0;
            }
          }
        `}</style>
      </motion.main>
    </AnimatePresence>
  );
}

// Kept here in case you want to uncomment the countdown later
function CompactUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
      <div className="relative h-[40px] md:h-[55px] lg:h-[60px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl lg:text-5xl font-bold bg-gradient-to-b from-yellow-50 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm tabular-nums"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={`${cinzel.className} text-[9px] lg:text-[12px] text-yellow-600 font-bold tracking-widest uppercase lg:mt-1 md:-mt-1 pb-2`}>
        {label}
      </span>
    </div>
  );
}