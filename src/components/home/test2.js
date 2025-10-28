"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import images
import endToEndImg from "../../../public/dummyimg.png";
import supplierNetworkImg from "../../../public/dummyimg.png";
import technologyPlatformImg from "../../../public/dummyimg.png";
import qualityComplianceImg from "../../../public/dummyimg.png";
import industryExpertiseImg from "../../../public/dummyimg.png";
import flexibleOperationsImg from "../../../public/dummyimg.png";
import partnershipsImg from "../../../public/dummyimg.png";
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
      image: flexibleOperationsImg,
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
      image: partnershipsImg,
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

  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRefDesktop = useRef(null);
  const sliderRefMobile = useRef(null);

  const settingsDesktop = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => setActiveIndex(next - 1),
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  const settingsMobile = {
    ...settingsDesktop,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };

  const centerIndex = (activeIndex + 1) % points.length;

  const nextSlide = (isMobile = false) => {
    if (isMobile) {
      sliderRefMobile.current?.slickNext();
    } else {
      sliderRefDesktop.current?.slickNext();
    }
  };

  const prevSlide = (isMobile = false) => {
    if (isMobile) {
      sliderRefMobile.current?.slickPrev();
    } else {
      sliderRefDesktop.current?.slickPrev();
    }
  };

  return (
    <section
      className="w-full flex flex-col md:flex-row items-center justify-center min-h-[90vh] bg-gray-50 px-6 md:px-12 py-10"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      {/* Mobile View */}
      <div className="block md:hidden w-full text-center">
        <div className="mb-8">
          <h2
            className="text-3xl font-bold text-[#0A175C]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Why <span className="text-[#F05023]">SureSupply</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base">
            {`Your Trusted Partner for Precision Manufacturing & Supply Chain Excellence.`}
          </p>
        </div>

        {/* Vertical Slider (Same as Desktop) */}
        <div className="w-full flex justify-center mb-6">
          <div className="w-[80%] max-w-[280px] overflow-hidden h-[380px] flex items-center justify-center relative">
            <Slider ref={sliderRefMobile} {...settingsMobile}>
              {points.map((point, index) => (
                <div
                  key={point.id}
                  className={`flex flex-col items-center justify-center transition-all duration-500 ${
                    index === activeIndex + 1 ||
                    (activeIndex === points.length - 1 && index === 0)
                      ? "scale-110 opacity-100"
                      : "opacity-50 scale-95"
                  }`}
                >
                  <div className="w-40 h-40 relative rounded-xl overflow-hidden shadow-lg m-5">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3
                    className="text-base font-semibold text-gray-800 text-center"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {point.title}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => prevSlide(true)}
            className="px-4 py-2 bg-[#F05023] text-white rounded-lg hover:bg-[#d9431e]"
          >
            Prev
          </button>
          <button
            onClick={() => nextSlide(true)}
            className="px-4 py-2 bg-[#F05023] text-white rounded-lg hover:bg-[#d9431e]"
          >
            Next
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="text-left w-full max-w-md mx-auto">
          <h3
            className="text-xl font-semibold text-[#0A175C] mb-2"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {points[centerIndex]?.title}
          </h3>
          <p className=" text-[#F05023] mb-3 text-base">
            {points[centerIndex]?.headline}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-6">
            {points[centerIndex]?.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div  onClick={() => {
            const element = document.getElementById("quoteForm");
            element.scrollIntoView();
          }}
          className="flex justify-center">
            <button className="bg-[#F05023] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d9431e] transition">
             {` Get Quote →`}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-full md:flex-row items-center justify-center">
        {/* LEFT - Image Slider */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[80%] max-w-[280px] overflow-hidden">
            <Slider ref={sliderRefDesktop} {...settingsDesktop}>
              {points.map((point, index) => (
                <div
                  key={point.id}
                  className={`flex flex-col items-center justify-center transition-all duration-500 ${
                    index === activeIndex + 1 ||
                    (activeIndex === points.length - 1 && index === 0)
                      ? "scale-110 opacity-100"
                      : "opacity-50 scale-95"
                  }`}
                >
                  <div className="w-48 h-48 relative rounded-xl overflow-hidden shadow-lg m-5">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3
                    className="text-lg font-semibold mt-4 text-gray-800 text-center"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {point.title}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT - Buttons + Heading + Dynamic Content */}
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex flex-col">
          <div className="flex gap-4 absolute top-24 left-0">
            <button
              onClick={() => prevSlide(false)}
              className="px-4 py-2 bg-[#F05023] text-white rounded hover:bg-[#d9431e]"
            >
              Prev
            </button>
            <button
              onClick={() => nextSlide(false)}
              className="px-4 py-2 bg-[#F05023] text-white rounded hover:bg-[#d9431e]"
            >
              Next
            </button>
          </div>

          <div className="absolute top-10 right-5 text-center max-w-md">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0A175C]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Why <span className="text-[#F05023]">SureSupply</span>
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              {`Your Trusted Partner for Precision Manufacturing & Supply Chain Excellence.`}
            </p>
          </div>

          <div className="mt-48 min-h-[400px] flex flex-col justify-start">
            <h3
              className="text-3xl font-semibold text-[#0A175C] mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {points[centerIndex]?.title}
            </h3>
            <p className=" text-[#F05023] mb-4 text-lg md:text-xl">
              {points[centerIndex]?.headline}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-base md:text-lg mb-6 overflow-y-auto">
              {points[centerIndex]?.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button  onClick={() => {
            const element = document.getElementById("quoteForm");
            element.scrollIntoView();
          }}
            className="text-[#F05023] font-semibold text-[20px] hover:underline cursor-pointer mt-6 text-left">
              
              {`Get Quote →`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
