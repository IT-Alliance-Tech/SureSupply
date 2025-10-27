"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "../../styles/heroSection.module.css";
import DotLine from "../ui/lineWithDot";

export default function ProcessFlow() {
  const [selectedProcess, setSelectedProcess] = useState(null);

  const processes = [
    {
      id: "customer-request",
      name: "Customer request initiation",
      shortDesc: "Detailed project requirements and specifications gathering.",
      benefits: [
        "Expert guidance to refine part designs for manufacturability.",
        "Early engagement reduces redesign costs and improves efficiency.",
        "Collaboration tools connect OEM engineers with vetted supplier expertise.",
      ],
    },
    {
      id: "engineering-support",
      name: "Engineering support",
      shortDesc: "Technical consultation and design optimization.",
      benefits: [
        "Technical consultation to optimize design for production.",
        "DFM analysis ensures manufacturability and cost efficiency.",
        "Expert team provides insights on material selection and processes.",
      ],
    },
    {
      id: "strategic-matching",
      name: "Strategic supplier matching",
      shortDesc: "Identifying optimal manufacturing partners.",
      benefits: [
        "AI-powered matching connects you with best-fit suppliers.",
        "Vetted network ensures quality and reliability.",
        "Access to specialized manufacturers for unique requirements.",
      ],
    },
    {
      id: "production-planning",
      name: "Production Planning",
      shortDesc: "Comprehensive production strategy development.",
      benefits: [
        "Detailed production timeline and milestone planning.",
        "Resource allocation and capacity management.",
        "Risk assessment and contingency planning for smooth execution.",
      ],
    },
    {
      id: "quality-checking",
      name: "Quality Checking",
      shortDesc: "Refining designs for efficient production.",
      benefits: [
        "Rigorous quality control at every production stage.",
        "Advanced inspection methods ensure specification compliance.",
        "Documentation and traceability for full transparency.",
      ],
    },
    {
      id: "delivery-service",
      name: "Delivery & After Sales Service",
      shortDesc: "Innovative prototyping and iterative design processes.",
      benefits: [
        "Rapid prototyping to validate designs before full production.",
        "Iterative refinement based on testing and feedback.",
        "Ongoing support for design improvements and optimization.",
      ],
    },
  ];

  const checkerboardStyle = {
    backgroundImage: `
      linear-gradient(45deg, #d0d0d0 25%, transparent 25%),
      linear-gradient(-45deg, #d0d0d0 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #d0d0d0 75%),
      linear-gradient(-45deg, transparent 75%, #d0d0d0 75%)
    `,
  };

  const handleProcessClick = (processId) => {
    setSelectedProcess(processId);
  };

  const handleBack = () => {
    setSelectedProcess(null);
  };

  if (selectedProcess) {
    const process = processes.find((p) => p.id === selectedProcess);

    return (
      <div className="min-h-screen bg-[#1a1d3f] text-white">
        {/* Desktop View */}
        <div className="hidden md:flex md:flex-col md:items-center md:justify-center min-h-screen px-8 py-12">
          <div className="relative max-w-6xl w-full flex items-center justify-between gap-16">
            {/* Close Button */}
           <button
  onClick={handleBack}
  className="absolute top-2 right-2 w-10 h-10 rounded-full border-2 border-orange-500 text-white hover:bg-orange-500/10 flex items-center justify-center transition-all duration-200 z-20 cursor-pointer"
>
  <X className="w-6 h-6" />
</button>


            {/* Left Side - Large Circle */}
            <div className="flex-shrink-0">
              <div
                className="w-[500px] h-[500px] rounded-full relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "50px 50px",
                    backgroundPosition: "0 0, 0 25px, 25px -25px, -25px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-16">
                  <h3 className="text-4xl font-bold text-center text-black leading-tight">
                    {process.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-xl relative">
              <h1 className="text-5xl font-bold mb-6">
                How sure supply <span className="text-orange-500">works</span>
              </h1>
              <p className="text-lg mb-12 text-gray-300">
                Navigate our comprehensive manufacturing journey from initial
                concept to final delivery.
              </p>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold">{process.name}</h2>
                <ol className="space-y-4 text-lg">
                  {process.benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="font-bold text-orange-500">
                        {index + 1}.
                      </span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col min-h-screen px-6 py-12 relative">
          {/* Close Button */}
          <button
  onClick={handleBack}
  className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-orange-500 text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:bg-orange-500/10 z-20"
>
  <X className="w-7 h-7" />
</button>


          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 mb-2">Process</p>
            <h1 className="text-3xl font-bold mb-4">
              How sure supply
              <br />
              <span className="text-orange-500">works</span>
            </h1>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Navigate our comprehensive manufacturing journey from initial
              concept to final delivery.
            </p>
          </div>

          {/* Process Circle */}
          <div className="flex justify-center mb-8">
            <div
              className="w-48 h-48 rounded-full relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  ...checkerboardStyle,
                  backgroundSize: "35px 35px",
                  backgroundPosition:
                    "0 0, 0 17.5px, 17.5px -17.5px, -17.5px 0px",
                }}
              ></div>
              <div className="relative z-10 h-full flex items-center justify-center p-8">
                <h3 className="text-lg font-bold text-center text-black leading-tight">
                  {process.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">{process.name}</h2>
            <ol className="space-y-4">
              {process.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3 text-sm">
                  <span className="font-bold text-orange-500">
                    {index + 1}.
                  </span>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1d3f] text-white">
      {/* Desktop View */}
      <div
        className={`hidden lg:block relative overflow-hidden ${styles.desktop_container}`}
      >
        {/* Header */}
        <div className="absolute top-8 right-8 text-right max-w-xl z-20">
          <h1 className="text-5xl font-bold mb-4">
            How sure supply <span className="text-orange-500">works</span>
          </h1>
          <p className="text-xl text-gray-300">
            Navigate our comprehensive manufacturing journey from initial
            concept to final delivery.
          </p>
        </div>
        {/* Process Nodes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full">
            {/* Customer Request Initiation */}
            <div className="absolute" style={{ top: "15%", left: "8%" }}>
              <div
                onClick={() => handleProcessClick("customer-request")}
                className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "25px 25px",
                    backgroundPosition:
                      "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-4">
                  <h3 className="text-sm font-bold text-center text-black leading-tight">
                    Customer
                    <br />
                    request
                    <br />
                    initiation
                  </h3>
                </div>
              </div>
              <div className={`absolute`} style={{ top: "110%", left: "-48%" }}>
                <DotLine axis="y" reverse />
                <div className="mt-4 max-w-xs text-center">
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ textWrap: "nowrap" }}
                  >
                    Customer request initiation
                  </h4>
                  <p className="text-sm text-gray-300">
                    Detailed project requirements and specifications gathering.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Support */}
            {/* <div className="absolute" style={{ top: "24%", left: "23%" }}>
              <div
                onClick={() => handleProcessClick("engineering-support")}
                className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "25px 25px",
                    backgroundPosition:
                      "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-4">
                  <h3 className="text-sm font-bold text-center text-black leading-tight">
                    Engineering
                    <br />
                    support
                  </h3>
                </div>
              </div>

              <div className={`absolute`} style={{ top: "-85%", left: "45%" }}>
                <div className="mt-4 max-w-xs text-center">
                  <h4 className="text-lg font-bold mb-2">
                    Engineering support
                  </h4>
                  <p className="text-sm text-gray-300">
                    Technical consultation and design optimization.
                  </p>
                </div>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "100%", left: "38.5%" }}
                ></div>
                <DotLine axis="y" />
              </div>
            </div> */}

            <div className="absolute" style={{ top: "24%", left: "23%" }}>
  {/* Circle */}
  <div
    onClick={() => handleProcessClick("engineering-support")}
    className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    }}
  >
    <div
      className="absolute inset-0 opacity-15"
      style={{
        ...checkerboardStyle,
        backgroundSize: "25px 25px",
        backgroundPosition: "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
      }}
    ></div>
    <div className="relative z-10 h-full flex items-center justify-center p-4">
      <h3 className="text-sm font-bold text-center text-black leading-tight">
        Engineering<br />support
      </h3>
    </div>
  </div>

  {/* Description & line - disable pointer */}
  <div className="absolute pointer-events-none" style={{ top: "-85%", left: "45%" }}>
    <div className="mt-4 max-w-xs text-center pointer-events-auto">
      <h4 className="text-lg font-bold mb-2">Engineering support</h4>
      <p className="text-sm text-gray-300">Technical consultation and design optimization.</p>
    </div>
    <div
      className={`${styles.horizontalLine} absolute pointer-events-none`}
      style={{ top: "100%", left: "38.5%" }}
    ></div>
    <DotLine axis="y" />
  </div>
</div>


            {/* Strategic Supplier Matching */}
            {/* <div className="absolute" style={{ top: "35%", left: "40%" }}>
              <div
                onClick={() => handleProcessClick("strategic-matching")}
                className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "25px 25px",
                    backgroundPosition:
                      "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-4">
                  <h3 className="text-sm font-bold text-center text-black leading-tight">
                    Strategic
                    <br />
                    supplier
                    <br />
                    matching
                  </h3>
                </div>
              </div>

              <div
                className={`absolute flex gap-4`}
                style={{ top: "5%", left: "-13%" }}
              >
                <DotLine axis="x" reverse />
                <div className="mt-4 max-w-xs text-center">
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ textWrap: "nowrap" }}
                  >
                    Strategic supplier matching
                  </h4>
                  <p className="text-sm text-gray-300">
                    Identifying optimal manufacturing partners.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="absolute" style={{ top: "35%", left: "40%" }}>
  <div
    onClick={() => handleProcessClick("strategic-matching")}
    className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    }}
  >
    <div
      className="absolute inset-0 opacity-15"
      style={{
        ...checkerboardStyle,
        backgroundSize: "25px 25px",
        backgroundPosition: "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
      }}
    ></div>
    <div className="relative z-10 h-full flex items-center justify-center p-4">
      <h3 className="text-sm font-bold text-center text-black leading-tight">
        Strategic<br />supplier<br />matching
      </h3>
    </div>
  </div>

  {/* Description */}
  <div
    className={`absolute flex gap-4`}
    style={{ top: "5%", left: "-13%", pointerEvents: "none" }}
  >
    <DotLine axis="x" reverse />
    <div className="mt-4 max-w-xs text-center">
      <h4 className="text-lg font-bold mb-2" style={{ textWrap: "nowrap" }}>
        Strategic supplier matching
      </h4>
      <p className="text-sm text-gray-300">
        Identifying optimal manufacturing partners.
      </p>
    </div>
  </div>
</div>


            {/* Production Planning */}
            <div className="absolute" style={{ top: "54%", left: "45%" }}>
              <div
                className={`absolute flex gap-4`}
                style={{ top: "18%", left: "-260%", maxWidth: "300px" }}
              >
                <div className="mt-4 max-w-xs text-center">
                  <h4 className="text-lg font-bold mb-2">
                    Production Planning
                  </h4>
                  <p className="text-sm text-gray-300">
                    Comprehensive production strategy development.
                  </p>
                </div>
                <DotLine axis="x" containerStyle={{ minWidth: "0px" }} />
              </div>

              <div
                onClick={() => handleProcessClick("production-planning")}
                className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform ml-auto relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "25px 25px",
                    backgroundPosition:
                      "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-4">
                  <h3 className="text-sm font-bold text-center text-black leading-tight">
                    Production
                    <br />
                    planning
                  </h3>
                </div>
              </div>
            </div>

            {/* Quality Checking */}
            <div className="absolute" style={{ top: "58%", left: "63%" }}>
              <div className="absolute" style={{ top: "85%", left: "-125%" }}>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "0%", left: "50%" }}
                ></div>
                <DotLine axis="y" reverse />
                <div className="mt-4 max-w-xs text-center">
                  <h4 className="text-lg font-bold mb-2">Quality Checking</h4>
                  <p className="text-sm text-gray-300">
                    Refining designs for efficient production.
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleProcessClick("quality-checking")}
                className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform ml-auto relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "25px 25px",
                    backgroundPosition:
                      "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-4">
                  <h3 className="text-sm font-bold text-center text-black leading-tight">
                    Quality
                    <br />
                    Checking
                  </h3>
                </div>
              </div>
            </div>

            {/* Delivery & After Sales */}
            {/* <div className="absolute" style={{ top: "67%", left: "80%" }}>
              <div
                onClick={() => handleProcessClick("delivery-service")}
                className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "25px 25px",
                    backgroundPosition:
                      "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-4">
                  <h3 className="text-sm font-bold text-center text-black leading-tight">
                    Delivery &<br />
                    After Sales
                    <br />
                    Service
                  </h3>
                </div>
              </div>

              <div className={`absolute`} style={{ top: "-85%", left: "30%" }}>
                <div className="mt-4 max-w-xs text-center">
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ textWrap: "nowrap" }}
                  >
                    Delivery & After Sales Service
                  </h4>
                  <p className="text-sm text-gray-300">
                    Innovative prototyping and iterative design processes.
                  </p>
                </div>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "100%", left: "40.5%" }}
                ></div>
                <DotLine axis="y" />
              </div>
            </div> */}
            <div className="absolute" style={{ top: "67%", left: "80%" }}>
  <div
    onClick={() => handleProcessClick("delivery-service")}
    className="w-30 h-30 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    }}
  >
    <div
      className="absolute inset-0 opacity-15"
      style={{
        ...checkerboardStyle,
        backgroundSize: "25px 25px",
        backgroundPosition: "0 0, 0 12.5px, 12.5px -12.5px, -12.5px 0px",
      }}
    ></div>
    <div className="relative z-10 h-full flex items-center justify-center p-4">
      <h3 className="text-sm font-bold text-center text-black leading-tight">
        Delivery &<br />
        After Sales<br />
        Service
      </h3>
    </div>
  </div>

  {/* Description */}
  <div
    className={`absolute`}
    style={{ top: "-85%", left: "30%", pointerEvents: "none" }}
  >
    <div className="mt-4 max-w-xs text-center">
      <h4 className="text-lg font-bold mb-2" style={{ textWrap: "nowrap" }}>
        Delivery & After Sales Service
      </h4>
      <p className="text-sm text-gray-300">
        Innovative prototyping and iterative design processes.
      </p>
    </div>
    <div
      className={`${styles.horizontalLine} absolute`}
      style={{ top: "100%", left: "40.5%" }}
    ></div>
    <DotLine axis="y" />
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className={`lg:hidden relative min-h-screen flex justify-center`}>
        {/* Content */}
        <div className="z-10 px-6 py-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 mb-2">Process</p>
            <h1 className="text-3xl font-bold mb-4">
              How sure supply
              <br />
              <span className="text-orange-500">works</span>
            </h1>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Navigate our comprehensive manufacturing journey from initial
              concept to final delivery.
            </p>
          </div>

          {/* Vertical Process Flow */}
          <div
            className={`flex flex-col items-center space-y-16 my-4 relative ${styles.mobile_container}`}
          >
            {/* Customer Request Initiation */}
            <div
              className=" flex items-start gap-4 absolute"
              style={{ top: "0%", left: "-5%" }}
            >
              <div
                onClick={() => handleProcessClick("customer-request")}
                className="flex-shrink-0 w-22 h-22 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "18px 18px",
                    backgroundPosition: "0 0, 0 9px, 9px -9px, -9px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-3">
                  <h3 className="text-xs font-bold text-center text-black leading-tight">
                    Customer
                    <br />
                    request
                    <br />
                    initiation
                  </h3>
                </div>
              </div>
              <div
                className={`absolute flex gap-3`}
                style={{ top: "0%", left: "-60%" }}
              >
                <DotLine axis="x" reverse />
                <div className="pt-2" style={{ minWidth: "180px" }}>
                  <h4 className="text-sm font-bold mb-1">
                    Customer request initiation
                  </h4>
                  <p className="text-xs text-gray-300">
                    Detailed project requirements and specifications gathering.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Support */}
            <div
              className=" flex items-start gap-4 flex-row-reverse absolute"
              style={{ top: "18%", left: "25%" }}
            >
              <div
                onClick={() => handleProcessClick("engineering-support")}
                className="flex-shrink-0 w-22 h-22 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "18px 18px",
                    backgroundPosition: "0 0, 0 9px, 9px -9px, -9px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-3">
                  <h3 className="text-xs font-bold text-center text-black leading-tight">
                    Engineering
                    <br />
                    support
                  </h3>
                </div>
              </div>

              <div className={`absolute`} style={{ top: "-70%", left: "20%" }}>
                <div className="flex-1 pt-2 text-right">
                  <h4 className="text-sm font-bold mb-1">
                    Engineering support
                  </h4>
                  <p className="text-xs text-gray-300 no-wrap">
                    Technical consultation and design optimization.
                  </p>
                </div>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "100%", left: "38.5%" }}
                ></div>
                <DotLine
                  axis="y"
                  containerStyle={{ maxHeight: "45px", minWidth: "210px" }}
                />
              </div>
            </div>

            {/* Strategic Supplier Matching */}
            <div
              className=" flex items-start gap-4 absolute"
              style={{ top: "35%", left: "28%" }}
            >
              <div
                onClick={() => handleProcessClick("strategic-matching")}
                className="flex-shrink-0 w-22 h-22 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "18px 18px",
                    backgroundPosition: "0 0, 0 9px, 9px -9px, -9px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-3">
                  <h3 className="text-xs font-bold text-center text-black leading-tight">
                    Strategic
                    <br />
                    supplier
                    <br />
                    matching
                  </h3>
                </div>
              </div>

              <div
                className={`absolute`}
                style={{ top: "-80%", left: "90%", minWidth: "170px" }}
              >
                <div className="flex-1 pt-2 mb-2">
                  <h4 className="text-sm font-bold mb-1">
                    Strategic supplier matching
                  </h4>
                  <p className="text-xs text-gray-300">
                    Identifying optimal manufacturing partners.
                  </p>
                </div>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "100%", left: "9%" }}
                ></div>
                <DotLine
                  axis="y"
                  containerStyle={{ maxHeight: "40px", maxWidth: "80px" }}
                />
              </div>
            </div>

            {/* Production Planning */}
            <div
              className=" flex items-start gap-4 flex-row-reverse absolute"
              style={{ top: "47%", left: "55%" }}
            >
              <div
                className={`absolute flex gap-3`}
                style={{ top: "25%", left: "-230%" }}
              >
                <div className="flex-1 pt-2 text-right">
                  <h4 className="text-sm font-bold mb-1">
                    Production Planning
                  </h4>
                  <p className="text-xs text-gray-300">
                    Comprehensive production strategy development.
                  </p>
                </div>
                <DotLine
                  axis="x"
                  containerStyle={{
                    maxHeight: "50px",
                    maxWidth: "210px",
                    minWidth: "110px",
                  }}
                />
              </div>
              <div
                onClick={() => handleProcessClick("production-planning")}
                className="flex-shrink-0 w-22 h-22 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "18px 18px",
                    backgroundPosition: "0 0, 0 9px, 9px -9px, -9px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-3">
                  <h3 className="text-xs font-bold text-center text-black leading-tight">
                    Production
                    <br />
                    planning
                  </h3>
                </div>
              </div>
            </div>

            {/* Quality Checking */}
            <div
              className=" flex items-start gap-4 absolute"
              style={{ top: "65%", left: "57%" }}
            >
              <div
                onClick={() => handleProcessClick("quality-checking")}
                className="flex-shrink-0 w-22 h-22 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "18px 18px",
                    backgroundPosition: "0 0, 0 9px, 9px -9px, -9px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-3">
                  <h3 className="text-xs font-bold text-center text-black leading-tight">
                    Quality
                    <br />
                    Checking
                  </h3>
                </div>
              </div>

              <div
                className={`absolute`}
                style={{ top: "-60%", left: "-140%", maxWidth: "200px" }}
              >
                <div className="flex-1 pt-2">
                  <h4 className="text-sm font-bold mb-1">Quality Checking</h4>
                  <p className="text-xs text-gray-300">
                    Refining designs for efficient production.
                  </p>
                </div>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "100%", left: "49.5%" }}
                ></div>
                <DotLine
                  axis="y"
                  containerStyle={{
                    maxHeight: "50px",
                    maxWidth: "210px",
                    minWidth: "130px",
                  }}
                />
              </div>
            </div>

            {/* Delivery & After Sales Service */}
            <div
              className=" flex items-start gap-4 flex-row-reverse absolute"
              style={{ top: "90%", left: "74%" }}
            >
              <div
                onClick={() => handleProcessClick("delivery-service")}
                className="flex-shrink-0 w-22 h-22 rounded-full cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    ...checkerboardStyle,
                    backgroundSize: "18px 18px",
                    backgroundPosition: "0 0, 0 9px, 9px -9px, -9px 0px",
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center p-3">
                  <h3 className="text-xs font-bold text-center text-black leading-tight">
                    Delivery &<br />
                    After Sales
                    <br />
                    Service
                  </h3>
                </div>
              </div>
              <div
                className={`absolute`}
                style={{ top: "-60%", left: "-210%", maxWidth: "220px" }}
              >
                <div className="flex-1 pt-2 text-start">
                  <h4 className="text-sm font-bold mb-1">
                    Delivery & After Sales Service
                  </h4>
                  <p className="text-xs text-gray-300">
                    Innovative prototyping and iterative design processes.
                  </p>
                </div>
                <div
                  className={`${styles.horizontalLine} absolute`}
                  style={{ top: "99.8%", left: "49.5%", width: "100%",maxWidth: "75px" }}
                ></div>
                <DotLine axis="y" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
