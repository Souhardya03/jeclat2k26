"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/background-song.mp3");
    audio.loop = true;
    audioRef.current = audio;
    audio.volume = 0.2

    const timer = setTimeout(() => {
      audio.play().then(() => setIsMuted(false)).catch(() => {});
    }, 2000);

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.play();
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <button onClick={toggleMute} className="fixed cursor-pointer bottom-6 right-6 z-100">
       <Image 
         src={isMuted ? "/assets/cassette-tape.png" : "/assets/tape-recorder.png"} 
         alt="Audio Toggle" 
         width={64} 
 height={64} 
       />
    </button>
  );
}