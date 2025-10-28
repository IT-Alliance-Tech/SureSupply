"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ====== IMAGES ======
import bannerImg from "../../../public/bannerC.png";
import helpBg from "../../../public/solutions/bg4.png";
import logo from "../../../public/logo.png";

// ====== SOLUTION ICONS ======
import icon1 from "../../../public/solutions/icon1.svg";
import icon2 from "../../../public/solutions/icon2.svg";
import icon3 from "../../../public/solutions/icon3.svg";
import icon4 from "../../../public/solutions/icon4.svg";
import icon5 from "../../../public/solutions/icon5.svg";

// ====== SOLUTION IMAGES ======
import solutionImg1 from "../../../public/solutions/dummy1.png";
import solutionImg2 from "../../../public/solutions/dummy1.png";
import solutionImg3 from "../../../public/solutions/dummy1.png";
import solutionImg4 from "../../../public/solutions/dummy1.png";
import solutionImg5 from "../../../public/solutions/dummy1.png";

// ====== MUI ICONS FOR PLANNING & STRATEGY ======
import AssessmentIcon from "@mui/icons-material/Assessment";
import BuildIcon from "@mui/icons-material/Build";
import TimelineIcon from "@mui/icons-material/Timeline";
import BoltIcon from "@mui/icons-material/Bolt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// ====== Planning Steps Array ======
const planningSteps = [
  { icon: <AssessmentIcon className="text-[#F05023]" fontSize="small" />, title: "Needs Assessment" },
  { icon: <BuildIcon className="text-[#F05023]" fontSize="small" />, title: "Technology Selection" },
  { icon: <TimelineIcon className="text-[#F05023]" fontSize="small" />, title: "Timeline & Milestones" },
  { icon: <BoltIcon className="text-[#F05023]" fontSize="small" />, title: "Process Optimization" },
  { icon: <MonetizationOnIcon className="text-[#F05023]" fontSize="small" />, title: "Feasibility & ROI" },
  { icon: <TrendingUpIcon className="text-[#F05023]" fontSize="small" />, title: "Scalability Planning" },
];

export default function CustomSolutionPage() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: "End-to-End Manufacturing",
      description:
        "We manage your entire product journey — from idea to mass production with multi-process capabilities and flexible production scales.",
      image: solutionImg1,
      paragraph: `At SureSupply, we go beyond sourcing and manufacturing — offering complete engineering, production, and project lifecycle support. From concept design to final delivery, our integrated solutions ensure speed, quality, and cost efficiency at every stage.

We manage your entire product journey — from idea to mass production. 

What We Offer:
• Multi-process manufacturing: casting, forging, fabrication, machining, molding, and rapid prototyping. (Linked with capabilities section when clicked)
• Tooling and fixture development.
• Flexible batch sizes — from prototypes to full-scale production.
• Vendor development and cost-optimized process selection.`,
      icon: icon1,
    },
    {
      title: "Inventory Management",
      description:
        "We ensure your supply chain stays lean and uninterrupted through real-time tracking, stocking, and inventory optimization.",
      image: solutionImg2,
      paragraph: `We ensure your supply chain stays lean and uninterrupted, maintaining a balance between efficiency and flexibility.

What We Offer:
• Just-in-Time (JIT) and Vendor Managed Inventory (VMI) programs.
• Real-time tracking and warehouse management.
• Strategic stocking for domestic and export needs.
• Customized packaging and barcoding solutions.`,
      icon: icon2,
    },
    {
      title: "Logistics & Delivery",
      description:
        "We provide timely, safe, and optimized deliveries worldwide with end-to-end logistics coordination and freight optimization.",
      image: solutionImg3,
      paragraph: `Timely, safe, and optimized deliveries are the backbone of every successful supply chain. Our logistics network ensures reliability, visibility, and cost efficiency across global operations.

What We Offer:
• Domestic and international logistics coordination.
• Consolidated shipments and multi-location dispatch.
• Freight optimization and packaging design for reduced cost.
• Transparent tracking and documentation support.`,
      icon: icon3,
    },
    {
      title: "Quality Assurance",
      description:
        "Every part we deliver passes through rigorous in-house and third-party quality checks to meet global standards.",
      image: solutionImg4,
      paragraph: `Every part we deliver passes through rigorous in-house and third-party quality checks to ensure compliance, consistency, and reliability.

What We Offer:
• NABL-certified lab reports.
• Dimensional, metallurgical, and performance testing.
• PPAP, FMEA, and SPC documentation.
• Continuous improvement through root cause and CAPA analysis.`,
      icon: icon4,
    },
    {
      title: "Project Management Support",
      description:
        "We provide end-to-end project coordination to meet delivery, cost, and quality targets through dedicated management systems.",
      image: solutionImg5,
      paragraph: `We provide end-to-end project coordination to ensure delivery, cost, and quality targets are achieved without compromise.

What We Offer:
• Dedicated project managers for each account.
• Real-time progress tracking and reporting.
• Cross-functional communication between design, production, and logistics.
• Change management and technical documentation control.`,
      icon: icon5,
    },
  ];

  return (
    <div className="flex flex-col font-outfit">
      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Custom Solution Banner"
          fill
          priority
          className="object-cover object-left absolute inset-0 -z-10"
        />
        <div className="text-left text-white z-10 px-6 sm:px-12 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-wide mb-4 leading-tight">
            OUR <span className="text-white">CUSTOM SOLUTION</span>
          </h1>
          <div className="text-sm sm:text-base font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#F05023]">/</span>
            <span className="text-[#F05023]">Our Custom Solution</span>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS + HELP (30/70) ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8">
          {/* Left-side (30%) */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-6 sticky top-24 h-fit self-start">
            {/* Solution Categories */}
            <div className="bg-[#F05023] text-white px-4 py-2 rounded-t-md font-semibold">
              Solution Category
            </div>
            <div className="bg-white rounded-b-md shadow-md flex flex-col">
              {solutions.map((sol, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSolution(idx)}
                  className={`flex items-center justify-between px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    activeSolution === idx ? "text-[#F05023] font-semibold" : "text-blue-600"
                  }`}
                >
                  <span>{sol.title}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeSolution === idx ? "rotate-45 text-[#F05023]" : "rotate-12 text-blue-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Need Help */}
            <div className="relative mt-6">
              <Image src={helpBg} alt="Need Help Background" width={900} height={300} className="object-cover rounded-xl" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 gap-3 text-white text-center">
                <div className="w-16 h-16 relative">
                  <Image src={logo} alt="Logo" fill className="object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold">Need help!</h4>
                <p className="text-xs sm:text-sm">
                  Got questions or need assistance with <br /> your Industry needs?
                </p>
                <div className="text-xs sm:text-sm flex flex-col gap-1">
                  <span>📞 +1 840 841 256</span>
                  <span>✉️ info@domain.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right-side (70%) */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-6 justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
              <Image
                src={solutions[activeSolution].image}
                alt={solutions[activeSolution].title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
              {solutions[activeSolution].paragraph}
            </p>

            {/* ================= WHY CHOOSE OUR SOLUTIONS ================= */}
            <section className="mt-12 bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A175C] mb-6">
                WHY CHOOSE <span className="text-[#F05023]">OUR SOLUTIONS</span>
              </h2>
              <p className="text-gray-600 mb-8 sm:mb-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                We provide end-to-end supply chain and manufacturing solutions designed to simplify operations, improve quality, and optimize costs. Our approach ensures that every stage — from concept to delivery — is seamlessly managed for efficiency, reliability, and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {solutions.map((sol, idx) => (
                  <div key={idx} className={`flex flex-col gap-2 sm:gap-3 p-4 rounded-lg shadow-sm transition-all ${
                    idx === activeSolution ? "border-2 border-[#F05023]" : "border border-gray-200"
                  }`}>
                    <Image src={sol.icon} alt={sol.title} width={50} height={50} />
                    <h4 className="text-[#0A175C] font-semibold text-sm sm:text-base">{sol.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{sol.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= PLANNING & STRATEGY ================= */}
            <section className="mt-10 bg-white py-8 sm:py-10 rounded-xl px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A175C] mb-3">
                  PLANNING & <span className="text-[#F05023]">STRATEGY</span>
                </h2>
                <p className="mb-6 sm:mb-8 max-w-full sm:max-w-3xl text-sm sm:text-base text-[#0A175C]">
                  Our strategic planning ensures each project — from concept to production — is designed for scalability, quality, and efficiency, helping you stay ahead in a competitive market.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                  {planningSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFF4F0] flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#0A175C]">{step.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[180px] sm:min-h-[220px] shadow-sm">
                    <div className="w-full max-w-[360px] h-40 sm:h-48 bg-white rounded-lg flex items-center justify-center">
                      <Image src={solutionImg1} alt="planning placeholder 1" width={320} height={200} className="object-contain" />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[180px] sm:min-h-[220px] shadow-sm">
                    <div className="w-full max-w-[360px] h-40 sm:h-48 bg-white rounded-lg flex items-center justify-center">
                      <Image src={solutionImg2} alt="planning placeholder 2" width={320} height={200} className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
