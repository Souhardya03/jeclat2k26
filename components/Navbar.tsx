'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const MahabharataNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Events', href: '/events', symbol: '⚔️' },
    { name: 'Socials', href: '/socials', symbol: '🪷' },
    { name: 'Memories', href: '/memories', symbol: '📿' },
    { name: 'Team', href: '/team', symbol: '🛡️' },
    { name: 'Elementary', href: '/elementary', symbol: '🕉️' },
    { name: 'Contact', href: '/contact', symbol: '🦚' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className={`relative transition-all duration-700 ${
          scrolled ? 'bg-slate-950/95' : 'bg-slate-950/90'
        } backdrop-blur-2xl border-b border-amber-700/30 shadow-2xl shadow-amber-950/50`}>
          
          {/* Intricate top border pattern */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/60 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(217, 119, 6, 0.3) 10px, rgba(217, 119, 6, 0.3) 11px)`,
            }}></div>
          </div>

          {/* Ornamental corner flourishes - Top */}
          <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600/20">
              <path d="M0,0 L30,0 C25,5 20,10 20,20 L20,30 L0,30 Z" fill="currentColor"/>
              <path d="M0,0 L20,0 L20,20 Z" fill="currentColor" opacity="0.5"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.8"/>
              <path d="M5,5 Q15,5 15,15" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6"/>
              <path d="M10,0 L10,10 M0,10 L10,10" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
            </svg>
          </div>
          
          <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600/20 scale-x-[-1]">
              <path d="M0,0 L30,0 C25,5 20,10 20,20 L20,30 L0,30 Z" fill="currentColor"/>
              <path d="M0,0 L20,0 L20,20 Z" fill="currentColor" opacity="0.5"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.8"/>
              <path d="M5,5 Q15,5 15,15" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6"/>
              <path d="M10,0 L10,10 M0,10 L10,10" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
            </svg>
          </div>

          <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
            <div className="flex items-center justify-between h-32 relative">
              
              {/* Left Navigation with ornamental frames */}
              <div className="hidden lg:flex items-center gap-3">
                {navItems.slice(0, 3).map((item, idx) => (
                  <NavLink
                    key={item.name}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    index={idx}
                  />
                ))}
              </div>

              {/* Majestic Center Logo */}
              <Link 
                href="/" 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
              >
                <div className="relative">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    
                    {/* Outer ornamental ring */}
                    <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
                      {/* Intricate mandala pattern */}
                      <circle cx="100" cy="100" r="95" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" opacity="0.4"/>
                      <circle cx="100" cy="100" r="90" stroke="url(#gradient1)" strokeWidth="0.3" fill="none" opacity="0.3"/>
                      
                      {/* Decorative points around the circle */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180);
                        const x1 = 100 + 85 * Math.cos(angle);
                        const y1 = 100 + 85 * Math.sin(angle);
                        const x2 = 100 + 95 * Math.cos(angle);
                        const y2 = 100 + 95 * Math.sin(angle);
                        return (
                          <g key={i}>
                            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#gradient1)" strokeWidth="0.8" opacity="0.5"/>
                            <circle cx={x2} cy={y2} r="1.5" fill="url(#gradient1)" opacity="0.6"/>
                          </g>
                        );
                      })}
                      
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#d97706" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="#f59e0b" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#d97706" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Middle decorative layer */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      {/* Octagonal frame with ornaments */}
                      <path 
                        d="M70,30 L130,30 L170,70 L170,130 L130,170 L70,170 L30,130 L30,70 Z" 
                        stroke="url(#gradient2)" 
                        strokeWidth="0.8" 
                        fill="none"
                        className="group-hover:stroke-amber-500/60 transition-all duration-700"
                        opacity="0.5"
                      />
                      <path 
                        d="M75,35 L125,35 L165,75 L165,125 L125,165 L75,165 L35,125 L35,75 Z" 
                        stroke="url(#gradient2)" 
                        strokeWidth="0.5" 
                        fill="none" 
                        opacity="0.3"
                      />
                      
                      {/* Corner flourishes */}
                      {[
                        {x: 70, y: 30, r: 0},
                        {x: 130, y: 30, r: 90},
                        {x: 170, y: 130, r: 180},
                        {x: 70, y: 170, r: 270}
                      ].map((pos, i) => (
                        <g key={i} transform={`translate(${pos.x},${pos.y}) rotate(${pos.r})`}>
                          <path d="M-5,-5 L-10,-5 L-10,-10 M-5,-5 Q-7,-7 -5,-10 Q-7,-7 -10,-5" 
                            stroke="url(#gradient2)" strokeWidth="0.5" fill="none" opacity="0.5"/>
                        </g>
                      ))}
                      
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#b45309"/>
                          <stop offset="50%" stopColor="#d97706"/>
                          <stop offset="100%" stopColor="#b45309"/>
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Inner glow circle */}
                    <div className="absolute inset-8 rounded-full bg-gradient-radial from-amber-600/20 via-amber-800/10 to-transparent group-hover:from-amber-500/30 transition-all duration-700"></div>

                    {/* Logo content */}
                    <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-700">
                      {/* Decorative top element */}
                      <div className="flex justify-center mb-2">
                        <svg className="w-12 h-3 text-amber-500/60" viewBox="0 0 60 15">
                          <path d="M0,7.5 Q15,0 30,7.5 Q45,15 60,7.5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                          <circle cx="30" cy="7.5" r="2" fill="currentColor" opacity="0.8"/>
                          <circle cx="15" cy="5" r="1" fill="currentColor" opacity="0.6"/>
                          <circle cx="45" cy="5" r="1" fill="currentColor" opacity="0.6"/>
                        </svg>
                      </div>

                      <div className="font-serif text-5xl tracking-[0.4em] mb-1"
                        style={{ 
                          fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
                          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0 2px 10px rgba(217, 119, 6, 0.4))',
                          fontWeight: 700
                        }}>
                        JECLA
                      </div>
                      
                      {/* Decorative divider */}
                      <div className="flex items-center justify-center gap-2 my-2">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-600/50"></div>
                        <div className="w-1 h-1 bg-amber-500/70 rounded-full"></div>
                        <div className="w-1 h-1 bg-amber-500/70 rounded-full"></div>
                        <div className="w-1 h-1 bg-amber-500/70 rounded-full"></div>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-600/50"></div>
                      </div>
                      
                      <div className="font-serif text-sm tracking-[0.6em] text-amber-500/80"
                        style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}>
                        MMXXV
                      </div>

                      {/* Decorative bottom element */}
                      <div className="flex justify-center mt-2">
                        <svg className="w-8 h-2 text-amber-500/60" viewBox="0 0 40 10">
                          <path d="M0,5 L15,5 M25,5 L40,5" stroke="currentColor" strokeWidth="0.5"/>
                          <circle cx="20" cy="5" r="1.5" fill="currentColor" opacity="0.8"/>
                        </svg>
                      </div>
                    </div>

                    {/* Ambient glow effects */}
                    <div className="absolute inset-0 bg-amber-600/5 blur-3xl rounded-full group-hover:bg-amber-500/10 transition-all duration-1000"></div>
                    <div className="absolute inset-4 bg-amber-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  </div>
                </div>
              </Link>

              {/* Right Navigation */}
              <div className="hidden lg:flex items-center gap-3">
                {navItems.slice(3).map((item, idx) => (
                  <NavLink
                    key={item.name}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    index={idx + 3}
                  />
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden relative w-14 h-14 flex items-center justify-center group">
                <div className="relative">
                  <div className="space-y-2">
                    <div className="w-7 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500 group-hover:from-amber-500 group-hover:to-amber-400 transition-all"></div>
                    <div className="w-7 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500 group-hover:from-amber-500 group-hover:to-amber-400 transition-all"></div>
                    <div className="w-7 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500 group-hover:from-amber-500 group-hover:to-amber-400 transition-all"></div>
                  </div>
                  <div className="absolute inset-0 bg-amber-600/20 blur-xl group-hover:bg-amber-500/30 transition-all"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Ornate bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/40 to-transparent"></div>
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(217, 119, 6, 0.2) 8px, rgba(217, 119, 6, 0.2) 10px, transparent 10px, transparent 18px, rgba(217, 119, 6, 0.4) 18px, rgba(217, 119, 6, 0.4) 19px)`,
            }}></div>
          </div>

          {/* Bottom corner flourishes */}
          <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600/20 scale-y-[-1]">
              <path d="M0,0 L30,0 C25,5 20,10 20,20 L20,30 L0,30 Z" fill="currentColor"/>
              <path d="M0,0 L20,0 L20,20 Z" fill="currentColor" opacity="0.5"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.8"/>
            </svg>
          </div>
          
          <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600/20 scale-[-1]">
              <path d="M0,0 L30,0 C25,5 20,10 20,20 L20,30 L0,30 Z" fill="currentColor"/>
              <path d="M0,0 L20,0 L20,20 Z" fill="currentColor" opacity="0.5"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
      `}</style>
    </>
  );
};

interface NavLinkProps {
  item: {
    name: string;
    href: string;
    symbol: string;
  };
  activeItem: string;
  setActiveItem: (name: string) => void;
  index: number;
}

const NavLink: React.FC<NavLinkProps> = ({ item, activeItem, setActiveItem, index }) => {
  const isActive = activeItem === item.name;

  return (
    <Link
      href={item.href}
      onClick={() => setActiveItem(item.name)}
      className="group relative"
    >
      <div className="flex flex-col items-center gap-2 px-4 py-2">
        
        {/* Ornamental icon container */}
        <div className="relative">
          {/* Outer decorative frame */}
          <svg className="absolute -inset-2 w-20 h-20" viewBox="0 0 80 80">
            {/* Diamond shape with ornaments */}
            <path 
              d="M40,10 L60,40 L40,70 L20,40 Z" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              fill="none"
              className={`transition-all duration-500 ${
                isActive 
                  ? 'text-amber-500/60' 
                  : 'text-amber-700/30 group-hover:text-amber-600/50'
              }`}
            />
            <path 
              d="M40,15 L55,40 L40,65 L25,40 Z" 
              stroke="currentColor" 
              strokeWidth="0.3" 
              fill="none"
              className={`transition-all duration-500 ${
                isActive 
                  ? 'text-amber-500/40' 
                  : 'text-amber-700/20 group-hover:text-amber-600/35'
              }`}
            />
            
            {/* Corner decorations */}
            {[[40,10], [60,40], [40,70], [20,40]].map((pos, i) => (
              <circle 
                key={i}
                cx={pos[0]} 
                cy={pos[1]} 
                r="1.5" 
                className={`transition-all duration-500 ${
                  isActive 
                    ? 'fill-amber-400/80' 
                    : 'fill-amber-600/40 group-hover:fill-amber-500/60'
                }`}
              />
            ))}
          </svg>

          {/* Icon circle */}
          <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
            isActive
              ? 'bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-amber-900/40 shadow-lg shadow-amber-600/20'
              : 'bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 group-hover:from-amber-900/30 group-hover:via-amber-800/20 group-hover:to-amber-900/30'
          }`}>
            
            {/* Inner decorative ring */}
            <div className={`absolute inset-1 rounded-full transition-all duration-500 ${
              isActive
                ? 'border border-amber-600/40'
                : 'border border-amber-800/20 group-hover:border-amber-700/35'
            }`}></div>

            {/* Symbol */}
            <span className={`text-3xl relative z-10 transition-all duration-500 ${
              isActive ? 'scale-110 filter drop-shadow-[0_0_8px_rgba(217,119,6,0.6)]' : 'group-hover:scale-105'
            }`}>
              {item.symbol}
            </span>

            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isActive
                ? 'bg-amber-600/10 blur-md'
                : 'bg-transparent group-hover:bg-amber-600/5 group-hover:blur-md'
            }`}></div>
          </div>
        </div>

        {/* Text label */}
        <div className="relative">
          <span className={`block font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
            isActive
              ? 'text-amber-400 font-semibold'
              : 'text-amber-700/70 group-hover:text-amber-500/90'
          }`}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: isActive ? 600 : 500 }}>
            {item.name}
          </span>
          
          {/* Decorative underline */}
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
          }`}>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MahabharataNavbar;