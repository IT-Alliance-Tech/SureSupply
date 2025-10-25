"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react"; 
import { useState } from "react";

import sectionBg from "../../../public/bg2.png";
import dummy from "../../../public/dummy2.png";

// Import step images
import casting1 from "../../../public/dummy2.png";
import casting2 from "../../../public/dummy2.png";
import casting3 from "../../../public/dummy2.png";
import casting4 from "../../../public/dummy2.png";
import casting5 from "../../../public/dummy2.png";
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

import injection1 from "../../../public/dummy2.png";
import injection2 from "../../../public/dummy2.png";
import injection3 from "../../../public/dummy2.png";
import injection4 from "../../../public/dummy2.png";
import injection5 from "../../../public/dummy2.png";
import injection6 from "../../../public/dummy2.png";
import injectionExpanded from "../../../public/dummy2.png";

import cnc1 from "../../../public/dummy2.png";
import cnc2 from "../../../public/dummy2.png";
import cnc3 from "../../../public/dummy2.png";
import cnc4 from "../../../public/dummy2.png";
import cnc5 from "../../../public/dummy2.png";
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row gap-6 rounded-2xl p-6 shadow-lg bg-white"
      >
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
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
    </motion.div>
  );
}

// ✅ Steps Modal with animation
function StepsModal({ isOpen, onClose, stepsData, alignment }) {
  const [expandedStep, setExpandedStep] = useState(null);
  if (!isOpen) return null;

  const justifyClass =
    alignment === "left" ? "justify-start" : alignment === "right" ? "justify-end" : "justify-center";

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        key="modal"
        className={`fixed inset-0 z-50 flex ${justifyClass} items-start pt-32 md:pt-32 px-4 md:px-0`} // Increased padding-top for visibility
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="rounded-2xl p-6 md:p-8 w-full max-w-3xl shadow-2xl bg-[#0A175C] overflow-y-auto max-h-[90vh] relative"
          layout
        >
          {/* Close button */}
          <button
            onClick={expandedStep ? () => setExpandedStep(null) : onClose}
            className="absolute top-6 right-6 text-white hover:text-orange-500 z-50" // Moved a bit lower and added z-index
          >
            <X size={28} />
          </button>

          {!expandedStep ? (
            <div className="flex flex-col gap-5 mt-5"> {/* Added margin-top to push cards down */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
                {stepsData.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card
                      title={step.title}
                      image={step.image}
                      minHeight={180}
                      bgColor="#FFFFFF"
                      textColor="#0A175C"
                      onLearn={() => setExpandedStep(step)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 mt-5" // Added margin-top
            >
              <Card expandedStep={expandedStep} />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ✅ Main Section
export default function OurExpertise() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stepsData, setStepsData] = useState([]);
  const [alignment, setAlignment] = useState("center");

  const cardSteps = {
    Casting: [
      { title: "High pressure die casting (HPDC)", image: casting1, expandedImage: castingExpanded, details: "Prepare high-precision sand molds for consistency and accuracy." },
      { title: "Low pressure die casting (LPDC)", image: casting2, expandedImage: castingExpanded, details: "Molten metal is carefully poured into pre-heated molds." },
      { title: "Gravity die Casting (GDC)", image: casting3, expandedImage: castingExpanded, details: "Controlled cooling ensures uniform grain structure." },
      { title: "Investment casting", image: casting4, expandedImage: castingExpanded, details: "Castings are cleaned, trimmed, and inspected." },
      { title: "Heat Treatment", image: casting5, expandedImage: castingExpanded, details: "Enhances mechanical properties through controlled heating and cooling." },
    ],
    Forging: [
      { title: "Open die forging", image: forging1, expandedImage: forgingExpanded, details: "Forging between flat dies to produce large, custom-shaped components." },
      { title: "Closed die forging", image: forging2, expandedImage: forgingExpanded, details: "Forging with shaped dies to create precise and repeatable part geometries." },
      { title: "Upset forging", image: forging3, expandedImage: forgingExpanded, details: "Compression of heated bar stock to increase diameter and form specific features." },
      { title: "Rolled forging", image: forging4, expandedImage: forgingExpanded, details: "Rolling process to shape metal billets into rings or contoured forms." },
      { title: "Drop forging", image: forging1, expandedImage: forgingExpanded, details: "Hammer-based forging technique producing high-strength, detailed parts." },
    ],
    Fabrication: [
      { title: "Die press", image: fabrication1, expandedImage: fabricationExpanded, details: "Forming metal sheets into components using high-pressure dies and presses." },
      { title: "Laser cutting", image: fabrication2, expandedImage: fabricationExpanded, details: "High-precision cutting of sheet metal using focused laser beams for intricate profiles." },
      { title: "Plasma cutting", image: fabrication3, expandedImage: fabricationExpanded, details: "Cutting thick metal sheets using high-temperature plasma arc technology." },
      { title: "Waterjet cutting", image: fabrication4, expandedImage: fabricationExpanded, details: "Abrasive waterjet cutting for precise, cold-cutting of materials without thermal distortion." },
      { title: "EDM and wire EDM", image: fabrication1, expandedImage: fabricationExpanded, details: "Electro-discharge machining for intricate metal shapes and high-tolerance features." },
      { title: "Welding", image: fabrication2, expandedImage: fabricationExpanded, details: "Joining of metal components using TIG, MIG, and spot welding techniques." },
    ],
    "Plastic Molding": [
      { title: "Injection Molding", image: injection1, expandedImage: injectionExpanded, details: "Molten plastic is injected into a closed mold cavity under high pressure for precise, repeatable parts." },
      { title: "Blow Molding", image: injection2, expandedImage: injectionExpanded, details: "Heated plastic is expanded inside a mold using air pressure to form hollow parts like bottles and containers." },
      { title: "Vacuum forming", image: injection3, expandedImage: injectionExpanded, details: "A heated plastic sheet is stretched onto a mold and shaped by applying vacuum pressure." },
      { title: "Compression Molding", image: injection4, expandedImage: injectionExpanded, details: "Preheated plastic is placed in a heated mold cavity and compressed to take its shape." },
      { title: "Extrusion Molding", image: injection5, expandedImage: injectionExpanded, details: "Molten plastic is forced through a die to create continuous shapes like pipes, sheets, or profiles." },
      { title: "Reaction Injection Molding (RIM)", image: injection6, expandedImage: injectionExpanded, details: "Two liquid components react chemically inside the mold to form lightweight, durable molded parts." },
    ],
    Machining: [
      { title: "CNC lathe", image: cnc1, expandedImage: cncExpanded, details: "High-precision turning of cylindrical components using computer-controlled lathes." },
      { title: "Multi axis VMC", image: cnc2, expandedImage: cncExpanded, details: "Complex milling operations performed on multi-axis vertical machining centers for intricate geometries." },
      { title: "Grinding", image: cnc3, expandedImage: cncExpanded, details: "Precision surface and cylindrical grinding to achieve tight tolerances and fine finishes." },
      { title: "Gear cutting", image: cnc4, expandedImage: cncExpanded, details: "Specialized machining for cutting gears using hobbing, shaping, or broaching techniques." },
      { title: "Super finishing", image: cnc5, expandedImage: cncExpanded, details: "Ultra-fine finishing processes that improve surface quality and reduce friction." },
    ],
    "Rapid Prototyping": [
      { title: "3D printing", image: rapid1, expandedImage: rapidExpanded, details: "Additive manufacturing using polymers for rapid prototyping and design validation." },
      { title: "Metal 3d printing", image: rapid2, expandedImage: rapidExpanded, details: "Additive process for creating complex metal parts with high precision." },
      { title: "Vacuum casting", image: rapid3, expandedImage: rapidExpanded, details: "Casting of silicone molds under vacuum to produce functional prototypes." },
      { title: "CNC pattern", image: rapid4, expandedImage: rapidExpanded, details: "Machined patterns used for mold making and pre-production validation." },
    ],
    Quality: [
      { title: "Accredited metrology lab", image: dummy, expandedImage: dummy, details: "Precision measurement and verification for all manufactured parts." },
      { title: "Dimensional inspection", image: dummy, expandedImage: dummy, details: "Ensures all parts meet specified dimensional tolerances." },
      { title: "Material testing", image: dummy, expandedImage: dummy, details: "Comprehensive testing for material composition, hardness, and durability." },
      { title: "Surface and finish testing", image: dummy, expandedImage: dummy, details: "Evaluates surface roughness and coating consistency for quality assurance." },
      { title: "Special gauges and fixtures", image: dummy, expandedImage: dummy, details: "Custom gauges and fixtures for accurate inspection and repeatable testing." },
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
            <Card title="Plastic Molding" image={dummy} minHeight={150} onLearn={() => handleLearnClick("Plastic Molding", 2)} />
            <Card title="Rapid Prototyping" image={dummy} minHeight={150} onLearn={() => handleLearnClick("Rapid Prototyping", 2)} />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <Card title="Machining" image={dummy} minHeight={230} onLearn={() => handleLearnClick("Machining", 3)} />
            <Card title="Quality" image={dummy} minHeight={240} onLearn={() => handleLearnClick("Quality", 3)} />
          </div>
        </div>
      </div>

      <StepsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} stepsData={stepsData} alignment={alignment} />
    </section>
  );
}
