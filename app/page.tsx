"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MahabharatLoader from "./components/MahabharatLoader";
import HomePage from "./pages/Home";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds, then turn off loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading ? (
          // Show Loader
          <MahabharatLoader key="loader" />
        ) : (
          // Show Home Page
          <HomePage key="home" />
        )}
      </AnimatePresence>
    </main>
  );
}