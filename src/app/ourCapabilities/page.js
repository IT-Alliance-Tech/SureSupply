"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

// 🖼️ Import all images for each category
import dieCastingImg from "../../../public/resources/dummyr1.png";
import toolDesignImg from "../../../public/resources/dummyr1.png";
import machiningImg from "../../../public/resources/dummyr1.png";
import postCastingImg from "../../../public/resources/dummyr1.png";
import qualityImg from "../../../public/resources/dummyr1.png";

export default function CapabilitiesSection() {
  // 🔹 Category Data
  const categories = [
    {
      id: "dieCasting",
      title: "Die Casting",
      heading: "Capabilities of Die Casting Services",
      text: "Sure Supply Die Casting provides comprehensive capabilities that span the entire production cycle — from mold design to final finishing. Our precision-driven approach and advanced technologies ensure consistent performance and outstanding results across every batch.",
      image: dieCastingImg,
    },
    {
      id: "toolDesign",
      title: "Tool Design",
      heading: "Precision Tool Design",
      text: "Our experienced engineers design molds and tools with accuracy and efficiency, ensuring optimal performance and durability for every production run. We focus on precision engineering that reduces lead times and improves consistency.",
      image: toolDesignImg,
    },
    {
      id: "machining",
      title: "CNC Machining",
      heading: "Advanced Machining Capabilities",
      text: "With a wide range of CNC machining centers, we deliver precise and efficient component finishing to meet the tightest tolerances. Our machining team ensures seamless integration from casting to final assembly.",
      image: machiningImg,
    },
    {
      id: "postCasting",
      title: "Post Casting",
      heading: "Post Casting Operations",
      text: "Our post-casting operations include trimming, polishing, and surface treatments that enhance both function and finish. We guarantee components that meet cosmetic and dimensional requirements.",
      image: postCastingImg,
    },
    {
      id: "quality",
      title: "Quality Assurance",
      heading: "Quality You Can Rely On",
      text: "Every component undergoes rigorous quality checks and inspections using advanced testing methods. Sure Supply’s commitment to quality ensures consistent results in every batch.",
      image: qualityImg,
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="bg-white text-[#0A175C] py-20 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - CATEGORY BOX */}
        <div className="lg:w-1/3">
          <div className="border rounded-2xl shadow-md p-6 space-y-5 bg-[#F9FAFB]">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Capabilities Category
            </h2>

            <div className="flex flex-col space-y-3 text-lg">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left transition-colors duration-200 ${
                    activeCategory.id === cat.id
                      ? "font-semibold text-[#F05023]"
                      : "hover:text-[#F05023]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT AREA */}
        <div className="lg:w-2/3 space-y-6 flex flex-col justify-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              {activeCategory.heading}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {activeCategory.text}
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F05023",
                "&:hover": { backgroundColor: "#d9431e" },
                textTransform: "none",
                borderRadius: "8px",
                paddingX: "24px",
              }}
            >
              Learn More
            </Button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md mt-6">
            <Image
              src={activeCategory.image}
              alt={activeCategory.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
