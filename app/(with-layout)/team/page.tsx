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
import {
	Instagram,
	Linkedin,
	Crown,
	Swords,
	Shield,
	Zap,
	Sparkles,
	Star,
	ChevronUp,
} from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";

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

// --- TEAM DATA ---
const chiefCoordinators = [
	{
		name: "Sudip Biswas",
		role: "Supreme Commander",
		dept: "IT",
		image: "/assets/teams/Sudip.jpeg",
		instagram:
			"https://www.instagram.com/_biswas_sudip_?igsh=MWExZ3hhbjNmbnd3aA%3D%3D&utm_source=qr",
		linkedin: "http://www.linkedin.com/in/sudip9733",
	},
	{
		name: "Akash Debnath",
		role: "Supreme Commander",
		dept: "EE",
		image: "/assets/teams/Akash.jpg",
		instagram: "https://www.instagram.com/akash_d02?igsh=aGFtb2lrNmZuOWEz",
		linkedin: "https://www.linkedin.com/in/akash-debnath-a34508254/",
	},
];
const socialSecretaries = [
	{
		name: "Kaustav De",
		role: "Social Secretary",
		dept: "CSE",
		image: "/assets/teams/Kaustav.png",
		instagram: "https://www.instagram.com/kaustav_de_19?igsh=ajdiYmpmeTRpd3Fw",
		linkedin: "https://www.linkedin.com/in/dekaustav",
	},
	{
		name: "BARUNENDRA GHOSH",
		role: "Social Secretary",
		dept: "CE",
		image: "/assets/teams/Barun.jpg",
		instagram: "https://www.instagram.com/itsbarunendra?igsh=MW1hYWlzaWYzbThsdQ==",
		linkedin: "https://www.linkedin.com/in/barunendra-ghosh-4b4635230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
	},
];
const teams = [
	{
		category: "Collection Head",
		mahabharat: "Dhanrakshak (Treasury Guards)",
		members: [
			{
				name: "Somnath Kuiti",
				dept: "ECE",
				image: "/assets/teams/Somnath.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Laxminarayan Saren",
				dept: "ME",
				image: "/assets/teams/Laxminarayan.jpg",
				instagram: "https://www.instagram.com/_l0ucky_?igsh=MWt3Y2QwcW85YWhlcw==",
				linkedin: "https://in.linkedin.com/in/laxminarayan-saren-133630254",
			},
		],
	},
	{
		category: "Extended Collection",
		mahabharat: "Dhana Samrakshak (Wealth Protectors)",
		members: [
			{
				name: "Suman Chakraborty",
				dept: "IT",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Debayan Ghosh",
				dept: "CE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
		],
	},
	{
		category: "Sponsor Head",
		mahabharat: "Rajya Mitras (Kingdom Allies)",
		members: [
			{
				name: "Zaid Mahmud",
				dept: "CSE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Sudiksha Basu Thakur",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Apurba Shaw",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
		],
	},
	{
		category: "Treasurers / Cashiers",
		mahabharat: "Koshadhyakshas (Royal Treasurers)",
		members: [
			{
				name: "Debanuj Barman",
				dept: "CSE",
				image: "/assets/teams/Debanuj.jpeg",
				instagram:
					"https://www.instagram.com/debanujbarman?igsh=eGlnMGs3cHAxN2p6&utm_source=qr",
				linkedin:
					"https://www.linkedin.com/in/debanuj-barman-745822240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
			{
				name: "Subhajit Tudu",
				dept: "IT",
				image: "/assets/teams/Subhajit.jpg",
				instagram:
					"https://www.instagram.com/_suuubbbb____?igsh=amJsdjcycjRnNzBl",
				linkedin:
					"https://www.linkedin.com/in/subhajit-tudu-79474b259?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
			{
				name: "Swagata Mondal",
				dept: "ECE",
				image: "/assets/teams/Swagata.jpeg",
				instagram:
					"https://www.instagram.com/lilian_art_official?igsh=MXM3cXVrajF1MDVxbA%3D%3D&utm_source=qr",
				linkedin: "https://www.linkedin.com/in/swagata-mondal-809968255/",
			},
			{
				name: "Srijan Bhattacharya",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Prakash Garain",
				dept: "EE",
				image: "/assets/teams/Prakash.jpg",
				instagram:
					"https://www.instagram.com/prakash.garain.520?igsh=dXM1Z21sZ2MxOWFt",
				linkedin:
					"https://www.linkedin.com/in/prakash-garain-192703261?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
		],
	},
	{
		category: "Web Lead",
		mahabharat: "Yantra Vidya Gurus (Tech Wizards)",
		members: [
			{
				name: "Souhardya Deb",
				dept: "ECE",
				image: "/assets/teams/Souhardya.jpeg",
				instagram: "https://www.instagram.com/_souhardya_03/",
				linkedin: "https://www.linkedin.com/in/souhardya-deb-921578254/",
			},
			{
				name: "Saikat Bera",
				dept: "IT",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Surajit Malty",
				dept: "IT",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Kaustav Das",
				dept: "CSE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
		],
	},
	{
		category: "Tshirt Distribution",
		mahabharat: "Vastra Vitaraks (Garment Distributors)",
		members: [
			{
				name: "Shounak Batabyal",
				dept: "CSE",
				image: "/assets/teams/Shounak.jpg",
				instagram: "#",
				linkedin:
					"https://www.linkedin.com/in/shounak-batabyal-641b54247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			},
			{
				name: "Sk. Momitul Haque",
				dept: "CSE",
				image: "/assets/teams/Momitul.jpg",
				instagram:
					"https://www.instagram.com/i_am_momi11?igsh=NGgzdGR1aTkwemE1",
				linkedin:
					"https://www.linkedin.com/in/sk-momitul-haque-92986a271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			},
		],
	},
	{
		category: "Event Head",
		mahabharat: "Utsav Nayaks (Festival Leaders)",
		members: [
			{
				name: "Simon Barua",
				dept: "CSE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},

			{
				name: "Atanu Basak",
				dept: "IT",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Pritam Chakraborty",
				dept: "IT",
				image: "/assets/teams/Pritam.jpg",
				instagram:
					"https://www.instagram.com/rahul_is_busy?igsh=NjRmaWc4dWxqaXRi",
				linkedin: "https://www.linkedin.com/in/pritamchakraborty2003",
			},
			{
				name: "Kaushik Saha",
				dept: "ECE",
				image: "/assets/teams/Kaushik.png",
				instagram:
					"https://www.instagram.com/i_kaushik__saha?igsh=MW81bjAxcGVtZnJpYg==",
				linkedin:
					"https://www.linkedin.com/in/kaushik-saha-7a10a225a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
			{
				name: "Purbayan Kumar Das",
				dept: "ECE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Sankosh Roy",
				dept: "EE",
				image: "/assets/teams/SANKOSH.jpg",
				instagram:
					"https://www.instagram.com/sankosh_here?igsh=M2MyNzVkdGF2bjZ1",
				linkedin:
					"https://www.linkedin.com/in/sankosh-roy-76b139255?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
		],
	},
	{
		category: "Design Head",
		mahabharat: "Shilpa Shastris (Design Artisans)",
		members: [
			{
				name: "Soham Ahmed",
				dept: "ECE",
				image: "/assets/teams/Soham.jpeg",
				instagram:
					"https://www.instagram.com/half_engineer_soham?igsh=eWRiczQydXM4MTFj&utm_source=qr",
				linkedin:
					"https://www.linkedin.com/in/soham-ahmed-molla-29b381254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
			{
				name: "Anuvab Giri",
				dept: "IT",
				image: "/assets/teams/Anuvab.jpeg",
				instagram: "https://www.instagram.com/a6_editzz?igsh=MXRsc21scWw2dDUzMw%3D%3D&utm_source=qr",
				linkedin: "https://www.linkedin.com/in/anubhab-giri-309800257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
			{
				name: "Aneek Karmakar",
				dept: "CE",
				image: "/assets/teams/Aneek.jpg",
				instagram:
					"https://www.instagram.com/rockaneek.karmakar?igsh=MW03NHpyM3BzNm9sMQ==",
				linkedin:
					"https://www.linkedin.com/in/aneek-karmakar?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},

			{
				name: "Rangan Daw",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
		],
	},
	{
		category: "Production Head",
		mahabharat: "Rangbhoomi Nirmatas (Stage Creators)",
		members: [
			{
				name: "Rangan Daw",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Sampurna Sarkar",
				dept: "CSE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
		],
	},
	{
		category: "PR Head",
		mahabharat: "Rajdoots (Royal Messengers)",
		members: [
			{
				name: "Subhadip Bera",
				dept: "CSE",
				image: "/assets/teams/Subhadip.jpeg",
				instagram: "https://www.instagram.com/_subhadip_bera_?igsh=NGNxNHg4dGJxdHU=",
				linkedin: "https://www.linkedin.com/in/subhadipbera62?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			},
			{
				name: "Abir Ganguly",
				dept: "CE",
				image: "/assets/teams/Abir.jpeg",
				instagram: "https://www.instagram.com/abirganguly22101101005?igsh=ejI0dXh5dWU5N3B4",
				linkedin: "https://www.linkedin.com/in/abir-ganguly-55892b260/?originalSubdomain=in",
			},
			{
				name: "Shree Banerjee",
				dept: "ME",
				image: "/assets/teams/Shree.jpg",
				instagram: "https://www.instagram.com/shreebanerjee85?igsh=MXMxeTFwbHJzc3U1Mg==",
				linkedin: "https://www.linkedin.com/in/shree-banerjee-824814265?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},

			{
				name: "Sweta Pal",
				dept: "ME",
				image: "/assets/teams/Sweta.jpg",
				instagram: "https://www.instagram.com/sleepy_koya308?igsh=emhpa255bHU5dWho",
				linkedin: "https://www.linkedin.com/in/sweta-pal-86b70a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			},
		],
	},
	{
		category: "Social Media Head",
		mahabharat: "Varta Vahaks (News Carriers)",
		members: [
     {
				name: "Soham Ahmed",
				dept: "ECE",
				image: "/assets/teams/Soham.jpeg",
				instagram:
					"https://www.instagram.com/half_engineer_soham?igsh=eWRiczQydXM4MTFj&utm_source=qr",
				linkedin:
					"https://www.linkedin.com/in/soham-ahmed-molla-29b381254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
			{
				name: "Ankit Biswas",
				dept: "EE",
				image: "/assets/teams/Ankit.png",
				instagram: "https://www.instagram.com/ankit.biswas.20?igsh=MTVvbWZ5NXc2cGRycQ==",
				linkedin: "https://www.linkedin.com/in/ankit-biswas0110?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
			{
				name: "Rangan Daw",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Aneek Karmakar",
				dept: "CE",
				image: "/assets/teams/Aneek.jpg",
				instagram:
					"https://www.instagram.com/rockaneek.karmakar?igsh=MW03NHpyM3BzNm9sMQ==",
				linkedin:
					"https://www.linkedin.com/in/aneek-karmakar?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
		],
	},
	{
		category: "Decoration Head",
		mahabharat: "Alankara Kalavidhas (Decoration Artists)",
		members: [
			{
				name: "Sitesh Kr. Saha",
				dept: "ECE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Arunima Sarkar",
				dept: "CE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Hriday Basak",
				dept: "ME",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Kaushik Saha",
				dept: "ECE",
				image: "/assets/teams/Kaushik.png",
				instagram:
					"https://www.instagram.com/i_kaushik__saha?igsh=MW81bjAxcGVtZnJpYg==",
				linkedin:
					"https://www.linkedin.com/in/kaushik-saha-7a10a225a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
			},
		],
	},
	{
		category: "Cultural Head",
		mahabharat: "Kala Prabhus (Arts Masters)",
		members: [
      {
				name: "Raktim Majhi",
				dept: "ECE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			{
				name: "Asif Shaikh",
				dept: "IT",
				image: "/assets/teams/Asif.jpg",
				instagram: "https://www.instagram.com/asif4991sh?igsh=MTAyamF3enNyNHJzMw==",
				linkedin: "https://www.linkedin.com/in/asif-shaikh-46340b263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			},
      {
				name: "Bithika Roy",
				dept: "EE",
				image: "/assets/teams/Bithika.jpg",
				instagram: "https://www.instagram.com/___b_i_t_h_i_?igsh=MWYzZGFjeXBydnZoaw==",
				linkedin: "https://www.linkedin.com/in/bithika-roy-84863a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			},
			{
				name: "Pritam Kumar Hembram",
				dept: "EE",
				image: "/assets/team/default.jpg",
				instagram: "#",
				linkedin: "#",
			},
			
			
		],
	},
];

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
			className="group relative w-full max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden">
			<div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#eab308_180deg,#fef08a_220deg,#eab308_260deg,transparent_260deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

			<div className="absolute inset-[3px] bg-[#050505] rounded-2xl z-10 overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src={member.image}
						alt={member.name}
						fill
						className="object-cover transition-transform grayscale-50 group-hover:grayscale-0 duration-1000 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
				</div>

				<div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-500/50 rounded-tl-lg z-20"></div>
				<div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-500/50 rounded-tr-lg z-20"></div>
				<div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500/50 rounded-bl-lg z-20"></div>
				<div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-500/50 rounded-br-lg z-20"></div>

				<div className="absolute bottom-6 left-6 right-6 z-20">
					<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 group-hover:border-yellow-500/50 group-hover:bg-black/80">
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

						<div className="w-full h-px bg-white/10 my-4 group-hover:bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-500"></div>

						<div className="flex items-center gap-4">
							<a
								href={member.instagram}
								target="_blank"
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-600 hover:text-black text-gray-300 transition-all duration-300 border border-transparent hover:border-yellow-400">
								<Instagram size={18} />
							</a>
							<a
								href={member.linkedin}
								target="_blank"
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white text-gray-300 transition-all duration-300 border border-transparent hover:border-blue-400">
								<Linkedin size={18} />
							</a>
							<div className="ml-auto">
								<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-900/30 to-black border border-yellow-600/30 group-hover:border-yellow-500/60 shadow-lg transition-all duration-300">
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

// --- 2. REGAL MEMBER CARD (Standard Team Design) ---
function RegalMemberCard({ member, index }: { member: any; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.05 }}
			className="group relative w-full h-[420px]">
			{/* Standard Border Glow */}
			<div className="absolute -inset-px bg-gradient-to-b from-yellow-600/0 via-yellow-600/0 to-yellow-600/0 rounded-lg group-hover:from-yellow-500 group-hover:via-yellow-300 group-hover:to-yellow-600 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-500"></div>

			<div className="relative h-full w-full rounded-lg overflow-hidden bg-[#050505] border border-white/10 group-hover:border-transparent transition-all duration-500">
				<div className="absolute inset-0 z-0 h-full w-full">
					<Image
						src={member.image}
						alt={member.name}
						fill
						className="object-cover transition-transform duration-700 grayscale-25 group-hover:grayscale-0 group-hover:scale-110 filter sepia-[0.3] group-hover:sepia-0 contrast-125"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
				</div>

				{member.dept && (
					<div className="absolute top-0 right-0 z-20">
						<div className="bg-yellow-600 text-black px-3 py-1.5 rounded-bl-xl font-bold border-l border-b border-yellow-300 shadow-lg">
							<span
								className={`${montserrat.className} text-[10px] uppercase tracking-widest flex items-center gap-1`}>
								{member.dept}
							</span>
						</div>
					</div>
				)}

				<div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-20">
					<div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out border-l-2 border-yellow-600/0 group-hover:border-yellow-500 pl-0 group-hover:pl-3">
						<h4
							className={`${cinzel.className} text-xl font-bold text-white group-hover:text-yellow-100 transition-colors`}>
							{member.name}
						</h4>
						<p
							className={`${montserrat.className} text-xs text-gray-400 mt-1 uppercase tracking-widest group-hover:text-yellow-500/80`}>
							Core Member
						</p>
					</div>

					<div className="h-0 overflow-hidden opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out">
						<div className="flex gap-4 pt-4 border-t border-white/10 mt-2">
							<a
								href={member.instagram}
								target="_blank"
								className="text-gray-400 hover:text-pink-500 transition-colors hover:scale-110">
								<Instagram size={18} />
							</a>
							<a
								href={member.linkedin}
								target="_blank"
								className="text-gray-400 hover:text-blue-500 transition-colors hover:scale-110">
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
			className="relative inline-block cursor-default"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{isHovered ? (
				<EncryptedText
					text={glitchText}
					className={`${cormorant.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600`}
					revealDelayMs={30}
					encryptedClassName="text-yellow-500/40"
					revealedClassName="text-yellow-400"
				/>
			) : (
				<h2
					className={`${cormorant.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_0_25px_rgba(250,204,21,0.4)]`}>
					{normalText}
				</h2>
			)}
		</div>
	);
}

// ==========================================
// --- MAIN PAGE ---
// ==========================================

export default function TeamPage() {
	return (
		<div
			className={`relative min-h-screen w-full bg-[#020202] text-[#e0e0e0] overflow-x-hidden ${cinzel.className}`}>
			{/* Background */}
			<div className="fixed bg-black inset-0 z-0 overflow-hidden pointer-events-none">
              
                <Image
                  src="/assets/home-bg.png"
                  alt="Background"
                  fill
                  priority
                  className="object-cover brightness-50 grayscale-50 blur-sm"
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
							className={`${montserrat.className} text-xs uppercase tracking-[0.25em] font-bold text-yellow-500/80`}>
							The Warriors
						</span>
					</div>
					<br />
					<GlitchHeader
						normalText="OUR TEAM"
						glitchText="MAHARATHIS"
					/>
					<p
						className={`${playfair.className} text-xl md:text-2xl text-gray-400 italic max-w-3xl mx-auto mt-4`}>
						"The Faces Behind the Phenomenon: Presenting you the JECLAT 2K26
						Core Team!"
					</p>
					<div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mt-8" />
				</motion.div>

				{/* Chief Coordinators */}
				<section className="mb-32">
					<div className="text-center mb-16">
						<h3
							className={`${rajdhani.className} text-3xl uppercase tracking-[0.2em] text-yellow-500 font-bold`}>
							Supreme Commanders
						</h3>
						<div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900 rounded-full mt-4 opacity-50"></div>
					</div>
					<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
					<div className="text-center mb-16">
						<h3
							className={`${rajdhani.className} text-3xl uppercase tracking-[0.2em] text-yellow-500 font-bold`}>
							Social Secretaries
						</h3>
						<div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900 rounded-full mt-4 opacity-50"></div>
					</div>
					<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
						<div className="flex items-center gap-4 mb-8 pl-4 border-l-4 border-yellow-600">
							<h3
								className={`${cormorant.className} text-4xl text-white font-bold`}>
								{team.category}
							</h3>
							<p
								className={`${rajdhani.className} text-sm text-yellow-600 uppercase tracking-[0.2em] mt-2`}>
								// {team.mahabharat}
							</p>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
					className="text-center mt-32 space-y-4">
					<div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent mb-8" />
					<p
						className={`${playfair.className} text-2xl md:text-3xl text-yellow-400/80 italic max-w-3xl mx-auto`}>
						"Together, we write the epic of JECLAT 2K26"
					</p>
					<div className="inline-flex items-center gap-2 text-yellow-600/60">
						<div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
						<span className={`${montserrat.className} text-sm tracking-widest`}>
							Jai JECLAT
						</span>
						<div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse" />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
