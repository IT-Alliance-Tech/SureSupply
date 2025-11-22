"use client";

import { useState, useRef } from "react";
import { ChevronRight, ChevronDown, ChevronUp, Menu, X, Car, Plane, Cpu, Tv, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// ====== IMPORT YOUR IMAGE PLACEHOLDERS ======
import castingImg from "../../../public/dummy3.png";
import forgingImg from "../../../public/dummy3.png";
import fabricationImg from "../../../public/dummy3.png";
import plasticImg from "../../../public/dummy3.png";
import machiningImg from "../../../public/dummy3.png";
import rapidImg from "../../../public/dummy3.png";

// ---- 6 images for each card ----
import castingImg1 from "../../../public/dummy3.png";
import castingImg2 from "../../../public/dummy3.png";
import castingImg3 from "../../../public/dummy3.png";
import castingImg4 from "../../../public/dummy3.png";
import castingImg5 from "../../../public/dummy3.png";
import castingImg6 from "../../../public/dummy3.png";

import forgingImg1 from "../../../public/dummy3.png";
import forgingImg2 from "../../../public/dummy3.png";
import forgingImg3 from "../../../public/dummy3.png";
import forgingImg4 from "../../../public/dummy3.png";
import forgingImg5 from "../../../public/dummy3.png";
import forgingImg6 from "../../../public/dummy3.png";

import fabricationImg1 from "../../../public/dummy3.png";
import fabricationImg2 from "../../../public/dummy3.png";
import fabricationImg3 from "../../../public/dummy3.png";
import fabricationImg4 from "../../../public/dummy3.png";
import fabricationImg5 from "../../../public/dummy3.png";
import fabricationImg6 from "../../../public/dummy3.png";

import plasticImg1 from "../../../public/dummy3.png";
import plasticImg2 from "../../../public/dummy3.png";
import plasticImg3 from "../../../public/dummy3.png";
import plasticImg4 from "../../../public/dummy3.png";
import plasticImg5 from "../../../public/dummy3.png";
import plasticImg6 from "../../../public/dummy3.png";

import machiningImg1 from "../../../public/dummy3.png";
import machiningImg2 from "../../../public/dummy3.png";
import machiningImg3 from "../../../public/dummy3.png";
import machiningImg4 from "../../../public/dummy3.png";
import machiningImg5 from "../../../public/dummy3.png";
import machiningImg6 from "../../../public/dummy3.png";

import rapidImg1 from "../../../public/dummy3.png";
import rapidImg2 from "../../../public/dummy3.png";
import rapidImg3 from "../../../public/dummy3.png";
import rapidImg4 from "../../../public/dummy3.png";
import rapidImg5 from "../../../public/dummy3.png";
import rapidImg6 from "../../../public/dummy3.png";

// ============================================

const INDUSTRIES = [
  { 
    id: "automotive", 
    title: "Automotive", 
    icon: Car, 
    desc: "From precision-machined components to lightweight structural systems, we power the evolution of mobility. Our expertise fuels innovation in EV, hybrid, and conventional platforms—delivering reliability, performance, and scalability from concept to production. We don’t just make parts; we help shape the future of motion." 
  },
  { 
    id: "aerospace", 
    title: "Aerospace & Defence", 
    icon: Plane, 
    desc: "Where precision meets performance, we take flight. Our solutions are built for the extreme—crafted to meet the rigorous standards of air, space, and defence applications. With advanced materials, meticulous engineering, and flawless quality control, we ensure every component soars above expectations—literally." 
  },
  { 
    id: "consumer", 
    title: "Consumer Appliances", 
    icon: Tv, 
    desc: "Performance meets design. We help brands transform everyday appliances into durable, stylish, and sustainable experiences. Through superior material selection, flawless surface finishes, and reliable engineering, we turn innovative ideas into consumer-ready products that blend function and aesthetics seamlessly." 
  },
  { 
    id: "energy", 
    title: "Energy", 
    icon: Zap, 
    desc: "Building the future of sustainable power. From renewable energy components to storage and infrastructure systems, we deliver precision-engineered solutions that drive cleaner, smarter, and more efficient energy ecosystems. Our focus on reliability and scalability empowers industries to energize a sustainable tomorrow." 
  },
];

const SAMPLE_CARDS = [
  { 
    title: "Casting", 
    desc: "Casting details...", 
    img: castingImg, 
    images: [castingImg1, castingImg2, castingImg3, castingImg4, castingImg5, castingImg6],
    names: ["Casting 1", "Casting 2", "Casting 3", "Casting 4", "Casting 5", "Casting 6"]
  },
  { 
    title: "Forging", 
    desc: "Forging details...", 
    img: forgingImg, 
    images: [ forgingImg1, forgingImg2, forgingImg3, forgingImg4, forgingImg5, forgingImg6],
    names: ["Forging 1", "Forging 2", "Forging 3", "Forging 4", "Forging 5", "Forging 6"]
  },
  { 
    title: "Fabrication", 
    desc: "Fabrication details...", 
    img: fabricationImg, 
    images: [fabricationImg1, fabricationImg2, fabricationImg3, fabricationImg4, fabricationImg5, fabricationImg6],
    names: ["Fabrication 1", "Fabrication 2", "Fabrication 3", "Fabrication 4", "Fabrication 5", "Fabrication 6"]
  },
  { 
    title: "Plastic Molding", 
    desc: "Plastic molding details...", 
    img: plasticImg, 
    images: [plasticImg1, plasticImg2, plasticImg3, plasticImg4, plasticImg5, plasticImg6],
    names: ["Plastic 1", "Plastic 2", "Plastic 3", "Plastic 4", "Plastic 5", "Plastic 6"]
  },
  { 
    title: "Machining", 
    desc: "Machining details...", 
    img: machiningImg, 
    images: [machiningImg1, machiningImg2, machiningImg3, machiningImg4, machiningImg5, machiningImg6],
    names: ["Machining 1", "Machining 2", "Machining 3", "Machining 4", "Machining 5", "Machining 6"]
  },
  { 
    title: "Rapid Prototyping", 
    desc: "Rapid prototyping details...", 
    img: rapidImg, 
    images: [rapidImg1, rapidImg2, rapidImg3, rapidImg4, rapidImg5, rapidImg6],
    names: ["Rapid 1", "Rapid 2", "Rapid 3", "Rapid 4", "Rapid 5", "Rapid 6"]
  },
];

export default function IndustriesWeServeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupCard, setPopupCard] = useState(null);

  const mainRef = useRef(null);
  const activeIndustry = INDUSTRIES[activeIndex];

  const handleSelect = (i) => {
    setActiveIndex(i);
    setMenuOpen(false);
    setTimeout(() => mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 px-4 sm:px-8 font-lato">
      <div className="max-w-7xl mx-auto w-[90%]">
        {/* ===== MOBILE BUTTON ===== */}
        <div className="lg:hidden fixed top-24 left-4 z-50">
          <button onClick={() => setMenuOpen(true)} className="p-3 rounded-full bg-[#F05023] text-white shadow-lg hover:bg-[#d9481f]">
            <Menu size={24} />
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="max-w-[600px] mx-auto px-6 py-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-semibold text-[#0A175C]">Industries</h3>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md text-[#0A175C]">
                  <X size={26} />
                </button>
              </div>
              <div className="space-y-4">
                {INDUSTRIES.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(i)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-left ${activeIndex === i ? "bg-[#F05023] text-white" : "text-[#0A175C]"}`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={18} className={activeIndex === i ? "text-white" : "text-gray-500"} />
                        {item.title}
                      </div>
                      {activeIndex === i ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ===== GRID LAYOUT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          {/* ===== DESKTOP SIDEBAR ===== */}
          <aside className="hidden lg:block sticky top-28 self-start">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#F05023] text-white px-5 py-3 font-semibold text-lg font-outfit">
                Industries We Serve
              </div>
              <div className="bg-white border border-t-0 border-gray-100">
                {INDUSTRIES.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(i)}
                      className={`w-full flex items-center justify-between px-5 py-4 border-b ${activeIndex === i ? "bg-[#FFF3EE] text-[#F05023]" : "text-[#0A175C]"}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={activeIndex === i ? "text-[#F05023]" : "text-gray-400"} />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <ChevronRight className={`w-5 h-5 ${activeIndex === i ? "rotate-90 text-[#F05023]" : "text-gray-400"}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="w-full flex flex-col gap-10" ref={mainRef}>
            <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex flex-col items-center text-center mb-6">
                <h2 className="text-3xl font-bold text-[#0A175C] mb-2 font-outfit">{activeIndustry.title}</h2>
                <div className="w-20 h-[3px] bg-[#F05023]" />
              </div>
              <p className="text-gray-700 mb-10 leading-relaxed text-center lg:text-left">{activeIndustry.desc}</p>

              {/* ===== CARDS ===== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAMPLE_CARDS.map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ translateY: -6 }}
                    className="relative h-[230px] rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                    onClick={() => setPopupCard(card)}
                  >
                    <Image src={card.img} alt={card.title} fill className="object-cover rounded-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                      <h4 className="text-black font-semibold text-lg drop-shadow-lg">{card.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      {/* ===== POPUP MODAL ===== */}
      {popupCard && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-[950px] max-h-[90vh] overflow-y-auto shadow-2xl relative animate-[fadeIn_0.25s_ease]">

            {/* CLOSE BUTTON */}
            <button
              className="absolute top-4 right-4 text-[#F05023] border-2 border-[#F05023] hover:bg-[#F05023] hover:text-white transition cursor-pointer rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              onClick={() => setPopupCard(null)}
            >
              <X size={24} />
            </button>

            {/* DYNAMIC HEADING */}
            <h3
              onClick={() => window.location.href = "/capabilities"}
              className="text-2xl font-bold text-[#0A175C] mb-6 text-center tracking-wide cursor-pointer hover:underline font-outfit"
            >
              {popupCard.title} Parts
            </h3>

            {/* IMAGE GRID WITH NAMES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {popupCard.images.map((img, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-full h-[180px] sm:h-[220px] rounded-xl overflow-hidden shadow-lg">
                    <Image src={img} alt={`popup-${index}`} fill className="object-cover" />
                  </div>
                  <p className="mt-2 text-center text-gray-700 font-medium">
                    {popupCard.names ? popupCard.names[index] : `Image ${index + 1}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
