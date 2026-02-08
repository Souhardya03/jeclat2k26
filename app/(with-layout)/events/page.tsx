"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import { Cinzel, Montserrat, Cormorant_SC, Space_Mono } from "next/font/google";
import {
	Sparkles,
	Swords,
	Flame,
	Shield,
	Feather,
	Sun,
	Moon,
	ScrollText,
} from "lucide-react";
import { eventData } from "@/data/eventData";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});
const cormorant = Cormorant_SC({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

// --- CONFIG ---
const preEvents = eventData.filter((e) => e.type === "pre-event");
const mainEvents = eventData.filter((e) => e.type !== "pre-event");

const schedule = {
	prelude: preEvents,
	day1: mainEvents.slice(0, 3),
	day2: mainEvents.slice(3, 6),
	day3: mainEvents.slice(6, 9),
	day4: mainEvents.slice(9, 12),
	day5: mainEvents.slice(12, 16),
	day6: mainEvents.slice(16),
};

const parvas = [
	{
		id: "prelude",
		label: "AARAMBH",
		sanskrit: "आरम्भ",
		sub: "The Prelude",
		icon: Feather,
		color: "#FFD700",
	},
	{
		id: "day1",
		label: "PRATHAM",
		sanskrit: "प्रथम",
		sub: "Day 01",
		icon: Sparkles,
		color: "#C68018",
	},
	{
		id: "day2",
		label: "DWITIYA",
		sanskrit: "द्वितीय",
		sub: "Day 02",
		icon: Swords,
		color: "#E65100",
	},
	{
		id: "day3",
		label: "TRITIYA",
		sanskrit: "तृतीय",
		sub: "Day 03",
		icon: Shield,
		color: "#D32F2F",
	},
	{
		id: "day4",
		label: "CHATURTHA",
		sanskrit: "चतुर्थ",
		sub: "Day 04",
		icon: Sun,
		color: "#7B1FA2",
	},
	{
		id: "day5",
		label: "PANCHAMA",
		sanskrit: "पंचम",
		sub: "Day 05",
		icon: Moon,
		color: "#00897B",
	},
	{
		id: "day6",
		label: "ANTIM",
		sanskrit: "अंतिम",
		sub: "The Finale",
		icon: Flame,
		color: "#E5E4E2",
	},
];

// --- 3D TILT CARD COMPONENT ---
function TiltCard({ event, color }: { event: any; color: string }) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
	const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
	const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "200%"]);
	const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "200%"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		x.set((e.clientX - rect.left) / width - 0.5);
		y.set((e.clientY - rect.top) / height - 0.5);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<Link href={`/events/${event.id}`}>
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
				initial={{ opacity: 0, scale: 0.9, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative h-[420px] w-full cursor-pointer group perspective-1000">
				<div
					style={{
						transform: "translateZ(20px)",
						transformStyle: "preserve-3d",
					}}
					className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
					<Image
						src={event.image}
						alt={event.eventInfo.title}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.6] group-hover:brightness-90 sepia-[0.2] group-hover:sepia-0"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
					<div
						className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
						style={{ backgroundColor: color }}></div>

					<div
						className="absolute inset-0 p-8 flex flex-col justify-end"
						style={{ transform: "translateZ(60px)" }}>
						<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
							<span
								className={`${mono.className} text-[10px] text-white/70 uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md`}>
								{event.type.replace("-", " ")}
							</span>
							<h3
								className={`${cinzel.className} text-3xl font-black text-white mt-4 mb-2 leading-none drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all`}>
								{event.eventInfo.title}
							</h3>
							<div
								className="h-1 rounded-full transition-all duration-500 w-12 group-hover:w-full mt-4"
								style={{ backgroundColor: color }}></div>
						</div>
					</div>

					<motion.div
						className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none z-20"
						style={{
							background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.8), transparent 50%)`,
						}}
					/>
				</div>
				<div
					className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl -z-10"
					style={{ backgroundColor: color }}></div>
			</motion.div>
		</Link>
	);
}

// --- MAIN PAGE ---
export default function EventsPage() {
	const [activeTab, setActiveTab] = useState("prelude");
	const currentParva = parvas.find((p) => p.id === activeTab) || parvas[0];
	const currentEvents = schedule[activeTab as keyof typeof schedule] || [];

	return (
		<div
			className={`relative min-h-screen w-full bg-[#020202] text-[#e0e0e0] overflow-x-hidden ${montserrat.className}`}>
			{/* Background */}
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

			<div className="relative z-10 w-full min-h-screen pt-32 pb-20 flex flex-col items-center">
				{/* Header */}
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-10 px-4">
					<span
						className={`${cormorant.className} text-sm md:text-lg tracking-[0.6em] font-bold uppercase block mb-4`}
						style={{ color: currentParva.color }}>
						{currentParva.sub}
					</span>
					<h1
						className={`${cinzel.className} text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 opacity-80 tracking-tighter`}>
						{currentParva.sanskrit}
					</h1>
				</motion.div>

				{/* Tabs */}
				<div className="sticky top-24 z-10 w-full max-w-5xl px-4 mb-16">
					<div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
						<div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-2 md:gap-4">
							{parvas.map((parva) => {
								const isActive = activeTab === parva.id;
								return (
									<button
										key={parva.id}
										onClick={() => setActiveTab(parva.id)}
										className={`relative flex-1 group flex flex-col items-center gap-2 min-w-[80px] py-4 rounded-xl transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}>
										<div
											className={`transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}
											style={{ color: isActive ? parva.color : undefined }}>
											<parva.icon size={20} />
										</div>
										<span
											className={`${mono.className} text-[10px] tracking-widest font-bold uppercase ${isActive ? "text-white" : "text-white/30"}`}>
											{parva.label}
										</span>
										{isActive && (
											<motion.div
												layoutId="active-glow"
												className="absolute inset-0 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
												transition={{
													type: "spring",
													bounce: 0.2,
													duration: 0.6,
												}}
											/>
										)}
									</button>
								);
							})}
						</div>
					</div>
				</div>

				{/* Grid */}
				<div className="w-full max-w-[1400px] px-6 md:px-10">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -40 }}
							transition={{ duration: 0.5, staggerChildren: 0.1 }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
							{currentEvents.map((event: any, index: number) => (
								<TiltCard
									key={index}
									event={event}
									color={currentParva.color}
								/>
							))}
							{currentEvents.length === 0 && (
								<div className="col-span-full py-32 text-center opacity-40">
									<ScrollText
										size={64}
										className="mx-auto mb-6"
										style={{ color: currentParva.color }}
									/>
									<p className={`${cinzel.className} text-2xl text-white`}>
										The prophecy for this day is silent.
									</p>
								</div>
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
