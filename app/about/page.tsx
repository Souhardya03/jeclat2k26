"use client";
import React from 'react'
import Image from 'next/image'
import { EncryptedText } from '@/components/ui/encrypted-text'
import { GlareCard } from '@/components/ui/glare-card';

function Page() {
  // Sponsor data
  const associateSponsors = [
    { name: 'pepsi', image: '/images/sponsorImages/pepsi.png' },
  ];

  const brandSponsors = [
    { name: 'chaat-puchka', image: '/images/sponsorImages/chaat-puchka.png' },
    { name: 'sbi', image: '/images/sponsorImages/sbi.png' },
    { name: 'globsyn', image: '/images/sponsorImages/globsyn.png' },
  ];

  // Previous sponsors divided into 3 rows
  const previousSponsorsRow1 = [
    { name: 'jagran', image: '/images/sponsorImages/jagran.svg' },
    { name: 'waiwai', image: '/images/sponsorImages/waiwai.svg' },
    { name: 'zebronics', image: '/images/sponsorImages/zebronics.png' },
    { name: 'the-statesman', image: '/images/sponsorImages/the-statesman.svg' },
    { name: 'asian-paints', image: '/images/sponsorImages/asian-paints.svg' },
    { name: 'bajaj', image: '/images/sponsorImages/bajaj.svg' },
    { name: 'big-bazaar', image: '/images/sponsorImages/big-bazaar.svg' },
    { name: 'dtdc', image: '/images/sponsorImages/dtdc.svg' },
  ];

  const previousSponsorsRow2 = [
    { name: 'hyundai', image: '/images/sponsorImages/hyundai.svg' },
    { name: 'indian-oil', image: '/images/sponsorImages/indian-oil.svg' },
    { name: 'internshala', image: '/images/sponsorImages/internshala.svg' },
    { name: 'kotak', image: '/images/sponsorImages/kotak.svg' },
    { name: 'ktm', image: '/images/sponsorImages/ktm.svg' },
    { name: 'monster', image: '/images/sponsorImages/monster.svg' },
    { name: 'pran', image: '/images/sponsorImages/pran.svg' },
    { name: 'radio-misti', image: '/images/sponsorImages/radio-misti.svg' },
  ];

  const previousSponsorsRow3 = [
    { name: 'red-bull', image: '/images/sponsorImages/red-bull.svg' },
    { name: 'vi', image: '/images/sponsorImages/vi.svg' },
    { name: 'svf', image: '/images/sponsorImages/svf.svg' },
    { name: 'city-life', image: '/images/sponsorImages/city-life.png' },
    { name: 'uttarbanga-sambad', image: '/images/sponsorImages/uttarbanga-sambad.png' },
    { name: 'volvo', image: '/images/sponsorImages/volvo.png' },
    { name: 'galaxy-music', image: '/images/sponsorImages/galaxy-music.png' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image - IMPROVED VISIBILITY */}
    <div className="absolute inset-0 z-0">
  <Image
    src="/home-bg.svg"
    alt="Background"
    fill
    className="object-cover scale-110"
    priority
    quality={100}
  />
</div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo */}
        

        {/* Main Heading */}
        <div className="mb-12 sm:mb-16 text-center relative">
          {/* Decorative top ornament */}
          <div className="flex justify-center mb-4">
            <div className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl animate-pulse">
              ✦ ━━━━━ ✦ ━━━━━ ✦
            </div>
          </div>
          
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-[0.2em] font-serif">
            {/* Ornamental left bracket */}
          
            
            {/* Main title with enhanced styling */}
             <div className="w-full text-center mb-8 sm:mb-12">
                <div className="flex justify-center items-center gap-4 sm:gap-6">
                  <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl animate-pulse">⟨══</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(250,204,21,1)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_90%)] font-serif tracking-[0.15em]">
                    ABOUT JECLAT
                  </h2>
                  <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl animate-pulse">══⟩</span>
                </div>
              </div>
            
            {/* Ornamental right bracket */}
          
          </h1>

          {/* Decorative bottom ornament */}
          <div className="flex justify-center mt-4">
            <div className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl animate-pulse">
              ✦ ━━━━━ ✦ ━━━━━ ✦
            </div>
          </div>
        </div>

        {/* Description Container with Encrypted Text */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="bg-black/70 backdrop-blur-md border-2 border-yellow-500/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(250,204,21,0.3)]">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-serif [text-shadow:_2px_2px_8px_rgb(0_0_0_/_100%)]">
                <EncryptedText
                  text="Experience JECLAT, renowned as The Queen of All Fests. A cultural extravaganza in North Bengal featuring a diverse array of events, from Music to Dance, creative writing to fashion shows, and showcases talents from local artists to nationwide celebrities!"
                  className="text-white"
                  encryptedClassName="text-yellow-600/30"
                  revealedClassName="text-white"
                  revealDelayMs={25}
                  charset="⚔️🏺🔱⚡🌟✨ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-="
                />
              </div>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>

              <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-serif [text-shadow:_2px_2px_8px_rgb(0_0_0_/_100%)]">
                <EncryptedText
                  text="Join JECLAT and be part of the over TEN THOUSAND young enthusiasts from around the region!"
                  className="text-white"
                  encryptedClassName="text-yellow-600/30"
                  revealedClassName="text-white"
                  revealDelayMs={30}
                  charset="⚔️🏺🔱⚡🌟✨ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 mb-20 animate-pulse [animation-duration:2s]">
          <button className="group relative px-12 py-4 sm:px-16 sm:py-5 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-extrabold text-xl sm:text-2xl md:text-3xl rounded-xl border-4 border-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.8)] hover:shadow-[0_0_60px_rgba(250,204,21,1)] transition-all duration-500 hover:scale-110 font-serif overflow-hidden active:scale-95 uppercase tracking-wider [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
            <span className="relative z-10 drop-shadow-lg">JECLAT IS ON</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/50 to-transparent"></div>
          </button>
        </div>

        {/* Three Larger Glare Cards */}
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center justify-center mb-20 px-4">
          {/* Card 1 - Events */}
          <GlareCard className="flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-md border-2 border-yellow-500/40">
            <div className="text-yellow-400 mb-6 animate-pulse">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 sm:w-24 sm:h-24"
              >
                <path
                  d="M3 9L7 9M7 9L7 5L9 3L11 5L11 9M7 9H11M11 9L15 9M15 9V5L17 3L19 5V9M15 9H19M19 9L21 9M5 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <h2 className="text-white font-bold text-5xl sm:text-6xl mb-3 font-serif drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              25+
            </h2>
            <p className="text-gray-300 text-xl sm:text-2xl font-serif">Events</p>
          </GlareCard>

          {/* Card 2 - Foot Followers */}
          <GlareCard className="flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-md border-2 border-yellow-500/40">
            <div className="text-yellow-400 mb-6 animate-pulse [animation-delay:0.3s]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 sm:w-24 sm:h-24"
              >
                <path
                  d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17C21 15.3431 18.7614 14 16 14M3 17C3 15.3431 5.23858 14 8 14M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14ZM16 11C16 9.34315 17.3431 8 19 8C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14C17.3431 14 16 12.6569 16 11ZM2 11C2 9.34315 3.34315 8 5 8C6.65685 8 8 9.34315 8 11C8 12.6569 6.65685 14 5 14C3.34315 14 2 12.6569 2 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <h2 className="text-white font-bold text-3xl sm:text-6xl mb-3 font-serif drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              10,000+
            </h2>
            <p className="text-gray-300 text-xl sm:text-2xl font-serif">Foot Followers</p>
          </GlareCard>

          {/* Card 3 - Prize Money */}
          <GlareCard className="flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-md border-2 border-yellow-500/40">
            <div className="text-yellow-400 mb-6 animate-pulse [animation-delay:0.6s]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 sm:w-24 sm:h-24"
              >
                <path
                  d="M12 8V16M8 12H16M3 7C3 5.89543 3.89543 5 5 5H7M3 7V17C3 18.1046 3.89543 19 5 19H7M3 7V17M21 7C21 5.89543 20.1046 5 19 5H17M21 7V17C21 18.1046 20.1046 19 19 19H17M21 7V17M7 5V3H17V5M7 19V21H17V19M7 5H17M7 19H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl sm:text-5xl mb-3 font-serif drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              HANDSOME
            </h3>
            <p className="text-gray-300 text-xl sm:text-2xl font-serif">Prize Money</p>
          </GlareCard>
        </div>

        {/* Elementary Section - Below Cards */}
        <div className="relative w-full max-w-7xl mx-auto mb-20 sm:mb-24">
          <div className="relative w-full min-h-[500px] sm:min-h-[600px] rounded-3xl overflow-hidden">
            {/* Elementary Background Image */}
          

            {/* Elementary Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-12 sm:py-16">
              {/* Elementary Title */}
              <div className="w-full text-center mb-8 sm:mb-12">
                <div className="flex justify-center items-center gap-4 sm:gap-6">
                  <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl animate-pulse">⟨══</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(250,204,21,1)] [text-shadow:_3px_3px_6px_rgb(0_0_0_/_90%)] font-serif tracking-[0.15em]">
                    ELEMENTARY
                  </h2>
                  <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl animate-pulse">══⟩</span>
                </div>
              </div>

              {/* Elementary Description - Moved slightly down */}
              <div className="w-full max-w-4xl mt-8 sm:mt-12">
                <p className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-serif [text-shadow:_2px_2px_8px_rgb(0_0_0_/_100%)] mb-8 sm:mb-10">
                  Embark on a digital odyssey with <span className="text-yellow-400 font-bold">JECLAT 2K24</span>'s pièce de résistance, the mind-boggling event of the fiesta - <span className="text-yellow-400 font-bold">Elementary!</span> Immerse yourself in the enigmatic world of mystery puzzles, code-cracking, and intricate level navigation. Elevate your prowess to claim the prestigious title of Super Sleuth. Are you ready to embrace the challenge and ascend as the next <span className="text-yellow-400 font-bold">Sherlock?</span>
                </p>
                
                {/* CTA Button */}
                <div className="flex justify-center">
                  <button className="group relative px-8 py-3 sm:px-10 sm:py-4 bg-black/80 text-white font-bold text-lg sm:text-xl md:text-2xl rounded-lg border-3 border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] transition-all duration-500 hover:scale-105 font-serif overflow-hidden active:scale-95 backdrop-blur-sm">
                    <span className="relative z-10">Are you ready? Watson!</span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="relative w-full mb-16 sm:mb-20">
          {/* Sponsors Background with Mahabharat Image - IMPROVED VISIBILITY */}
          <div className="relative w-full py-16 sm:py-20 overflow-hidden">
       
    

            {/* Sponsors Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
              {/* Title */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="flex justify-center items-center gap-4 sm:gap-6 mb-4">
                  <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl">══━━━</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(250,204,21,1)] font-serif tracking-wider">
                    OUR SPONSORS
                  </h2>
                  <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl">━━━══</span>
                </div>
                <p className="text-white text-lg sm:text-xl md:text-2xl font-serif tracking-wider [text-shadow:_2px_2px_8px_rgb(0_0_0_/_100%)]">
                  THANK YOU FOR BEING A CRUCIAL PART OF OUR JOURNEY!
                </p>
              </div>

              {/* Associate Sponsor */}
              <div className="mb-12 sm:mb-16">
                <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 font-serif tracking-wide">
                  Associate Sponsor
                </h3>
                <div className="flex justify-center">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:shadow-[0_0_60px_rgba(250,204,21,0.8)] transition-all duration-300 hover:scale-105 w-64 h-32 sm:w-80 sm:h-40 flex items-center justify-center">
                    <Image
                      src={associateSponsors[0].image}
                      alt={associateSponsors[0].name}
                      width={300}
                      height={150}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Sponsors */}
              <div className="mb-16 sm:mb-20">
                <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 font-serif tracking-wide">
                  Brand Sponsor
                </h3>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                  {brandSponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 sm:p-6 shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-105 w-48 h-28 sm:w-56 sm:h-32 flex items-center justify-center"
                    >
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous Sponsors - Three Rows with Infinite Scroll */}
              <div className="mb-8">
                <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-serif tracking-wide">
                  Previous Sponsors
                </h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Row 1 - Scrolling Left to Right */}
                  <div className="relative overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
                    
                    {/* Scrolling Content */}
                    <div className="flex animate-scroll-left">
                      {/* First set */}
                      <div className="flex gap-8 sm:gap-10 md:gap-12 shrink-0 px-6">
                        {previousSponsorsRow1.map((sponsor, index) => (
                          <div
                            key={`row1-first-${index}`}
                            className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center shrink-0"
                          >
                            <Image
                              src={sponsor.image}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                      
                      {/* Duplicate set for seamless loop */}
                      <div className="flex gap-8 sm:gap-10 md:gap-12 shrink-0 px-6">
                        {previousSponsorsRow1.map((sponsor, index) => (
                          <div
                            key={`row1-second-${index}`}
                            className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center shrink-0"
                          >
                            <Image
                              src={sponsor.image}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - Scrolling Right to Left */}
                  <div className="relative overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
                    
                    {/* Scrolling Content */}
                    <div className="flex animate-scroll-right">
                      {/* First set */}
                      <div className="flex gap-8 sm:gap-10 md:gap-12 shrink-0 px-6">
                        {previousSponsorsRow2.map((sponsor, index) => (
                          <div
                            key={`row2-first-${index}`}
                            className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center shrink-0"
                          >
                            <Image
                              src={sponsor.image}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                      
                      {/* Duplicate set for seamless loop */}
                      <div className="flex gap-8 sm:gap-10 md:gap-12 shrink-0 px-6">
                        {previousSponsorsRow2.map((sponsor, index) => (
                          <div
                            key={`row2-second-${index}`}
                            className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center shrink-0"
                          >
                            <Image
                              src={sponsor.image}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 3 - Scrolling Left to Right */}
                  <div className="relative overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
                    
                    {/* Scrolling Content */}
                    <div className="flex animate-scroll-left-slow">
                      {/* First set */}
                      <div className="flex gap-8 sm:gap-10 md:gap-12 shrink-0 px-6">
                        {previousSponsorsRow3.map((sponsor, index) => (
                          <div
                            key={`row3-first-${index}`}
                            className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center shrink-0"
                          >
                            <Image
                              src={sponsor.image}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                      
                      {/* Duplicate set for seamless loop */}
                      <div className="flex gap-8 sm:gap-10 md:gap-12 shrink-0 px-6">
                        {previousSponsorsRow3.map((sponsor, index) => (
                          <div
                            key={`row3-second-${index}`}
                            className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center shrink-0"
                          >
                            <Image
                              src={sponsor.image}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Glow Elements */}
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-40 h-40 sm:w-48 sm:h-48 opacity-30 animate-pulse [animation-duration:3s]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 blur-3xl"></div>
        </div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 opacity-30 animate-pulse [animation-duration:4s] [animation-delay:1s]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 blur-3xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 animate-pulse [animation-duration:5s]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 blur-[100px]"></div>
        </div>
      </div>

      {/* CSS for Infinite Scroll Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover,
        .animate-scroll-left-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Page