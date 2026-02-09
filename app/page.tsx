"use client";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function BirthdayPage() {
  // Trigger confetti on load
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#ffd700"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#ffd700"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleManualConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center text-white p-4">
      {/* Animated Floating Balloons/Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20], opacity: [0.4, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20], opacity: [0.3, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase mb-2">
          It's a special day
        </h2>

        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-yellow-400 to-orange-500">
          SURAJ
        </h1>

        <div className="mt-8 space-y-4">
          <p className="text-xl md:text-2xl font-medium max-w-lg mx-auto leading-relaxed">
            Wishing you a year filled with adventure, success, and all the
            happiness you deserve! Cheers to another great year! Wishing you joy
            and good cheer. Happy birthday, you special soul, May happiness be
            your goal.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleManualConfetti}
          className="mt-12 px-8 py-4 bg-white text-purple-900 font-bold rounded-full shadow-2xl hover:bg-yellow-400 transition-colors duration-300"
        >
          Click for happiness 🎉
        </motion.button>
      </motion.div>

      <footer className="absolute bottom-8 text-sm opacity-60">
        Made with ❤️ for Suraj
      </footer>
    </main>
  );
}
