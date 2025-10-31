"use client";

import { useState } from "react";
import Image from "next/image";
import { solutions, advancedServices } from "../../components/solutionContent";

export default function CustomSolutionPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="font-outfit">
      {/* ===== BANNER ===== */}
      <section className="relative h-[400px] flex items-center justify-center bg-[#0A175C] text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center tracking-wide">
          OUR <span className="text-[#F05023]">CUSTOM SOLUTIONS</span>
        </h1>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="grid grid-cols-1 md:grid-cols-10 gap-10 py-12 px-6 lg:px-20 bg-white">
        {/* ===== LEFT SIDE MENU ===== */}
        <div className="col-span-3 hidden lg:block sticky top-28 self-start">
  <aside className="bg-white rounded-2xl shadow-lg p-5">
    {/* Header */}
    <div className="bg-[#F05023] text-white px-4 py-2 rounded-md font-semibold mb-4">
      Solution Category
    </div>

    {/* Category Buttons */}
    <ul className="space-y-3">
      {solutions.map((sol, i) => (
        <li key={sol.id}>
          <button
            onClick={() => setActive(i)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] font-medium transition-all duration-300 cursor-pointer border-l-4 ${
              active === i
                ? "border-[#F05023] bg-[#FFF8F6] text-[#F05023] shadow-sm"
                : "border-transparent text-[#0A175C] hover:bg-gray-50"
            }`}
          >
            {/* Title + Active Dot */}
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  active === i ? "bg-[#F05023]" : "bg-gray-400 group-hover:bg-[#F05023]"
                }`}
              />
              <span>{sol.title}</span>
            </div>

            {/* Chevron Icon */}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                active === i ? "rotate-90 text-[#F05023]" : "text-gray-400 group-hover:text-[#F05023]"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  </aside>
</div>

        {/* ===== RIGHT SIDE CONTENT ===== */}
        <div className="col-span-7 flex flex-col gap-14">
          {/* ===== IMAGE SECTION ===== */}
<div className="flex justify-center">
  <div className="relative w-full sm:w-[60%] lg:w-[80%] h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
    <Image
      src={solutions[active].image}
      alt={solutions[active].title}
      fill
      className="object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
</div>


          {/* ===== SHORT DESCRIPTION ===== */}
          <p className="text-gray-600 leading-relaxed text-[18px] text-center whitespace-pre-line">
            {solutions[active].shortDesc}
          </p>

          {/* ===== WHAT WE OFFER ===== */}
          <section className="text-center">
  <h3 className="text-4xl font-bold text-[#0A175C] mb-3">
    What We <span className="text-[#F05023]">Offer</span>
  </h3>
  <div className="w-20 h-[3px] bg-[#F05023] mx-auto mb-10 rounded-full"></div>

  {/* Centered Grid with Controlled Width */}
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
    {solutions[active].whatWeOffer.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col gap-3 p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform"
      >
        <h4 className="text-[#F05023] font-semibold text-[20px]">
          {item.title}
        </h4>
        <p className="text-gray-600 text-[18px] leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


          {/* ===== ADVANCED ENGINEERING SERVICES ===== */}
          <section className="mt-12 bg-gray-50 py-12 px-6 rounded-2xl shadow-sm ">
            <h3 className="text-4xl font-bold text-[#0A175C] text-center mb-3">
  ADVANCED <span className="text-[#F05023]">ENGINEERING SERVICES</span>
</h3>
            <div className="w-24 h-[3px] bg-[#F05023] mx-auto mb-10 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {advancedServices.map((srv, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500 transform"
                >
                  <h4 className="text-[#F05023] font-semibold mb-3 text-[22px]">
                    {srv.title}
                  </h4>
                  <p className="text-gray-600 text-[18px] mb-3">{srv.desc}</p>

                  {srv.points && (
                    <ul className="list-disc list-inside text-gray-600 text-[16px] text-left space-y-1">
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
