"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Cinzel } from "next/font/google";
import { Crown, Menu, X } from "lucide-react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });

/* ---------------- Cinematic & Fluid Variants ---------------- */

const capsuleVariants: Variants = {
    hidden: { 
        width: "40%", 
        opacity: 0, 
        y: -20,
        filter: "blur(10px)" 
    },
    show: { 
        width: "100%", 
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            staggerChildren: 0.08
        }
    }
};

const navItemVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 10, 
        scale: 0.9,
        filter: "blur(4px)" 
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
    },
};

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
            
            {/* 1. Login Emblem */}
            <motion.div 
                initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="absolute right-6 lg:right-24 top-0 lg:flex hidden items-center h-16 lg:h-20"
            >
                <Link href="/login">
                    <motion.div className="relative z-10 flex flex-col items-center gap-1 group" whileHover={{ y: -4 }}>
                        <motion.div 
                            className="absolute w-14 h-14 bg-[#d5be89]/20 blur-xl rounded-full"
                            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        />
                        <Image src="/assets/nav/login.png" alt="login" width={48} height={48} className="object-contain" />
                        <span className={`${cinzel.className} text-[10px] tracking-[0.2em] text-[#d5be89]/70 group-hover:text-[#f3e2b9]`}>Login</span>
                    </motion.div>
                </Link>
            </motion.div>

            {/* 2. Crown Ornament - DELAYED ENTRANCE */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                // Delay bumped to 1.5s so it arrives last for a "crowning" effect
                transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-5 w-full max-w-[90rem] items-center justify-center z-0 pointer-events-none"
            >
                <motion.div 
                    className="relative"
                    // Suble floating breathing animation
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                >
                    <motion.div 
                        animate={{ 
                            opacity: scrolled ? 0.8 : 0.3, 
                            scale: scrolled ? 1.25 : 1,
                        }}
                        className="absolute inset-0 bg-yellow-200/20 blur-2xl rounded-full transition-all duration-700"
                    />
                    <Crown size={40} strokeWidth={1} className={`transition-colors duration-700 ${scrolled ? "text-yellow-400" : "text-yellow-500/40"}`} />
                </motion.div>
            </motion.div>

            {/* 3. Main Capsule */}
            <motion.div
                variants={capsuleVariants}
                initial="hidden"
                animate="show"
                className={`relative flex items-center justify-between lg:justify-center px-5 lg:px-8 rounded-full border md:max-w-xl lg:max-w-6xl h-16 lg:h-20 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-700 ${
                    scrolled ? "bg-[#0a0502]/90 border-[#d5be89]/50" : "bg-[#0a0502]/40 border-[#d5be89]/20"
                }`}
            >
                <div className="hidden lg:flex items-center gap-8 relative z-10 w-full justify-end">
                    {navItems.slice(0, 3).map((item) => (
                        <FastNavItem key={item.name} item={item} isActive={pathname === item.href} />
                    ))}
                </div>

                <Link href="/" className="group relative z-20 lg:mx-10 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="w-12 h-12 lg:w-28 lg:h-28 relative"
                    >
                        <Image src="/assets/logo.png" alt="Logo" fill priority className="object-contain contrast-125" />
                    </motion.div>
                </Link>

                <div className="hidden lg:flex items-center gap-8 relative z-10 w-full justify-start">
                    {navItems.slice(3).map((item) => (
                        <FastNavItem key={item.name} item={item} isActive={pathname === item.href} />
                    ))}
                </div>

                <button className="lg:hidden z-30 text-[#d5be89]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </motion.div>
        </nav>
    );
};

const FastNavItem = ({ item, isActive }: { item: any; isActive: boolean }) => {
    return (
       <motion.div variants={navItemVariants}>
			<Link
				href={item.href}
				className="group relative flex flex-col items-center justify-center w-24 h-full shrink-0">
				<motion.div
					className="relative z-10 flex flex-col items-center gap-1 group"
					whileHover={{ y: -4, scale: 1.05 }}
					transition={{ type: "spring", stiffness: 200, damping: 12 }}>
					{/* Hover Glow Only */}
					<motion.div
						className="absolute w-14 h-14 bg-[#d5be89]/30 blur-xl rounded-full pointer-events-none"
						initial={{ opacity: 0, scale: 0.8 }}
						whileHover={{ opacity: 0.7, scale: 1.3 }}
						transition={{ duration: 0.25 }}
					/>

					<div
						className={`relative w-12 h-12 transition-all duration-300 ${
							isActive
								? "brightness-110 drop-shadow-[0_0_18px_rgba(213,190,137,0.8)] scale-110"
								: "brightness-80 group-hover:brightness-130 group-hover:drop-shadow-[0_0_12px_rgba(213,190,137,0.8)]"
						}`}>
						<Image
							src={item.img}
							alt={item.name}
							fill
							className="object-contain"
						/>
					</div>

					<span
						className={`${cinzel.className} text-[10px] tracking-[0.1em] text-center transition-all duration-300 ${
							isActive
								? "text-[#f3e2b9] drop-shadow-[0_0_8px_#d5be89]"
								: "text-[#d5be89]/70 group-hover:text-[#f3e2b9]"
						}`}>
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