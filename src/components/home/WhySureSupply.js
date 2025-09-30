// components/WhySureSupply.js
"use client";

import { useState } from "react";
import Image from "next/image";

// Import images (replace with actual images)
import costImg from "../../../public/dummyimg.png";
import leadTimeImg from "../../../public/dummyimg.png";
import qualityImg from "../../../public/dummyimg.png";
import capabilitiesImg from "../../../public/dummyimg.png";
import ecosystemImg from "../../../public/dummyimg.png";
import servicesImg from "../../../public/dummyimg.png";

const tabsData = [
  {
    key: "Cost",
    title: "Cost",
    heading: "Best Manufacturing Cost",
    points: [
      "Optimized supplier base ensures competitive pricing without compromising reliability.",
      "Smart allocation of orders maximizes efficiency and reduces hidden overheads.",
    ],
    image: costImg,
  },
  {
    key: "LeadTime",
    title: "Lead Time",
    heading: "Lower Lead Time",
    points: [
      "Agile supplier network enables faster turnaround from RFQ to delivery.",
      "Proactive production planning and digital tracking minimize delays and bottlenecks.",
    ],
    image: leadTimeImg,
  },
  {
    key: "Quality",
    title: "Quality",
    heading: "No Compromise in Quality & Compliance",
    points: [
      "Compliance management guarantees parts are manufactured exactly from the supplier who fulfills required customer compliance.",
      "Total Quality Management (TQM) checks every order before dispatch for absolute reliability.",
    ],
    image: qualityImg,
  },
  {
    key: "Capabilities",
    title: "Capabilities",
    heading: "Manufacturing Capabilities & Flexibility",
    points: [
      "From prototypes to bulk production, we adapt to every scale of requirement.",
      "Wide process coverage and multi-partner capacity ensure consistent supply, even during demand spikes.",
    ],
    image: capabilitiesImg,
  },
  {
    key: "Ecosystem",
    title: "Ecosystem",
    heading: "Ecosystem Building",
    points: [
      "Customers and suppliers receive end-to-end support, beyond just part delivery.",
      "Our integrated ecosystem includes sourcing, quality assurance & compliance, logistics, and continuous collaboration.",
    ],
    image: ecosystemImg,
  },
  {
    key: "Services",
    title: "Services",
    heading: "Comprehensive Services",
    points: [
      "End-to-end supply chain solutions.",
      "Dedicated support for every stage of your project.",
    ],
    image: servicesImg,
  },
];

export default function WhySureSupply() {
  const [activeTab, setActiveTab] = useState("Cost");
  const activeContent = tabsData.find((tab) => tab.key === activeTab);

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      {/* Main Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        style={{ color: "#0A175C" }}
      >
        Why <span className="text-[#F05023]">Sure Supply</span>
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        We transform manufacturing challenges into strategic opportunities
        through innovative solutions and comprehensive support.
      </p>

      {/* Tabs and Content Wrapper */}
      <div className="border rounded-xl overflow-hidden shadow-sm">
        {/* Tabs */}
        <div className="flex border-b">
          {tabsData.map((tab, index) => (
            <button
              key={tab.key}
              className={`flex-1 px-6 py-4 font-semibold text-center transition
                ${
                  activeTab === tab.key
                    ? "text-[#0A175C] border-b-2 border-[#0A175C]"
                    : "text-gray-600 hover:text-[#0A175C]"
                }
                ${index !== 0 ? "border-l" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 items-center">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-96 md:col-span-3">
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500 mb-2">{activeContent.title}</p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#0A175C" }}
            >
              {activeContent.heading}
            </h3>

            <ol className="list-decimal ml-5 text-gray-700 mb-6 space-y-2">
              {activeContent.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>

            <a
              href="#"
              className="text-[#F05023] font-semibold hover:underline inline-block"
            >
              Get Quote Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
