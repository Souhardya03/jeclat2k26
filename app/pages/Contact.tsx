"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Cinzel, Fauna_One } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
	Mail,
	MapPin,
	Phone,
	Send,
	Feather,
	CheckCircle2,
	Loader2,
} from "lucide-react";

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const fauna = Fauna_One({ subsets: ["latin"], weight: ["400"] });

export default function ContactPage() {
	const [particles, setParticles] = useState<
		{ id: number; left: string; delay: number }[]
	>([]);

	useEffect(() => {
		setParticles(
			Array.from({ length: 20 }).map((_, i) => ({
				id: i,
				left: `${Math.random() * 100}%`,
				delay: Math.random() * 5,
			})),
		);
	}, []);

	return (
		<div
			className={`relative min-h-screen mt-4 w-full overflow-hidden bg-[#0a0502] text-[#e0e0e0] ${cinzel.className}`}>
			{/* --- BACKGROUND LAYER --- */}
			<div className="fixed bg-black inset-0 z-0">
				<Image
					src="/assets/home-bg.png" // Ensure this path matches your project
					alt="Background"
					fill
					priority
					className="object-cover blur-sm brightness-50"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"></div>

				{/* Floating Embers/Gold Dust */}
				{particles.map((p) => (
					<div
						key={p.id}
						className="absolute bottom-0 w-1 h-1 bg-yellow-500 rounded-full animate-float-up opacity-0 shadow-[0_0_10px_gold]"
						style={{ left: p.left, animationDelay: `${p.delay}s` }}
					/>
				))}
			</div>

			<div className="relative z-10 container mx-auto px-6 py-24 md:py-36">
				{/* --- HEADER --- */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-center mb-16">
					<h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-800 drop-shadow-md mb-4">
						Get in touch
					</h1>
					<div className="flex items-center justify-center gap-4 text-yellow-500/60">
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600"></div>
						<p
							className={`${fauna.className} md:text-sm text-xs md:tracking-widest uppercase`}>
							We await your missive
						</p>
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600"></div>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
					{/* --- LEFT: INFO CARDS --- */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="space-y-8">
						{/* Info Card 1: Address */}
						<div className="group relative p-8 bg-white/5 border border-yellow-900/30 rounded-lg overflow-hidden backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="relative flex items-start gap-6">
								<div className="p-4 bg-black/40 rounded-full border border-yellow-700/30 text-yellow-500 group-hover:scale-110 transition-transform">
									<MapPin size={24} />
								</div>
								<div>
									<h3 className="text-xl font-bold text-yellow-100 mb-2">
										Location
									</h3>
									<p
										className={`${fauna.className} text-gray-400 leading-relaxed md:text-lg text-sm`}>
										Jalpaiguri Government Engineering College,
										<br />
										Jalpaiguri, West Bengal - 735102
									</p>
								</div>
							</div>
						</div>

						{/* Info Card 2: Email */}
						<div className="group relative p-8 bg-white/5 border border-yellow-900/30 rounded-lg overflow-hidden backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<div className="relative flex items-start gap-6">
								<div className="p-4 bg-black/40 rounded-full border border-yellow-700/30 text-yellow-500 group-hover:scale-110 transition-transform">
									<Mail size={24} />
								</div>
								<div>
									<h3 className="text-xl font-bold text-yellow-100 mb-2">
										Contact us
									</h3>
									<p className={`${fauna.className} md:text-lg text-xs text-gray-400 mb-2`}>
										General Enquiries & Sponsorships
									</p>
									<a
										href={"mailto:admin@jeclat2k26.in"}
										className={`${fauna.className} text-yellow-500 hover:text-yellow-300 underline underline-offset-4 transition-colors `}>
										admin@jeclat2k26.in
									</a>
								</div>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-lg border border-yellow-900/30 bg-black/20 h-64 md:h-80 transition-all duration-300 hover:border-yellow-600/50">
							{/* Decorative Frame for Map */}
							<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-500/50 z-10"></div>
							<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-500/50 z-10"></div>

							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7138.39359523328!2d88.703754!3d26.545945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bce687f169d%3A0x4152036d0d736d37!2sJalpaiguri%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1769961772558!5m2!1sen!2sin"
								width="100%"
								height="100%"
								style={{
									border: 0,
									filter: "grayscale(0) invert(0.9) sepia(0.5) brightness(0.8)",
								}}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="opacity-80 group-hover:opacity-90 transition-opacity duration-500"></iframe>

							{/* Overlay to prevent accidental scrolling while navigating the page */}
							
						</div>
					</motion.div>

					{/* --- RIGHT: CONTACT FORM --- */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative">
						{/* Form Container */}
						<div className="relative p-8 md:p-10 bg-[#0a0502]/80 backdrop-blur-xl border border-yellow-700/30 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
							{/* Decorative Corners */}
							<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-600/60"></div>
							<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-600/60"></div>
							<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-yellow-600/60"></div>
							<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-600/60"></div>

							<div className="mb-8 flex items-center gap-3">
								<Feather className="text-yellow-600" />
								<h3 className="text-2xl font-bold text-yellow-100">
									Write to Us
								</h3>
							</div>

							<ContactForm />
						</div>
					</motion.div>
				</div>
			</div>

			<style
				jsx
				global>{`
				@keyframes floatUp {
					0% {
						transform: translateY(0) scale(0);
						opacity: 0;
					}
					20% {
						opacity: 0.8;
					}
					100% {
						transform: translateY(-100vh) scale(1.5);
						opacity: 0;
					}
				}
				.animate-float-up {
					animation: floatUp 10s linear infinite;
				}
			`}</style>
		</div>
	);
}

// --- FORM COMPONENT ---
function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API Call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				className="h-[400px] flex flex-col items-center justify-center text-center space-y-4">
				<div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/50">
					<CheckCircle2
						size={40}
						className="text-green-500"
					/>
				</div>
				<h3 className="text-2xl font-bold text-yellow-100">Message Sent!</h3>
				<p className={`${fauna.className} text-gray-400`}>
					Your missive has been dispatched to the high council.
					<br />
					We shall respond shortly.
				</p>
				<button
					onClick={() => setIsSubmitted(false)}
					className="mt-6 px-6 py-2 border border-yellow-600/50 text-yellow-500 hover:bg-yellow-600/10 transition-colors uppercase text-sm tracking-widest">
					Send Another
				</button>
			</motion.div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Name Field */}
				<div className="space-y-2">
					<label className="text-xs uppercase tracking-widest text-yellow-500/70 font-bold ml-1">
						Your Name
					</label>
					<input
						type="text"
						required
						placeholder="Arjuna"
						className={`w-full ${fauna.className} bg-white/5 border border-white/10 rounded p-4 text-yellow-100 placeholder:text-gray-600 focus:outline-none focus:border-yellow-600/60 focus:ring-1 focus:ring-yellow-600/60 transition-all`}
					/>
				</div>

				{/* Email Field */}
				<div className="space-y-2">
					<label className="text-xs uppercase tracking-widest text-yellow-500/70 font-bold ml-1">
						Your Email
					</label>
					<input
						type="email"
						required
						placeholder="warrior@indraprastha.com"
						className={`w-full ${fauna.className} bg-white/5 border border-white/10 rounded p-4 text-yellow-100 placeholder:text-gray-600 focus:outline-none focus:border-yellow-600/60 focus:ring-1 focus:ring-yellow-600/60 transition-all`}
					/>
				</div>
			</div>

			{/* Subject Field */}
			<div className="space-y-2">
				<label className="text-xs uppercase tracking-widest text-yellow-500/70 font-bold ml-1">
					Subject
				</label>
				<input
					type="text"
					required
					placeholder="Regarding Sponsorship / Event Query"
					className={`w-full ${fauna.className} bg-white/5 border border-white/10 rounded p-4 text-yellow-100 placeholder:text-gray-600 focus:outline-none focus:border-yellow-600/60 focus:ring-1 focus:ring-yellow-600/60 transition-all`}
				/>
			</div>

			{/* Message Field */}
			<div className="space-y-2">
				<label className="text-xs uppercase tracking-widest text-yellow-500/70 font-bold ml-1">
					Message
				</label>
				<textarea
					required
					rows={5}
					placeholder="Write your message here..."
					className={`${fauna.className} w-full bg-white/5 border border-white/10 rounded p-4 text-yellow-100 placeholder:text-gray-600 focus:outline-none focus:border-yellow-600/60 focus:ring-1 focus:ring-yellow-600/60 transition-all resize-none`}></textarea>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className="group w-full py-4 bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-bold uppercase tracking-[0.2em] rounded overflow-hidden relative hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
				<div className="absolute inset-0 cursor-pointer bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
				<span
					className={`relative ${fauna.className} text-sm lg:text-lg flex items-center justify-center gap-2`}>
					{isSubmitting ? (
						<>
							<Loader2
								className="animate-spin"
								size={18}
							/>{" "}
							Sending...
						</>
					) : (
						<>
							Send Message{" "}
							<Send
								size={18}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</>
					)}
				</span>
			</button>
		</form>
	);
}
