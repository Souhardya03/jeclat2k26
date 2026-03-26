"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Import Next Image
import MahabharatLoader from "../../components/MahabharatLoader";
import HomePage from "../pages/Home";

export default function Page() {
  const [isImageReady, setIsImageReady] = useState(false);
  const [isTimerDone, setIsTimerDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimerDone(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Show Home only when both conditions are met
  const showContent = isTimerDone && isImageReady;

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <MahabharatLoader key="loader" />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRELOADER: This renders the Next.js Image immediately.
          'priority' tells Next.js to preload it in the head.
          'onLoad' triggers once the optimized image is ready
      */}
      {!showContent && (
        <div className="invisible absolute h-0 w-0 overflow-hidden">
          <Image
            src="/assets/home-bg.png" // Replace with your actual path
            alt="Preload Hero"
            width={1920}
            height={1080}
            priority
            onLoad={() => setIsImageReady(true)}
          />
        </div>
      )}
    </main>
  );
}