"use client";
import React from "react";
import Image from "next/image";
import { Cinzel, Fauna_One } from "next/font/google";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { Crown, Users, Trophy, Gem } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { GlareCard } from "@/components/ui/glare-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const fauna = Fauna_One({ subsets: ["latin"], weight: ["400"] });

// --- SPONSOR DATA ---
const associateSponsors = [
  { name: "pepsi", image: "/images/sponsorImages/pepsi.png" },
];

const brandSponsors = [
  { name: "chaat-puchka", image: "/images/sponsorImages/chaat-puchka.png" },
  { name: "sbi", image: "/images/sponsorImages/sbi.svg" },
  { name: "globsyn", image: "/images/sponsorImages/globsyn.png" },
];

const previousSponsorsRow1 = [
  { name: "jagran", image: "/images/sponsorImages/jagran.svg" },
  { name: "waiwai", image: "/images/sponsorImages/waiwai.svg" },
  { name: "zebronics", image: "/images/sponsorImages/zebronics.png" },
  { name: "the-statesman", image: "/images/sponsorImages/the-statesman.svg" },
  { name: "asian-paints", image: "/images/sponsorImages/asian-paints.svg" },
  { name: "bajaj", image: "/images/sponsorImages/bajaj.svg" },
  { name: "big-bazaar", image: "/images/sponsorImages/big-bazaar.svg" },
  { name: "dtdc", image: "/images/sponsorImages/dtdc.svg" },
];

const previousSponsorsRow2 = [
  { name: "hyundai", image: "/images/sponsorImages/hyundai.svg" },
  { name: "indian-oil", image: "/images/sponsorImages/indian-oil.svg" },
  { name: "internshala", image: "/images/sponsorImages/internshala.svg" },
  { name: "kotak", image: "/images/sponsorImages/kotak.svg" },
  { name: "ktm", image: "/images/sponsorImages/ktm.svg" },
  { name: "monster", image: "/images/sponsorImages/monster.svg" },
  { name: "pran", image: "/images/sponsorImages/pran.svg" },
  { name: "radio-misti", image: "/images/sponsorImages/radio-misti.svg" },
];

const previousSponsorsRow3 = [
  { name: "red-bull", image: "/images/sponsorImages/red-bull.svg" },
  { name: "vi", image: "/images/sponsorImages/vi.svg" },
  { name: "svf", image: "/images/sponsorImages/svf.svg" },
  { name: "city-life", image: "/images/sponsorImages/city-life.png" },
  { name: "uttarbanga-sambad", image: "/images/sponsorImages/uttarbanga-sambad.png" },
  { name: "volvo", image: "/images/sponsorImages/volvo.png" },
  { name: "galaxy-music", image: "/images/sponsorImages/galaxy-music.png" },
];

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 }, // Reduced distance for performance
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 }, // Reduced distance for performance
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger
    },
  },
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#0a0502] text-[#e0e0e0] ${cinzel.className}`}>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed bg-black inset-0 z-0 pointer-events-none will-change-transform">
        <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[120%]">
          <Image
            src="/assets/home-bg.png"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50 blur-xs"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>

        {/* Optimized CSS Particles */}
        <div className="absolute inset-0 overflow-hidden">
           {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                   left: `${Math.random() * 100}%`,
                   animationDelay: `${Math.random() * 5}s`,
                   animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
           ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center mt-8 mb-8 relative px-4 sm:px-6">
            <TextGenerateEffect
              words="ABOUT JECLAT"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-local mt-3 sm:mt-4 leading-tight"
              duration={1.5}
              filter={true}
              wordClassName="bg-clip-text text-transparent bg-gradient-to-b from-[#ffd700] via-[#ffb700] to-[#8b6914] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            />

            <TextGenerateEffect
              words="The Crown Jewel of North Bengal"
              className="mt-2 sm:mt-4 text-yellow-500/80 tracking-[0.05em] sm:tracking-[0.15em] md:tracking-[0.2em] text-[0.55rem] sm:text-xs md:text-sm uppercase font-bold drop-shadow-md"
              duration={0.5}
              filter={true}
            />
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl w-full bg-black/60 backdrop-blur-md border border-yellow-500/30 p-8 md:p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
          >
            {/* Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>

            <div className={`${fauna.className} text-center space-y-8 text-lg md:text-xl text-gray-200 leading-relaxed`}>
              <EncryptedText
                text="Experience JECLAT, renowned as The Queen of All Fests. A cultural extravaganza in North Bengal featuring a diverse array of events, from Music to Dance, creative writing to fashion shows, and showcases talents from local artists to nationwide celebrities!"
                className="text-gray-100 drop-shadow-sm"
                encryptedClassName="text-yellow-600"
                revealedClassName="text-gray-100"
                revealDelayMs={20}
                charset="⚡⚜️⚔️ABC"
              />

              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 180 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex justify-center my-4"
              >
                <span className="text-yellow-500 text-2xl drop-shadow-[0_0_5px_gold]">❖</span>
              </motion.div>

              <EncryptedText
                text="Join JECLAT and be part of the over TEN THOUSAND young enthusiasts from around the region!"
                className="text-yellow-100 font-bold"
                encryptedClassName="text-yellow-600"
                revealedClassName="text-yellow-100 font-bold"
                revealDelayMs={30}
                charset="10000+"
              />
            </div>
          </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="w-full py-24 px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-yellow-500 tracking-[0.2em] mb-2 uppercase drop-shadow-md">
              The Legacy
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-10 md:gap-16"
          >
            <motion.div variants={fadeInLeft}>
              <StatCard icon={<Trophy className="w-16 h-16 text-yellow-400 opacity-90" />} number="25+" label="Events" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <StatCard icon={<Users className="w-16 h-16 text-yellow-400 opacity-90" />} number="10K+" label="Footfall" />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <StatCard icon={<Crown className="w-16 h-16 text-yellow-400 opacity-90" />} number="Big" label="Prize Pool" />
            </motion.div>
          </motion.div>
        </section>

        {/* --- SPONSORS SECTION --- */}
        <section className="w-full pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#050302]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black"></div>
          <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-900/30 to-transparent"></div>
          <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-900/30 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="text-center mb-20 space-y-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="flex justify-center mb-2"
              >
                <Gem className="text-yellow-500 animate-pulse" size={24} />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 tracking-tight drop-shadow-lg">
                THE ROYAL ALLIANCE
              </h2>
              <p className={`${fauna.className} text-yellow-100/60 text-lg tracking-widest uppercase`}>
                Our Distinguished Patrons
              </p>
            </motion.div>

            {/* ASSOCIATE */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center mb-24"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-[300px] md:w-[400px] bg-black/80 backdrop-blur-xl border border-yellow-500/30 rounded-lg p-10 flex flex-col items-center justify-center shadow-2xl">
                  <h3 className="absolute -top-3 bg-[#0a0502] px-4 text-xs text-yellow-400 border border-yellow-900/50 rounded-full tracking-[0.2em] uppercase">
                    Associate Sponsor
                  </h3>
                  <div className="relative w-full h-32 md:h-40 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={associateSponsors[0].image}
                      alt={associateSponsors[0].name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BRAND */}
            <div className="mb-24">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-yellow-500/40 text-sm uppercase tracking-[0.3em] mb-10 flex items-center justify-center gap-4"
              >
                <span className="w-12 h-px bg-yellow-900"></span>
                Brand Partners
                <span className="w-12 h-px bg-yellow-900"></span>
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center gap-8"
              >
                {brandSponsors.map((sponsor, i) => (
                  <motion.div
                    key={i}
                    variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative w-48 h-32 bg-white/5 border border-white/5 rounded-md flex items-center justify-center overflow-hidden hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-28 h-20 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0">
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        fill
                        sizes="112px"
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* PREVIOUS SPONSORS (Optimized Marquee) */}
            <div className="relative py-10 border-t border-yellow-900/20">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-yellow-500/40 text-xs uppercase tracking-[0.3em] mb-8"
              >
                The Legacy of Support
              </motion.h3>

              <div className="space-y-6">
                 {/* Row 1: Left */}
                 <div className="hover:opacity-100 opacity-60 transition-opacity duration-500">
                    <MarqueeRow items={previousSponsorsRow1} direction="left" speed="40s" />
                 </div>
                 
                 {/* Row 2: Right */}
                 <div className="hover:opacity-100 opacity-60 transition-opacity duration-500">
                    <MarqueeRow items={previousSponsorsRow2} direction="right" speed="45s" />
                 </div>

                 {/* Row 3: Left */}
                 <div className="hover:opacity-100 opacity-60 transition-opacity duration-500">
                    <MarqueeRow items={previousSponsorsRow3} direction="left" speed="50s" />
                 </div>
              </div>

              <div className="absolute top-20 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050302] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute top-20 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050302] to-transparent z-20 pointer-events-none"></div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        /* Optimized Particle Animation */
        .particle {
           position: absolute;
           bottom: -10px;
           width: 3px;
           height: 3px;
           background: #eab308;
           border-radius: 50%;
           opacity: 0;
           animation: floatUp linear infinite;
           will-change: transform, opacity;
        }
        @keyframes floatUp {
           0% { transform: translateY(0) scale(0); opacity: 0; }
           20% { opacity: 0.8; }
           100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }

        /* Hardware Accelerated Marquee */
        .animate-marquee {
           display: flex;
           gap: 4rem;
           width: max-content;
           will-change: transform;
        }
        @keyframes marquee-left {
           0% { transform: translate3d(0, 0, 0); }
           100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
           0% { transform: translate3d(-50%, 0, 0); }
           100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
}

// --- SUB-COMPONENTS (Kept Design, Optimized) ---

const StatCard = ({
  icon,
  number,
  label,
}: {
  icon: any;
  number: string;
  label: string;
}) => (
  <GlareCard className="flex flex-col items-center justify-center bg-[#1a0f0a]/90 border border-yellow-900/40 p-6 backdrop-blur-sm">
    <div className="mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
      {icon}
    </div>
    <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-2">
      {number}
    </h3>
    <p className="text-gray-400 uppercase tracking-widest text-sm">{label}</p>
  </GlareCard>
);

const MarqueeRow = ({
  items,
  direction,
  speed
}: {
  items: any[];
  direction: "left" | "right";
  speed: string;
}) => {
  // Duplicate items to ensure seamless scrolling
  const allItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full group">
      <div
        className="animate-marquee"
        style={{
           animationName: direction === "left" ? "marquee-left" : "marquee-right",
           animationDuration: speed,
           animationTimingFunction: "linear",
           animationIterationCount: "infinite",
           animationPlayState: "running"
        }}
      >
        {allItems.map((sponsor, idx) => (
          <div
            key={idx}
            className="relative w-32 h-16 flex items-center justify-center filter grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 hover:scale-110 transition-all duration-300"
          >
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};