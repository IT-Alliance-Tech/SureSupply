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
import supplierImg1 from "../../../public/dummy3.png";
import supplierImg2 from "../../../public/dummy3.png";
import supplierImg3 from "../../../public/dummy3.png";

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

  // ====== SUPPLIER NETWORK SLIDES ======
  const supplierSlides = [
    {
      id: 1,
      heading: "Supplier",
      highlight: "Network 1",
      description:
        "This is a short description about supplier network one. It highlights the core values and benefits for suppliers joining our platform.",
      subheading: "Key Highlights:",
      list: [
        "Reliable and transparent partnerships.",
        "Seamless integration with our supply chain system.",
        "Access to diverse global opportunities.",
        "Dedicated support for growth and innovation.",
      ],
      image: supplierImg1,
    },
    {
      id: 2,
      heading: "Supplier",
      highlight: "Network 2",
      description:
        "This slide focuses on supplier collaborations and how our network enhances efficiency and connectivity across industries.",
      subheading: "Our Focus:",
      list: [
        "Strengthening supplier relationships.",
        "Optimizing procurement and logistics.",
        "Ensuring timely delivery and quality control.",
        "Empowering SMEs through digital platforms.",
      ],
      image: supplierImg2,
    },
    {
      id: 3,
      heading: "Supplier",
      highlight: "Network 3",
      description:
        "This section showcases our growing supplier ecosystem, built on trust, innovation, and long-term success for all stakeholders.",
      subheading: "Highlights:",
      list: [
        "Driving innovation through collaboration.",
        "Simplifying operations for partners.",
        "Expanding network reach globally.",
      ],
      image: supplierImg3,
    },
  ];

  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((prev) => (prev + 1) % supplierSlides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + supplierSlides.length) % supplierSlides.length);
  const slide = supplierSlides[index];

  return (
    <div className="flex flex-col font-outfit">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
  <Image
    src={bannerImg}
    alt="Industries Banner"
    fill
    priority
    className="object-cover object-left absolute inset-0 -z-10"
  />

  <div className="z-10 px-6 md:px-24 flex flex-col items-center md:items-start text-center md:text-left text-white">
    <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold tracking-wide mb-4 leading-tight">
      OUR{" "}
      <span className="text-white">
        INDUSTRIES AND <br className="hidden md:block" /> NETWORKS
      </span>
    </h1>

    <div className="text-xs sm:text-sm md:text-base font-medium flex flex-wrap justify-center md:justify-start items-center gap-2">
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <span className="text-[#F05023]">/</span>
      <span className="text-[#F05023]">Our Industries & Networks</span>
    </div>
  </div>
</section>


      {/* ================= OUR SUCCESSFUL PROJECT INITIATIVES ================= */}
      <section className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    {/* Heading Section */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-10 text-center md:text-left">
      {/* Left Side */}
      <div className="md:w-1/2 max-w-md mx-auto md:mx-0">
        <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
          <Image src={iconWork} alt="Icon" width={20} height={20} />
          <h5 className="text-xs md:text-sm font-semibold text-[#0A175C] uppercase">
            Our Work
          </h5>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0A175C] leading-snug mb-4">
          Our Successful Project <br className="hidden md:block" />
          <span className="text-[#F05023] block mt-2">Initiatives</span>
        </h2>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 max-w-lg mx-auto md:mx-0 text-[#0A175C] mt-6 md:mt-0 md:self-center">
  <p className="leading-relaxed text-sm md:text-base">
    We help businesses across industries manage their supplies smarter.
    From vendor management to seamless delivery tracking, our work revolves
    around creating a smooth and reliable experience.
  </p>
</div>

    </div>

    {/* Filter Buttons */}
<div className="mb-8 text-[16px] font-medium cursor-pointer">
  {/* Mobile View */}
  <div className="flex md:hidden overflow-x-auto gap-4 pb-2 no-scrollbar ">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`whitespace-nowrap px-4 py-2 rounded-full border transition-colors ${
          activeCategory === cat
            ? "bg-[#F05023] text-white border-[#F05023]"
            : "bg-white text-[#0A175C] border-[#0A175C] hover:bg-[#F05023] hover:text-white"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Desktop View */}
<div className="hidden md:flex flex-wrap justify-center items-center gap-8 text-center text-base md:text-lg font-semibold">
  {categories.map((cat, idx) => (
    <span key={cat} className="flex items-center gap-9">
      <button
        onClick={() => setActiveCategory(cat)}
        className={`transition-colors pb-1 cursor-pointer ${
          activeCategory === cat
            ? "text-[#F05023] border-b-2 border-[#F05023]"
            : "text-[#0A175C] border-b-2 border-transparent hover:text-[#F05023]"
        }`}
      >
        {cat}
      </button>
      {idx < categories.length - 1 && (
        <span className="text-[#0A175C] hidden md:inline">/</span>
      )}
    </span>
  ))}
</div>


</div>


    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-items-center">
      {filteredProjects.map((project) => (
        <div key={project.id} className="w-full max-w-sm flex flex-col items-center">
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden">
            <Image
              src={project.image || "/placeholder.png"}
              alt={project.title}
              fill
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-white/80 text-[#0A175C] text-sm px-3 py-1 rounded shadow-sm font-semibold">
              {project.category}
            </span>
          </div>
          <h4 className="text-[16px] font-semibold text-[#0A175C] mt-4 text-center">
            {project.title}
          </h4>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= SUPPLIER NETWORK SECTION ================= */}
      <section className="py-12 md:py-20 bg-white font-outfit overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
          {/* Heading */}
          <h5 className="text-[28px] md:text-[40px] font-bold tracking-wide text-center md:text-left mb-8">
            <span className="text-[#0A175C]">SUPPLIER </span>
            <span className="text-[#F05023]">NETWORK</span>
          </h5>

          {/* ===== MOBILE VIEW ===== */}
          <div className="md:hidden flex flex-col items-center text-center">
            <Image
              src={slide.image}
              alt={slide.highlight}
              width={320}
              height={220}
              className="object-contain rounded-xl shadow-md mb-4"
            />

            <h2 className="text-[26px] font-bold text-[#0A175C] mb-3">
              {slide.heading} <span className="text-[#F05023]">{slide.highlight}</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-[16px] mb-3 px-2">
              {slide.description}
            </p>

            <p className="font-semibold text-gray-800 mb-2">{slide.subheading}</p>

            <ul className="list-disc text-left pl-6 space-y-2 text-gray-600 text-[16px] mb-4">
              {slide.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="flex justify-center gap-6 mt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-[#F05023] text-white flex items-center justify-center rounded-md hover:bg-[#d6431e] transition"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-[#F05023] text-white flex items-center justify-center rounded-md hover:bg-[#d6431e] transition"
              >
                →
              </button>
            </div>
          </div>

          {/* ===== DESKTOP VIEW ===== */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side (Image) */}
            <div className="space-y-8 relative">
              <div className="flex items-center justify-center h-[400px]">
                <Image
                  src={slide.image}
                  alt={slide.highlight}
                  width={400}
                  height={300}
                  className="object-contain rounded-xl shadow-md"
                />
              </div>
            </div>

            {/* Right Side (Text) */}
            <div className="relative min-h-[400px] top-10">
  <h2 className="text-[36px] font-bold text-[#0A175C] leading-snug mb-4">
    {slide.heading} <br />
    <span className="text-[#F05023]">{slide.highlight}</span>
  </h2>

  <p className="text-gray-600 leading-relaxed max-w-lg text-[16px] mb-3">
    {slide.description}
  </p>

  <p className="font-semibold text-gray-800 mb-3 text-[16px]">
    {slide.subheading}
  </p>

  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4 text-[16px]">
    {slide.list.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>

  <div className="absolute bottom-0 right-0 flex gap-4">
    <button
      onClick={handlePrev}
      className="w-10 h-10 bg-[#F05023] text-white flex items-center justify-center rounded-md hover:bg-[#d6431e] transition"
    >
      ←
    </button>
    <button
      onClick={handleNext}
      className="w-10 h-10 bg-[#F05023] text-white flex items-center justify-center rounded-md hover:bg-[#d6431e] transition"
    >
      →
    </button>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
