"use client";

import Image from "next/image";
import { useState } from "react";

import bgImage from "../../../public/about/aboutbg2.png";

export default function HomeJourney() {
  const timeline = [
    {
      year: "2018",
      text: "Founded with a bold vision to revolutionize global supply networks",
    },
    {
      year: "2019",
      text: "Expanded operations across multiple international sectors",
    },
    {
      year: "2021",
      text: "Launched groundbreaking digital platform transforming logistics",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const next = () => {
    setActiveIndex((prev) => (prev < timeline.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgImage} alt="Journey background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0A175C]/90"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2 opacity-90 font-lato">Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-outfit">
          OUR GROWTH AND TRANSFORMATION
        </h2>
        <p className="text-gray-200 mb-8 font-lato">
          A decade of innovation and global expansion
        </p>

        {/* Button */}
        <button className="border border-white text-white text-sm font-lato font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-[#0A175C] transition">
          Get Instant Quote
        </button>

        {/* Timeline */}
        <div className="relative mt-16 flex items-center justify-center flex-col sm:flex-row">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-md mb-4 sm:mb-0 sm:mr-4 transition"
          >
            &#8592;
          </button>

          {/* Timeline Bar */}
          <div className="flex items-center justify-between w-full max-w-4xl border-t border-gray-400 relative">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center mt-8 transition-all ${
                  index === activeIndex ? "scale-105" : "scale-95"
                }`}
                style={{ flex: 1 }}
              >
                <div
                  className={`w-4 h-4 rounded-full -mt-[10px] transition-colors ${
                    index === activeIndex ? "bg-white" : "bg-gray-400"
                  }`}
                ></div>
                <h3 className="text-xl font-bold mt-6 font-outfit">{item.year}</h3>
                <p className="text-gray-300 text-sm mt-2 max-w-[220px] font-lato">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-md mt-4 sm:mt-0 sm:ml-4 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
