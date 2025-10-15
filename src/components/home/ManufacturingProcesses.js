"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ✅ Full background image
import sectionBg from "../../../public/bg2.png";

// ✅ Card images (optional placeholders)
import dummy from "../../../public/dummy2.png";

// Individual Card component
function Card({ title, image, imgWidth = 80, imgHeight = 80, minHeight = 200 }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-4 text-left text-white"
      style={{ minHeight: `${minHeight}px` }} // ✅ flexible card height
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-[#1E2A5E]/85 -z-10" />

      {/* Optional faint center icon/image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src={image}
          alt={title}
          width={imgWidth}
          height={imgHeight}
          className="object-contain"
        />
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>

      <motion.button
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-4 flex items-center text-orange-500 hover:text-orange-400 font-medium group"
      >
       {` Learn`}
        <ArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </div>
  );
}

export default function OurExpertise() {
  return (
    <section className="relative py-16 overflow-hidden"> {/* ✅ Reduced padding */}
      {/* Full background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={sectionBg}
          alt="Background gears"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10"> {/* ✅ Reduced margin-bottom */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0A175C" }}
          >
           {` Our `}<span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            {`Explore our advanced manufacturing capabilities designed to meet
            your unique production needs.`}
          </p>
        </div>

        {/* Flex columns layout: 2-3-2 */}
        <div className="flex gap-6 max-w-6xl mx-auto">
          {/* Column 1 - 2 cards */}
          <div className="flex flex-col gap-6 flex-1">
            <Card
              title="Casting"
              image={dummy}
              imgWidth={70}
              imgHeight={70}
              minHeight={300}
            />
            <Card
              title="Forging"
              image={dummy}
              imgWidth={80}
              imgHeight={80}
              minHeight={265}
            />
          </div>

          {/* Column 2 - 3 cards */}
          <div className="flex flex-col gap-6 flex-1">
            <Card
              title="Fabrication"
              image={dummy}
              imgWidth={90}
              imgHeight={90}
              minHeight={180}
            />
            <Card
              title="Sheet Metal Stamping"
              image={dummy}
              imgWidth={70}
              imgHeight={70}
              minHeight={180}
            />
            <Card
              title="Injection Molding"
              image={dummy}
              imgWidth={80}
              imgHeight={80}
              minHeight={180}
            />
          </div>

          {/* Column 3 - 2 cards */}
          <div className="flex flex-col gap-6 flex-1">
            <Card
              title="CNC Machining"
              image={dummy}
              imgWidth={80}
              imgHeight={80}
              minHeight={265}
            />
            <Card
              title="Rapid Prototyping"
              image={dummy}
              imgWidth={70}
              imgHeight={70}
              minHeight={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
