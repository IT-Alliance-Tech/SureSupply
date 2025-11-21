"use client";

import { useState, useRef } from "react";
import { ChevronRight, ChevronDown, ChevronUp, Menu, X, Car, Plane, Cpu, Tv, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// === Import Images ===
import castingImg from "../../../public/dummy3.png";
import forgingImg from "../../../public/dummy3.png";
import fabricationImg from "../../../public/dummy3.png";
import plasticImg from "../../../public/dummy3.png";
import machiningImg from "../../../public/dummy3.png";
import rapidImg from "../../../public/dummy3.png";

const INDUSTRIES = [
  {
    id: "automotive",
    title: "Automotive",
    icon: Car,
    desc: "From precision-machined components to lightweight structural systems, we power the evolution of mobility. Our expertise fuels innovation in EV, hybrid, and conventional platforms—delivering reliability, performance, and scalability from concept to production. We don’t just make parts; we help shape the future of motion.",
  },
  {
    id: "aerospace",
    title: "Aerospace & Defence",
    icon: Plane,
    desc: "Where precision meets performance, we take flight. Our solutions are built for the extreme—crafted to meet the rigorous standards of air, space, and defence applications. With advanced materials, meticulous engineering, and flawless quality control, we ensure every component soars above expectations—literally.",
  },
  // {
  //   id: "electronics",
  //   title: "Electrical & Electronics",
  //   icon: Cpu,
  //   desc: "Powering possibilities, one connection at a time. From high-density enclosures to precision housings and thermal management solutions, we bring design agility and manufacturing precision to the electronics ecosystem. Our innovations ensure smarter, safer, and more efficient systems for the world’s next-gen technology.",
  // },
  {
    id: "consumer",
    title: "Consumer Appliances",
    icon: Tv,
    desc: "Performance meets design. We help brands transform everyday appliances into durable, stylish, and sustainable experiences. Through superior material selection, flawless surface finishes, and reliable engineering, we turn innovative ideas into consumer-ready products that blend function and aesthetics seamlessly.",
  },
  {
    id: "energy",
    title: "Energy",
    icon: Zap,
    desc: "Building the future of sustainable power. From renewable energy components to storage and infrastructure systems, we deliver precision-engineered solutions that drive cleaner, smarter, and more efficient energy ecosystems. Our focus on reliability and scalability empowers industries to energize a sustainable tomorrow.",
  },
];

const SAMPLE_CARDS = [
  { title: "Casting", desc: "Casting details...", img: castingImg },
  { title: "Forging", desc: "Forging details...", img: forgingImg },
  { title: "Fabrication", desc: "Fabrication details...", img: fabricationImg },
  { title: "Plastic Molding", desc: "Plastic molding details...", img: plasticImg },
  { title: "Machining", desc: "Machining details...", img: machiningImg },
  { title: "Rapid Prototyping", desc: "Rapid prototyping details...", img: rapidImg },
];

export default function IndustriesWeServeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);

  const activeIndustry = INDUSTRIES[activeIndex];

  const handleSelect = (i) => {
    setActiveIndex(i);
    setMenuOpen(false);
    setFlipped(null);
    setTimeout(() => mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-[90%]">
        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden fixed top-24 left-4 z-50">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-3 rounded-full bg-[#F05023] text-white shadow-lg hover:bg-[#d9481f] transition-all"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="max-w-[600px] mx-auto px-6 py-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-semibold text-[#0A175C]">Industries</h3>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md text-[#0A175C] hover:bg-gray-100">
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
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-left ${
                        activeIndex === i ? "bg-[#F05023] text-white" : "text-[#0A175C] hover:bg-gray-100"
                      }`}
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

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block sticky top-28">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#F05023] text-white px-5 py-3 font-semibold text-lg">
                Industries We Serve
              </div>
              <div className="bg-white border border-t-0 border-gray-100">
                {INDUSTRIES.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(i)}
                      className={`w-full flex items-center justify-between px-5 py-4 border-b text-left transition-all duration-300 ${
                        activeIndex === i ? "bg-[#FFF3EE] text-[#F05023]" : "hover:bg-gray-50 text-[#0A175C]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={activeIndex === i ? "text-[#F05023]" : "text-gray-400"} />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${activeIndex === i ? "rotate-90 text-[#F05023]" : "text-gray-400"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="w-full flex flex-col gap-10" ref={mainRef}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* === DYNAMIC HEADING === */}
              <div className="flex flex-col items-center text-center mb-6">
                <h2 className="text-3xl font-bold text-[#0A175C] mb-2">{activeIndustry.title}</h2>
                <div className="w-20 h-[3px] bg-[#F05023] rounded-full" />
              </div>

              {/* === DESCRIPTION === */}
              <p className="text-gray-700 mb-10 leading-relaxed text-center lg:text-left">
                {activeIndustry.desc}
              </p>
              
              {/* === WHAT WE OFFER CARDS === */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAMPLE_CARDS.map((card, idx) => (
                  <motion.div
                    key={card.title}
                    onClick={() => setFlipped(flipped === idx ? null : idx)}
                    whileHover={{ translateY: -6 }}
                    className="relative h-[230px] rounded-2xl perspective cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                  >
                    <motion.div
                      animate={{ rotateY: flipped === idx ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="relative w-full h-full"
                    >
                      {/* FRONT SIDE */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden">
                        <Image src={card.img} alt={card.title} fill className="object-cover rounded-2xl" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
                          <h4 className="text-white font-semibold text-lg drop-shadow-md">{card.title}</h4>
                        </div>
                      </div>

                      {/* BACK SIDE */}
                      <div className="absolute inset-0 rounded-2xl bg-[#F05023] text-white shadow-md flex items-center justify-center p-4 backface-hidden rotate-y-180">
                        <p className="text-center text-sm">{card.desc}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
