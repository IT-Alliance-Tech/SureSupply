"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ====== IMAGES ====== */
import bannerImg from "../../../public/bannerC.png";
import main1 from "../../../public/dummy3.png";
import main2 from "../../../public/dummy3.png";

/* Subcategory images (10 total) */
import sub1 from "../../../public/dummy3.png";
import sub2 from "../../../public/dummy3.png";
import sub3 from "../../../public/dummy3.png";
import sub4 from "../../../public/dummy3.png";
import sub5 from "../../../public/dummy3.png";
import sub6 from "../../../public/dummy3.png";
import sub7 from "../../../public/dummy3.png";
import sub8 from "../../../public/dummy3.png";
import sub9 from "../../../public/dummy3.png";
import sub10 from "../../../public/dummy3.png";

/* ICONS */
import pointIcon from "../../../public/icon.svg";
import icon1 from "../../../public/solutions/icon1.svg";
import icon2 from "../../../public/solutions/icon2.svg";
import icon3 from "../../../public/solutions/icon3.svg";
import icon4 from "../../../public/solutions/icon1.svg";
import menuIcon from "../../../public/solutions/icon4.svg";

export default function CapabilitiesPage() {
  const contentRef = useRef(null);

  const categories = [
    {
      id: "casting",
      title: "Casting",
      img: main1,
      content:
        "We offer a complete suite of services that encompasses the entire casting lifecycle, from the initial spark of an idea to the final, meticulously inspected product. This journey begins with collaborative design and expert pattern development, where we translate your vision into tangible blueprints. Our capabilities extend to advanced simulations, allowing us to predict and optimize performance before physical production, thereby minimizing risks and accelerating development cycles. Following this, our meticulous finishing processes ensure the highest aesthetic and functional quality. Every casting method, whether it's sand casting, investment casting, or die casting, is carefully selected and customized based on your project's unique requirements.",
      subs: [
        {
          id: "casting-high",
          title: "High Pressure Die Casting (HPDC)",
          img: sub1,
          content:
            "High-Pressure Die Casting stands as our premier manufacturing method for the most demanding applications, offering an unparalleled combination of speed, precision, and the ability to produce components of exceptional quality.",
        },
        { id: "casting-low", title: "Low Pressure Casting", img: sub2, content: "Low-pressure casting delivering improved mechanical properties and better control of metal feeding." },
        { id: "casting-cold", title: "Cold Chamber Casting", img: sub3, content: "Cold-chamber processes for high-strength aluminum and magnesium alloys." },
        { id: "casting-hot", title: "Hot Chamber Casting", img: sub4, content: "Hot-chamber setups for zinc and magnesium alloys, balancing cycle time and precision." },
        { id: "casting-precision", title: "Precision Casting", img: sub5, content: "Precision casting techniques for complex parts, narrow tolerances, and excellent surface finish." },
      ],
    },
    {
      id: "processes",
      title: "Processes",
      img: main2,
      content:
        "Our process portfolio includes CNC machining, welding, finishing, and in-line inspection. We combine automation and best-in-class tooling to reduce variability and improve throughput while maintaining traceability.",
      subs: [
        { id: "process-cnc", title: "CNC Machining", img: sub6, content: "Multi-axis CNC machining to achieve complex geometries and tight dimensional control." },
        { id: "process-finishing", title: "Surface Finishing", img: sub7, content: "Anodizing, powder coat, plating and polishing to achieve functional and cosmetic finishes." },
        { id: "process-welding", title: "Welding Process", img: sub8, content: "Welding and assembly for structural and sub-assembly integration." },
        { id: "process-inspection", title: "Inspection Process", img: sub9, content: "CMM, visual inspection, and NDT to ensure parts meet design intent and acceptance criteria." },
        { id: "process-assembly", title: "Assembly Services", img: sub10, content: "Kitted and assembled units ready for downstream integration with full BOM support." },
      ],
    },
  ];

  const [activeMain, setActiveMain] = useState(categories[0].id);
  const [openMain, setOpenMain] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [activeMain, activeSub]);

  const activeMainObj = categories.find((c) => c.id === activeMain);
  const activeSubObj = activeMainObj && activeMainObj.subs.find((s) => s.id === activeSub);

  const whyChoosePoints = [
    "Tolerances as tight as ±0.003″",
    "Lead times as fast as 10–15 days for samples",
    "Over 4,000 material & finishing combinations",
    "Full-BOM services including CNC, welding, assembly",
    "Backed by ISO 9001:2015 certified quality management",
    "Certified alloys: Aluminum (ADC12, A380, A383, A390), Zinc (Zamak 3, Zamak 5), Magnesium (AZ91D)",
  ];

  const dieCastingTypes = [
    { icon: icon1, title: "High Pressure", description: "Ensures fine detail and dimensional accuracy, ideal for large-volume production." },
    { icon: icon2, title: "Low Pressure", description: "Provides superior mechanical properties and consistent wall thickness." },
    { icon: icon3, title: "Cold Chamber", description: "Suitable for aluminum and magnesium alloys requiring high strength." },
    { icon: icon4, title: "Hot Chamber", description: "Ideal for zinc and magnesium alloys with faster production cycles." },
  ];

  const renderSubcategoryContent = (mainItem, subItem) => (
    <div className="flex flex-col gap-12">
      {/* Image + Text */}
      <div className="flex flex-col gap-6">
        <div className="relative h-[360px] w-full">
          <Image src={subItem.img} alt={subItem.title} fill className="object-contain rounded-2xl" />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0A175C]">{subItem.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">{subItem.content}</p>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <section>
        <h4 className="text-[30px] font-bold text-[#0A175C] mb-4">
          WHY CHOOSE <span className="text-[#F05023]">SURE SUPPLY</span>
        </h4>
        <div className="flex flex-col gap-3 text-[18px] text-[#0A175C]">
          {whyChoosePoints.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Image src={pointIcon} alt="point icon" width={20} height={20} />
              </div>
              <div>{p}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIE CASTING TYPES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dieCastingTypes.map((type, idx) => (
          <div key={idx} className="bg-[#0E1B4D] text-white rounded-2xl p-6">
            <Image src={type.icon} alt={type.title} width={48} height={48} className="mb-4" />
            <h3 className="text-[18px] font-semibold mb-1">{type.title}</h3>
            <p className="text-gray-300 text-sm">{type.description}</p>
          </div>
        ))}
      </section>
    </div>
  );

  const renderMainContent = (item) => (
    <div className="flex flex-col gap-6">
      <div className="relative h-[360px] w-full">
        <Image src={item.img} alt={item.title} fill className="object-contain rounded-2xl" />
      </div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A175C]">{item.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">{item.content}</p>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col font-outfit">
      {/* HERO */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <Image src={bannerImg} alt="Capabilities Banner" fill priority className="object-cover object-left absolute inset-0 -z-10" />
        <div className="text-left text-white z-10 px-6 lg:px-24">
          <h1 className="text-[48px] font-bold tracking-wide mb-4 leading-tight">
            OUR <span className="text-white">CAPABILITIES</span>
          </h1>
          <div className="text-base font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#F05023]">/</span>
            <span className="text-[#F05023]">Our Capabilities</span>
          </div>
        </div>
      </section>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex justify-between items-center px-6 py-4 bg-[#0A175C] text-white">
        <h2 className="text-lg font-semibold">Capabilities</h2>
        <button onClick={() => setMobileMenuOpen(true)}>
          <Image src={menuIcon} alt="menu" width={28} height={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 transform transition-transform duration-300 shadow-xl ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="font-semibold text-[#0A175C]">Categories</h2>
          <button onClick={() => setMobileMenuOpen(false)} className="text-[#F05023] text-lg font-bold">✕</button>
        </div>

        <nav className="p-4 flex flex-col space-y-2 overflow-y-auto h-[calc(100%-60px)]">
          {categories.map((cat) => (
            <div key={cat.id}>
              <button
                className={`w-full text-left py-2 font-semibold ${
                  activeMain === cat.id ? "text-[#F05023]" : "text-[#0A175C]"
                }`}
                onClick={() =>
                  setActiveMain((prev) => (prev === cat.id ? null : cat.id))
                }
              >
                {cat.title}
              </button>
              {activeMain === cat.id && (
                <div className="ml-4 mt-1 flex flex-col space-y-1">
                  {cat.subs.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setActiveSub(sub.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left text-sm py-1 ${
                        activeSub === sub.id
                          ? "text-[#F05023] font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* MAIN LAYOUT */}
      <section className="bg-white py-10 lg:py-16">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[2.7fr_7.3fr] gap-8 items-start">
            {/* SIDEBAR (Desktop only) */}
            <aside className="hidden lg:block col-span-1">
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                <div className="bg-[#F05023] text-white px-3 py-2 rounded-md font-semibold mb-4">
                  Capabilities Category
                </div>
                <nav className="flex flex-col space-y-1">
                  {categories.map((cat) => (
                    <div key={cat.id}>
                      <button
                        onClick={() => {
                          setActiveMain(cat.id);
                          setActiveSub(null);
                          setOpenMain((prev) => (prev === cat.id ? null : cat.id));
                        }}
                        className={`flex items-center text-[#0A175C] justify-between w-full text-left px-3 py-3 rounded-md transition-all ${
                          activeMain === cat.id
                            ? "bg-[#FFF8F6] border border-[#F05023] text-[#F05023] font-semibold"
                            : "hover:bg-[#F05023] hover:text-white"
                        }`}
                      >
                        <span className="text-sm">{cat.title}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            openMain === cat.id ? "rotate-90 text-[#F05023]" : "text-[#F05023]"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {openMain === cat.id && (
                        <div className="ml-4 mt-2 flex flex-col space-y-1">
                          {cat.subs.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setActiveMain(cat.id);
                                setActiveSub(sub.id);
                                setOpenMain(cat.id);
                              }}
                              className={`text-sm text-left px-3 py-2 rounded-md transition-all ${
                                activeSub === sub.id
                                  ? "bg-[#F05023] text-white font-medium"
                                  : "hover:bg-[#F05023] hover:text-white text-[#0A175C]"
                              }`}
                            >
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main
              ref={contentRef}
              className="col-span-1 flex flex-col gap-10 overflow-y-auto pr-2"
              style={{ maxHeight: "calc(100vh - 150px)" }}
            >
              {activeSub && activeMainObj && activeSubObj
                ? renderSubcategoryContent(activeMainObj, activeSubObj)
                : activeMainObj
                ? renderMainContent(activeMainObj)
                : <div className="text-gray-400 text-center mt-10">No category selected</div>}
            </main>
          </div>
        </div>
      </section>
    </section>
  );
}
