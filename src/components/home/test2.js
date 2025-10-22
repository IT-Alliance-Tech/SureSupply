"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import images (replace with your actual images)
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

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <section className="w-full bg-gray-50 px-6 md:px-12 py-16">
      {/* --- TOP HEADING --- */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0A175C" }}>
          Why <span className="text-[#F05023]">SureSupply</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Your Trusted Partner for Precision Manufacturing & Supply Chain Excellence.
          End-to-end solutions, advanced technology, and a vetted supplier network
          to bring your projects to life—on time, every time.
        </p>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10">
        {/* LEFT - Vertical Slider */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[80%] max-w-[400px]">
            <Slider ref={sliderRef} {...settings}>
              {points.map((point, index) => (
                <div
                  key={point.id}
                  className={`flex flex-col items-center justify-center transition-transform duration-500 ${
                    index === activeIndex
                      ? "scale-110 opacity-100 z-10"
                      : "scale-90 opacity-60 z-0"
                  }`}
                >
                  <div className="w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Title below image */}
                  <h3 className="text-lg font-semibold mt-4 text-gray-800 text-center">
                    {point.title}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT - Dynamic Description */}
        <div className="w-full md:w-1/2 max-w-lg flex flex-col justify-start mt-20 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#0A175C] mb-4">
            {points[activeIndex]?.title}
          </h3>
          <p className="italic text-[#F05023] mb-4 text-lg md:text-xl">
            {points[activeIndex]?.headline}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base md:text-lg mb-6">
            {points[activeIndex]?.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {/* Get Quote Button */}
          <button className="text-[#F05023] font-semibold text-[20px] hover:underline cursor-pointer mt-6 text-left">
            Get Quote &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
