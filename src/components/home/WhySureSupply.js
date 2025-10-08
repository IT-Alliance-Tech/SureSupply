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
    heading: "Lower manufacturing expenses",
    desc: "Optimize your production budget with our efficient sourcing strategies.",
    image: costImg,
  },
  {
    key: "LeadTime",
    title: "Lead time",
    heading: "Faster delivery and responsiveness",
    desc: "Our supplier ecosystem ensures minimal lead time for critical components.",
    image: leadTimeImg,
  },
  {
    key: "Quality",
    title: "Quality",
    heading: "No compromise in quality & compliance",
    desc: "Strict supplier compliance and total quality checks before dispatch.",
    image: qualityImg,
  },
  {
    key: "Capabilities",
    title: "Capabilities",
    heading: "Enhanced manufacturing capabilities",
    desc: "Flexible and scalable production for every requirement.",
    image: capabilitiesImg,
  },
  {
    key: "Ecosystem",
    title: "Ecosystem",
    heading: "Integrated supplier ecosystem",
    desc: "Collaboration between suppliers and customers for efficiency.",
    image: ecosystemImg,
  },
  {
    key: "Services",
    title: "Services",
    heading: "Comprehensive services",
    desc: "End-to-end support for your entire supply chain journey.",
    image: servicesImg,
  },
];

export default function WhySureSupply() {
  const [activeTab, setActiveTab] = useState("Cost");
  const [openAccordion, setOpenAccordion] = useState("Cost");

  const activeContent = tabsData.find((tab) => tab.key === activeTab);

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-4xl font-bold"
          style={{ color: "#0A175C" }}
        >
          Why <span className="text-[#F05023]">Sure Supply</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          We transform manufacturing challenges into strategic opportunities
          through innovative solutions and comprehensive support.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block border rounded-xl overflow-hidden shadow-sm">
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
          {/* Image */}
          <div className="relative w-full h-64 md:h-96 md:col-span-3 flex items-center justify-center bg-transparent">
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              fill
              className="object-contain rounded-xl  bg-transparent"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500 mb-2">{activeContent.title}</p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#0A175C" }}
            >
              {activeContent.heading}
            </h3>
            <p className="text-gray-700 mb-6">{activeContent.desc}</p>

            <a
              href="#"
              className="text-[#F05023] font-semibold hover:underline inline-block"
            >
              {`Get Quote Now →`}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Accordion View */}
      <div className="md:hidden space-y-4">
        {tabsData.map((tab) => (
          <div
            key={tab.key}
            className="border rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === tab.key ? null : tab.key)
              }
              className="w-full text-left px-5 py-4 font-semibold text-[#0A175C]"
            >
              {tab.title}
            </button>

            {openAccordion === tab.key && (
              <div className="px-5 pb-5">
                <div className="relative w-full h-48 mb-4 flex items-center justify-center bg-transparent">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className="object-contain rounded-xl shadow-md bg-transparent"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-1">{tab.title}</p>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#0A175C" }}
                >
                  {tab.heading}
                </h3>
                <p className="text-gray-700 mb-3">{tab.desc}</p>
                <a
                  href="#"
                  className="text-[#F05023] font-semibold hover:underline inline-block"
                >
                  {`Get Quote Now →`}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
