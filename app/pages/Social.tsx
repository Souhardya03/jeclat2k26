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
	Libre_Barcode_128,
	Space_Mono,
} from "next/font/google";
import { Ticket, Star, MapPin } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { pastPerformers } from "@/data/socialData";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "700"],
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
const barcode = Libre_Barcode_128({ subsets: ["latin"], weight: ["400"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });




function GoldenTicketCard({ data, index }: { data: any; index: number }) {
	const isLeft = index % 2 === 0;

	return (
		<div
			className={`flex flex-col lg:flex-row items-center w-full mb-10 lg:mb-0 relative ${isLeft ? "lg:flex-row-reverse" : ""}`}>
			{/* --- TIMELINE CONNECTOR (Desktop) --- */}
			<div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFD700] rounded-full border-[3px] border-[#0a0a0a] z-30 shadow-[0_0_25px_rgba(255,215,0,0.8)]"></div>
			<div
				className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[1px] w-16 z-0 ${isLeft ? "right-1/2 bg-gradient-to-l from-[#FFD700] via-[#FFD700]/40 to-transparent" : "left-1/2 bg-gradient-to-r from-[#FFD700] via-[#FFD700]/40 to-transparent"}`}></div>

			<div className="hidden lg:block w-1/2"></div>

			{/* --- THE TICKET --- */}
			<motion.div
				initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-12">
				<div className="group w-full max-w-[550px] mx-auto cursor-default perspective-1000">
					{/* Fixed Height for mobile, auto-scaling for larger */}
					<div className="relative flex h-[180px] sm:h-[220px] md:h-[240px] rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.2)] bg-[#0a0a0a]">
						{/* --- LEFT STUB --- */}
						<div className="relative w-16 sm:w-20 md:w-24 bg-[#c68018] flex flex-col items-center justify-center z-20 overflow-hidden border-r-2 border-dashed border-black/20">
							<div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] mix-blend-multiply pointer-events-none"></div>

							{/* Reduced font size for mobile years */}
							<h2
								className={`${cinzel.className} text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] -rotate-90 tracking-[0.1em] drop-shadow-sm whitespace-nowrap`}>
								{data.year}
							</h2>

							{/* Scaled notches */}
							<div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#020202] rounded-full z-40"></div>
							<div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#020202] rounded-full z-40"></div>
						</div>

						{/* --- RIGHT PASS --- */}
						<div className="relative flex-1 bg-[#0c0c0c] overflow-hidden">
							<div className="absolute inset-0 z-0">
								<Image
									src={data.image}
									alt={data.artist}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.2] brightness-[0.7] group-hover:brightness-100"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
							</div>

							<div className="absolute inset-0 z-30 p-3 sm:p-5 md:p-6 flex flex-col justify-between">
								{/* Top Bar */}
								<div className="flex justify-between items-start border-b border-white/10 pb-1 sm:pb-2">
									<div className="flex flex-col">
										<span
											className={`${mono.className} text-[7px] sm:text-[9px] text-[#FFD700] tracking-widest`}>
											ADMIT ONE
										</span>
										<span
											className={`${montserrat.className} text-[8px] sm:text-[10px] font-bold text-white/70 tracking-wider`}>
											{data.ticketNo}
										</span>
									</div>
									<div className="hidden sm:flex gap-4 text-[9px] text-white/50 font-mono">
										<div className="flex flex-col items-end">
											<span className="text-[#FFD700]">LOCATION</span>
											<span>OVAL</span>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-[#FFD700]">TIME</span>
											<span>18:00</span>
										</div>
									</div>
								</div>

								{/* Middle: Artist Info */}
								<div className="flex flex-col justify-center h-full">
									<span
										className={`${rajdhani.className} text-[8px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-0.5 sm:mb-1 flex items-center gap-1.5`}>
										<Star
											size={8}
											className="sm:w-[10px]"
											fill="#FFD700"
										/>{" "}
										{data.genre}
									</span>
									<h3
										className={`${cinzel.className} text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-[#FFD700] transition-colors duration-300 drop-shadow-md line-clamp-2`}>
										{data.artist}
									</h3>
								</div>

								{/* Bottom */}
								<div className="flex justify-between items-end">
									<div className="flex flex-col gap-0.5 sm:gap-1">
										<div className="flex items-center gap-1 text-white/40">
											<MapPin
												size={8}
												className="sm:w-[10px]"
											/>
											<span
												className={`${rajdhani.className} text-[8px] sm:text-[10px] uppercase tracking-widest font-bold`}>
												JGEC Grounds
											</span>
										</div>
										<div
											className={`${mono.className} text-[7px] sm:text-[8px] text-white/20 tracking-tighter sm:tracking-widest`}>
											NON-TRANSFERABLE
										</div>
									</div>

									{/* Responsive Barcode: Hide on very small screens or shrink */}
									<div
										className={`${barcode.className} text-2xl sm:text-3xl md:text-4xl text-white/40 select-none whitespace-nowrap`}>
										{data.year}
									</div>
								</div>
							</div>
						</div>
						<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-50"></div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

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
			className="relative inline-block cursor-default"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{isHovered ? (
				<EncryptedText
					text={glitchText}
					className={`${cormorant.className} text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFD700]`}
					revealDelayMs={30}
					encryptedClassName="text-[#FFD700]/40"
					revealedClassName="text-[#FFD700]"
				/>
			) : (
				<h2
					className={`${cormorant.className} text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] drop-shadow-[0_0_15px_rgba(253,185,49,0.3)]`}>
					{normalText}
				</h2>
			)}
		</div>
	);
}

export default function SocialNightPage() {
	return (
		<div
			className={`relative min-h-screen w-full bg-[#020202] text-[#e0e0e0] overflow-x-hidden ${cinzel.className}`}>
			<div className="fixed bg-black inset-0 z-0 overflow-hidden pointer-events-none">
				<Image
					src="/assets/home-bg.png"
					alt="Background"
					fill
					priority
					className="object-cover brightness-[0.2] blur-sm"
				/>
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 sm:opacity-20"></div>
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-[8em] md:pt-[12em]">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-center mb-16 md:mb-32 space-y-4 md:space-y-6">
					<div className="inline-flex items-center gap-2 border border-[#FFD700]/30 rounded-full px-4 py-1.5 bg-black/40 backdrop-blur-md">
						<Ticket
							size={12}
							className="text-[#FFD700]"
						/>
						<span
							className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] font-bold text-[#FFD700]/90`}>
							Official Archives
						</span>
					</div>
					<br />
					<GlitchHeader
						normalText="SOCIAL NIGHT"
						glitchText="EUPHORIA"
					/>
					<p
						className={`${playfair.className} text-lg md:text-2xl text-gray-400 italic max-w-lg mx-auto px-4`}>
						"Every ticket tells a story. Every night became a legend."
					</p>
					<div className="h-px w-32 md:w-64 mx-auto bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mt-6" />
				</motion.div>

				{/* Timeline Grid */}
				<div className="relative">
					<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FFD700]/90 to-transparent -translate-x-1/2 hidden lg:block"></div>
					<div className="space-y-6 lg:space-y-0">
						{pastPerformers.map((data, index) => (
							<GoldenTicketCard
								key={index}
								data={data}
								index={index}
							/>
						))}
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-center mt-20 md:mt-32">
					<div className="flex justify-center gap-2 text-[#FFD700]/40 mb-4">
						<Star
							size={12}
							fill="currentColor"
						/>
						<Star
							size={12}
							fill="currentColor"
						/>
						<Star
							size={12}
							fill="currentColor"
						/>
					</div>
					<p
						className={`${rajdhani.className} text-gray-500 uppercase tracking-[0.2em] text-xs sm:text-sm`}>
						The stage is set for 2K26
					</p>
				</motion.div>
			</div>
		</div>
	);
}
