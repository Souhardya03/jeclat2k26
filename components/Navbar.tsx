"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import this
import { motion } from "framer-motion";
import { Cinzel, Murecho } from "next/font/google";

import {
	Swords,
	Share2,
	Image as ImageIcon,
	Shield,
	Sparkles,
	Mail,
	Menu,
	X,
	Crown,
} from "lucide-react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const murecho = Murecho({ subsets: ["latin"], weight: ["700"] });

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname(); // Get current path

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Events", href: "/events", icon: <Swords size={18} /> },
		{ name: "Socials", href: "/socials", icon: <Share2 size={18} /> },
		{ name: "Memories", href: "/memories", icon: <ImageIcon size={18} /> },
		// Center Logo is index 3
		{ name: "Team", href: "/team", icon: <Shield size={18} /> },
		{ name: "Elementary", href: "/elementary", icon: <Sparkles size={18} /> },
		{ name: "Contact", href: "/contact", icon: <Mail size={18} /> },
	];

	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 0.2 }}
				className="flex md:fixed md:-top-[33.8em] absolute inset-0 z-10 left-0 w-full items-center justify-center gap-4  my-4 text-yellow-500/80">
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="h-[1px] w-12 md:w-32 bg-gradient-to-r from-transparent to-yellow-500 origin-right"></motion.div>
				<Crown
					size={32}
					strokeWidth={1.5}
					className="drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
				/>
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="h-[1px] w-12 md:w-32 bg-gradient-to-l from-transparent to-yellow-500 origin-left"></motion.div>
			</motion.div>
			<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
				<div
					className={`hidden lg:flex items-center justify-center w-full max-w-7xl mx-auto rounded-full border transition-all duration-500 relative overflow-visible h-20
          ${
						scrolled
							? "bg-[#0a0502]/80 backdrop-blur-sm border-yellow-600/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
							: "bg-[#0a0502]/50 backdrop-blur-md border-white/10 shadow-none"
					}`}>
					<div className="absolute inset-0 rounded-full bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
					<div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

					{/* --- LEFT ITEMS --- */}
					<div className="flex-1 flex justify-end gap-1 pr-12">
						{navItems.slice(0, 3).map((item) => (
							<NavItem
								key={item.name}
								item={item}
								isActive={pathname === item.href} // Pass active state
							/>
						))}
					</div>

					{/* --- CENTER LOGO --- */}
					<div className="relative z-10 -mt-4 group cursor-pointer">
						<Link href="/">
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-yellow-600/20 blur-[30px] rounded-full group-hover:bg-yellow-500/40 transition-all duration-500"></div>
							<div className="relative flex flex-col items-center">
								<div className="w-28 h-24 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
									<Image
										src="/assets/logo.png"
										alt="JECLAT"
										width={120}
										height={120}
										className="object-contain"
									/>
								</div>
							</div>
						</Link>
					</div>

					{/* --- RIGHT ITEMS --- */}
					<div className="flex-1 flex justify-start gap-1 pl-12">
						{navItems.slice(3).map((item) => (
							<NavItem
								key={item.name}
								item={item}
								isActive={pathname === item.href} // Pass active state
							/>
						))}
					</div>
				</div>

				{/* MOBILE BAR */}
				<div
					className={`lg:hidden flex items-center justify-between px-6 h-16 w-full max-w-md mx-auto rounded-full bg-[#0a0502]/90 backdrop-blur-xl border border-yellow-900/50 shadow-2xl transition-all duration-500 ${scrolled ? "translate-y-0" : "translate-y-2"}`}>
					<div className="flex gap-3 items-center">
						<Link href="/">
							<Image
								src="/assets/logo.png"
								alt="Logo"
								width={40}
								height={40}
								className="drop-shadow-glow"
							/>
						</Link>
						<Link href="/">
							<Image
								src="/assets/jeclatfont.svg"
								alt="Logo"
								width={120}
								height={120}
								className="drop-shadow-glow"
							/>
						</Link>
					</div>
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="text-yellow-500 hover:text-yellow-300 transition-colors">
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* MOBILE MENU DROPDOWN */}
				<motion.div
					initial={false}
					animate={mobileMenuOpen ? "open" : "closed"}
					variants={{
						open: { opacity: 1, scale: 1, y: 0, display: "block" },
						closed: {
							opacity: 0,
							scale: 0.95,
							y: -20,
							transitionEnd: { display: "none" },
						},
					}}
					className="absolute top-24 left-4 right-4 max-w-md mx-auto bg-[#0a0502]/95 backdrop-blur-xl border border-yellow-900/50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] lg:hidden z-40">
					<div className="flex flex-col p-4 gap-2">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setMobileMenuOpen(false)}>
								<div
									className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${pathname === item.href ? "bg-white/10 border-yellow-500/40 text-yellow-300" : "text-yellow-100/80 border-transparent hover:bg-white/5"}`}>
									<span
										className={
											pathname === item.href
												? "text-yellow-400"
												: "text-yellow-500"
										}>
										{item.icon}
									</span>
									<span
										className={`${murecho.className} tracking-widest text-sm`}>
										{item.name}
									</span>
								</div>
							</Link>
						))}
					</div>
				</motion.div>
			</nav>
		</>
	);
};

// --- NAV ITEM COMPONENT ---
const NavItem = ({
	item,
	isActive,
}: {
	item: { name: string; href: string; icon: any };
	isActive: boolean;
}) => {
	return (
		<Link
			href={item.href}
			className="group relative px-6 py-2">
			<div className="flex flex-col items-center gap-1 relative z-10">
				{/* Icon logic: brighter if active */}
				<div
					className={`transition-colors duration-300 transform group-hover:scale-110 drop-shadow-md ${isActive ? "text-yellow-300 scale-110" : "text-yellow-600/70 group-hover:text-yellow-300"}`}>
					{item.icon}
				</div>

				{/* Label logic: brighter if active */}
				<span
					className={`${murecho.className} text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${isActive ? "text-yellow-100" : "text-yellow-700/80 group-hover:text-yellow-100"}`}>
					{item.name}
				</span>
			</div>

			{/* Permanent Spotlight for Active, or Hover for Inactive */}
			<div
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500/10 blur-xl rounded-full transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></div>

			{/* Optional: Small gold indicator dot below active link */}
			{isActive && (
				<motion.div
					layoutId="nav-underline"
					className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full shadow-[0_0_8px_gold]"
				/>
			)}
		</Link>
	);
};

export default Navbar;
