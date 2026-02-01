"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin } from 'lucide-react';
import { Cinzel, Rozha_One } from 'next/font/google';
import Image from 'next/image';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const rozhaOne = Rozha_One({ subsets: ['devanagari'], weight: ['400'] });

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-[#020617] text-gray-300 overflow-hidden border-t border-yellow-900/30">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] to-black z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay z-0"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-yellow-600/10 blur-[100px] rounded-full z-0"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* COL 1: BRAND & MANTRA (Span 5) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-6">
             {/* Logo Area */}
             <div className="flex items-center gap-4">
               <Image src="/assets/logo.png" alt='' width={100} height={100} className="drop-shadow-lg object-cover"/>
               <div>
                  <Image src="/assets/jeclatfont.svg" alt='' width={150} height={150}/>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-yellow-500/60 font-bold mt-1">The Royal Saga • 2026</p>
               </div>
             </div>

             {/* HINDI Quote Box */}
             <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl w-full max-w-md group hover:border-yellow-600/30 transition-colors">
                <div className="absolute -top-4 -left-2 text-5xl text-yellow-600/20 font-serif">❝</div>
                
                {/* The Hindi Verse */}
                <p className={`${rozhaOne.className} text-yellow-100/90 text-2xl text-center mb-3 leading-snug drop-shadow-md`}>
                  यदा यदा हि धर्मस्य<br/> ग्लानिर्भवति भारत ।
                </p>

                <div className="h-px w-20 bg-yellow-600/30 mx-auto my-3 group-hover:w-32 transition-all duration-500"></div>
                
                <p className="text-xs text-center text-gray-500 uppercase tracking-widest font-medium">The Eternal Promise</p>
             </div>
          </div>


          {/* COL 2: NAVIGATION (Span 3) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-6 pt-4">
             <h3 className={`${cinzel.className} text-xl text-yellow-500 font-bold flex items-center gap-2`}>
                <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_gold]"></span>
                Realm
             </h3>
             <ul className="space-y-3 w-full flex flex-col items-center md:items-start">
                {['Events', 'Gallery', 'Sponsors', 'Our Team', 'Privacy Policy'].map((item) => (
                   <li key={item}>
                      <Link href="#" className="relative group flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-200 transition-colors">
                         <span className="w-0 group-hover:w-4 h-px bg-yellow-500 transition-all duration-300"></span>
                         {item}
                      </Link>
                   </li>
                ))}
             </ul>
          </div>


          {/* COL 3: CONTACT & LOCATION (Span 4) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6 pt-4">
             <h3 className={`${cinzel.className} text-xl text-yellow-500 font-bold flex items-center gap-2`}>
                <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_gold]"></span>
                Contact
             </h3>
             
             <div className="space-y-4 w-full">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default">
                   <MapPin className="text-yellow-600 shrink-0 group-hover:text-yellow-400 transition-colors mt-1" size={20} />
                   <div>
                      <h4 className="text-yellow-100 text-sm font-bold mb-1 group-hover:text-white transition-colors">Jalpaiguri Govt. Engg. College</h4>
                      <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400">Jalpaiguri, West Bengal - 735102</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                   <Mail className="text-yellow-600 shrink-0 group-hover:text-yellow-400 transition-colors" size={20} />
                   <a href="mailto:contact@jeclat.in" className="text-sm text-gray-400 group-hover:text-white transition-colors">admin@jeclat2k26.in</a>
                </div>
             </div>
          </div>

        </div>


        {/* --- DIVIDER --- */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-900/40 to-transparent mb-12"></div>


        {/* --- BOTTOM SECTION: SOCIALS & COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           
           {/* COPYRIGHT */}
           <div className="text-center md:text-left">
              <p className="text-xs text-gray-600">
                 © 2026 JECLAT. All rights reserved. <br/>
                 <span className="opacity-50">Forged with 🔥 by the Jeclat Team.</span>
              </p>
           </div>

           {/* GLASS SOCIAL ICONS */}
           <div className="flex items-center gap-4">
              <SocialIcon icon={<Facebook size={20} />} href="#" />
              <SocialIcon icon={<Instagram size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Youtube size={20} />} href="#" />
           </div>

        </div>

      </div>
    </footer>
  );
};

// --- GLASSMORPHISM SOCIAL ICON COMPONENT ---
const SocialIcon = ({ icon, href }: { icon: any, href: string }) => {
  return (
    <Link 
      href={href}
      className="group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-lg group-hover:bg-yellow-500/10 group-hover:border-yellow-500/50 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 text-gray-400 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
    </Link>
  );
}

export default Footer;