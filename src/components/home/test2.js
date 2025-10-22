"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import images (replace with your actual images)
import endToEndImg from "../../../public/dummyimg.png";
import supplierNetworkImg from "../../../public/dummyimg.png";
import technologyPlatformImg from "../../../public/dummyimg.png";
import qualityComplianceImg from "../../../public/dummyimg.png";
import industryExpertiseImg from "../../../public/Banner1.png";
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
  const [activeIndex, setActiveIndex] = useState(1); // middle item

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => setActiveIndex(next - 1),
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  return (
      <section className="w-full flex flex-col md:flex-row items-center justify-center min-h-[90vh] bg-gray-50 px-6 md:px-12 py-10">
      {/* LEFT - Image Slider */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[80%] max-w-[250px] overflow-hidden">
          <Slider {...settings}>
            {points.map((point, index) => (
              <div
                key={point.id}
                className={`flex flex-col items-center justify-center transition-all duration-500 ${
                  index === activeIndex + 1 || // middle slide highlight fix
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
                <h3 className="text-lg font-semibold mt-4 text-gray-800 text-center">
                  {point.title}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* RIGHT - Description */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {
              points[
                (activeIndex + 1) % points.length
              ]?.description /* ensure center card description */
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
