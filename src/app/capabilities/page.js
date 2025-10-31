"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

/* ====== IMPORT CONTENT ====== */
import bannerImg from "../../../public/bannerC.png";
import pointIcon from "../../../public/icon.svg";
import { categories } from "../../components/capabilitiesContent";

const CapabilitiesPage = () => {
  const [activeMain, setActiveMain] = useState(categories?.[0]?.id || null);
  const [openMain, setOpenMain] = useState(categories?.[0]?.id || null);
  const [activeSub, setActiveSub] = useState(null);

  const activeMainObj = categories.find((c) => c.id === activeMain);
  const activeSubObj = activeMainObj?.subs?.find((s) => s.id === activeSub);

  

  // 🟠 Scroll to top when category/subcategory changes
  const scrollToTop = () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  /* ====== SUBCATEGORY CONTENT ====== */
  const renderSubcategoryContent = (mainItem, subItem) => (
    <div className="flex flex-col gap-10 font-lato">
      {/* 🖼️ Centered Image */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[80%] h-[360px] rounded-2xl overflow-hidden">
          <Image
            src={subItem.img}
            alt={subItem.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <h3 className="w-[80%] text-[28px] sm:text-[32px] font-outfit font-bold text-[#F05023] text-center">
          {subItem.title}
        </h3>
      </div>

      <p className="text-gray-800 text-[18px] leading-[1.8]">{subItem.content}</p>

      {/* === Key Advantages Section === */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-[#f8f9fc]">
  <h3 className="text-[38px] font-outfit font-semibold text-[#0A175C] mb-10 text-center relative">
    Quality Forged by SureSupply
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 perspective-[1200px]">
    {subItem.advantages.map((adv, i) => (
      <div
        key={i}
        className="relative bg-[#0A175C] text-white rounded-2xl p-8 shadow-lg
        hover:-translate-y-5 hover:scale-[1.12] hover:rotate-x-3
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        overflow-hidden group cursor-pointer transform-gpu"
      >
        {/* Orange Glow Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#F05023]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div> */}

        <h4 className="relative text-[26px] font-outfit font-bold text-[#F05023] mb-4 z-10">
          {adv.title}
          <span className="absolute left-0 -bottom-1 w-[40px] h-[3px] bg-[#F05023] rounded-full"></span>
        </h4>

        <ul className="list-disc pl-5 space-y-2 text-[18px] font-lato text-gray-200 leading-relaxed z-10 relative">
          {adv.points?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


      {/* === Our Expertise Section === */}
      <section>
  <h3 className="text-[38px] font-outfit font-bold text-[#0A175C] mb-10 text-center relative">
    Our Expertise
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
  </h3>

  <div className="bg-[#F9F9F9] border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
    <ul className="space-y-5">
      {subItem.expertise.map((point, i) => {
        const [title, content] = point.split(":");
        return (
          <li
            key={i}
            className="flex items-start gap-3 text-[#0A175C] text-[18px] font-lato leading-[1.8]"
          >
            <Image
              src={pointIcon}
              alt="point"
              width={18}
              height={18}
              className="mt-1"
            />
            <div>
              <span className="block text-[20px] sm:text-[22px] font-outfit font-bold text-[#F05023] mb-1">
                {title}
              </span>
              <span className="text-[#0A175C] text-[18px] font-lato">
                {content}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
</section>

      {/* === CTA Section === */}
      <section className="relative mt-20 flex justify-center">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] text-center bg-[#F9F9F9] py-12 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-[34px] sm:text-[40px] font-outfit font-bold text-[#0A175C] mb-4">
            {`Let’s Build Your Next Component.`}
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-[18px] font-lato mb-8 leading-[1.8]">
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

  /* ====== QUALITY ASSURANCE SECTION ====== */
  const renderQualityAssurance = (qa) => (
    <section className="py-16 bg-gradient-to-b from-white to-[#F9F9F9] rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h3 className="text-[40px] font-outfit font-bold text-[#0A175C] mb-10 text-center relative">
  {qa.title}
  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
</h3>


        <p className="text-gray-800 text-[18px] font-lato text-center max-w-3xl mx-auto mb-12 leading-[1.8]">
          {qa.description}
        </p>

        <div className="space-y-6 border-l-4 border-[#F05023] pl-6">
          {qa.points.map((point, i) => (
            <div
              key={i}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl p-6 border border-gray-200 cursor-pointer"
            >
              <h4 className="text-[20px] font-outfit font-semibold text-[#0A175C] mb-2 flex items-center gap-2">
                <span className="text-[#F05023]">▌</span> {point.title}
              </h4>
              <p className="text-gray-700 text-[17px] font-lato leading-[1.8]">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0A175C] text-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h4 className="text-2xl font-outfit font-semibold text-[#F05023] mb-10 text-center drop-shadow-md">
            {`Beyond Testing: A Culture of Zero-Defect Manufacturing`}
          </h4>

          <div className="flex flex-col gap-6">
            {qa.beyondTesting.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/10 hover:bg-white/20 transition-colors duration-300 p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
              >
                <span className="text-[#F05023] text-lg mt-1">✔</span>
                <div>
                  <h5 className="text-[18px] font-outfit font-semibold text-[#F05023] mb-1">
                    {item.title}
                  </h5>
                  <p className="text-[17px] font-lato text-gray-100 leading-[1.8]">
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
    <div className="flex flex-col gap-10 group transition-all duration-500">
      <div className="flex justify-center">
      <div className="relative h-[360px] w-[80%] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      </div>

      <h3 className="text-[40px] font-outfit font-bold text-[#0A175C] text-center relative inline-block mx-auto">
  {item.title}
  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80px] h-[4px] bg-[#F05023] rounded-full"></span>
</h3>


      <div
        className="text-[18px] font-lato leading-[1.8] text-[#1A2A6C] space-y-4"
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>

      {item.qualityAssurance && renderQualityAssurance(item.qualityAssurance)}
    </div>
  );

  return (
    <section className="flex flex-col font-outfit">
      {/* === HERO SECTION === */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden pt-[100px] pb-[60px]">
        <Image
          src={bannerImg}
          alt="Capabilities Banner"
          fill
          priority
          className="object-cover object-left absolute inset-0 -z-10"
        />
        <div className="relative text-left text-white z-10 px-6 lg:px-24 max-w-[1200px]">
          <h1 className="text-[44px] sm:text-[50px] font-outfit font-bold tracking-wide mb-4 leading-tight drop-shadow-md">
            OUR <span className="text-white">CAPABILITIES</span>
          </h1>
          <div className="text-[18px] font-lato flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors cursor-pointer">
              Home
            </Link>
            <span className="text-[#F05023]">/</span>
            <span className="text-[#F05023]">Our Capabilities</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT SECTION === */}
      <section className="bg-white py-10 lg:py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
            {/* === LEFT SIDEBAR === */}
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
                          if (openMain === main.id) {
                            setOpenMain(null);
                            setActiveSub(null);
                          } else {
                            setActiveMain(main.id);
                            setOpenMain(main.id);
                            setActiveSub(null);
                          }
                          scrollToTop(); // 🟢 scrolls to top when main clicked
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
                                  scrollToTop(); // 🟢 scrolls to top when sub clicked
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

            {/* === RIGHT CONTENT === */}
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
