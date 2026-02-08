"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Cinzel,
    Montserrat,
    Cormorant_SC,
    Rajdhani,
    Playfair_Display,
} from "next/font/google";
import { Instagram, Linkedin, Crown, Swords, Shield, Zap } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { chiefCoordinators, socialSecretaries, teams } from "@/data/teamData";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["italic", "normal"],
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "700"] });
const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});



function CinematicLeaderCard({
    member,
    index,
}: {
    member: any;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group relative w-full max-w-sm mx-auto h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
            {/* 1. ROTATING BORDER - Mobile: Opacity 30%, Desktop: Opacity 0 -> 100 on hover */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#eab308_180deg,#fef08a_220deg,#eab308_260deg,transparent_260deg)] animate-[spin_4s_linear_infinite] opacity-30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* 2. INNER MASK */}
            <div className="absolute inset-[3px] bg-[#050505] rounded-2xl z-10 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                {/* Ornate Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-500/50 rounded-tl-lg z-20"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-500/50 rounded-tr-lg z-20"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500/50 rounded-bl-lg z-20"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-500/50 rounded-br-lg z-20"></div>

                {/* Glass Panel Content */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 border-yellow-500/30 lg:border-white/10 lg:group-hover:border-yellow-500/50 bg-black/60 lg:bg-white/5 lg:group-hover:bg-black/80">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex flex-col">
                                <span
                                    className={`${rajdhani.className} text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-1 flex items-center gap-2`}>
                                    <Crown
                                        size={12}
                                        fill="currentColor"
                                    />{" "}
                                    {member.role}
                                </span>
                                <h3
                                    className={`${cinzel.className} text-2xl font-bold text-white leading-tight group-hover:text-yellow-100 transition-colors`}>
                                    {member.name}
                                </h3>
                            </div>
                        </div>

                        <div className="w-full h-px bg-white/10 my-4 bg-gradient-to-r from-yellow-500 to-transparent lg:bg-white/10 lg:group-hover:bg-gradient-to-r transition-all duration-500"></div>

                        <div className="flex items-center gap-4">
                            <a
                                href={member.instagram}
                                target="_blank"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-600 hover:text-black text-white lg:text-gray-300 transition-all duration-300 border border-yellow-400 lg:border-transparent lg:hover:border-yellow-400">
                                <Instagram size={18} />
                            </a>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white text-white lg:text-gray-300 transition-all duration-300 border border-blue-400 lg:border-transparent lg:hover:border-blue-400">
                                <Linkedin size={18} />
                            </a>
                            <div className="ml-auto">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-900/30 to-black border border-yellow-600/30 lg:border-yellow-600/30 lg:group-hover:border-yellow-500/60 shadow-lg transition-all duration-300">
                                    <Shield
                                        size={10}
                                        className="text-yellow-400 fill-yellow-400/20"
                                    />
                                    <span
                                        className={`${montserrat.className} text-[10px] font-bold text-yellow-100 uppercase tracking-widest`}>
                                        {member.dept || "CORE"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function RegalMemberCard({ member, index }: { member: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative w-full h-[400px] rounded-xl bg-[#0a0a0a]">
            {/* Border Glow Animation - Active on Mobile / Hover on Desktop */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent from-yellow-500 via-yellow-300 to-yellow-500 opacity-30 lg:from-white/10 lg:to-transparent lg:opacity-50 lg:group-hover:from-yellow-500 lg:group-hover:via-yellow-300 lg:group-hover:to-yellow-500 lg:group-hover:opacity-100 rounded-xl transition-all duration-500 lg:group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"></div>

            {/* Main Card */}
            <div className="absolute inset-[1px] rounded-xl overflow-hidden bg-[#0a0a0a] z-10">
                {/* Image */}
                <div className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 lg:group-hover:scale-110 filter sepia-[0.2] lg:sepia-[0.2] lg:group-hover:sepia-0"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>

                {/* Dept Ribbon (Top Right) */}
                {member.dept && (
                    <div className="absolute top-0 right-4 z-20">
                        <div className="bg-yellow-600 w-8 h-10 flex items-center justify-center shadow-lg transform translate-y-0 lg:-translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 border-x border-b border-yellow-300/50">
                            <div
                                className="absolute bottom-[-6px] left-0 w-full h-[6px] bg-yellow-600"
                                style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}></div>
                            <span
                                className={`${rajdhani.className} text-[10px] font-bold text-black uppercase -rotate-90`}>
                                {member.dept}
                            </span>
                        </div>
                    </div>
                )}

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                    {/* Decorative Top Line */}
                    <div className="w-8 h-0.5 bg-yellow-500 mb-3 w-full lg:w-8 lg:group-hover:w-full transition-all duration-500 ease-out"></div>

                    {/* Name */}
                    <h4
                        className={`${cinzel.className} text-xl font-bold text-yellow-100 lg:text-white lg:group-hover:text-yellow-100 mb-1 transition-colors drop-shadow-md`}>
                        {member.name}
                    </h4>

                    {/* Hidden Socials & Title - VISIBLE on Mobile, HIDDEN on Desktop until hover */}
                    <div className="flex justify-between items-end overflow-hidden h-10 lg:h-6 lg:group-hover:h-10 transition-all duration-500">
                        <p
                            className={`${montserrat.className} text-xs text-gray-400 uppercase tracking-widest opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 absolute`}>
                            Core Member
                        </p>

                        {/* Socials Container: TranslateY removed on Mobile */}
                        <div className="flex gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 delay-75">
                            <a
                                href={member.instagram}
                                target="_blank"
                                className="text-white lg:text-gray-400 lg:hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                className="text-white lg:text-gray-400 lg:hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// --- GLITCH HEADER ---
function GlitchHeader({
    normalText,
    glitchText,
}: {
    normalText: string;
    glitchText: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="relative inline-block cursor-default px-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? (
                <EncryptedText
                    text={glitchText}
                    className={`${cormorant.className} text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 tracking-tight sm:tracking-normal`}
                    revealDelayMs={30}
                    encryptedClassName="text-yellow-500/40"
                    revealedClassName="text-yellow-400"
                />
            ) : (
                <h2
                    className={`${cormorant.className} text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_0_25px_rgba(250,204,21,0.4)] tracking-tight sm:tracking-normal`}>
                    {normalText}
                </h2>
            )}
        </div>
    );
}

export default function TeamPage() {
    return (
        <div
            className={`relative min-h-screen w-full  bg-[#020202] text-[#e0e0e0] overflow-x-hidden ${cinzel.className}`}>
            {/* Background */}
            <div className="fixed bg-black inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                    src="/assets/home-bg.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover brightness-25 blur-sm"
                />

                {/* Texture Overlay (Stays constant) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse-slow"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-[12em]">
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 border border-yellow-600/30 rounded-full px-5 py-2 mb-4 bg-black/40 backdrop-blur-md">
                        <Swords
                            size={14}
                            className="text-yellow-500"
                        />
                        <span
                            className={`${montserrat.className} text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold text-yellow-500/80`}>
                            The Warriors
                        </span>
                    </div>
                    <br />
                    <GlitchHeader
                        normalText="OUR TEAM"
                        glitchText="MAHARATHIS"
                    />
                    <p
                        className={`${playfair.className} text-lg sm:text-xl md:text-2xl text-gray-400 italic max-w-3xl mx-auto mt-4 px-4`}>
                        "The Faces Behind the Phenomenon: Presenting you the JECLAT 2K26
                        Core Team!"
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mt-8" />
                </motion.div>

                {/* Chief Coordinators */}
                <section className="mb-32">
                    <div className="text-center mb-16 px-4">
                        <h3
                            className={`${rajdhani.className} text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.1em] sm:tracking-[0.2em] text-yellow-500 font-bold`}>
                            Supreme Commanders
                        </h3>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900 rounded-full mt-4 opacity-50"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {chiefCoordinators.map((member, index) => (
                            <CinematicLeaderCard
                                key={index}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Social Secretaries */}
                <section className="mb-32">
                    <div className="text-center mb-16 px-4">
                        <h3
                            className={`${rajdhani.className} text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.1em] sm:tracking-[0.2em] text-yellow-500 font-bold`}>
                            Social Secretaries
                        </h3>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900 rounded-full mt-4 opacity-50"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {socialSecretaries.map((member, index) => (
                            <CinematicLeaderCard
                                key={index}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Team Categories */}
                {teams.map((team, teamIndex) => (
                    <section
                        key={teamIndex}
                        className="mb-32">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8 pl-4 border-l-2 sm:border-l-4 border-yellow-600">
                            <h3
                                className={`${cormorant.className} text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-none`}>
                                {team.category}
                            </h3>
                            <p
                                className={`${rajdhani.className} text-[10px] sm:text-sm text-yellow-600 uppercase tracking-[0.15em] sm:mt-2`}>
                                // {team.mahabharat}
                            </p>
                        </div>

                        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3/4 col desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {team.members.map((member, index) => (
                                <RegalMemberCard
                                    key={index}
                                    member={member}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                ))}

                {/* Closing Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-32 space-y-4 px-4">
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mb-8" />
                    <p
                        className={`${playfair.className} text-lg sm:text-2xl md:text-3xl text-yellow-400/80 italic max-w-3xl mx-auto`}>
                        "Together, we write the epic of JECLAT 2K26"
                    </p>
                    <div className="inline-flex items-center gap-2 text-yellow-600/60">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
                        <span className={`${montserrat.className} text-xs sm:text-sm tracking-widest`}>
                            Jai JECLAT
                        </span>
                        <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}