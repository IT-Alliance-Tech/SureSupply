"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import sectionBg from "../../../public/bg2.png";
import dummy from "../../../public/dummy2.png";

// Import step images
import casting1 from "../../../public/dummy2.png";
import casting2 from "../../../public/dummy2.png";
import casting3 from "../../../public/dummy2.png";
import casting4 from "../../../public/dummy2.png";
import castingExpanded from "../../../public/dummy2.png";

import forging1 from "../../../public/dummy2.png";
import forging2 from "../../../public/dummy2.png";
import forging3 from "../../../public/dummy2.png";
import forging4 from "../../../public/dummy2.png";
import forgingExpanded from "../../../public/dummy2.png";

import fabrication1 from "../../../public/dummy2.png";
import fabrication2 from "../../../public/dummy2.png";
import fabrication3 from "../../../public/dummy2.png";
import fabrication4 from "../../../public/dummy2.png";
import fabricationExpanded from "../../../public/dummy2.png";

import sheetMetal1 from "../../../public/dummy2.png";
import sheetMetal2 from "../../../public/dummy2.png";
import sheetMetal3 from "../../../public/dummy2.png";
import sheetMetal4 from "../../../public/dummy2.png";
import sheetMetalExpanded from "../../../public/dummy2.png";

import injection1 from "../../../public/dummy2.png";
import injection2 from "../../../public/dummy2.png";
import injection3 from "../../../public/dummy2.png";
import injection4 from "../../../public/dummy2.png";
import injectionExpanded from "../../../public/dummy2.png";

import cnc1 from "../../../public/dummy2.png";
import cnc2 from "../../../public/dummy2.png";
import cnc3 from "../../../public/dummy2.png";
import cnc4 from "../../../public/dummy2.png";
import cncExpanded from "../../../public/dummy2.png";

import rapid1 from "../../../public/dummy2.png";
import rapid2 from "../../../public/dummy2.png";
import rapid3 from "../../../public/dummy2.png";
import rapid4 from "../../../public/dummy2.png";
import rapidExpanded from "../../../public/dummy2.png";

// ✅ Card Component
function Card({ title, image, minHeight = 200, onLearn, bgColor = "#1E2A5E", textColor = "#FFFFFF", expandedStep }) {
  if (expandedStep) {
    return (
      <div className="flex flex-col md:flex-row gap-6 rounded-2xl p-6 shadow-lg bg-white">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={expandedStep.expandedImage}
            alt={expandedStep.title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500">{expandedStep.title}</h3>
          <p className="mt-4 text-gray-700">{expandedStep.details}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-5 text-left cursor-default"
      style={{ minHeight: `${minHeight}px`, backgroundColor: bgColor, color: textColor }}
    >
      <div className="absolute inset-0"> 
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
        <div className="flex items-center justify-center opacity-[0.05]">
          <Image src={image} alt={title} width={80} height={80} className="object-contain" />
        </div>
      </div>

      <h3 className="text-xl font-semibold z-10">{title}</h3>
      {onLearn && (
        <button
          onClick={onLearn}
          className="mt-3 flex items-center text-orange-500 hover:text-orange-400 font-medium z-10"
        >
          Learn
          <ArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      )}
    </div>
  );
}

// ✅ Steps Modal
function StepsModal({ isOpen, onClose, stepsData, alignment }) {
  const [expandedStep, setExpandedStep] = useState(null);
  if (!isOpen) return null;

  const justifyClass = alignment === "left" ? "justify-start" : alignment === "right" ? "justify-end" : "justify-center";

  return (
    <div
      className={`fixed inset-0 z-50 flex ${justifyClass} items-start pt-20 px-4 md:px-0`}
    >
      <div className="rounded-2xl p-6 md:p-8 w-full max-w-3xl shadow-2xl bg-[#0A175C] overflow-y-auto max-h-[90vh]">
        <AnimatePresence>
          {!expandedStep ? (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
                {stepsData.map((step, idx) => (
                  <Card
                    key={idx}
                    title={step.title}
                    image={step.image}
                    minHeight={180}
                    bgColor="#FFFFFF"
                    textColor="#0A175C"
                    onLearn={() => setExpandedStep(step)}
                  />
                ))}
              </div>
              <div className="text-right mt-4">
                <button
                  onClick={onClose}
                  className="text-orange-500 font-semibold hover:text-orange-400"
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <Card expandedStep={expandedStep} />
              <div className="text-right mt-2">
                <button
                  onClick={() => setExpandedStep(null)}
                  className="text-orange-500 font-semibold hover:text-orange-400"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ✅ Main Section
export default function OurExpertise() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stepsData, setStepsData] = useState([]);
  const [alignment, setAlignment] = useState("center");

  const cardSteps = {
    Casting: [
      { title: "Mold Preparation", image: casting1, expandedImage: castingExpanded, details: "Prepare high-precision sand molds for consistency and accuracy." },
      { title: "Metal Pouring", image: casting2, expandedImage: castingExpanded, details: "Molten metal is carefully poured into pre-heated molds." },
      { title: "Cooling & Solidification", image: casting3, expandedImage: castingExpanded, details: "Controlled cooling ensures uniform grain structure." },
      { title: "Finishing & Inspection", image: casting4, expandedImage: castingExpanded, details: "Castings are cleaned, trimmed, and inspected." },
    ],
    Forging: [
      { title: "Heating", image: forging1, expandedImage: forgingExpanded, details: "Raw billets are heated uniformly to forging temperature." },
      { title: "Shaping", image: forging2, expandedImage: forgingExpanded, details: "Metal is shaped using precision dies and hydraulic presses." },
      { title: "Cooling", image: forging3, expandedImage: forgingExpanded, details: "Controlled cooling enhances structural integrity." },
      { title: "Finishing", image: forging4, expandedImage: forgingExpanded, details: "Components are machined and inspected." },
    ],
    Fabrication: [
      { title: "Material Prep", image: fabrication1, expandedImage: fabricationExpanded, details: "Sheets, tubes, and profiles are cut to size." },
      { title: "Welding & Assembly", image: fabrication2, expandedImage: fabricationExpanded, details: "Parts are welded using MIG/TIG techniques." },
      { title: "Surface Treatment", image: fabrication3, expandedImage: fabricationExpanded, details: "Powder coating or painting enhances corrosion resistance." },
      { title: "Final QA", image: fabrication4, expandedImage: fabricationExpanded, details: "Each assembly is inspected for tolerance and finish." },
    ],
    "Sheet Metal Stamping": [
      { title: "Blanking", image: sheetMetal1, expandedImage: sheetMetalExpanded, details: "Sheets are cut into required shapes using high-speed presses." },
      { title: "Forming", image: sheetMetal2, expandedImage: sheetMetalExpanded, details: "Dies shape metal into complex geometries." },
      { title: "Trimming", image: sheetMetal3, expandedImage: sheetMetalExpanded, details: "Excess edges are removed for perfect dimensions." },
      { title: "Inspection", image: sheetMetal4, expandedImage: sheetMetalExpanded, details: "Each part undergoes quality checks for accuracy." },
    ],
    "Injection Molding": [
      { title: "Material Feeding", image: injection1, expandedImage: injectionExpanded, details: "Plastic granules are fed into the heated barrel." },
      { title: "Injection", image: injection2, expandedImage: injectionExpanded, details: "Molten plastic is injected into the mold cavity." },
      { title: "Cooling", image: injection3, expandedImage: injectionExpanded, details: "The molded part cools and solidifies." },
      { title: "Ejection & QA", image: injection4, expandedImage: injectionExpanded, details: "Parts are ejected and quality checked." },
    ],
    "CNC Machining": [
      { title: "Programming", image: cnc1, expandedImage: cncExpanded, details: "CAM software generates tool paths from CAD models." },
      { title: "Setup", image: cnc2, expandedImage: cncExpanded, details: "Workpieces are mounted securely for precise machining." },
      { title: "Machining", image: cnc3, expandedImage: cncExpanded, details: "CNC machines perform turning, milling, drilling." },
      { title: "Inspection", image: cnc4, expandedImage: cncExpanded, details: "Each component is measured to micron-level accuracy." },
    ],
    "Rapid Prototyping": [
      { title: "Design Input", image: rapid1, expandedImage: rapidExpanded, details: "CAD models are analyzed for prototype readiness." },
      { title: "3D Printing", image: rapid2, expandedImage: rapidExpanded, details: "Layer-by-layer fabrication brings digital models to life." },
      { title: "Post-Processing", image: rapid3, expandedImage: rapidExpanded, details: "Sanding and polishing improve aesthetics." },
      { title: "Testing", image: rapid4, expandedImage: rapidExpanded, details: "Functional prototypes undergo fit and performance validation." },
    ],
  };

  const handleLearnClick = (type, column) => {
    setStepsData(cardSteps[type] || []);
    setAlignment(column === 1 ? "left" : column === 2 ? "center" : "right");
    setModalOpen(true);
  };

  return (
    <section className="relative py-16 overflow-visible">
      <div className="absolute inset-0 -z-10">
        <Image src={sectionBg} alt="Background gears" fill className="object-cover object-center" priority />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0A175C" }}>
            Our <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore our advanced manufacturing capabilities designed to meet your unique production needs.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col gap-5 flex-1">
            <Card title="Casting" image={dummy} minHeight={230} onLearn={() => handleLearnClick("Casting", 1)} />
            <Card title="Forging" image={dummy} minHeight={240} onLearn={() => handleLearnClick("Forging", 1)} />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <Card title="Fabrication" image={dummy} minHeight={150} onLearn={() => handleLearnClick("Fabrication", 2)} />
            <Card title="Sheet Metal Stamping" image={dummy} minHeight={150} onLearn={() => handleLearnClick("Sheet Metal Stamping", 2)} />
            <Card title="Injection Molding" image={dummy} minHeight={150} onLearn={() => handleLearnClick("Injection Molding", 2)} />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <Card title="CNC Machining" image={dummy} minHeight={230} onLearn={() => handleLearnClick("CNC Machining", 3)} />
            <Card title="Rapid Prototyping" image={dummy} minHeight={240} onLearn={() => handleLearnClick("Rapid Prototyping", 3)} />
          </div>
        </div>
      </div>

      <StepsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} stepsData={stepsData} alignment={alignment} />
    </section>
  );
}
