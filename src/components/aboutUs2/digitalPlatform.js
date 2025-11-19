"use client";
import React from "react";
import Image from "next/image";
import digitalImg from "../../../public/dummy3.png";
import unique1 from "../../../public/dummy3.png";
import unique2 from "../../../public/dummy3.png";
import unique3 from "../../../public/dummy3.png";
import unique4 from "../../../public/dummy3.png";
import { CheckCircle, BarChart3, RefreshCcw, ShieldCheck } from "lucide-react";

export default function DigitalPlatform() {
  const features = [
    {
      title: "Data-Backed Supplier Network",
      desc: "Verified suppliers onboarded through a detailed capability, compliance, and quality evaluation.",
      img: unique1,
      icon: CheckCircle,
      reverse: false,
    },
    {
      title: "Smart RFQ Management",
      desc: "Dynamic routing to the most suitable suppliers based on capability match and performance history.",
      img: unique2,
      icon: BarChart3,
      reverse: true,
    },
    {
      title: "Transparent Order Lifecycle",
      desc: "Real-time dashboards showing production status, inspection updates, logistics, and payments.",
      img: unique3,
      icon: RefreshCcw,
      reverse: false,
    },
    {
      title: "Integrated QC & Compliance",
      desc: "Digital inspection records, certifications, and supplier scoring embedded in every workflow.",
      img: unique4,
      icon: ShieldCheck,
      reverse: true,
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-20 py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f5f8ff 100%)",
      }}
    >
      {/* OUR DIGITAL PLATFORM */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight text-[#0A175C]">
          Our Digital Platform
        </h2>
        <div
          className="h-1 w-16 sm:w-20 mx-auto rounded-full mb-3"
          style={{ backgroundColor: "#F05023" }}
        ></div>
        <p className="text-gray-700 font-medium text-base sm:text-lg">
          Where Technology Powers Manufacturing
        </p>

        <div className="max-w-6xl mx-auto mt-6 sm:mt-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
          <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-base lg:w-1/2 text-center lg:text-left">
            <p>
              {`Modern manufacturing demands speed, transparency, and coordination — yet many supply chains still depend on fragmented communication, manual follow-ups, and limited visibility.`}
            </p>
            <p>
              {`SureSupply’s digital platform bridges this gap by bringing together buyers, suppliers, and internal teams into one connected ecosystem that transforms how manufacturing operates every day.`}
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={digitalImg}
              alt="Digital platform illustration"
              width={350}
              height={250}
              className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 space-y-3 text-gray-700 leading-relaxed text-base text-center lg:text-left">
          <p>
            {`In today’s world of global competition and shortened product cycles, manufacturers can’t rely on phone calls, scattered spreadsheets, or unverified suppliers. Our platform introduces data-driven decision-making, process standardization, and end-to-end traceability, turning traditional workflows into real-time, insight-driven operations.`}
          </p>
          <p>
            By combining digital visibility with human accountability, SureSupply empowers every stakeholder in the supply chain to operate with clarity, confidence, and trust.
          </p>
        </div>
      </div>

      {/* WHAT MAKES SURESUPPLY UNIQUE */}
      <div className="pt-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-[#0A175C]">
          What Makes SureSupply Unique
        </h2>
        <div
          className="h-1 w-16 sm:w-20 mx-auto rounded-full mb-4"
          style={{ backgroundColor: "#F05023" }}
        ></div>
        <p className="text-gray-700 font-medium max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          {`Unlike generic B2B marketplaces, SureSupply is a managed manufacturing ecosystem. Our platform doesn’t just connect buyers and suppliers — it takes ownership of outcomes. Every RFQ, order, and inspection passes through structured digital workflows backed by on-ground teams, ensuring quality, compliance, and timely delivery every time.`}
        </p>

        <div className="max-w-6xl mx-auto space-y-14 sm:space-y-20 mt-8 sm:mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center lg:flex-row gap-6 sm:gap-10 ${item.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT SECTION */}
                <div className="lg:w-1/2 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed px-2 sm:px-4 text-center lg:text-left">
                  <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <div
                      className="p-2 rounded-full shadow-md"
                      style={{ backgroundColor: "#F0502320" }}
                    >
                      <Icon size={22} strokeWidth={2.2} style={{ color: "#F05023" }} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0A175C]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed">{item.desc}</p>
                </div>

                {/* IMAGE SECTION */}
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={230}
                    className="object-contain w-[320px] h-auto drop-shadow-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
