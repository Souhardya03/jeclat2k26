"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Cinzel, Fauna_One } from "next/font/google";
import { motion, useScroll, useTransform, useInView } from "framer-motion"; // Added useInView
import { Crown, Users, Trophy, MapPin, Sparkles, Gem } from "lucide-react";
// Assuming these components exist in your project
import { EncryptedText } from "@/components/ui/encrypted-text";
import { GlareCard } from "@/components/ui/glare-card";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const fauna = Fauna_One({ subsets: ["latin"], weight: ["400"] });

// --- SPONSOR DATA ---
const associateSponsors = [
  { name: "pepsi", image: "/images/sponsorImages/pepsi.png" },
];

const brandSponsors = [
  { name: "chaat-puchka", image: "/images/sponsorImages/chaat-puchka.png" },
  { name: "sbi", image: "/images/sponsorImages/sbi.png" },
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
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  // Parallax effect for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // State for particles
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#0a0502] text-[#e0e0e0] ${cinzel.className}`}>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div  className="relative w-full h-[120%]">
           <Image
             src="/assets/home-bg.png"
             alt="Background"
             fill
             priority
             className="object-cover blur-[4px]"
           />
        </div>
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
        
        {/* Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-0 w-1 h-1 bg-yellow-500 rounded-full animate-float-up opacity-0 shadow-[0_0_10px_gold]"
            style={{ left: p.left, animationDelay: `${p.delay}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 relative"
          >
            <div className="flex fixed top-[5em] z-20 left-0 w-full items-center justify-center gap-4 mb-4 text-yellow-500/80">
               <motion.div 
                 initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-[1px] w-12 md:w-32 bg-gradient-to-r from-transparent to-yellow-500 origin-right"
               ></motion.div>
               <Crown size={32} strokeWidth={1.5} className="drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
               <motion.div 
                 initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-[1px] w-12 md:w-32 bg-gradient-to-l from-transparent to-yellow-500 origin-left"
               ></motion.div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffd700] via-[#ffb700] to-[#8b6914] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-wider font-local mt-14`}
            >
              ABOUT JECLAT
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-4 text-yellow-500/80 tracking-[0.4em] text-xs md:text-sm uppercase font-bold drop-shadow-md"
            >
              The Crown Jewel of North Bengal
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl w-full bg-black/60 backdrop-blur-md border border-yellow-500/30 p-8 md:p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
          >
             {/* Decorative Corners */}
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
             viewport={{ once: true }}
             className="flex flex-col items-center mb-16"
           >
              <h2 className="text-3xl md:text-4xl text-yellow-500 tracking-[0.2em] mb-2 uppercase drop-shadow-md">The Legacy</h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1 }}
                className="h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"
              ></motion.div>
           </motion.div>

           <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="flex flex-wrap justify-center gap-10 md:gap-16"
           >
              <motion.div variants={fadeInUp}><StatCard icon={<Trophy className="w-16 h-16 text-yellow-400 opacity-90" />} number="25+" label="Events" /></motion.div>
              <motion.div variants={fadeInUp}><StatCard icon={<Users className="w-16 h-16 text-yellow-400 opacity-90" />} number="10K+" label="Footfall" /></motion.div>
              <motion.div variants={fadeInUp}><StatCard icon={<Crown className="w-16 h-16 text-yellow-400 opacity-90" />} number="Big" label="Prize Pool" /></motion.div>
           </motion.div>
        </section>


        {/* --- ELEMENTARY SECTION --- */}
        <section className="w-full max-w-7xl mx-auto py-24 px-4">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative rounded-lg overflow-hidden border border-yellow-900/50 bg-[#050201]/80 backdrop-blur-sm"
           >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
                 <div className="flex-1 text-center md:text-left">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 border border-yellow-600/40 rounded-full px-4 py-1 mb-6 bg-black/60"
                    >
                       <Sparkles size={14} className="text-yellow-400" />
                       <span className="text-xs uppercase tracking-widest text-yellow-400">Flagship Event</span>
                    </motion.div>
                    
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-md"
                    >
                      ELEMENTARY
                    </motion.h2>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className={`${fauna.className} text-gray-300 text-lg leading-relaxed mb-8`}
                    >
                       Embark on a digital odyssey with <span className="text-yellow-400 font-bold">JECLAT 2K26's</span> pièce de résistance. 
                       Immerse yourself in the enigmatic world of mystery puzzles, code-cracking, and intricate level navigation.
                    </motion.p>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-3 bg-yellow-900/20 border border-yellow-600/50 text-yellow-100 uppercase tracking-widest text-sm hover:bg-yellow-600 hover:text-black transition-all duration-300"
                    >
                       <span className="relative z-10 font-bold">Start The Quest</span>
                       <div className="absolute inset-0 bg-yellow-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    </motion.button>
                 </div>
                 
                 <div className="flex-1 flex justify-center">
                    <motion.div 
                      initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
                      whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      whileHover={{ rotate: 0 }}
                      className="relative w-64 h-80 bg-gradient-to-b from-[#2a1a10] to-black border-4 border-[#5d4037] rounded-lg shadow-2xl flex items-center justify-center transform"
                    >
                       <div className="absolute inset-2 border border-yellow-500/20 rounded"></div>
                       <MapPin size={64} className="text-yellow-600 drop-shadow-[0_0_10px_rgba(202,138,4,0.5)]" />
                       <div className="absolute bottom-6 text-xs uppercase tracking-[0.3em] text-[#8d6e63]">Top Secret</div>
                    </motion.div>
                 </div>
              </div>
           </motion.div>
        </section>


        {/* ========================================= */}
        {/* --- SPONSORS SECTION --- */}
        {/* ========================================= */}
        <section className="w-full pt-32 pb-24 relative overflow-hidden">
           
           <div className="absolute inset-0 bg-[#050302]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black"></div>
           
           <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-900/30 to-transparent"></div>
           <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-900/30 to-transparent"></div>

           <div className="relative z-10 max-w-7xl mx-auto px-6">
              
              {/* --- HEADER --- */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-20 space-y-4"
              >
                 <div className="flex justify-center mb-2">
                    <Gem className="text-yellow-500 animate-pulse" size={24} />
                 </div>
                 <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 tracking-tight drop-shadow-lg">
                    THE ROYAL ALLIANCE
                 </h2>
                 <p className={`${fauna.className} text-yellow-100/60 text-lg tracking-widest uppercase`}>
                    Our Distinguished Patrons
                 </p>
              </motion.div>


              {/* --- ASSOCIATE SPONSOR --- */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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
                             className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                          />
                       </div>
                    </div>
                 </div>
              </motion.div>


              {/* --- BRAND SPONSORS --- */}
              <div className="mb-24">
                 <motion.h3 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   className="text-center text-yellow-500/40 text-sm uppercase tracking-[0.3em] mb-10 flex items-center justify-center gap-4"
                 >
                    <span className="w-12 h-px bg-yellow-900"></span> Brand Partners <span className="w-12 h-px bg-yellow-900"></span>
                 </motion.h3>
                 
                 <motion.div 
                   variants={staggerContainer}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   className="flex flex-wrap justify-center gap-8"
                 >
                    {brandSponsors.map((sponsor, i) => (
                       <motion.div 
                         key={i} 
                         variants={fadeInUp}
                         whileHover={{ y: -5, transition: { duration: 0.2 } }}
                         className="group relative w-48 h-32 bg-white/5 border border-white/5 rounded-md flex items-center justify-center overflow-hidden hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 cursor-pointer"
                       >
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative w-28 h-20 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0">
                             <Image 
                                src={sponsor.image} 
                                alt={sponsor.name} 
                                fill
                                className="object-contain" 
                             />
                          </div>
                       </motion.div>
                    ))}
                 </motion.div>
              </div>


              {/* --- PREVIOUS SPONSORS (Marquee) --- */}
              <div className="relative py-10 border-t border-yellow-900/20">
                 <motion.h3 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="text-center text-yellow-500/40 text-xs uppercase tracking-[0.3em] mb-8"
                 >
                    The Legacy of Support
                 </motion.h3>

                 {/* Row 1 */}
                 <motion.div 
                   initial={{ x: -100, opacity: 0 }} 
                   whileInView={{ x: 0, opacity: 0.6 }} 
                   transition={{ duration: 1 }}
                   viewport={{ once: true }}
                   className="mb-6 hover:opacity-100 transition-opacity duration-500"
                 >
                    <MarqueeRow items={previousSponsorsRow1} direction="left" />
                 </motion.div>
                 
                 {/* Row 2 */}
                 <motion.div 
                   initial={{ x: 100, opacity: 0 }} 
                   whileInView={{ x: 0, opacity: 0.6 }} 
                   transition={{ duration: 1 }}
                   viewport={{ once: true }}
                   className="mb-6 hover:opacity-100 transition-opacity duration-500"
                 >
                    <MarqueeRow items={previousSponsorsRow2} direction="right" />
                 </motion.div>
                 
                 {/* Row 3 */}
                 <motion.div 
                   initial={{ x: -100, opacity: 0 }} 
                   whileInView={{ x: 0, opacity: 0.6 }} 
                   transition={{ duration: 1 }}
                   viewport={{ once: true }}
                   className="hover:opacity-100 transition-opacity duration-500"
                 >
                    <MarqueeRow items={previousSponsorsRow3} direction="left" />
                 </motion.div>
                 
                 <div className="absolute top-20 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050302] to-transparent z-20 pointer-events-none"></div>
                 <div className="absolute top-20 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050302] to-transparent z-20 pointer-events-none"></div>
              </div>

           </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
        .animate-float-up {
          animation: floatUp 10s linear infinite;
        }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-marquee-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

// --- SUB-COMPONENTS ---

const StatCard = ({ icon, number, label }: { icon: any, number: string, label: string }) => (
   <GlareCard className="flex flex-col items-center justify-center bg-[#1a0f0a]/90 border border-yellow-900/40 p-6 backdrop-blur-sm">
      <div className="mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">{icon}</div>
      <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-2">{number}</h3>
      <p className="text-gray-400 uppercase tracking-widest text-sm">{label}</p>
   </GlareCard>
);

const MarqueeRow = ({ items, direction }: { items: any[], direction: "left" | "right" }) => (
  <div className="relative overflow-hidden w-full group">
     <div className={`flex gap-16 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}>
        {[...items, ...items, ...items].map((sponsor, idx) => (
           <div key={idx} className="relative w-32 h-16 flex items-center justify-center filter grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 hover:scale-110 transition-all duration-300">
              <Image src={sponsor.image} alt={sponsor.name} fill className="object-contain" />
           </div>
        ))}
     </div>
  </div>
);