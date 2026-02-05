"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Cinzel, Playfair_Display, Montserrat, Cormorant_SC } from "next/font/google";
import { Instagram, Linkedin, Crown, Swords } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { GlareCard } from "@/components/ui/glare-card";

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

// --- TEAM DATA ---
const chiefCoordinators = [
  {
    name: "Chief Coordinator 1",
    role: "Supreme Commander",
    image: "/assets/team/cc1.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Chief Coordinator 2",
    role: "Supreme Commander",
    image: "/assets/team/cc2.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
];

const socialSecretaries = [
  {
    name: "Social Secretary 1",
    role: "Social Secretary",
    image: "/assets/team/ss1.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Social Secretary 2",
    role: "Social Secretary",
    image: "/assets/team/ss2.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
];

const teams = [
  {
    category: "Collection Head",
    mahabharat: "Dhanrakshak (Treasury Guards)",
    members: [
      {
        name: "Somnath Kuiti",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Laxminarayan Sen",
        dept: "ME",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Extended Collection Coordinator",
    mahabharat: "Dhana Samrakshak (Wealth Protectors)",
    members: [
      {
        name: "Suman Chakraborty",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Debayan Ghosh",
        dept: "CE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Sponsor Head",
    mahabharat: "Rajya Mitras (Kingdom Allies)",
    members: [
      {
        name: "Zaid Mahmud",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Sudiksha Basu Thakur",
        dept: "ME",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Apurba Shaw",
        dept: "ME",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Event Head",
    mahabharat: "Utsav Nayaks (Festival Leaders)",
    members: [
      {
        name: "Sankosh Roy",
        dept: "EE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Kaushik Saha",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Simon Barua",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Atanu Basak",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Pritam Chakraborty",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Purbayan Kumar Das",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Cultural Head",
    mahabharat: "Kala Prabhus (Arts Masters)",
    members: [
      {
        name: "Pritam Kumar Hembram",
        dept: "EE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Bithika Roy",
        dept: "EE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Raktim Majhi",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Asif Shaikh",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Web Lead",
    mahabharat: "Yantra Vidya Gurus (Tech Wizards)",
    members: [
      {
        name: "Saikat Bera",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Souhardya Deb",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Surajit Malty",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Kaustav Das",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Design Head",
    mahabharat: "Shilpa Shastris (Design Artisans)",
    members: [
      {
        name: "Aneek Karmakar",
        dept: "CE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Anuvab Giri",
        dept: "IT",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Soham Ahmed",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Rangan Daw",
        dept: "",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Production Head",
    mahabharat: "Rangbhoomi Nirmatas (Stage Creators)",
    members: [
      {
        name: "Rangan Daw",
        dept: "",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Sampurna Sarkar",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "PR Head",
    mahabharat: "Rajdoots (Royal Messengers)",
    members: [
      {
        name: "Abir Ganguly",
        dept: "CE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Shree Banerjee",
        dept: "ME",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Subhodeep Bera",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Sweta Pal",
        dept: "ME",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Social Media Head",
    mahabharat: "Varta Vahaks (News Carriers)",
    members: [
      {
        name: "Ankit Biswas",
        dept: "EE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Soham Ahmed Molla",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Rangan Daw",
        dept: "",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Aneek Karmakar",
        dept: "CE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Decoration Head",
    mahabharat: "Alankara Kalavidhas (Decoration Artists)",
    members: [
      {
        name: "Sitesh Kr. Saha",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Arunima Sarkar",
        dept: "CE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Hriday Basak",
        dept: "ME",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Kaushik Saha",
        dept: "ECE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    category: "Tshirt Distribution",
    mahabharat: "Vastra Vitaraks (Garment Distributors)",
    members: [
      {
        name: "Shounak Batabyal",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Sk. Momitul Haque",
        dept: "CSE",
        image: "/assets/team/default.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
];

// --- GLITCH HEADER COMPONENT ---
function GlitchHeader({ 
  normalText, 
  glitchText, 
  className = "" 
}: { 
  normalText: string; 
  glitchText: string; 
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <EncryptedText
          text={glitchText}
          className={`${cormorant.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600`}
          revealDelayMs={30}
          flipDelayMs={30}
          encryptedClassName="text-yellow-500/40"
          revealedClassName="text-yellow-400"
        />
      ) : (
        <h2 className={`${cormorant.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_0_25px_rgba(250,204,21,0.4)]`}>
          {normalText}
        </h2>
      )}
    </div>
  );
}

// --- CHIEF COORDINATOR CARD ---
function ChiefCoordinatorCard({ member, index }: { member: any; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="relative group">
        {/* Outer glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-yellow-600/40 via-orange-500/30 to-red-600/40 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-[#1a0f0a] via-[#2a1810] to-[#1a0f0a] rounded-2xl overflow-hidden border-2 border-yellow-600/30 group-hover:border-yellow-500/60 transition-all duration-500">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-500/60 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-500/60 rounded-br-2xl" />
          
          {/* Crown icon */}
          <div className="absolute top-4 right-4 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-md opacity-50 animate-pulse" />
              <Crown className="w-8 h-8 text-yellow-400 relative z-10" />
            </div>
          </div>

          {/* Image container */}
          <div className="relative h-80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-4">
            <div className="space-y-2">
              <h3 className={`${cinzel.className} text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]`}>
                {member.name}
              </h3>
              <p className={`${montserrat.className} text-yellow-600/80 text-sm uppercase tracking-widest`}>
                {member.role}
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-0 group-hover/social:opacity-50 transition-opacity" />
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center border border-pink-400/30 group-hover/social:border-pink-400 transition-all group-hover/social:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative"
              >
                <div className="absolute inset-0 bg-blue-500 blur-md opacity-0 group-hover/social:opacity-50 transition-opacity" />
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border border-blue-400/30 group-hover/social:border-blue-400 transition-all group-hover/social:scale-110">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

// --- REGULAR TEAM MEMBER CARD ---
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-[#1a0f0a] to-[#2a1810] rounded-xl overflow-hidden border border-yellow-700/30 group-hover:border-yellow-600/50 transition-all duration-500">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <div className="space-y-1">
              <h4 className={`${cinzel.className} text-xl font-bold text-yellow-300`}>
                {member.name}
              </h4>
              {member.dept && (
                <p className={`${montserrat.className} text-yellow-600/70 text-xs uppercase tracking-wider`}>
                  {member.dept}
                </p>
              )}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social"
              >
                <div className="w-9 h-9 rounded-md bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-pink-500/30 flex items-center justify-center group-hover/social:border-pink-500 group-hover/social:from-purple-600/40 group-hover/social:to-pink-600/40 transition-all">
                  <Instagram className="w-4 h-4 text-pink-400" />
                </div>
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social"
              >
                <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 flex items-center justify-center group-hover/social:border-blue-500 group-hover/social:from-blue-600/40 group-hover/social:to-blue-800/40 transition-all">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
              </a>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-yellow-500/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-yellow-500/40" />
        </div>
      </div>
    </motion.div>
  );
}

// --- MAIN TEAM PAGE ---
export default function TeamPage() {
  return (
    <div className={`relative min-h-screen w-full bg-black text-[#e0e0e0] overflow-x-hidden ${cinzel.className}`}>
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/home-bg.png"
            alt="Background"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-[14em]">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 border border-yellow-600/30 rounded-full px-4 py-1 mb-4 bg-black/40 backdrop-blur-md">
            <Swords size={14} className="text-yellow-500" />
            <span className={`${montserrat.className} text-xs uppercase tracking-widest text-yellow-500/80`}>
              The Warriors
            </span>
          </div>
<br/>
          <GlitchHeader
            normalText="Our Team"
            glitchText="Our Maharathis"
          />

          <p className={`${playfair.className} text-xl md:text-2xl text-gray-400 italic max-w-3xl mx-auto`}>
            The Faces Behind the Phenomenon: Presenting you the JECLAT 2K26 Core Team!
          </p>

          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />
        </motion.div>

        {/* Chief Coordinators */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GlitchHeader
              normalText="Supreme Commanders"
              glitchText="Sarathi Samrat"
              className="mb-4"
            />
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {chiefCoordinators.map((member, index) => (
              <ChiefCoordinatorCard key={index} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Social Secretaries */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GlitchHeader
              normalText="Social Secretaries"
              glitchText="Samaj Sachivas"
              className="mb-4"
            />
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {socialSecretaries.map((member, index) => (
              <ChiefCoordinatorCard key={index} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Team Categories */}
        {teams.map((team, teamIndex) => (
          <section key={teamIndex} className="mb-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <GlitchHeader
                normalText={team.category}
                glitchText={team.mahabharat}
                className="mb-4"
              />
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-600 to-transparent" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.members.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
          </section>
        ))}

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 space-y-4"
        >
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mb-8" />
          <p className={`${playfair.className} text-2xl md:text-3xl text-yellow-400/80 italic max-w-3xl mx-auto`}>
            "Together, we write the epic of JECLAT 2K26"
          </p>
          <div className="inline-flex items-center gap-2 text-yellow-600/60">
            <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
            <span className={`${montserrat.className} text-sm tracking-widest`}>
              Jai JECLAT
            </span>
            <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}