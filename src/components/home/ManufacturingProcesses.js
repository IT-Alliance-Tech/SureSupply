"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ✅ Section background (light gears)
import sectionBg from "../../../public/bg2.png";

// ✅ Individual process card images
import castingImg from "../../../public/dummy2.png";
import forgingImg from "../../../public/dummy2.png";
import fabricationImg from "../../../public/dummy2.png";
import sheetMetalImg from "../../../public/dummy2.png";
import injectionImg from "../../../public/dummy2.png";
import cncImg from "../../../public/dummy2.png";
import rapidImg from "../../../public/dummy2.png";

// ✅ Data with individual image for each card
const processes = [
  { title: "Casting", image: castingImg },
  { title: "Forging", image: forgingImg },
  { title: "Fabrication", image: fabricationImg },
  { title: "Sheet Metal Stamping", image: sheetMetalImg },
  { title: "Injection Molding", image: injectionImg },
  { title: "CNC Machining", image: cncImg },
  { title: "Rapid Prototyping", image: rapidImg },
];

export default function ManufacturingProcesses() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* ✅ Light background for the section */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={sectionBg}
          alt="Background gears"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* ✅ Heading */}
       <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0A175C" }}>
  Our manufacturing <span className="text-orange-500">processes</span>
</h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our advanced manufacturing capabilities designed to meet your
          unique production needs.
        </p>

        {/* ✅ Grid of process cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {processes.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all min-h-[240px] flex flex-col justify-between p-6 text-white"
            >
              {/* Unique background for each card */}
              <Image
                src={item.image}
                alt={`${item.title} background`}
                fill
                className="object-cover opacity-30 -z-20"
              />

              {/* Blue overlay */}
              <div className="absolute inset-0 bg-[#1E2A5E]/95 -z-10" />

              {/* Card content */}
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <div className="mt-4">
                <button className="flex items-center text-orange-500 hover:text-orange-400 font-medium group">
                  Learn
                  <ArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
