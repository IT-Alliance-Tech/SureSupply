"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import costImg from "../../../public/dummy3.png";
import leadTimeImg from "../../../public/dummy3.png";
import qualityImg from "../../../public/dummy3.png";
import capabilitiesImg from "../../../public/dummy3.png";
import ecosystemImg from "../../../public/dummy3.png";
import servicesImg from "../../../public/dummy3.png";

const tabsData = [
  { key: "Cost", title: "Cost", heading: "Lower manufacturing expenses", desc: "Optimize your production budget with our efficient sourcing strategies.", image: costImg },
  { key: "LeadTime", title: "Lead Time", heading: "Faster delivery and responsiveness", desc: "Our supplier ecosystem ensures minimal lead time for critical components.", image: leadTimeImg },
  { key: "Quality", title: "Quality", heading: "No compromise in quality & compliance", desc: "Strict supplier compliance and total quality checks before dispatch.", image: qualityImg },
  { key: "Capabilities", title: "Capabilities", heading: "Enhanced manufacturing capabilities", desc: "Flexible and scalable production for every requirement.", image: capabilitiesImg },
  { key: "Ecosystem", title: "Ecosystem", heading: "Integrated supplier ecosystem", desc: "Collaboration between suppliers and customers for efficiency.", image: ecosystemImg },
  { key: "Services", title: "Services", heading: "Comprehensive services", desc: "End-to-end support for your entire supply chain journey.", image: servicesImg },
];

export default function WhySureSupply1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % tabsData.length);
        setFade(true); // fade in new heading
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[850px] md:h-[700px] lg:h-[650px] px-6 md:px-16 lg:px-24 bg-white flex flex-col justify-center pt-16 md:pt-24 pb-12">
      {/* Section Heading */}
      <div className="text-left mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#0A175C" }}>
          Why <span className="text-[#F05023]">Sure Supply</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl text-base md:text-lg">
          Transforming manufacturing challenges into strategic opportunities with innovative solutions and end-to-end support.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex h-full gap-8 items-center">
        {/* Left Heading */}
        <div className="w-[55%] flex justify-center items-center">
          <h3
            className={`text-4xl md:text-5xl font-extrabold transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            style={{ color: "#0A175C" }}
          >
            {tabsData[activeIndex].title}
          </h3>
        </div>

        {/* Right Content */}
        <div className="w-[45%] flex flex-col justify-between h-full">
          <div className="relative w-full h-[60%] md:h-[65%] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={tabsData[activeIndex].image}
              alt={tabsData[activeIndex].title}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-md text-gray-500 font-medium">{tabsData[activeIndex].title}</p>
            <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0A175C" }}>
              {tabsData[activeIndex].heading}
            </h3>
            <p className="text-gray-700 text-base md:text-lg">{tabsData[activeIndex].desc}</p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-[#F05023] text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-[#d9441d] transition duration-300"
            >
              Get Quote Now →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-6">
        {tabsData.map((tab) => (
          <div key={tab.key} className="border rounded-xl shadow-lg overflow-hidden">
            <div className="w-full text-left px-6 py-5 font-semibold text-[#0A175C] text-lg">
              {tab.title}
            </div>
            <div className="px-6 pb-6">
              <div className="relative w-full h-48 mb-4 flex items-center justify-center">
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  className="object-contain rounded-xl shadow-md"
                />
              </div>
              <p className="text-sm text-gray-500 mb-1">{tab.title}</p>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#0A175C" }}>
                {tab.heading}
              </h3>
              <p className="text-gray-700 mb-2">{tab.desc}</p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-[#F05023] text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-[#d9441d] transition duration-300"
              >
                Get Quote Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
