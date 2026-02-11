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
    User,
    Hash,
    Mail,
    Phone,
    Building,
    Calendar,
    ArrowRight,
    Lock,
    Eye,
    EyeOff,
    Feather,
    Scroll,
} from "lucide-react";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});
const cormorant = Cormorant_SC({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const sanskrit = Tiro_Devanagari_Sanskrit({
    subsets: ["devanagari"],
    weight: ["400"],
});
const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function MahabharatSignup() {
    const [formData, setFormData] = useState({
        name: "",
        rollNumber: "",
        email: "",
        phone: "",
        department: "",
        year: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    const handleGoogleLogin = () => {
        console.log("Google Login Clicked");
    };

    return (
        <div
            className={`relative min-h-screen w-full flex items-center justify-center bg-[#0a0402] text-[#F2E8CF] overflow-hidden selection:bg-orange-500/30 py-16`}>
            {/* --- BACKGROUND: THE KURUKSHETRA --- */}
            <div className="fixed inset-0 z-0">
                {/* Background Image */}
                <Image
                    src="/assets/home-bg.png"
                    alt="War Background"
                    fill
                    className="object-cover opacity-60 blur-[4px]"
                    priority
                />
                {/* Texture Overlay (Old Paper/Stone) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-40 mix-blend-overlay"></div>
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050201_90%)]"></div>

                {/* Rotating Chakra (Background Prop) */}
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

            {/* --- THE ROYAL DECREE (FORM) --- */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[600px] mx-4">
                {/* Decorative Border Frame */}
                <div className="absolute -inset-1 border-[2px] border-yellow-700/40 rounded-lg pointer-events-none"></div>
                <div className="absolute -inset-3 border-[1px] border-yellow-700/20 rounded-xl pointer-events-none scale-95"></div>

                {/* Corner Ornaments (The Golden Tips) */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-600 z-20"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-600 z-20"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-600 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-600 z-20"></div>

                {/* The Card Content */}
                <div className="relative bg-[#0f0502]/80 backdrop-blur-md border border-yellow-600/30 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
                    {/* Header Area */}
                    <div className="relative pt-10 pb-6 text-center border-b border-yellow-800/30">
                        {/* Decorative Arch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-yellow-900/20 to-transparent rounded-b-full"></div>

                        <div className="relative z-10">
                            <h2
                                className={`${sanskrit.className} text-xl text-yellow-600 opacity-80 mb-1`}>
                                || धर्मो रक्षति रक्षितः ||
                            </h2>
                            <h1
                                className={`${cinzel.className} text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 drop-shadow-sm`}>
                                REGISTRATION
                            </h1>
                            <p
                                className={`${cormorant.className} text-lg text-gray-400 italic mt-2`}>
                                &quot;Pick up your Gandiva; the battle begins here.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 space-y-6">
                        {/* Google Login (Styled as a Gold Plate) */}
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full relative group overflow-hidden bg-[#1a0a05] border border-yellow-700/40 rounded-sm py-3.5 flex items-center justify-center gap-3 transition-all duration-300 hover:border-yellow-500 hover:bg-[#250f08]">
                            <Image
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                width={20}
                                height={20}
                                className="opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <span
                                className={`${cinzel.className} font-bold text-sm text-yellow-100/80 group-hover:text-yellow-100 tracking-wider`}>
                                Invoke via Google
                            </span>
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>

                        {/* Divider with Emblem */}
                        <div className="flex items-center gap-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-yellow-900 to-yellow-900 flex-1"></div>
                            <div className="w-18 h-14   flex items-center justify-center ">
                                <Image src={"/assets/logo.png"} alt="" height={90} width={90} />
                            </div>
                            <div className="h-px bg-gradient-to-r from-yellow-900 via-yellow-900 to-transparent flex-1"></div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6">
                            {/* Input Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <DharmaInput
                                    icon={<Feather size={16} />}
                                    label="Name (Full Name)"
                                    name="name"
                                    placeholder="Arjuna"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <DharmaInput
                                    icon={<Hash size={16} />}
                                    label="Identity (Roll No)"
                                    name="rollNumber"
                                    placeholder="101..."
                                    value={formData.rollNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <DharmaInput
                                    icon={<Mail size={16} />}
                                    label="Scroll (Email)"
                                    name="email"
                                    type="email"
                                    placeholder="hero@jeclat.in"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <DharmaInput
                                    icon={<Phone size={16} />}
                                    label="Signal (Phone)"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91..."
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <DharmaSelect
                                    icon={<Building size={16} />}
                                    label="Kingdom (Dept)"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    options={["CSE", "IT", "ECE", "EE", "ME", "CE"]}
                                />
                                <DharmaSelect
                                    icon={<Calendar size={16} />}
                                    label="Era (Year)"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    options={["1st Year", "2nd Year", "3rd Year", "4th Year"]}
                                />
                            </div>

                            {/* Password Field */}
                            <div className="group relative pt-4">
                                <div className="flex items-center border-b border-yellow-900/50 group-focus-within:border-yellow-500 transition-colors pb-2">
                                    <div className="mr-3 text-yellow-700 group-focus-within:text-yellow-500 transition-colors">
                                        <Lock size={18} />
                                    </div>
                                    <div className="flex-1 relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`w-full bg-transparent text-yellow-100 placeholder:text-yellow-900/50 outline-none ${montserrat.className} text-sm`}
                                            placeholder="Secret Key (Password)"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-yellow-700 hover:text-yellow-500 transition-colors">
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button - The Glowing Seal */}
                            <div className="pt-10 flex justify-center">
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="w-full relative group overflow-hidden bg-[#1a0a05] border border-yellow-700/60 rounded-sm py-4 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                                    {/* Animated Glowing Background Layer */}
                                    <motion.div
                                        variants={{
                                            initial: { opacity: 0 },
                                            hover: { opacity: 1 },
                                        }}
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2)_0%,transparent_70%)]"
                                    />

                                    {/* The "Pulsing Aura" Border Glow */}
                                    <motion.div
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                            scale: [1, 1.01, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 border border-yellow-500/30 rounded-sm pointer-events-none"
                                    />

                                    <div className="relative z-10 flex flex-col items-center justify-center gap-1">
                                        {/* Primary Text: Inscribe Your Legacy (Register) */}
                                        {/* <span
                                            className={`${cinzel.className} text-lg font-black tracking-[0.25em] text-orange-200 group-hover:text-white transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                                            {isLoading ? "INSCRIBING..." : "INSCRIBE YOUR LEGACY"}
                                        </span> */}

                                        {/* Subtext: Sanskrit for 'Entering the Battle' */}
                                        <span
                                            className={`${sanskrit.className} text-lg text-orange-200/80 tracking-widest group-hover:text-orange-400 transition-colors`}>
                                            रणक्षेत्रे प्रवेशः (Entrance to the Battlefield)
                                        </span>
                                    </div>

                                    {/* Moving Light Streak (Shimmer Effect) */}
                                    <motion.div
                                        variants={{
                                            initial: { x: "-150%" },
                                            hover: { x: "150%" },
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent skew-x-12"
                                    />

                                    {/* Corner Ornaments */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-600/50 group-hover:border-yellow-400 transition-colors"></div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-600/50 group-hover:border-yellow-400 transition-colors"></div>
                                </motion.button>
                            </div>
                            <div className="text-center mt-4">
                                <Link
                                    href="/login"
                                    className="group text-sm text-yellow-700 hover:text-yellow-500 transition-colors">
                                    <span className={`${cormorant.className} text-lg`}>
                                        Already a Warrior?{" "}
                                    </span>
                                    <span className="font-bold underline underline-offset-4 decoration-yellow-900 group-hover:decoration-yellow-500">
                                        Enter the Gates
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// --- REUSABLE COMPONENT: DHARMA INPUT ---
const DharmaInput = ({
    icon,
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
}: any) => {
    return (
        <div className="group relative">
            <label
                className={`${rajdhani.className} text-[10px] uppercase font-bold tracking-wider text-yellow-800 group-focus-within:text-yellow-500 transition-colors absolute -top-3 left-0`}>
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

// --- REUSABLE COMPONENT: DHARMA SELECT ---
const DharmaSelect = ({ icon, label, name, value, onChange, options }: any) => {
    return (
        <div className="group relative">
            <label
                className={`${rajdhani.className} text-[10px] uppercase font-bold tracking-wider text-yellow-800 group-focus-within:text-yellow-500 transition-colors absolute -top-3 left-0`}>
                {label}
            </label>
            <div className="flex items-center border-b border-yellow-900/50 group-focus-within:border-yellow-500 transition-colors pb-2 pt-1">
                <div className="mr-3 text-yellow-700 group-focus-within:text-yellow-500 transition-colors">
                    {icon}
                </div>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full bg-transparent text-yellow-100 outline-none ${montserrat.className} text-sm appearance-none cursor-pointer [&>option]:bg-[#1a0a05]`}>
                    <option
                        value=""
                        disabled>
                        Select
                    </option>
                    {options.map((opt: string) => (
                        <option
                            key={opt}
                            value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                {/* Simple arrow */}
                <div className="text-yellow-800 pointer-events-none">
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
