"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  // 🎞 Video URLs
  const videos = [
    "https://res.cloudinary.com/drqsy21yw/video/upload/v1761647355/welding_kijyqz.mp4",
    "https://res.cloudinary.com/drqsy21yw/video/upload/v1761647829/foundry_zybgbv.mp4",
    "https://res.cloudinary.com/drqsy21yw/video/upload/v1761648071/video3.mov_xu8e90.mp4",
    "https://res.cloudinary.com/drqsy21yw/video/upload/v1761648109/video4_uxgiua.mp4",
  ];

  const words = ["Simple", "Reliable", "Future Ready"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  // 🔄 Cycle through videos every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  // ⚙️ Preload next video
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo && nextVideo.readyState === 0) {
      nextVideo.load();
    }
  }, [currentIndex, videos.length]);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative w-full h-[650px] flex items-center justify-start overflow-hidden">
      {/* ===== Background Videos (fade + rotate animation) ===== */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentIndex}
            ref={(el) => (videoRefs.current[currentIndex] = el)}
            src={videos[currentIndex]}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, rotate: 5, scale: 5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -5, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-10 lg:px-24 py-20 max-w-2xl">
        <h1 className="text-white text-5xl lg:text-6xl font-bold leading-snug">
          Manufacturing
          <br />
          Made{" "}
          <span className="text-[#F05023] inline-block w-[200px] whitespace-nowrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                variants={wordVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              >
                {words[currentIndex % words.length]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Button */}
        <motion.button
          onClick={() => {
            const element = document.getElementById("quoteForm");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 bg-[#F05023] text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(240, 80, 35, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{`Let's Talk`}</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#F05023] to-[#ff7849] opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </section>
  );
}
