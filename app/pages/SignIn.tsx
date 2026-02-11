"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Cinzel,
    Montserrat,
    Cormorant_SC,
    Tiro_Devanagari_Sanskrit,
    Rajdhani,
} from "next/font/google";
import {
    Mail, // Changed from Hash
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";
import { showDivineToast } from "@/components/CustomToast";

// --- FONTS (Assume these are configured in your layout) ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const cormorant = Cormorant_SC({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const sanskrit = Tiro_Devanagari_Sanskrit({ subsets: ["devanagari"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function MahabharatLogin() {
    const [formData, setFormData] = useState({
        email: "", // Changed from rollNumber
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
        showDivineToast("Entrance Denied", "Registration has not yet started.","error")
    };

    const handleGoogleLogin = () => {
        console.log("Google Login Clicked");
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0402] text-[#F2E8CF] overflow-hidden selection:bg-orange-500/30 py-16">
            
            {/* --- BACKGROUND --- */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/assets/home-bg.png"
                    alt="War Background"
                    fill
                    className="object-cover opacity-60 blur-[4px]"
                    priority
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050201_90%)]"></div>
                
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] opacity-10 animate-[spin_60s_linear_infinite]">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dharma_Wheel.svg/1200px-Dharma_Wheel.svg.png"
                        alt="Chakra"
                        width={600}
                        height={600}
                        className="invert"
                    />
                </div>
            </div>

            {/* --- LOGIN CARD --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[500px] mx-4"
            >
                <div className="absolute -inset-1 border-[2px] border-yellow-700/40 rounded-lg pointer-events-none"></div>
                <div className="absolute -inset-3 border-[1px] border-yellow-700/20 rounded-xl pointer-events-none scale-95"></div>

                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-600 z-20"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-600 z-20"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-600 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-600 z-20"></div>

                <div className="relative bg-[#0f0502]/80 backdrop-blur-md border border-yellow-600/30 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
                    
                    <div className="relative pt-10 pb-6 text-center border-b border-yellow-800/30">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-yellow-900/20 to-transparent rounded-b-full"></div>
                        <div className="relative z-10">
                            <h2 className={`${sanskrit.className} text-xl text-yellow-600 opacity-80 mb-1`}>
                                || पुनः स्वागतम् ||
                            </h2>
                            <h1 className={`${cinzel.className} text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700`}>
                                WARRIOR LOGIN
                            </h1>
                            <p className={`${cormorant.className} text-lg text-gray-400 italic mt-2 px-4`}>
                                &quot;Identify yourself to the divine gatekeepers.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 space-y-6">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full relative group overflow-hidden bg-[#1a0a05] border border-yellow-700/40 rounded-sm py-3.5 flex items-center justify-center gap-3 transition-all duration-300 hover:border-yellow-500 hover:bg-[#250f08]"
                        >
                            <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" width={18} height={18} />
                            <span className={`${cinzel.className} font-bold text-sm text-yellow-100/80 group-hover:text-yellow-100 tracking-widest`}>
                                Summon with Google
                            </span>
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-yellow-900 flex-1"></div>
                            <Image src="/assets/logo.png" alt="logo" height={64} width={72} className="opacity-80" />
                            <div className="h-px bg-gradient-to-r from-yellow-900 to-transparent flex-1"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <DharmaInput
                                icon={<Mail size={18} />}
                                label="Scroll Address (Email)"
                                name="email"
                                type="email"
                                placeholder="warrior@dharma.com"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <div className="group relative">
                                <label className={`${rajdhani.className} text-[10px] uppercase font-bold tracking-wider text-yellow-800 group-focus-within:text-yellow-500 transition-colors absolute -top-3 left-0`}>
                                    Secret Key (Password)
                                </label>
                                <div className="flex items-center border-b border-yellow-900/50 group-focus-within:border-yellow-500 transition-colors pb-2 pt-1">
                                    <Lock size={18} className="mr-3 text-yellow-700 group-focus-within:text-yellow-500" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full bg-transparent text-yellow-100 placeholder:text-yellow-900/50 outline-none ${montserrat.className} text-sm`}
                                        placeholder="••••••••"
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-yellow-700 hover:text-yellow-500">
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-center">
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="w-full relative group overflow-hidden bg-[#1a0a05] border border-yellow-700/60 rounded-sm py-4 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                                >
                                    <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2)_0%,transparent_70%)]" />
                                    <div className="relative z-10 flex flex-col items-center justify-center">
                                        <span className={`${sanskrit.className} text-sm lg:text-lg text-orange-200/80 tracking-widest group-hover:text-orange-400 transition-colors`}>
                                            {isLoading ? "प्रविशति..." : "प्रविश (ENTER THE GATES)"}
                                        </span>
                                    </div>
                                    <motion.div 
                                        variants={{ initial: { x: "-150%" }, hover: { x: "150%" } }}
                                        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent skew-x-12"
                                    />
                                </motion.button>
                            </div>

                            <div className="text-center">
                                <Link href="/register" className="group text-sm text-yellow-700 hover:text-yellow-500 transition-colors">
                                    <span className={`${cormorant.className} text-lg`}>New Warrior? </span>
                                    <span className="font-bold underline underline-offset-4 decoration-yellow-900 group-hover:decoration-yellow-500">Sign the Oath</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const DharmaInput = ({ icon, label, name, type = "text", placeholder, value, onChange }: any) => {
    return (
        <div className="group relative">
            <label className={`${rajdhani.className} text-[10px] uppercase font-bold tracking-wider text-yellow-800 group-focus-within:text-yellow-500 transition-colors absolute -top-3 left-0`}>
                {label}
            </label>
            <div className="flex items-center border-b border-yellow-900/50 group-focus-within:border-yellow-500 transition-colors pb-2 pt-1">
                <div className="mr-3 text-yellow-700 group-focus-within:text-yellow-500 transition-colors">
                    {icon}
                </div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full bg-transparent text-yellow-100 placeholder:text-yellow-900/50 outline-none ${montserrat.className} text-sm`}
                />
            </div>
        </div>
    );
};