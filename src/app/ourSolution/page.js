"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ====== IMAGES ======
import bannerImg from "../../../public/bannerC.png";
import helpBg from "../../../public/industries/bg4.png";
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
        "Businesses need a seamless manufacturing process to reduce delays, optimize resources, and ensure consistent product quality.",
      image: solutionImg1,
      paragraph: `At Sure Supply, we recognize that managing a supply chain involves far more than moving products from one point to another—it requires a careful balance of efficiency, quality, and reliability across multiple processes.

This solution focuses on streamlining manufacturing operations to reduce delays, optimize resources, and ensure consistent product quality. We help businesses implement systems that monitor production stages, minimize bottlenecks, and maintain high standards at every step.

Our team provides guidance on best practices, workflow optimization, and real-time monitoring. We also integrate automation where possible to reduce human error. By implementing predictive maintenance, businesses can avoid downtime. Additionally, we provide training for staff to improve process efficiency. Finally, our solution ensures scalability so that operations can grow seamlessly with business demand.`,
      icon: icon1,
    },
    {
      title: "Inventory Management",
      description:
        "Efficient inventory systems prevent stock-outs, reduce wastage, and maintain balance between demand and supply.",
      image: solutionImg2,
      paragraph: `Inventory Management is essential for ensuring smooth operations and reducing waste. Our solution helps businesses track inventory in real-time, forecast demand accurately, and maintain optimal stock levels.

With better inventory control, businesses can avoid stock-outs, reduce excess holding costs, and improve overall operational efficiency. We provide advanced reporting to identify slow-moving stock. Automated alerts notify teams of replenishment needs. Batch tracking improves traceability. Safety stock is calculated dynamically. Integrations with suppliers ensure timely delivery. Historical data analysis supports decision-making.`,
      icon: icon2,
    },
    {
      title: "Logistics & Delivery",
      description:
        "Reliable logistics ensure products reach customers on time, improving satisfaction and building trust.",
      image: solutionImg3,
      paragraph: `Reliable Logistics & Delivery is critical for maintaining customer satisfaction. Our solution optimizes shipping routes, monitors deliveries in real-time, and ensures products reach customers promptly.

We provide route planning tools, automated scheduling, and carrier management. Delivery tracking is transparent for customers. Risk management ensures minimal delays. Inventory is synchronized with transport schedules. Analytics provide insights on delivery performance. Notifications alert teams to potential issues before they escalate. Our approach ensures cost-effective and reliable logistics.`,
      icon: icon3,
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring strict quality standards reduces returns, builds credibility, and enhances brand reputation.",
      image: solutionImg4,
      paragraph: `Quality Assurance is at the core of every successful operation. Our solution helps companies implement strict quality controls, reduce product defects, and maintain high standards across all processes.

We provide standardized checklists, automated inspections, and real-time reporting. Non-conformance is tracked and analyzed. Root cause analysis reduces recurring issues. Compliance with industry standards is ensured. Staff training is provided for quality best practices. Customer feedback is integrated into improvement plans. Continuous improvement initiatives help sustain long-term quality excellence.`,
      icon: icon4,
    },
    {
      title: "Project Management Support",
      description:
        "Strong project management minimizes risks, keeps projects on schedule, and ensures resources are utilized effectively.",
      image: solutionImg5,
      paragraph: `Project Management Support ensures projects are executed efficiently, on time, and within budget. Our solution provides tools for planning, resource allocation, risk management, and progress tracking.

We help businesses define clear project objectives, milestones, and KPIs. Resource utilization is monitored to avoid bottlenecks. Risk registers track potential issues. Communication is streamlined across teams. Performance dashboards provide insights into project health. Change management processes ensure smooth adaptation. Finally, lessons learned are documented to improve future project delivery.`,
      icon: icon5,
    },
  ];

  return (
    <div className="flex flex-col font-outfit">
      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Custom Solution Banner"
          fill
          priority
          className="object-cover object-left absolute inset-0 -z-10"
        />
        <div className="text-left text-white z-10 px-6 lg:px-24">
          <h1 className="text-[48px] font-bold tracking-wide mb-4 leading-tight">
            OUR <span className="text-white">CUSTOM SOLUTION</span>
          </h1>
          <div className="text-base font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#F05023]">/</span>
            <span className="text-[#F05023]">Our Custom Solution</span>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS + HELP (30/70) ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* Left-side (30%) */}
          <div className="col-span-3 flex flex-col gap-6">
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
              <Image
                src={helpBg}
                alt="Need Help Background"
                width={900}
                height={300}
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 gap-3 text-white text-center">
                <div className="w-16 h-16 relative">
                  <Image src={logo} alt="Logo" fill className="object-contain" />
                </div>
                <h4 className="text-xl font-semibold">Need help!</h4>
                <p className="text-sm">
                  Got questions or need assistance with <br /> your Industry needs?
                </p>
                <div className="text-sm flex flex-col gap-1">
                  <span>📞 +1 840 841 256</span>
                  <span>✉️ info@domain.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right-side (70%) */}
          <div className="col-span-7 flex flex-col gap-6 justify-center">
            <div className="relative w-[600px] h-[400px] ml-20">
              <Image
                src={solutions[activeSolution].image}
                alt={solutions[activeSolution].title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {solutions[activeSolution].paragraph}
            </p>

            {/* ================= WHY CHOOSE OUR SOLUTIONS ================= */}
            <section className="mt-12 bg-gray-50 py-12 px-6 rounded-xl">
              <h2 className="text-3xl font-bold text-[#0A175C] mb-6">
                WHY CHOOSE <span className="text-[#F05023]">OUR SOLUTIONS</span>
              </h2>
              <p className="text-gray-600 mb-10 max-w-3xl">
                We provide end-to-end supply chain solutions designed to simplify
                operations, reduce costs, and ensure timely delivery. Our solutions
                are built to address the critical challenges businesses face in
                managing production, inventory, logistics, and quality. By
                streamlining every step of the process, we help organizations
                achieve efficiency, reliability, and long-term growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-3 p-4 rounded-lg shadow-sm transition-all ${
                      idx === activeSolution ? "border-2 border-[#F05023]" : "border border-gray-200"
                    }`}
                  >
                    <Image src={sol.icon} alt={sol.title} width={50} height={50} />
                    <h4 className="text-[#0A175C] font-semibold">{sol.title}</h4>
                    <p className="text-gray-600 text-sm">{sol.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= PLANNING & STRATEGY (MAPPED) ================= */}
            <section className="mt-10 bg-white py-10 rounded-xl">
              <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold tracking-tight text-[#0A175C] mb-3">
                  PLANNING & <span className="text-[#F05023]">STRATEGY</span>
                </h2>
                <p className="mb-8 max-w-3xl text-[#0A175C]">
                  Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation
                  solutions that align with your business goals.
                </p>

                {/* Six points grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {planningSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFF4F0] flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0A175C]">{step.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Two large image placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center min-h-[220px] shadow-sm">
                    <div className="w-full max-w-[360px] h-48 bg-white rounded-lg flex items-center justify-center">
                      <Image src={solutionImg1} alt="planning placeholder 1" width={320} height={260} className="object-contain" />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center min-h-[220px] shadow-sm">
                    <div className="w-full max-w-[360px] h-48 bg-white rounded-lg flex items-center justify-center">
                      <Image src={solutionImg2} alt="planning placeholder 2" width={320} height={260} className="object-contain" />
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
