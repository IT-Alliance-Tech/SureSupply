"use client";

import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { 
  Truck, Network, Factory, Cpu, BarChart3, Globe, 
  Handshake, Clock, Leaf, TrendingUp 
} from "lucide-react";
import { useSearchParams } from "next/navigation";



/* ====== IMPORT CONTENT ====== */
import bannerImg from "../../../public/bannerC.png";
import pointIcon from "../../../public/icon.svg";
import { categories } from "../../components/capabilitiesContent";
import supplyChaindummy  from "../../../public/img.jpeg"; 


const CapabilitiesPage = () => {
  const [activeMain, setActiveMain] = useState(categories?.[0]?.id || null);
  const [openMain, setOpenMain] = useState(categories?.[0]?.id || null);
  const [activeSub, setActiveSub] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const searchParams = useSearchParams();


  useEffect(() => {
  const mainFromURL = searchParams.get("main");
  const subFromURL = searchParams.get("sub");

  if (mainFromURL && categories.some(c => c.id === mainFromURL)) {
    setActiveMain(mainFromURL);
    setOpenMain(mainFromURL);

    const category = categories.find(c => c.id === mainFromURL);

    if (subFromURL && category.subcategories?.some(s => s.id === subFromURL)) {
      setActiveSub(subFromURL);
    } else {
      setActiveSub(null); // show main description
    }
  }
}, [searchParams]);

  const activeMainObj = categories.find((c) => c.id === activeMain);
  const activeSubObj = activeMainObj?.subs?.find((s) => s.id === activeSub);

  const scrollToTop = () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  /* ====== SUBCATEGORY CONTENT ====== */
 const renderSubcategoryContent = (mainItem, subItem) => (
  <div className="flex flex-col gap-10 font-lato">

    {/* Centered Image */}
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full sm:w-[80%] h-[220px] sm:h-[330px] rounded-2xl overflow-hidden">
        <Image
          src={subItem.img}
          alt={subItem.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <h3 className="w-[90%] sm:w-[80%] text-[24px] sm:text-[32px] font-outfit font-bold text-[#F05023] text-center">
        {subItem.title}
      </h3>
    </div>

    <p className="text-gray-800 text-[16px] sm:text-[18px] leading-[1.8] px-2 sm:px-0">
      {subItem.content}
    </p>

    {/* Advantages Section */}
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f8f9fc]">
  <h3 className="text-[28px] sm:text-[38px] font-outfit font-semibold text-[#0A175C] mb-10 text-center relative">
    Advantages of {subItem.title || "SureSupply"}
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] sm:w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
  </h3>

  {/* GRID — FIXED HEIGHT CARDS */}
  <div
    className="
      grid 
      grid-cols-1                /* mobile: 1 per row */
      sm:grid-cols-2             /* tablet: 2 per row */
      gap-6 sm:gap-8 
      place-items-center
    "
  >
    {subItem.advantages.map((adv, i) => {
      
      const baseCardClasses = `
  bg-[#0A175C] text-white 
  rounded-2xl 
  p-6 sm:p-8 
  shadow-lg 
  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:scale-[1.10] 
  hover:-translate-y-4
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
  hover:brightness-110
  w-full max-w-[420px]
  min-h-[240px] md:min-h-[260px]
  flex flex-col
  overflow-hidden
`;



      // ⭐ CENTERED 5TH CARD ON DESKTOP
      if (i === 4) {
        return (
          <div key={i} className="sm:col-span-2 flex justify-center">
            <div className={baseCardClasses}>
              <h4 className="text-[22px] sm:text-[26px] font-outfit font-bold text-[#F05023] mb-4 text-center">
                {adv.title}
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-[16px] sm:text-[18px] font-lato text-gray-200 leading-relaxed">
                {adv.points?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      }

      // ⭐ NORMAL CARDS
      return (
        <div key={i} className={baseCardClasses}>
          <h4 className="text-[22px] sm:text-[26px] font-outfit font-bold text-[#F05023] mb-4 text-center">
            {adv.title}
          </h4>

          <ul className="list-disc pl-5 space-y-2 text-[16px] sm:text-[18px] font-lato text-gray-200 leading-relaxed">
            {adv.points?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
</section>


    {/* Expertise Section */}
    <section className="px-4 sm:px-0">
      <h3 className="text-[28px] sm:text-[38px] font-outfit font-bold text-[#0A175C] mb-10 text-center relative">
        Our Expertise
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] sm:w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
      </h3>

      <div className="bg-[#F9F9F9] border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
        <ul className="space-y-5">
          {subItem.expertise.map((point, i) => {
            const [title, content] = point.split(":");
            return (
              <li
                key={i}
                className="flex items-start gap-3 text-[#0A175C] text-[16px] sm:text-[18px] font-lato leading-[1.8]"
              >
                <Image
                  src={pointIcon}
                  alt="point"
                  width={18}
                  height={18}
                  className="mt-1"
                />
                <div>
                  <span className="block text-[18px] sm:text-[22px] font-outfit font-bold text-[#F05023] mb-1">
                    {title}
                  </span>
                  <span className="text-[#0A175C]">{content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative mt-16 sm:mt-20 flex justify-center px-3 sm:px-0">
      <div className="w-full sm:w-[90%] lg:w-[85%] text-center bg-[#F9F9F9] py-10 sm:py-12 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <h2 className="text-[26px] sm:text-[40px] font-outfit font-bold text-[#0A175C] mb-4">
          {`Let’s Build Your Next Component.`}
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-[16px] sm:text-[18px] font-lato mb-8 leading-[1.8] px-4">
          {`Are you ready to reduce costs, improve quality, and simplify your supply chain?`}
        </p>

        <Button
          onClick={() => {
            window.location.href = "/#quoteForm";
          }}
          variant="contained"
          sx={{
            backgroundColor: "#F05023",
            "&:hover": { backgroundColor: "#d9481f" },
            padding: "12px 30px",
            borderRadius: "9999px",
            fontSize: "18px",
            fontWeight: 600,
            textTransform: "none",
            fontFamily: "Outfit, sans-serif",
            boxShadow: "0 6px 18px rgba(240,80,35,0.35)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
        >
          {`Let’s Talk`}
        </Button>
      </div>
    </section>

  </div>
);




  /* ====== QUALITY ASSURANCE SECTION (fixed: includes Beyond Testing) ====== */
  const renderQualityAssurance = (qa) => (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-white to-[#F9F9F9] rounded-2xl shadow-md px-4 sm:px-0">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[30px] sm:text-[40px] font-outfit font-bold text-[#0A175C] mb-10 text-center relative">
          {qa.title}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] sm:w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
        </h3>

        <p className="text-gray-800 text-[16px] sm:text-[18px] font-lato text-center max-w-3xl mx-auto mb-12 leading-[1.8]">
          {qa.description}
        </p>

        <div className="space-y-6 border-l-4 border-[#F05023] pl-4 sm:pl-6">
          {qa.points.map((point, i) => (
            <div
              key={i}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl p-5 sm:p-6 border border-gray-200"
            >
              <h4 className="text-[18px] sm:text-[20px] font-outfit font-semibold text-[#0A175C] mb-2 flex items-center gap-2">
                <span className="text-[#F05023]">▌</span> {point.title}
              </h4>
              <p className="text-gray-700 text-[15px] sm:text-[17px] font-lato leading-[1.8]">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Beyond Testing block (restored) ===== */}
        <div className="mt-12 bg-[#0A175C] text-white rounded-2xl p-8 sm:p-10 shadow-lg transition-shadow duration-300">
  <h4 className="text-2xl sm:text-3xl font-outfit font-semibold text-[#F05023] mb-8 text-center drop-shadow-md">
    {`Beyond Testing: A Culture of Zero-Defect Manufacturing`}
  </h4>

  <div className="flex flex-col gap-6">
    {qa.beyondTesting.map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-4 bg-white text-[#0A175C] hover:bg-gray-50 transition-all duration-300 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg"
      >
        <span className="text-[#F05023] text-lg mt-1">✔</span>
        <div>
          <h5 className="text-[16px] sm:text-[18px] font-outfit font-semibold text-[#F05023] mb-1">
            {item.title}
          </h5>
          <p className="text-[15px] sm:text-[17px] font-lato text-gray-700 leading-[1.8]">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );

  /* ====== MAIN CATEGORY CONTENT ====== */
const renderMainContent = (item) => (
  <div className="flex flex-col gap-12 group transition-all duration-500 px-3 sm:px-0 text-left">
    {/* ================= IMAGE ================= */}
    <div className="flex justify-center">
      <div className="relative h-[240px] sm:h-[360px] w-full sm:w-[80%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>

    {/* ================= TITLE ================= */}
    <h3 className="text-[24px] sm:text-[40px] font-outfit font-bold text-[#0A175C] relative inline-block mx-auto text-center">
      {item.title}
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] sm:w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
    </h3>

    {/* ================= MAIN CONTENT ================= */}
    <div
      className="text-[16px] sm:text-[18px] font-lato leading-[1.8] text-[#1A2A6C] space-y-4"
      dangerouslySetInnerHTML={{ __html: item.content }}
    ></div>

    {/* ================= QUALITY ASSURANCE ================= */}
    {item.qualityAssurance && renderQualityAssurance(item.qualityAssurance)}

    {/* ================= CARDS SECTION ================= */}
    {item.cards && (
      <div className="mt-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#0A175C] mb-6 text-center">
          Our Core Quality Principles
          <div className="mx-auto mt-2 w-[80px] h-[4px] bg-[#F05023] rounded-full"></div>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {item.cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#ffffff] to-[#f9fafc] rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-[10px] h-[10px] bg-[#F05023] rounded-full mt-2"></div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#F05023]">
                  {card.title}
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mt-3">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* ================= OFFERINGS SECTION ================= */}
    {item.offerings && (
      <div className="mt-16 bg-gradient-to-b from-[#F9FBFF] to-[#FFFFFF] rounded-2xl p-10 sm:p-14 shadow-md border border-[#E5ECFF] transition-all duration-500 hover:shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0A175C] tracking-tight">
            {item.offerings.title}
          </h3>
          <div className="mx-auto mt-3 w-[80px] h-[4px] bg-[#F05023] rounded-full"></div>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-10 font-lato">
          {item.offerings.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {item.offerings.list.map((offer, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-[#EEF3FF] hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-3 h-3 mt-1.5 bg-[#F05023] rounded-full"></div>
              <p className="text-[#1A2A6C] text-[16px] sm:text-[17px] font-lato leading-relaxed">
                {offer}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* ================= SUPPLY CHAIN SECTION ================= */}
    {item.supplyChain && (
  <div className="mt-16 bg-gradient-to-r from-[#FFFFFF] via-[#F9FBFF] to-[#FFFFFF] rounded-3xl p-8 sm:p-12 md:p-16 shadow-md border border-[#E7EDFF] hover:shadow-lg transition-all duration-500">
    
    {/* ================= HEADER ================= */}
    <div className="text-center mb-10">
      <h3 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold text-[#0A175C] leading-tight">
        {item.supplyChain.title}
      </h3>
      <div className="mx-auto mt-3 w-[80px] sm:w-[90px] h-[4px] bg-[#F05023] rounded-full"></div>
      <p className="text-gray-700 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed mt-6 max-w-3xl mx-auto px-2">
        {item.supplyChain.description}
      </p>
    </div>

    {/* ================= IMAGE ================= */}
    <div className="relative w-full mb-10 flex justify-center">
      <div className="relative w-full sm:w-[90%] md:w-[85%] h-[240px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#E7EDFF] hover:scale-[1.02] transition-transform duration-500">
        <Image
          src={supplyChaindummy}
          alt="Global Supply Chain"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </div>

    {/* ================= SUPPLY CHAIN FEATURES ================= */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {item.supplyChain.features.map((feature, i) => {
        const icons = [Truck, Network, Factory, Cpu, BarChart3, Globe];
        const IconComponent = icons[i % icons.length];

        return (
          <div
            key={i}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E9F0FF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#F7F9FF] border border-[#E1E8FF] shadow-sm">
              <IconComponent className="text-[#F05023]" size={24} strokeWidth={2.2} />
            </div>

            {/* Text */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#F05023] mb-1 sm:mb-2">
                {feature.title}
              </h4>
              <p className="text-[#1A2A6C] leading-relaxed text-[15px] sm:text-[16px] font-lato">
                {feature.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    {/* ================= BEYOND LOGISTICS SECTION ================= */}
    {item.supplyChain.beyondLogistics && (
      <div className="mt-16 sm:mt-20 text-center">
        <h3 className="text-[24px] sm:text-[32px] md:text-[38px] font-bold text-[#0A175C] mb-6 leading-tight">
          {item.supplyChain.beyondLogistics.title}
        </h3>
        <div className="mx-auto mt-3 w-[80px] sm:w-[90px] h-[4px] bg-[#F05023] rounded-full"></div>
        <p className="text-gray-700 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed mt-6 max-w-3xl mx-auto mb-10 px-3">
          {item.supplyChain.beyondLogistics.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {item.supplyChain.beyondLogistics.highlights.map((highlight, i) => {
            const icons = [Handshake, Clock, Leaf, TrendingUp];
            const IconComponent = icons[i % icons.length];

            return (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E9F0FF] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#F7F9FF] border border-[#E1E8FF] shadow-sm">
                  <IconComponent className="text-[#F05023]" size={24} strokeWidth={2.2} />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F05023] mb-1 sm:mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-[#1A2A6C] leading-relaxed text-[15px] sm:text-[16px] font-lato">
                    {highlight.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
)}


    {/* ================= COMMITMENT SECTION ================= */}
    {item.commitment && (
      <div className="mt-14 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#0A175C] mb-4">
          {item.commitment.title}
          <div className="mx-auto mt-2 w-[70px] h-[4px] bg-[#F05023] rounded-full"></div>
        </h3>
        <div
          className="text-gray-700 text-[17px] leading-relaxed max-w-3xl mx-auto italic"
          dangerouslySetInnerHTML={{ __html: item.commitment.description }}
        ></div>
      </div>
    )}
  </div>
);




  return (
    <section className="flex flex-col font-outfit">
      {/* HERO SECTION */}
     <section className="relative w-full min-h-[380px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden pt-[100px] pb-[60px]">

  {/* Background Image */}
  <Image
    src={bannerImg}
    alt="Capabilities Banner"
    fill
    priority
    className="object-cover object-center md:object-left absolute inset-0 -z-10"
  />

  {/* Content */}
  <div className="relative text-center md:text-left text-white z-10 px-4 sm:px-6 lg:px-24 max-w-[1200px] mx-auto">

    <h1 className="font-outfit font-bold tracking-wide drop-shadow-md
      text-[34px] sm:text-[48px] md:text-[52px] lg:text-[60px] leading-[1.1] mb-4 sm:mb-5 md:mb-6">
      OUR <span className="text-white">CAPABILITIES</span>
    </h1>

    <div className="
      font-outfit flex flex-wrap justify-center md:justify-center items-center gap-2
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
    ">
      <Link href="/" className="hover:text-white transition-colors cursor-pointer">
        Home
      </Link>
      <span className="text-[#F05023]">/</span>
      <span className="text-[#F05023]">Our Capabilities</span>
    </div>

  </div>
</section>


      {/* MAIN CONTENT SECTION */}
      <section className="bg-white py-8 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* MOBILE MENU BUTTON — moved to LEFT (no desktop change) */}
          {/* FLOATING MOBILE MENU BUTTON (fixed position) */}
<div className="lg:hidden">
  <button
    onClick={() => setMenuOpen(true)}
    className="fixed top-24 left-4 z-50 p-3 rounded-full bg-[#F05023] text-white shadow-lg hover:bg-[#d9481f] transition-all duration-300"
    aria-label="Open menu"
  >
    <Menu size={24} />
  </button>
</div>


          {/* FULL-PAGE MOBILE CATEGORY MENU (overlay) */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
              <div className="max-w-[900px] mx-auto px-6 py-6">
                {/* Top bar with title and cancel */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[20px] sm:text-[24px] font-outfit font-semibold text-[#0A175C]">
                    Capabilities
                  </h3>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-md text-[#0A175C] hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X size={26} />
                  </button>
                </div>

                {/* Menu content area */}
                <div className="space-y-4">
                  {categories.map((main) => (
                    <div key={main.id} className="border-b border-gray-100 pb-4">
                      <button
                        className={`w-full flex items-center justify-between text-left py-3 font-outfit text-[18px] ${
                          activeMain === main.id
                            ? "text-[#F05023] font-bold"
                            : "text-[#0A175C]"
                        }`}
                        onClick={() => {
  if (openMain === main.id) {
    // If already open, just toggle closed
    setOpenMain(null);
  } else {
    // Open new main category and show its content
    setActiveMain(main.id);
    setOpenMain(main.id);
    setActiveSub(null);
    setMenuOpen(false); // close the menu
    scrollToTop(); // scroll to top to view main content
  }
}}

                      >
                        <span>{main.title}</span>
                        <span className="ml-4">
                          {openMain === main.id ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </button>

                      {openMain === main.id && main.subs && (
                        <div className="mt-3 ml-4 space-y-2">
                          {main.subs.map((sub) => (
                            <button
                              key={sub.id}
                              className={`block w-full text-left py-2 px-3 rounded-md text-[16px] font-lato ${
                                activeSub === sub.id
                                  ? "bg-[#F05023] text-white"
                                  : "text-[#0A175C] hover:bg-gray-100"
                              }`}
                              onClick={() => {
                                setActiveSub(sub.id);
                                setMenuOpen(false);
                                scrollToTop();
                              }}
                            >
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* If this main is active and has content, show a short preview (optional) */}
                      {openMain === main.id && activeMain === main.id && main.preview && (
                        <div className="mt-3 px-3 text-sm text-gray-700">
                          {main.preview}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DESKTOP GRID (unchanged) */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
            {/* LEFT SIDEBAR (desktop) */}
            <aside className="hidden lg:block col-span-1 sticky top-28 self-start">
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                <div className="bg-[#F05023] text-white px-3 py-2 rounded-md font-outfit font-semibold mb-4">
                  Capabilities Category
                </div>

                <ul className="space-y-3">
                  {categories.map((main) => (
                    <li key={main.id}>
                      <button
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md font-outfit text-[17px] transition-all duration-200 cursor-pointer ${
                          activeMain === main.id
                            ? "bg-[#F05023] text-white"
                            : "text-[#0A175C] hover:bg-gray-100"
                        }`}
                        onClick={() => {
                          setActiveMain(main.id);
                          setOpenMain(main.id);
                          setActiveSub(null);
                          scrollToTop();
                        }}
                      >
                        {main.title}
                        {openMain === main.id ? <FaChevronUp /> : <FaChevronDown />}
                      </button>

                      {openMain === main.id && main.subs && (
                        <ul className="ml-3 mt-2 space-y-2 border-l-2 border-gray-200 pl-3">
                          {main.subs.map((sub) => (
                            <li key={sub.id}>
                              <button
                                className={`text-[16px] font-lato px-3 py-1 rounded-md w-full text-left transition-all cursor-pointer ${
                                  activeSub === sub.id
                                    ? "bg-[#F05023] text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                                onClick={() => {
                                  setActiveSub(sub.id);
                                  scrollToTop();
                                }}
                              >
                                {sub.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main className="col-span-1 flex flex-col gap-10 w-full">
              {activeSub && activeMainObj && activeSubObj
                ? renderSubcategoryContent(activeMainObj, activeSubObj)
                : renderMainContent(activeMainObj)}
            </main>
          </div>
        </div>
      </section>
    </section>
  );
};

import { Suspense } from "react";

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CapabilitiesPage />
    </Suspense>
  );
}

