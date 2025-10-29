"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import endToEndImg from "../../../public/dummyimg.png";
import supplierNetworkImg from "../../../public/dummyimg.png";
import technologyPlatformImg from "../../../public/dummyimg.png";
import qualityComplianceImg from "../../../public/dummyimg.png";
import industryExpertiseImg from "../../../public/dummyimg.png";
import flexibleImg from "../../../public/dummyimg.png";
import transparentImg from "../../../public/dummyimg.png";
import costEfficiencyImg from "../../../public/dummyimg.png";
import projectSupportImg from "../../../public/dummyimg.png";
import innovationImg from "../../../public/dummyimg.png";

const WhyChooseUs = () => {
  const points = [
    {
      id: 1,
      image: endToEndImg,
      title: "End-to-End Manufacturing Expertise",
      headline: "From Prototype to Production – We Handle It All",
      description: [
        "Rapid prototyping accelerates product development.",
        "Scalable production across CNC, Casting, Sheet Metal, Injection Molding, Forging, 3D Printing, and Assembly.",
        "Surface treatments, finishing, and quality checks included.",
      ],
    },
    {
      id: 2,
      image: supplierNetworkImg,
      title: "Trusted Supplier Network",
      headline: "A Reliable Network of SME Manufacturers",
      description: [
        "Vetted suppliers ensure consistent quality and timely delivery.",
        "Transparent communication and real-time updates.",
        "Flexible capacity for small and large production runs.",
      ],
    },
    {
      id: 3,
      image: technologyPlatformImg,
      title: "Technology-Driven Platform",
      headline: "Digital Tools for Seamless Manufacturing & Supply Chain Management",
      description: [
        "Real-time order tracking and inventory management.",
        "Project dashboards for complete visibility.",
        "Optimized logistics for faster, safer delivery.",
      ],
    },
    {
      id: 4,
      image: qualityComplianceImg,
      title: "Quality & Compliance",
      headline: "Certified Processes. Guaranteed Precision.",
      description: [
        "ISO-certified manufacturing processes.",
        "End-to-end testing and inspection.",
        "Meets international quality and safety standards.",
      ],
    },
    {
      id: 5,
      image: industryExpertiseImg,
      title: "Industry Expertise",
      headline: "Serving the Industries That Drive Innovation",
      description: [
        "Automotive – high-precision components for vehicles.",
        "Aerospace & Defense – strict compliance and performance.",
        "Electrical & Electronics – reliable and scalable production.",
        "Consumer Appliances – quality and efficiency.",
        "Energy – robust and long-lasting solutions.",
      ],
    },
    {
      id: 6,
      image: flexibleImg,
      title: "Flexible & Agile Operations",
      headline: "Adaptable Solutions to Meet Your Unique Needs",
      description: [
        "Rapid prototyping and scalable production for projects of any size.",
        "Quick response to design changes and urgent requirements.",
        "Tailored workflows to match client specifications.",
      ],
    },
    {
      id: 7,
      image: transparentImg,
      title: "Transparent & Reliable Partnerships",
      headline: "Clear Communication, Trusted Relationships",
      description: [
        "Real-time updates at every stage of manufacturing.",
        "Open, transparent processes for clients and suppliers.",
        "Long-term partnerships built on reliability and trust.",
      ],
    },
    {
      id: 8,
      image: costEfficiencyImg,
      title: "Cost & Time Efficiency",
      headline: "Optimized Processes for Maximum Value",
      description: [
        "Lean manufacturing reduces production costs.",
        "Efficient supply chain minimizes lead times.",
        "Smart resource planning ensures timely delivery.",
      ],
    },
    {
      id: 9,
      image: projectSupportImg,
      title: "Dedicated Project Support",
      headline: "End-to-End Oversight for Your Projects",
      description: [
        "Assigned project managers for seamless execution.",
        "Transparent reporting on deadlines, budgets, and progress.",
        "Ensures smooth coordination between suppliers, OEMs, and teams.",
      ],
    },
    {
      id: 10,
      image: innovationImg,
      title: "Innovation & Continuous Improvement",
      headline: "Staying Ahead with Technology and Expertise",
      description: [
        "Adoption of latest manufacturing technologies.",
        "Continuous process improvement for quality and efficiency.",
        "Helps clients stay competitive in their markets.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRefDesktop = useRef(null);
  const sliderRefMobile = useRef(null);

  const arrowTopOffset = "-5%";
  const arrowBottomOffset = "-5%";

  const settingsDesktop = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (_, next) => setActiveIndex(next),
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  const settingsMobile = { ...settingsDesktop, slidesToShow: 3 };

  const nextSlide = (isMobile = false) => {
    if (isMobile && sliderRefMobile.current) sliderRefMobile.current.slickNext();
    else if (!isMobile && sliderRefDesktop.current) sliderRefDesktop.current.slickNext();
  };

  const prevSlide = (isMobile = false) => {
    if (isMobile && sliderRefMobile.current) sliderRefMobile.current.slickPrev();
    else if (!isMobile && sliderRefDesktop.current) sliderRefDesktop.current.slickPrev();
  };

  return (
    <section
      className="relative w-full flex flex-col md:flex-row items-center justify-center min-h-[90vh] bg-gray-50 px-4 sm:px-6 md:px-12 py-10"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      {/* MOBILE VIEW */}
      <div className="block md:hidden w-full text-center relative">
  {/* Header */}
  <div className="mb-8 px-4">
    <h2
      className="text-3xl sm:text-4xl font-bold text-[#0A175C]"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      Why <span className="text-[#F05023]">SureSupply</span>
    </h2>
    <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
      Your Trusted Partner for Precision Manufacturing & Supply Chain Excellence.
    </p>
  </div>

  {/* Slider Section */}
  <div className="relative flex flex-col items-center justify-center mb-10">
    {/* Up Arrow */}
    <IoIosArrowUp
      onClick={() => prevSlide(true)}
      className="absolute -top-8 text-white text-4xl cursor-pointer bg-[#F05023] rounded-full p-3 hover:scale-110 hover:bg-[#d9431e] transition shadow-md"
    />

    {/* Slider */}
    <div className="w-[90%] max-w-[380px] overflow-hidden flex items-center justify-center">
      <Slider ref={sliderRefMobile} {...settingsMobile}>
        {points.map((point, index) => (
          <div
            key={point.id}
            className={`flex flex-col items-center justify-center transition-all duration-500 ${
              index === activeIndex
                ? "scale-105 opacity-100"
                : "opacity-60 scale-95"
            }`}
          >
            <div className="w-44 h-44 relative rounded-xl overflow-hidden shadow-md mb-4">
              <Image
                src={point.image}
                alt={point.title}
                fill
                className="object-cover"
              />
            </div>
            <h3
              className="text-base sm:text-lg font-semibold text-gray-800 text-center px-3 break-words leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {point.title}
            </h3>
          </div>
        ))}
      </Slider>
    </div>

    {/* Down Arrow */}
    <IoIosArrowDown
      onClick={() => nextSlide(true)}
      className="absolute -bottom-8 text-white text-4xl cursor-pointer bg-[#F05023] rounded-full p-3 hover:scale-110 hover:bg-[#d9431e] transition shadow-md"
    />
  </div>

  {/* Dynamic Content */}
  <div className="text-left w-full max-w-md mx-auto px-6">
    <h3
      className="text-xl font-semibold text-[#0A175C] mb-2 text-center"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      {points[activeIndex]?.title}
    </h3>
    <p className="text-[#F05023] mb-4 text-center text-base leading-snug">
      {points[activeIndex]?.headline}
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-8 leading-relaxed px-3">
      {points[activeIndex]?.description.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="flex justify-center">
      <button
        onClick={() => document.getElementById("quoteForm")?.scrollIntoView()}
        className="bg-[#F05023] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-[#d9431e] transition"
      >
        {`Get Quote →`}
      </button>
    </div>
  </div>
</div>


      {/* DESKTOP VIEW (UNCHANGED) */}
      <div className="hidden md:flex w-full md:flex-row items-center justify-center relative">
        {/* Arrows */}
        <IoIosArrowUp
  onClick={() => prevSlide(false)}
  className="absolute text-white text-5xl cursor-pointer bg-[#F05023] rounded-full p-3 hover:scale-110 hover:bg-[#d9431e] transition z-50 shadow-md"
  style={{ top: `calc(4% + ${arrowTopOffset})`, left: "25%" }}
/>

<IoIosArrowDown
  onClick={() => nextSlide(false)}
  className="absolute text-white text-5xl cursor-pointer bg-[#F05023] rounded-full p-3 hover:scale-110 hover:bg-[#d9431e] transition z-50 shadow-md"
  style={{ bottom: `calc(4% + ${arrowBottomOffset})`, left: "25%" }}
/>


        {/* LEFT - Image Slider */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[80%] max-w-[280px] overflow-hidden h-[600px] flex items-center">
            <Slider ref={sliderRefDesktop} {...settingsDesktop}>
              {points.map((point, index) => (
                <div
                  key={point.id}
                  className={`flex flex-col items-center justify-center transition-all duration-500 ${
                    index === activeIndex ? "scale-110 opacity-100" : "opacity-50 scale-95"
                  }`}
                >
                  <div className="w-48 h-48 relative rounded-xl overflow-hidden shadow-lg m-5">
                    <Image src={point.image} alt={point.title} fill className="object-cover" />
                  </div>
                  <h3
                    className="text-[18px] font-semibold mt-4 text-gray-800 text-center"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {point.title}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT - Dynamic Content */}
        <div className="w-full md:w-1/2 relative flex flex-col justify-center items-start pl-12">
          <div className="mb-6 max-w-[650px] relative" style={{ top: "-40px" }}>
  <h2
    className="text-[46px] font-bold text-[#0A175C] leading-tight"
    style={{ fontFamily: "Outfit, sans-serif" }}
  >
    Why <span className="text-[#F05023]">SureSupply</span>
  </h2>
  <p className="text-gray-600 mt-3 text-[20px] leading-relaxed">
    Your Trusted Partner for Precision Manufacturing & Supply Chain Excellence.
  </p>
</div>


          <div className="flex flex-col justify-start max-w-[650px]">
            <div className="mb-6">
              <h3
                className="text-3xl font-semibold text-[#0A175C] mb-2"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {points[activeIndex]?.title}
              </h3>
              <p className="text-[#F05023] mb-4 text-lg md:text-xl">
                {points[activeIndex]?.headline}
              </p>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-3 text-base md:text-lg mb-6">
              {points[activeIndex]?.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById("quoteForm")?.scrollIntoView()}
              className="text-[#F05023] font-semibold text-[20px] hover:underline cursor-pointer mt-6 text-left"
            >
              {`Get Quote →`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
