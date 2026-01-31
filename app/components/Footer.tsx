import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="relative backdrop-blur-2xl bg-gradient-to-b from-[#0a0e27]/100 via-[#1a1f3a]/100 to-[#0f1629]/90 border-t border-yellow-600/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* Ornate Corners */}
      
      
      <div className="absolute top-5 left-5 w-12 h-12 border-t-2 border-l-2 border-yellow-600/40 pointer-events-none animate-pulse" />
      <div className="absolute top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-yellow-600/40 pointer-events-none animate-pulse" />
      <div className="absolute bottom-5 left-5 w-12 h-12 border-b-2 border-l-2 border-yellow-600/40 pointer-events-none animate-pulse" />
      <div className="absolute bottom-5 right-5 w-12 h-12 border-b-2 border-r-2 border-yellow-600/40 pointer-events-none animate-pulse" />

      {/* Animated Top Border */}
      <div className="absolute top-full left-0 right-0 h-0.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
      </div>

      {/* Enhanced Pattern Background Overlay */}
     

      <div className="max-w-7xl mx-auto px-3 py-5 relative z-10">
        {/* Main Content - Centered */}
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          
          {/* Logo and Title Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Decorative Chakra */}
              <div className="relative w-20 h-20 backdrop-blur-md bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-full p-3 border border-yellow-600/30 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <svg 
                  className="w-full h-full text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ animation: 'spin 20s linear infinite' }}
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="2" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                  <line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                  <circle cx="50" cy="50" r="5" fill="#0a0e27" />
                </svg>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 font-cinzel drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] mb-2">
                  JECLAT 2024
                </h3>
                <div className="h-0.5 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl backdrop-blur-sm px-4 py-2 rounded-lg bg-black/20">
              The Largest Annual Cultural Festival of North Bengal, celebrating the epic saga of <span className="text-yellow-500 font-semibold">Mahabharata</span> through art, culture, and heritage.
            </p>
            
            {/* Sanskrit Verse */}
            <div className="backdrop-blur-md bg-gradient-to-br from-yellow-600/10 to-yellow-800/10 border border-yellow-600/30 rounded-lg px-8 py-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <p className="text-yellow-500 font-cinzel text-xl md:text-2xl italic mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]">
                "धर्मक्षेत्रे कुरुक्षेत्रे"
              </p>
              <p className="text-gray-400 text-sm md:text-base">Dharma Kshetra, Kuru Kshetra</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600/50" />
                <svg className="w-4 h-4 text-yellow-600/50" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600/50" />
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-yellow-500 mb-4 font-cinzel drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
              Follow the Journey
            </h5>
            <div className="flex space-x-6 justify-center">
              {/* Facebook */}
              <Link 
                href="#" 
                className="group relative w-12 h-12 rounded-full backdrop-blur-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center border border-yellow-600/40 hover:scale-125 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.6)] hover:border-yellow-500"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                <svg className="w-6 h-6 text-yellow-500 relative z-10 group-hover:text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link 
                href="#" 
                className="group relative w-12 h-12 rounded-full backdrop-blur-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center border border-yellow-600/40 hover:scale-125 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.6)] hover:border-yellow-500"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                <svg className="w-6 h-6 text-yellow-500 relative z-10 group-hover:text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link 
                href="#" 
                className="group relative w-12 h-12 rounded-full backdrop-blur-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center border border-yellow-600/40 hover:scale-125 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.6)] hover:border-yellow-500"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                <svg className="w-6 h-6 text-yellow-500 relative z-10 group-hover:text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Divider */}
        <div className="relative my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-gradient-to-r from-[#0f1629]/90 via-[#0f1629]/50 to-[#0f1629]/90 px-10">
            <svg className="w-10 h-10 text-yellow-600/60 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="1" />
              <path d="M12 2 L12 22 M2 12 L22 12" strokeWidth="1" />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
        </div>
        
      
      </div>
      
   
    </footer>
  );
};

export default Footer;