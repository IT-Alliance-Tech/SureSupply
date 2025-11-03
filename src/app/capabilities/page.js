"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

/* ====== IMPORT CONTENT ====== */
import bannerImg from "../../../public/bannerC.png";
import pointIcon from "../../../public/icon.svg";
import { categories } from "../../components/capabilitiesContent";

const CapabilitiesPage = () => {
  const [activeMain, setActiveMain] = useState(categories?.[0]?.id || null);
  const [openMain, setOpenMain] = useState(categories?.[0]?.id || null);
  const [activeSub, setActiveSub] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

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
        <div className="relative w-full sm:w-[80%] h-[250px] sm:h-[360px] rounded-2xl overflow-hidden">
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

      {/* Key Advantages Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f8f9fc]">
        <h3 className="text-[28px] sm:text-[38px] font-outfit font-semibold text-[#0A175C] mb-10 text-center relative">
          Quality Forged by SureSupply
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] sm:w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 perspective-[1200px]">
          {subItem.advantages.map((adv, i) => (
            <div
              key={i}
              className="relative bg-[#0A175C] text-white rounded-2xl p-6 sm:p-8 shadow-lg
        hover:-translate-y-5 hover:scale-[1.08] hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              <h4 className="text-[22px] sm:text-[26px] font-outfit font-bold text-[#F05023] mb-3 sm:mb-4">
                {adv.title}
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-[16px] sm:text-[18px] font-lato text-gray-200 leading-relaxed">
                {adv.points?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Our Expertise Section */}
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
        <div className="mt-12 bg-[#0A175C] text-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h4 className="text-2xl sm:text-3xl font-outfit font-semibold text-[#F05023] mb-8 text-center drop-shadow-md">
            {`Beyond Testing: A Culture of Zero-Defect Manufacturing`}
          </h4>

          <div className="flex flex-col gap-6">
            {qa.beyondTesting.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/10 hover:bg-white/20 transition-colors duration-300 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg"
              >
                <span className="text-[#F05023] text-lg mt-1">✔</span>
                <div>
                  <h5 className="text-[16px] sm:text-[18px] font-outfit font-semibold text-[#F05023] mb-1">
                    {item.title}
                  </h5>
                  <p className="text-[15px] sm:text-[17px] font-lato text-gray-100 leading-[1.8]">
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
    <div className="flex flex-col gap-10 group transition-all duration-500 px-3 sm:px-0 text-left">
  {/* Image */}
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

  {/* Title */}
  <h3 className="text-[24px] sm:text-[40px] font-outfit font-bold text-[#0A175C] relative inline-block mx-auto text-center">
  {item.title}
  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] sm:w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
</h3>

  {/* Content */}
  <div
    className="text-[16px] sm:text-[18px] font-lato leading-[1.8] text-[#1A2A6C] space-y-4"
    dangerouslySetInnerHTML={{ __html: item.content }}
  ></div>

  {/* Quality Assurance (if exists) */}
  {item.qualityAssurance && renderQualityAssurance(item.qualityAssurance)}
</div>

  );

  return (
    <section className="flex flex-col font-outfit">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[400px] sm:min-h-[600px] flex items-center justify-center overflow-hidden pt-[100px] pb-[60px]">
        <Image
          src={bannerImg}
          alt="Capabilities Banner"
          fill
          priority
          className="object-cover object-left absolute inset-0 -z-10"
        />
        <div className="relative text-center text-white z-10 px-4 sm:px-6 lg:px-24 max-w-[1200px] mx-auto">
          <h1 className="text-[42px] sm:text-[64px] font-outfit font-bold tracking-wide mb-6 leading-tight drop-shadow-md">
            OUR <span className="text-white">CAPABILITIES</span>
          </h1>
          <div className="text-[16px] sm:text-[20px] font-outfit flex justify-center items-center gap-2">
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

export default CapabilitiesPage;
