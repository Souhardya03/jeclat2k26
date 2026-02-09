"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Murecho } from "next/font/google";

import {
    Swords,
    ImageIcon,
    Mail,
    Menu,
    X,
    Crown,
    Users,
    Brain,
    Mic2,
} from "lucide-react";

const murecho = Murecho({ subsets: ["latin"], weight: ["700"] });

// Animation Variants
const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // CONFIG: Set your delay here (in seconds)
    const crownAnimationDelay = 2.5; 

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (pathname.startsWith("/events/") && pathname !== "/events") return null;

    const navItems = [
        { name: "Events", href: "/events", icon: <Swords size={18} /> },
        { name: "Socials", href: "/socials", icon: <Mic2 size={18} /> },
        { name: "Memories", href: "/memories", icon: <ImageIcon size={18} /> },
        { name: "Team", href: "/team", icon: <Users size={18} /> },
        { name: "Elementary", href: "/elementary", icon: <Brain size={18} /> },
        { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
    ];

    return (
        <nav className="fixed top-4 left-0 right-0 flex justify-center px-4 z-50">
            {/* Background Crown Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // Added delay here
                transition={{ 
                    duration: 1.2, 
                    ease: "easeOut", 
                    delay: crownAnimationDelay 
                }}
                className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-5 w-full max-w-[90rem] items-center justify-center gap-6 z-0 pointer-events-none text-yellow-500/40">
                
                {/* Left Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    // Adjusted delay to start after the parent appears
                    transition={{ 
                        duration: 1.5, 
                        delay: crownAnimationDelay + 0.5 
                    }}
                    className="h-[1px] w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent origin-right"
                />
                
                <div className="relative">
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute inset-0 bg-yellow-500/80 blur-2xl rounded-full"
                    />
                    <Crown
                        size={40}
                        strokeWidth={1}
                        className="relative "
                    />
                </div>

                {/* Right Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    // Adjusted delay to start after the parent appears
                    transition={{ 
                        duration: 1.5, 
                        delay: crownAnimationDelay + 0.5 
                    }}
                    className="h-[1px] w-40 bg-gradient-to-l from-transparent via-yellow-500/60 to-transparent origin-left"
                />
            </motion.div>

            {/* Desktop Main Nav */}
            <motion.div
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className={`hidden z-10 lg:flex items-center justify-center w-full max-w-7xl mx-auto rounded-full border transition-all duration-700 relative h-20
        ${scrolled ? "bg-[#0a0502]/90 backdrop-blur-md border-yellow-600/40" : "bg-[#0a0502]/40 backdrop-blur-sm border-white/10"}`}>
                <div className="flex-1 flex justify-end gap-2 pr-16">
                    {navItems.slice(0, 3).map((item) => (
                        <motion.div
                            key={item.name}
                            variants={itemVariants}>
                            <NavItem
                                item={item}
                                isActive={pathname === item.href}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Center Logo */}
                <Link
                    href="/"
                    className="relative z-20 group">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-32 h-32 flex items-center justify-center">
                        <Image
                            src="/assets/logo.png"
                            alt="JECLAT"
                            width={120}
                            height={100}
                            className="object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                        />
                    </motion.div>
                </Link>

                <div className="flex-1 flex justify-start gap-2 pl-16">
                    {navItems.slice(3).map((item) => (
                        <motion.div
                            key={item.name}
                            variants={itemVariants}>
                            <NavItem
                                item={item}
                                isActive={pathname === item.href}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Mobile Nav Toggle */}
            <div
                className={`lg:hidden flex items-center justify-between px-6 h-16 w-full max-w-md mx-auto rounded-full bg-[#0a0502]/90 backdrop-blur-xl border border-yellow-900/50 shadow-2xl transition-all duration-500`}>
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
                    className="text-yellow-500">
                    <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-4 right-4 bg-[#0a0502]/95 backdrop-blur-2xl border border-yellow-900/50 rounded-2xl overflow-hidden lg:hidden z-40">
                        <div className="flex flex-col p-4 gap-2">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}>
                                        <div
                                            className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${pathname === item.href ? "bg-yellow-500/10 text-yellow-400" : "text-yellow-100/70"}`}>
                                            {item.icon}
                                            <span
                                                className={`${murecho.className} text-sm tracking-widest uppercase`}>
                                                {item.name}
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavItem = ({ item, isActive }: { item: any; isActive: boolean }) => {
    return (
        <Link
            href={item.href}
            className="group relative px-4 py-2 flex flex-col items-center">
            <motion.div
                whileHover={{ y: -2 }}
                className={`relative z-10 flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? "text-yellow-300" : "text-yellow-600/60 group-hover:text-yellow-200"}`}>
                {item.icon}
                <span
                    className={`${murecho.className} text-[10px] uppercase tracking-widest font-bold`}>
                    {item.name}
                </span>
            </motion.div>

            {isActive && (
                <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-yellow-500/10 blur-xl rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            )}

            {isActive && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute bottom-0 w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_10px_#eab308]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </Link>
    );
};

export default Navbar;