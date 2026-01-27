"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Cinzel, Rozha_One } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

// --- FONTS ---
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700', '900'] });
const rozhaOne = Rozha_One({ subsets: ['devanagari'], weight: ['400'] });

// --- DATA ---
interface Quote {
  sanskrit: string;
  english: string;
}

const quotes: Quote[] = [
  { sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत", english: "Whenever there is a decline in righteousness, O Bharata..." },
  { sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन", english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions." },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between Sanskrit -> Divider -> English
      delayChildren: 0.2,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function MahabharatLoader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  // 1. Video Speed Control
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      const particleCount = 50; 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += Math.sin(p.y * 0.02) * 0.3; 
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 140, 0, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "orange";
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative h-screen w-full overflow-hidden flex flex-col items-center bg-black ${cinzel.className}`}>
      
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-sm brightness-[0.4] scale-110"
        >
          <source src="/assets/loader_vdo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      {/* LAYER 2: EMBERS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-1 pointer-events-none opacity-80" />

      {/* LAYER 3: MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl pt-24 md:pt-32">
        
        {/* --- CHAKRA SECTION (Framer Motion) --- */}
        <div className="mb-10 relative shrink-0">
            {/* Pulsing Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-orange-600 rounded-full blur-[60px]"
            />
            
            {/* Spinning Chakra */}
            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-32 h-32 md:w-56 md:h-56 drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" stroke="#FFD700" strokeWidth="1.5" className="opacity-80" />
              <circle cx="50" cy="50" r="8" fill="#590d0d" stroke="#FFD700" strokeWidth="1" />
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d="M50 12 L56 38 L44 38 Z"
                  fill="#FFA500"
                  stroke="#FFD700"
                  strokeWidth="0.5"
                  className="opacity-90"
                  transform={`rotate(${i * 30} 50 50)`}
                />
              ))}
              {[...Array(12)].map((_, i) => (
                <line
                  key={`line-${i}`}
                  x1="50" y1="50" x2="50" y2="20"
                  stroke="#FF4500"
                  strokeWidth="0.5"
                  transform={`rotate(${i * 30 + 15} 50 50)`}
                />
              ))}
            </motion.svg>
        </div>

        <h2 className="text-sm md:text-lg text-amber-500 tracking-[0.6em] uppercase mb-8 font-bold opacity-80 shrink-0">
          Loading The Epic
        </h2>

        {/* --- QUOTE CONTAINER (Fixed Height) --- */}
        <div className="w-full h-75 flex flex-col items-center justify-start overflow-hidden">
            
            {/* AnimatePresence handles the Exit/Enter swap */}
            <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote} 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center w-full"
                >
                    {/* SANSKRIT */}
                    <motion.h1 
                      variants={itemVariants}
                      className={`${rozhaOne.className} text-4xl md:text-7xl mb-6 leading-tight py-2
                      text-transparent bg-clip-text bg-linear-to-b from-amber-200 via-yellow-500 to-amber-700
                      drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}
                    >
                      {quotes[currentQuote].sanskrit}
                    </motion.h1>

                    {/* DIVIDER */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex items-center justify-center gap-4 mb-6 opacity-60"
                    >
                        <div className="h-px w-12 bg-linear-to-r from-transparent to-amber-500"></div>
                        <div className="w-2 h-2 rotate-45 border border-amber-500 bg-amber-900"></div>
                        <div className="h-px w-12 bg-linear-to-l from-transparent to-amber-500"></div>
                    </motion.div>

                    {/* ENGLISH */}
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