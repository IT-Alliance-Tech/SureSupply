"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ====== IMAGES ======
import bannerImg from "../../../public/bannerC.png";
import imgConsumer from "../../../public/dummyimg.png";
import imgAutomobile from "../../../public/dummyimg.png";
import imgEnergy from "../../../public/dummyimg.png";
import imgAerospace from "../../../public/dummyimg.png";
import imgElectronics from "../../../public/dummyimg.png";
import supplierImg from "../../../public/dummyimg.png";

// ====== ICONS ======
import iconWork from "../../../public/icon1.svg";

export default function IndustriesNetworksPage() {
  const categories = [
    "All",
    "Automobile",
    "Aerospace & Defense",
    "Electrical & Electronics",
    "Consumer Appliances",
    "Energy",
  ];

  const projects = [
    {
      id: 1,
      title: "Total Quality Management Implementation",
      category: "Consumer Appliances",
      image: imgConsumer,
    },
    {
      id: 2,
      title: "Advanced Research In Material Science",
      category: "Automobile",
      image: imgAutomobile,
    },
    {
      id: 3,
      title: "Workplace Safety Enhancement Initiative",
      category: "Energy",
      image: imgEnergy,
    },
    {
      id: 4,
      title: "Robotic Process Automation Deployment",
      category: "Aerospace & Defense",
      image: imgAerospace,
    },
    {
      id: 5,
      title: "Smart Circuit Optimization Program",
      category: "Electrical & Electronics",
      image: imgElectronics,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects.slice(0, 4)
      : projects.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col font-outfit">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] flex items-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Industries Banner"
          fill
          priority
          className="object-cover object-left absolute inset-0 -z-10"
        />

        <div className="text-left text-white z-10 px-6 lg:px-24">
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            OUR{" "}
            <span className="text-[#05023]">
              INDUSTRIES AND <br /> NETWORKS
            </span>
          </h1>

          <div className="text-sm font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-[#05023] transition-colors">
              Home
            </Link>
            <span className="text-[#05023]">/</span>
            <span className="text-[#05023]">Our Industries & Networks</span>
          </div>
        </div>
      </section>

      {/* ================= OUR SUCCESSFUL PROJECT INITIATIVES ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Heading + Paragraph side by side */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-10">
            {/* Left Side - Heading */}
            <div className="md:w-1/2 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <Image src={iconWork} alt="Icon" width={20} height={20} />
                <h5 className="text-sm font-semibold text-[#0A175C] uppercase">
                  Our Work
                </h5>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0A175C]">
                Our Successful Project <br />
                <span className="text-[#F05023]">Initiatives</span>
              </h2>
            </div>

            {/* Right Side - Paragraph */}
            <div className="md:w-1/2 max-w-lg text-[#0A175C] text-left mt-10">
              <p>
                We help businesses across industries manage their supplies
                smarter. From vendor management to seamless delivery tracking,
                our work revolves around creating a smooth and reliable
                experience.
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm font-medium">
            {categories.map((cat, idx) => (
              <span key={cat} className="flex items-center gap-9">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`transition-colors pb-1 ${
                    activeCategory === cat
                      ? "text-[#F05023] border-b-2 border-[#05023]"
                      : "text-[#0A175C] border-b-2 border-transparent hover:text-[#F05023]"
                  }`}
                >
                  {cat}
                </button>
                {idx < categories.length - 1 && (
                  <span className="text-[#0A175C]">/</span>
                )}
              </span>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-full max-w-sm flex flex-col items-center"
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/80 text-[#0A175C] text-xs px-3 py-1 rounded shadow-sm font-outfit">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-[#0A175C] mt-4 text-center font-outfit">
                  {project.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPLIER NETWORK SECTION ================= */}
      <section className="py-20 bg-white font-outfit">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side (Heading + Image) */}
            <div className="space-y-8">
              <h5 className="text-[40px] font-bold tracking-wide text-left font-outfit">
                <span className="text-[#0A175C]">SUPPLIER </span>
                <span className="text-[#F05023]">NETWORK</span>
              </h5>

              <div className="flex items-center justify-center">
                <Image
                  src={supplierImg}
                  alt="Supplier Network"
                  width={450}
                  height={200}
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Right Side (Text + Buttons) */}
            <div className="space-y-6 md:mt-12 lg:mt-16">
              <h2 className="text-3xl font-bold text-[#0A175C] leading-snug">
                Why Partner with{" "}
                <span className="text-[#0A175C] font-extrabold">
                  suresupply
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                Partnering with SureSupply means working with a team dedicated
                to streamlining your supply chain from end to end. We bring
                expertise, technology, and proven strategies to help
                manufacturers, suppliers, and businesses achieve greater
                efficiency, reduce operational costs, and ensure faster
                time-to-market. With a strong focus on quality, transparency,
                and reliability, we act as a trusted partner for sustainable
                growth.
              </p>

              <div className="flex gap-4 pt-4 justify-end pr-10">
                <button className="w-10 h-10 bg-[#F05023] text-white flex items-center justify-center rounded-md hover:bg-[#d6431e] transition">
                  <span className="text-xl">←</span>
                </button>
                <button className="w-10 h-10 bg-[#F05023] text-white flex items-center justify-center rounded-md hover:bg-[#d6431e] transition">
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
