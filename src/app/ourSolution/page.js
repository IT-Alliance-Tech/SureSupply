"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { solutions, advancedServices } from "../../components/solutionContent";
import bannerImg from "../../../public/bannerC.png";

export default function CustomSolutionPage() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const mainSectionRef = useRef(null);

  const handleCategoryClick = (index) => {
    setActive(index);
    setMenuOpen(false);
    setTimeout(() => {
      mainSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <div className="font-outfit relative">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-[400px] sm:min-h-[600px] flex flex-col items-center justify-center overflow-hidden pt-[100px] pb-[60px]">
        <Image
          src={bannerImg}
          alt="Custom Solutions Banner"
          fill
          priority
          className="object-cover object-center absolute inset-0 -z-10"
        />

        <div className="relative text-center text-white z-10 px-4 sm:px-6 lg:px-24 max-w-[1200px]">
          <h1 className="text-[36px] sm:text-[50px] font-outfit font-bold tracking-wide mb-4 leading-tight drop-shadow-md">
            OUR <span className="text-white">CUSTOM SOLUTIONS</span>
          </h1>

          <div className="text-[14px] sm:text-[18px] font-lato flex justify-center items-center gap-2">
            <Link
              href="/"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <span className="text-[#F05023]">/</span>
            <span className="text-[#F05023]">Custom Solutions</span>
          </div>
        </div>
      </section>

      {/* ===== FLOATING MOBILE MENU BUTTON ===== */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-24 left-4 z-50 p-3 rounded-full bg-[#F05023] text-white shadow-lg hover:bg-[#d9481f] transition-all duration-300"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto transition-all duration-500">
          <div className="max-w-[900px] mx-auto px-6 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[20px] sm:text-[24px] font-outfit font-semibold text-[#0A175C]">
                Solution Categories
              </h3>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md text-[#0A175C] hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Category List */}
            <ul className="space-y-4">
              {solutions.map((sol, i) => (
                <li key={sol.id}>
                  <button
                    onClick={() => handleCategoryClick(i)}
                    className={`w-full text-left px-5 py-3 rounded-lg text-[18px] font-outfit font-medium transition-all duration-300 border-l-4 ${
                      active === i
                        ? "border-[#F05023] bg-[#FFF8F6] text-[#F05023]"
                        : "border-transparent text-[#0A175C] hover:bg-gray-50"
                    }`}
                  >
                    {sol.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-10 gap-10 py-12 px-4 sm:px-8 lg:px-20 bg-white relative">
        {/* ===== LEFT MENU (DESKTOP) ===== */}
        <div className="hidden lg:block col-span-3 sticky top-28 self-start">
          <aside className="bg-white rounded-2xl shadow-lg p-5">
            <div className="bg-[#F05023] text-white px-4 py-2 rounded-md font-outfit font-semibold mb-4">
              Solution Category
            </div>
            <ul className="space-y-3">
              {solutions.map((sol, i) => (
                <li key={sol.id}>
                  <button
                    onClick={() => handleCategoryClick(i)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] font-outfit font-medium transition-all duration-300 cursor-pointer border-l-4 ${
                      active === i
                        ? "border-[#F05023] bg-[#FFF8F6] text-[#F05023] shadow-sm"
                        : "border-transparent text-[#0A175C] hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-all ${
                          active === i ? "bg-[#F05023]" : "bg-gray-400"
                        }`}
                      />
                      <span>{sol.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        active === i
                          ? "rotate-90 text-[#F05023]"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div
          ref={mainSectionRef}
          className="col-span-7 flex flex-col gap-14 items-center w-full relative"
        >
          {/* ===== IMAGE ===== */}
          <div className="flex justify-center w-full px-2 sm:px-6">
            <div className="relative w-full sm:w-[80%] lg:w-[85%] max-w-[900px] h-[220px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src={solutions[active].image}
                alt={solutions[active].title}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* ===== TITLE + DESC ===== */}
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-[#0A175C] font-outfit font-semibold text-[24px] sm:text-[30px] mb-3">
              {solutions[active].title}
            </h2>
            <div className="w-20 h-[3px] bg-[#F05023] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-[16px] sm:text-[18px] font-lato">
              {solutions[active].shortDesc}
            </p>
          </div>

          {/* ===== WHAT WE OFFER ===== */}
          <section className="text-center w-full px-2 sm:px-6 py-16 bg-gradient-to-b from-white to-[#f9fafc]">
  <h3 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0A175C] mb-3">
    What We <span className="text-[#F05023]">Offer</span>
  </h3>
  <div className="w-20 h-[3px] bg-[#F05023] mx-auto mb-10 rounded-full"></div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
    {solutions[active].whatWeOffer.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col gap-3 p-5 sm:p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
      >
        {/* Icon and title in a row */}
        <div className="flex items-center gap-3 mb-2">
          {/* <div className="flex items-center justify-center w-12 h-12 bg-[#F05023]/10 rounded-full"> */}
            <span className="text-[#F05023] text-xl">★</span>
          {/* </div> */}
          <h4 className="text-[#F05023] font-outfit font-semibold text-[18px] sm:text-[20px]">
            {item.title}
          </h4>
        </div>

        <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed font-lato text-left">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


          {/* ===== ADVANCED SERVICES ===== */}
          <section className="mt-12 bg-gray-50 py-12 px-4 sm:px-8 rounded-2xl shadow-sm text-center w-full">
            <h3 className="text-3xl sm:text-4xl font-outfit font-bold text-[#0A175C] mb-3">
              ADVANCED <span className="text-[#F05023]">ENGINEERING SERVICES</span>
            </h3>
            <div className="w-24 h-[3px] bg-[#F05023] mx-auto mb-10 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {advancedServices.map((srv, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500 text-left"
                >
                  <h4 className="text-[#F05023] font-outfit font-semibold mb-3 text-[20px] sm:text-[22px]">
                    {srv.title}
                  </h4>
                  <p className="text-gray-600 text-[16px] sm:text-[18px] mb-3 font-lato">
                    {srv.desc}
                  </p>
                  {srv.points && (
                    <ul className="list-disc list-inside text-gray-600 text-[15px] sm:text-[16px] space-y-1 font-lato">
                      {srv.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
