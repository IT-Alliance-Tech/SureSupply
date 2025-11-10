// components/Testimonials.js
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    company: "Sharma Traders",
    quote: "SureSupply ne hamare supply chain ko bahut hi aasaan aur tezi se chalne layak banaya hai.",
  },
  {
    name: "Priya Kapoor",
    company: "Kapoor Industries",
    quote: "Platform user-friendly hai aur humare orders ab bahut hi smooth track hote hain.",
  },
  {
    name: "Amit Singh",
    company: "Singh & Sons",
    quote: "Excellent support aur timely delivery ne hamare kaam ko bahut simplify kiya hai.",
  },
  {
    name: "Neha Reddy",
    company: "Reddy Enterprises",
    quote: "Reliable system hai jo humare har week ka kaam kaafi easy kar deta hai.",
  },
  {
    name: "Manoj Gupta",
    company: "Gupta Corporation",
    quote: "Main sureSupply ko har business ke liye recommend karunga jo apna supply process simplify karna chahta hai.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { name, company, quote } = testimonials[currentIndex];

  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 font-lato">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 font-outfit text-center relative">
        <span className="text-[#0A175C]">Supplier</span>{" "}
        <span className="text-[#F05023]">Testimonials</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-[#F05023] rounded-full"></span>
      </h2>

      <div className="relative flex items-center">
        {/* Left Arrow - hidden on small screens */}
        <button
          onClick={prevTestimonial}
          className="absolute left-[-150px] w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full text-xl font-bold hover:bg-[#F05023] hover:text-white transition z-20 hidden sm:flex"
        >
          &lt;
        </button>

        {/* Motion container - mobile: smaller, sm+: original desktop size */}
        <div className="w-72 h-64 sm:w-96 sm:h-80 overflow-hidden relative">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center w-72 h-64 sm:w-96 sm:h-80 absolute"
            >
              {/* Initial - slightly smaller on mobile */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F05023] text-white flex items-center justify-center rounded-full text-xl sm:text-2xl font-bold mb-4 flex-shrink-0">
                {getInitials(name)}
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>

              {/* Company */}
              <p className="text-sm text-gray-500 mb-3 sm:mb-4">{company}</p>

              {/* Quote */}
              <p className="text-gray-700 text-base sm:text-lg italic flex-grow">{`"${quote}"`}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow - hidden on small screens */}
        <button
          onClick={nextTestimonial}
          className="absolute right-[-150px] w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full text-xl font-bold hover:bg-[#F05023] hover:text-white transition z-20 hidden sm:flex"
        >
          &gt;
        </button>
      </div>

      {/* Dots - hidden on small screens */}
      <div className="flex space-x-2 mt-6 hidden sm:flex">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-[#F05023]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
