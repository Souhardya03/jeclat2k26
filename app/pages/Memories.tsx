"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Cinzel,
  Playfair_Display,
  Montserrat,
  Cormorant_SC,
} from "next/font/google";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Play, ChevronDown, History } from "lucide-react";
import { memoriesData } from "@/data/memoriesData";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["italic", "normal"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "700"] });


type Memory = {
  title: string;
  year: string;
  type: "youtube" | "video"; // Changed 'instagram' to generic 'video' for Cloudinary
  url: string;
  thumbnail?: string;
};
const getYoutubeId = (url: string) => {
  try {
    const parts = url.split("/embed/");
    if (parts.length > 1) {
      return parts[1].split("?")[0];
    }
    return null;
  } catch (e) {
    return null;
  }
};

export default function MemoriesPage() {
  const [activeYear, setActiveYear] = useState<string>(memoriesData[0].year);

  // --- SCROLL BRIGHTNESS LOGIC ---
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 20, 500], [0.5, 0.5, 0.15]);

  const scrollToYear = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={`relative min-h-screen w-full bg-black text-[#e0e0e0] overflow-x-hidden ${cinzel.className}`}>
      {/* --- BACKGROUND --- */}
      <div className="fixed bg-black inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
          <Image
            src="/assets/home-bg.png"
            alt="Background"
            fill
            priority
            className="object-cover brightness-75 blur-sm"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse-slow"></div>
      </div>

      {/* --- FIXED YEAR NAVIGATION --- */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-6">
        <div className="absolute top-0 bottom-0 right-[10px] w-px bg-yellow-900/30 -z-10"></div>
        {memoriesData.map((data) => (
          <button
            key={data.year}
            onClick={() => scrollToYear(data.year)}
            className={`group flex items-center gap-4 transition-all duration-500`}>
            <span
              className={`${montserrat.className} text-sm font-bold tracking-widest transition-all duration-500 
                  ${activeYear === data.year
                  ? "text-yellow-400 opacity-100 translate-x-0"
                  : "text-gray-500 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                }`}>
              {data.year}
            </span>
            <div
              className={`w-5 h-5 rounded-full border border-yellow-600 flex items-center justify-center transition-all duration-500
                  ${activeYear === data.year ? "bg-yellow-500 scale-125 shadow-[0_0_15px_gold]" : "bg-[#0a0502] scale-100 group-hover:border-yellow-400"}`}>
              <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeYear === data.year ? "opacity-100" : "opacity-0"}`}></div>
            </div>
          </button>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl overflow-hidden mx-auto px-6 pb-14 pt-[14em]">
        {/* --- HERO HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 border border-yellow-600/30 rounded-full px-4 py-1 mb-4 bg-black/40 backdrop-blur-md">
            <History size={14} className="text-yellow-500" />
            <span className={`${montserrat.className} text-xs uppercase tracking-widest text-yellow-500/80`}>
              The Archives
            </span>
          </div>

          <h1 className={`${cormorant.className} text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-500 to-yellow-900 drop-shadow-[0_0_35px_rgba(234,179,8,0.3)] tracking-tighter`}>
            MEMORIES
          </h1>
          <p className={`${playfair.className} text-xl md:text-3xl text-gray-400 italic max-w-2xl mx-auto`}>
            "Time passes, but the echoes of our celebration remain eternal."
          </p>
          <div className="pt-8 animate-bounce opacity-50">
            <ChevronDown className="mx-auto text-yellow-500" />
          </div>
        </motion.div>

        {/* --- VIDEO GALLERY --- */}
        <div className="space-y-30">
          {memoriesData.map((data, index) => (
            <MemoryBlock
              key={index}
              data={data}
              index={index}
              setActiveYear={setActiveYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- INDIVIDUAL MEMORY BLOCK ---
function MemoryBlock({
  data,
  index,
  setActiveYear,
}: {
  data: Memory;
  index: number;
  setActiveYear: (year: string) => void;
}) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveYear(data.year);
    }
  }, [isInView, data.year, setActiveYear]);

  // Thumbnail Logic
  let thumbnailUrl = "/assets/placeholder.jpg";
  if (data.thumbnail) {
    thumbnailUrl = data.thumbnail;
  } else if (data.type === 'youtube') {
    const videoId = getYoutubeId(data.url);
    if (videoId) thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      ref={ref}
      id={`year-${data.year}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`scroll-mt-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
      
      {/* TEXT SIDE */}
      <div className={`flex-1 text-center ${isEven ? "lg:text-left" : "lg:text-right"} space-y-4 px-4`}>
        <div className={`flex items-center gap-4 ${isEven ? "lg:justify-start" : "lg:justify-end"} justify-center transition-all duration-700`}>
          <div className={`h-px transition-all duration-700 ${isInView ? "w-24 bg-yellow-400 shadow-[0_0_10px_gold]" : "w-12 bg-yellow-900/40"}`}></div>
          <h2 className={`${cormorant.className} font-bold transition-all duration-700 transform leading-none
                 ${isInView
              ? "text-7xl md:text-9xl text-yellow-400 scale-105 drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]"
              : "text-6xl md:text-8xl text-yellow-900/20 scale-100"
            }
               `}>
            {data.year}
          </h2>
          <div className={`h-px transition-all duration-700 ${isInView ? "w-24 bg-yellow-400 shadow-[0_0_10px_gold]" : "w-12 bg-yellow-900/40"}`}></div>
        </div>

        <h3 className={`${cinzel.className} text-3xl md:text-4xl text-white font-bold drop-shadow-md transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-60"}`}>
          {data.title}
        </h3>
        <p className={`${montserrat.className} text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed`}>
          Relive the magic, the music, and the mayhem. A cinematic journey back to the glory of {data.year}.
        </p>
      </div>

      {/* VIDEO CARD SIDE */}
      <div className={`flex-1 w-full max-w-2xl group relative lg:px-0 transition-transform duration-700 ${isInView ? "scale-105" : "scale-100"}`}>
        <div className={`absolute -inset-1 lg:-inset-3 bg-gradient-to-br from-yellow-700/30 via-transparent to-yellow-700/30 rounded-xl transition-opacity duration-500 blur-sm ${isInView ? "opacity-100" : "opacity-40"}`}></div>

        <div className={`relative bg-[#0a0a0a] border rounded-lg overflow-hidden shadow-2xl aspect-video transition-all duration-300 z-10 ${isInView ? "border-yellow-500/60 shadow-yellow-900/20" : "border-yellow-900/40"}`}>
          {isPlaying ? (
            data.type === 'youtube' ? (
              <iframe
                width="100%"
                height="100%"
                src={`${data.url}${data.url.includes("?") ? "&" : "?"}autoplay=1`}
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              // HTML5 VIDEO FOR CLOUDINARY
              <video
                src={data.url}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              />
            )
          ) : (
            <div
              className="w-full h-full cursor-pointer relative group/video"
              onClick={() => setIsPlaying(true)}>
              <Image
                src={thumbnailUrl}
                alt={data.title}
                fill
                className="object-cover opacity-80 group-hover/video:opacity-100 transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500 blur-md opacity-0 group-hover/video:opacity-50 transition-opacity duration-300 rounded-full"></div>
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover/video:scale-110 group-hover/video:bg-yellow-600 group-hover/video:border-yellow-500 group-hover/video:text-black transition-all duration-300 relative z-10">
                    <Play fill="currentColor" size={32} className="ml-1" />
                  </div>
                </div>
                <span className={`${montserrat.className} text-xs uppercase tracking-[0.3em] font-bold text-white/80 group-hover/video:text-yellow-400 transition-colors`}>
                  Watch Film
                </span>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-yellow-500/60"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-yellow-500/60"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}