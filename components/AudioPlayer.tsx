"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/assets/background-song.mp3");
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }

    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsMuted(false))
          .catch(() => setIsMuted(true));
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  // Animation: Slide Up/Down Transition
  const slideVariants = {
    initial: { y: 50, opacity: 0, scale: 0.5 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -50, opacity: 0, scale: 0.5 },
  };

  // Animation: Rhythmic Throb (Only for playing state)
  const beatVariants = {
    animate: {
      scale: [1, 1.15, 1],
      rotate: [0, -5, 5, 0], // Slight wiggle
      filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
      transition: {
        duration: 0.8, // 0.8s = approx 75 BPM beat
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed bottom-2 right-2 z-50">
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-20 h-20 cursor-pointer bg-transparent outline-none flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          {isMuted ? (
            // STATE: MUTED (Cassette)
            <motion.div
              key="muted"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/assets/cassette-tape.png"
                alt="Muted"
                width={64}
                height={64}
                className="object-contain drop-shadow-md opacity-80 grayscale-[0.5]"
              />
            </motion.div>
          ) : (
            // STATE: PLAYING (Recorder)
            <motion.div
              key="playing"
              variants={slideVariants}
              initial="initial"
              animate="animate" // Step 1: Slide in
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Nested div for the continuous beat animation */}
              <motion.div
                animate="animate" // Step 2: Start dancing
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/assets/tape-recorder.png"
                  alt="Playing"
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}