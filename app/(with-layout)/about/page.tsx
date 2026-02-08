"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cinzel, Montserrat, Italiana, Bodoni_Moda } from "next/font/google";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { Star, ArrowUpRight, ChevronDown } from "lucide-react";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });
const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["italic", "normal"] });

// --- DATA ---
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
const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.2]);
  
  // Parallax effect for the Elementary section
  const elementaryY = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "5%"]);

  // 1. Create a ref for the stats section
  const statsRef = useRef<HTMLElement>(null);

  // 2. Create the scroll handler function
  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`relative min-h-screen w-full bg-[#050505] text-[#F2E8CF] ${montserrat.className} selection:bg-[#D4AF37] selection:text-black overflow-x-hidden`}>
      
      {/* --- FIXED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]">
        <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/home-bg.png"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-75 blur-xs"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      </div>

      {/* --- SCROLLABLE CONTENT --- */}
      <div className="relative z-10 w-full overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-20 relative border-b border-[#D4AF37]/20">
           
           <motion.div 
             variants={containerStagger}
             initial="hidden"
             animate="visible"
             className="text-center space-y-4 relative z-10 w-full max-w-4xl"
           >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 md:gap-4 mb-2 md:mb-4 text-[#D4AF37]">
                 <Star size={10} className="md:w-3 md:h-3" />
                 <span className={`${montserrat.className} text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase`}>Est. 2026</span>
                 <Star size={10} className="md:w-3 md:h-3" />
              </motion.div>

              <motion.div variants={scaleIn} className="flex items-center justify-center py-2 md:py-4">
                 <Image
                    src="/assets/jeclatfont.svg"
                    alt="JECLAT"
                    width={800}
                    height={200}
                    className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] drop-shadow-2xl h-auto"
                    priority
                 />
              </motion.div>
              
              <div className="overflow-hidden px-4">
                 <motion.p 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                    className={`${bodoni.className} text-lg sm:text-xl md:text-3xl text-[#D4AF37] italic mt-2`}
                 >
                    Inspired from the Mahabharata
                 </motion.p>
              </div>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-8 md:bottom-12 left-6 right-6 flex justify-between items-end text-[#F2E8CF]/60"
           >
              <div className="hidden md:block text-xs max-w-[200px] leading-relaxed">
                 Celebrating art, culture, and competition in the heart of North Bengal.
              </div>
              
              {/* 3. Attach scroll handler to the scroll indicator */}
              <motion.div 
                onClick={scrollToStats}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex flex-col absolute lg:left-1/2 items-center gap-2 text-[#D4AF37] w-full md:w-auto cursor-pointer"
              >
                 <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-transparent to-[#D4AF37]"></div>
                 <span className="text-[8px] md:text-[10px] uppercase tracking-widest">Scroll</span>
                 <ChevronDown size={14} />
              </motion.div>

              <div className="hidden md:block text-xs text-right">
                 10K+ Footfall <br/> 25+ Events
              </div>
           </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        {/* 4. Attach the ref to this section */}
        <section ref={statsRef} className="w-full py-16 md:py-24 px-6 border-b border-[#D4AF37]/20 bg-black/50 backdrop-blur-md">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={containerStagger}
             className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12"
           >
              <motion.div variants={fadeInLeft} className="w-full md:w-1/3 text-center md:text-left">
                 <h2 className={`${italiana.className} text-3xl md:text-4xl text-white mb-4`}>The Scale</h2>
                 <p className="text-[#F2E8CF]/60 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                    Witness the magnitude of the largest cultural gathering in the region. A spectacle defined by numbers, driven by passion.
                 </p>
              </motion.div>
              
              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8">
                 <MinimalStat value="25+" label="Events" />
                 <MinimalStat value="10K" label="People" />
                 <MinimalStat value="XXL" label="Prizes" />
              </div>
           </motion.div>
        </section>

        {/* --- ELEMENTARY SECTION --- */}
        <section className="relative w-full py-20 md:py-40 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerStagger}
                className="lg:col-span-5 space-y-8 md:space-y-10 z-20 text-center lg:text-left"
              >
                 <motion.div variants={fadeInUp}>
                    <span className={`${montserrat.className} text-[10px] md:text-xs border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded-full uppercase tracking-widest`}>Flagship</span>
                    <h2 className={`${cinzel.className} text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-6 mb-2`}>
                       ELEMENTARY
                    </h2>
                    <p className={`${bodoni.className} text-xl md:text-2xl text-[#D4AF37] italic`}>"The Mystery Awaits"</p>
                 </motion.div>
                 
                 <motion.p variants={fadeInUp} className="text-[#F2E8CF]/70 text-base md:text-lg leading-loose font-light max-w-lg mx-auto lg:mx-0">
                    An intellectual labyrinth designed for the elite. Decode clues, solve puzzles, and navigate the shadows to claim the ultimate glory.
                 </motion.p>

                 <motion.div variants={fadeInUp}>
                   <Link href="/events/elementary" className="inline-block group">
                      <div className="flex items-center gap-4 text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 group-hover:border-[#D4AF37] transition-colors">
                         <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">Coming Soon</span>
                         <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                      </div>
                   </Link>
                 </motion.div>
              </motion.div>

              <motion.div 
                style={{ y: elementaryY }} 
                className="lg:col-span-7 relative h-[400px] md:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
              >
                 <TiltCard />
              </motion.div>

           </div>
        </section>

        {/* --- SPONSORS SECTION --- */}
        <section className="w-full pt-16 md:pt-20 pb-24 md:pb-40 relative border-t border-[#D4AF37]/20 bg-black/50 backdrop-blur-sm">
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              
              {/* Header */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-center mb-16 md:mb-32"
              >
                 <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-transparent to-[#D4AF37] mb-6"></div>
                 <h2 className={`${italiana.className} text-4xl md:text-5xl lg:text-6xl text-white text-center`}>The Royal Alliance</h2>
                 <p className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.3em] mt-4">Distinguished Partners</p>
              </motion.div>

              {/* Associate Sponsor */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center mb-20 md:mb-32"
              >
                 <div className="relative w-full max-w-[300px] md:max-w-lg aspect-[16/9] md:aspect-[16/8] group cursor-default">
                    <div className="absolute inset-0 border border-[#D4AF37]/50 transition-all duration-500 group-hover:inset-[-10px] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"></div>
                    <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
                       <div className="absolute top-4 left-4 text-[8px] md:text-[10px] uppercase tracking-widest text-[#D4AF37]/70">Title Associate</div>
                       <div className="relative w-[60%] h-[60%] md:w-[70%] md:h-[70%] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                          <Image src={associateSponsors[0].image} alt="Associate" fill className="object-contain" />
                       </div>
                    </div>
                 </div>
              </motion.div>

              {/* Brand Partners */}
              <div className="mb-20 md:mb-32">
                 <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.2 }}
                   variants={containerStagger}
                   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#D4AF37]/20 border border-[#D4AF37]/20"
                 >
                    {brandSponsors.map((sponsor, i) => (
                       <motion.div key={i} variants={fadeInUp} className="bg-[#050505] aspect-[4/3] flex items-center justify-center p-8 group hover:bg-[#0a0a0a] transition-colors relative">
                          <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                             <Image src={sponsor.image} alt={sponsor.name} fill className="object-contain" />
                          </div>
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <ArrowUpRight size={12} className="text-[#D4AF37]" />
                          </div>
                       </motion.div>
                    ))}
                 </motion.div>
              </div>

              {/* Legacy Marquee */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative border-y border-[#D4AF37]/20 py-12 md:py-16 bg-[#050505]"
              >
                 <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-[#D4AF37] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <span className="-rotate-90 text-[#050505] font-bold uppercase tracking-widest text-[10px] md:text-xs whitespace-nowrap">Legacy</span>
                 </div>
                 
                 <div className="ml-8 md:ml-12 space-y-8 md:space-y-12 overflow-hidden mask-gradient-sides">
                    <MarqueeRow items={previousSponsorsRow1} direction="left" speed="45s" />
                    <MarqueeRow items={previousSponsorsRow2} direction="right" speed="50s" />
                    <MarqueeRow items={previousSponsorsRow3} direction="left" speed="55s" />
                 </div>
              </motion.div>

           </div>
        </section>

      </div>

      <style jsx global>{`
        .mask-gradient-sides {
           mask-image: linear-gradient(to right, transparent, #050505 5%, #050505 95%, transparent);
        }
        
        .animate-marquee {
           display: flex;
           gap: 4rem;
           width: max-content;
           will-change: transform;
        }
        @media (min-width: 768px) {
           .animate-marquee { gap: 6rem; }
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

// --- SUB-COMPONENTS ---

const MinimalStat = ({ value, label }: { value: string, label: string }) => (
   <motion.div variants={fadeInUp} className="flex flex-col gap-1 md:gap-2 group cursor-default items-center md:items-start">
      <div className={`${cinzel.className} text-4xl md:text-5xl lg:text-6xl text-white font-thin group-hover:text-[#D4AF37] transition-colors duration-500 drop-shadow-md`}>{value}</div>
      <div className="flex items-center gap-2">
         <div className="h-[1px] w-4 bg-[#D4AF37]/50 group-hover:w-8 transition-all duration-300 bg-[#D4AF37]"></div>
         <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#F2E8CF]/60">{label}</span>
      </div>
   </motion.div>
);

const TiltCard = () => {
   const x = useMotionValue(0);
   const y = useMotionValue(0);
   const rotateX = useTransform(y, [-100, 100], [10, -10]);
   const rotateY = useTransform(x, [-100, 100], [-10, 10]);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
   };

   // On mobile, we remove the mouse listeners naturally as they won't trigger easily
   // but we can also disable the rotation transform via media query CSS or JS check if needed.
   // Framer motion handles touch seamlessly usually.

   return (
      <motion.div 
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, ease: "backOut" }}
         onMouseMove={handleMouseMove}
         onMouseLeave={() => { x.set(0); y.set(0); }}
         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
         className="relative w-[280px] h-[400px] sm:w-[300px] sm:h-[450px] md:w-[400px] md:h-[550px] perspective-1000 cursor-pointer"
      >
         <div className="absolute inset-0 bg-[#050505] border border-[#D4AF37]/30 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-200 group hover:border-[#D4AF37]/60">
            <Image 
               src="/images/eventImages/elementary1.jpg" 
               alt="Elementary" 
               fill
               className="object-cover opacity-80 hover:opacity-100 transition-all duration-700 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none mix-blend-multiply"></div>
            
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 border-t border-[#D4AF37]/50 pt-4 transform translate-z-10">
               <div className={`${cinzel.className} text-2xl md:text-3xl text-white drop-shadow-md`}>2026</div>
               <div className="text-[10px] md:text-xs text-[#D4AF37] uppercase tracking-widest mt-1">The Grand Mystery</div>
            </div>
         </div>
      </motion.div>
   );
};

const MarqueeRow = ({ items, direction, speed }: { items: any[]; direction: "left" | "right"; speed: string }) => {
  const allItems = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="animate-marquee flex gap-12 md:gap-16 items-center"
        style={{
           animationName: direction === "left" ? "marquee-left" : "marquee-right",
           animationDuration: speed,
           animationTimingFunction: "linear",
           animationIterationCount: "infinite",
           animationPlayState: "running"
        }}
      >
        {allItems.map((sponsor, idx) => (
          <div key={idx} className="relative w-24 h-10 md:w-32 md:h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 scale-95 hover:scale-105">
            <Image src={sponsor.image} alt={sponsor.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};