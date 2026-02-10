"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Cinzel } from "next/font/google";
import { Crown, Menu, X } from "lucide-react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });

/* ---------------- Animation Variants ---------------- */

const navContainerVariants: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.3,
		},
	},
};

const navItemVariants: Variants= {
	hidden: { opacity: 0, y: 20, scale: 0.9 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 12,
		},
	},
};

/* ---------------- Navbar ---------------- */

const Navbar = () => {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Events", href: "/events", img: "/assets/nav/EventIcon.png" },
		{ name: "Socials", href: "/socials", img: "/assets/nav/SocialIcon.png" },
		{ name: "Memories", href: "/memories", img: "/assets/nav/MemoriesIcon.png" },
		{ name: "Team", href: "/team", img: "/assets/nav/TeamIcon.png" },
		{ name: "Elementary", href: "/elementary", img: "/assets/nav/ElementaryIcon.png" },
		{ name: "Contact", href: "/contact", img: "/assets/nav/ContactIcon.png" },
	];

	return (
		<nav className="fixed top-6 left-0 right-0 flex flex-col items-center justify-center px-4 z-50">
			{/* Crown Ornament */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.2, ease: "easeOut", delay: 2 }}
				className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-5 w-full max-w-[90rem] items-center justify-center gap-6 z-0 pointer-events-none"
			>
				<div className="relative">
					<motion.div
						animate={{
							opacity: scrolled ? [0.4, 0.9, 0.4] : [0.2, 0.5, 0.2],
							scale: scrolled ? 1.25 : 1,
						}}
						transition={{ repeat: Infinity, duration: 3 }}
						className="absolute inset-0 bg-yellow-200 blur-2xl rounded-full"
					/>
					<Crown
						size={40}
						strokeWidth={1}
						className={`relative transition-all duration-700 ${
							scrolled
								? "text-yellow-400 drop-shadow-[0_0_15px_#facc15]"
								: "text-yellow-500/40"
						}`}
					/>
				</div>
			</motion.div>

			{/* Main Navbar */}
			<motion.div
				animate={{
					backgroundColor: scrolled
						? "rgba(10, 5, 2, 0.6)"
						: "rgba(10, 5, 2, 0.4)",
					backdropFilter: "blur(8px)",
					borderColor: scrolled
						? "rgba(213, 190, 137, 0.5)"
						: "rgba(213, 190, 137, 0.2)",
				}}
				className="relative flex items-center justify-between lg:justify-center px-5 lg:px-8 rounded-full border transition-all duration-700 w-full md:max-w-xl lg:max-w-6xl h-16 lg:h-20 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
			>
				{/* Left Desktop Items */}
				<motion.div
					className="hidden lg:flex items-center gap-8 relative z-10 w-full justify-end"
					variants={navContainerVariants}
					initial="hidden"
					animate="show"
				>
					{navItems.slice(0, 3).map((item) => (
						<PersistentNavItem
							key={item.name}
							item={item}
							isActive={pathname === item.href}
						/>
					))}
				</motion.div>

				{/* Center Logo */}
				<Link href="/" className="flex items-center gap-3 relative z-20 lg:mx-10 shrink-0">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="w-12 h-12 lg:w-28 lg:h-28 relative"
					>
						<Image
							src="/assets/logo.png"
							alt="Logo"
							fill
							priority
							className="object-contain contrast-125 brightness-110 drop-shadow-[0_0_15px_rgba(213,190,137,0.4)]"
						/>
					</motion.div>
				</Link>

				{/* Right Desktop Items */}
				<motion.div
					className="hidden lg:flex items-center gap-8 relative z-10 w-full justify-start"
					variants={navContainerVariants}
					initial="hidden"
					animate="show"
				>
					{navItems.slice(3).map((item) => (
						<PersistentNavItem
							key={item.name}
							item={item}
							isActive={pathname === item.href}
						/>
					))}
				</motion.div>

				{/* Mobile Hamburger */}
				<button
					className="lg:hidden z-30 text-[#d5be89] p-2"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Mobile Dropdown */}
				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="absolute top-[115%] left-0 right-0 bg-[#0a0502]/95 border border-[#d5be89]/30 backdrop-blur-2xl rounded-[2rem] p-8 lg:hidden shadow-2xl grid grid-cols-3 gap-6"
						>
							<motion.div
								className="contents"
								variants={navContainerVariants}
								initial="hidden"
								animate="show"
							>
								{navItems.map((item) => (
									<motion.div key={item.name} variants={navItemVariants}>
										<Link
											href={item.href}
											onClick={() => setMobileMenuOpen(false)}
											className="flex flex-col items-center gap-2"
										>
											<div
												className={`relative w-10 h-10 transition-all duration-500 ${
													pathname === item.href
														? "brightness-110 drop-shadow-[0_0_12px_#d5be89]"
														: "brightness-75 opacity-70"
												}`}
											>
												<Image
													src={item.img}
													alt={item.name}
													fill
													className="object-contain"
												/>
											</div>
											<span
												className={`${cinzel.className} text-[7px] tracking-widest text-[#d5be89] uppercase text-center`}
											>
												{item.name}
											</span>
										</Link>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</nav>
	);
};

/* ---------------- Nav Item ---------------- */

const PersistentNavItem = ({
	item,
	isActive,
}: {
	item: any;
	isActive: boolean;
}) => {
	return (
		<motion.div variants={navItemVariants}>
			<Link
				href={item.href}
				className="group relative flex flex-col items-center justify-center w-24 h-full shrink-0"
			>
				<motion.div
					className="relative z-10 flex flex-col items-center gap-1"
					whileHover={{ y: -4 }}
				>
					<div
						className={`relative w-12 h-12 transition-all duration-500 ${
							isActive
								? "brightness-100 saturate-110 contrast-125 drop-shadow-[0_0_18px_rgba(213,190,137,0.8)] scale-110"
								: "brightness-80 contrast-100 group-hover:brightness-130"
						}`}
					>
						<Image src={item.img} alt={item.name} fill className="object-contain" />
					</div>
					<span
						className={`${cinzel.className} text-[10px] tracking-[0.1em] text-center transition-all duration-300 ${
							isActive
								? "text-[#f3e2b9] drop-shadow-[0_0_8px_#d5be89]"
								: "text-[#d5be89]/70 group-hover:text-[#f3e2b9]"
						}`}
					>
						{item.name}
					</span>
				</motion.div>

				{isActive && (
					<motion.div
						layoutId="persistent-active-spark"
						className="absolute -bottom-2 w-10 h-[2px] bg-gradient-to-r from-transparent via-[#d5be89] to-transparent shadow-[0_0_10px_#d5be89]"
					/>
				)}
			</Link>
		</motion.div>
	);
};

export default Navbar;
