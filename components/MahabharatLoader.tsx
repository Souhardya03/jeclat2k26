"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Cinzel, Rozha_One } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

// Font configurations
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"], display: "swap" });
const rozhaOne = Rozha_One({ subsets: ["devanagari"], weight: ["400"], display: "swap" });

interface Quote {
  sanskrit: string;
  english: string;
}

const quotes: Quote[] = [
  {
    sanskrit: "अथासौ युगसन्ध्यायां दस्युप्रायेषु राजसु",
    english: "At the end of the age (Kali-yuga), when the rulers have become like thieves...",
  },
  {
    sanskrit: "जनिता विष्णुयशसो नाम्ना कल्किर्जगत्पतिः",
    english: "The Lord of the universe will be born as Kalki, the son of Vishnuyasha.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function MahabharatLoader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chakraRef = useRef<HTMLDivElement>(null);
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  // Audio refs
  const soundInstance = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // --- AUDIO SETUP ---
  useEffect(() => {
    // Video rate adjustment
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    // Audio initialization
    const audio = new Audio("/assets/fire-sound.mp3");
    audio.loop = true;
    audio.volume = 0.08;
    audio.muted = true; // Start muted for autoplay policy
    soundInstance.current = audio;

    const playAudio = async () => {
      try {
        await audio.play();
        console.log("Background audio started (muted)");
      } catch (err) {
        console.log("Autoplay blocked by browser, waiting for interaction");
      }
    };

    playAudio();

    return () => {
      audio.pause();
      soundInstance.current = null;
    };
  }, []);

  const toggleMute = useCallback(() => {
    if (soundInstance.current) {
      soundInstance.current.muted = !soundInstance.current.muted;
      setIsMuted(soundInstance.current.muted);
      if (!soundInstance.current.muted) {
        soundInstance.current.play().catch((e) => console.log("Audio play error:", e));
      }
    }
  }, []);

  // --- QUOTE ROTATION ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // --- OPTIMIZED CANVAS ANIMATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true }); // Optimize for transparency
    if (!ctx) return;

    let animationFrameId: number;
    let bgParticles: any[] = [];
    let fireParticles: any[] = [];
    let chakraYPosition = window.innerHeight * 0.35;

    // Initialize particles once or on resize
    const initParticles = () => {
      bgParticles = [];
      const particleCount = 25; // Reduced for performance
      for (let i = 0; i < particleCount; i++) {
        bgParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (chakraRef.current) {
        const rect = chakraRef.current.getBoundingClientRect();
        chakraYPosition = rect.top + rect.height / 2;
      }
      // Re-init background particles on resize to fill screen
      initParticles();
    };

    // Debounce resize to avoid thrashing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    window.addEventListener("resize", handleResize);
    resizeCanvas(); // Initial setup

    const draw = () => {
      // Clear with a transparent fill instead of clearRect for trail effect?
      // For this loader, clearRect is cleaner.
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Background Particles
      ctx.fillStyle = "#FF8C00"; // Set color once for batch
      bgParticles.forEach((p) => {
        p.y -= p.speedY;
        p.x += Math.sin(p.y * 0.02) * 0.3;
        
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }

        ctx.globalAlpha = p.opacity; // Use globalAlpha for opacity variation
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0; // Reset

      // 2. Fire Particles Logic
      // Add fewer particles per frame for performance
      if (Math.random() > 0.5) { // Add particle every other frame roughly
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 2 + 1;
        fireParticles.push({
          x: canvas.width / 2,
          y: chakraYPosition,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.015,
          size: Math.random() * 3 + 1,
          colorType: Math.random() > 0.5 ? 0 : 1, // 0 for orange-red, 1 for gold
        });
      }

      // Update and Draw Fire Particles
      for (let i = fireParticles.length - 1; i >= 0; i--) {
        const p = fireParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size -= 0.05;

        if (p.life <= 0 || p.size <= 0) {
          fireParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Optimize color string creation
        const color = p.colorType === 0 ? `rgba(255, 69, 0, ${p.life})` : `rgba(255, 215, 0, ${p.life})`;
        ctx.fillStyle = color;
        
        // Shadow is expensive, maybe disable if performance is critical
        // ctx.shadowBlur = 5; 
        // ctx.shadowColor = p.colorType === 0 ? "#ff4500" : "#ffd700";
        
        ctx.fill();
        // ctx.shadowBlur = 0; // Reset shadow
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className={`relative h-screen w-full overflow-hidden flex flex-col items-center bg-black ${cinzel.className}`}>
      
      {/* --- MUTE TOGGLE --- */}
     

      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover blur-sm brightness-[0.4] scale-105"
        >
          <source src="/assets/loader_vdo.mp4" type="video/mp4" />
        </video>
        {/* Overlays for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
      </div>

      {/* --- CANVAS FOR PARTICLES --- */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-1 pointer-events-none opacity-100"
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl pt-24 md:pt-32">
        {/* Chakra / Spinner */}
        <div ref={chakraRef} className="mb-10 relative shrink-0 group">
          {/* Static Blur Background */}
          <div className="absolute inset-0 bg-orange-600/40 rounded-full blur-[50px] animate-pulse"></div>

          {/* Rotating Dashed Border */}
          <div className="absolute inset-[-10px] rounded-full border-2 border-orange-500/30 border-dashed animate-[spin_10s_linear_infinite_reverse]"></div>

          {/* SVG Chakra */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 md:w-56 md:h-56 drop-shadow-[0_0_15px_rgba(255,69,0,0.9)] filter"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" stroke="#FFD700" strokeWidth="1.5" className="opacity-90" />
            <circle cx="50" cy="50" r="8" fill="#590d0d" stroke="#FFD700" strokeWidth="1" />

            {/* Render Blades */}
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d="M50 12 L56 38 L44 38 Z"
                fill="url(#fireGradient)"
                stroke="#FFD700"
                strokeWidth="0.5"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}

            {/* Render Spokes */}
            {[...Array(12)].map((_, i) => (
              <line
                key={`line-${i}`}
                x1="50"
                y1="50"
                x2="50"
                y2="20"
                stroke="#FF4500"
                strokeWidth="0.5"
                transform={`rotate(${i * 30 + 15} 50 50)`}
              />
            ))}

            <defs>
              <linearGradient id="fireGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FF8C00" />
                <stop offset="100%" stopColor="#8B0000" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Loading Text */}
        <h2 className="text-sm md:text-lg text-amber-500 tracking-[0.6em] uppercase mb-8 font-bold opacity-80 shrink-0">
          Loading The Epic
        </h2>

        {/* Quotes Section */}
        <div className="w-full h-75 flex flex-col items-center justify-start overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center w-full"
            >
              <motion.h1
                variants={itemVariants}
                className={`${rozhaOne.className} text-3xl md:text-5xl mb-6 leading-tight py-2 text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-500 to-amber-700 drop-shadow-md`}
              >
                {quotes[currentQuote].sanskrit}
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-4 mb-6 opacity-60"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
                <div className="w-2 h-2 rotate-45 border border-amber-500 bg-amber-900"></div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg md:text-2xl italic tracking-wide font-light max-w-2xl mx-auto"
              >
                &quot;{quotes[currentQuote].english}&quot;
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}