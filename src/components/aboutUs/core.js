"use client";

import Image from "next/image";
import bgImg from "../../../public/about/aboutbg1.png"; // background image
import visionImg from "../../../public/dummy2.png"; 
import missionImg from "../../../public/dummy2.png";
import valuesImg from "../../../public/dummy2.png";

export default function CorePrinciples() {
  const principles = [
    {
      title: "GLOBAL SUPPLY SOLUTIONS",
      label: "Vision",
      description: "Transforming industries through strategic digital networks",
      img: visionImg,
    },
    {
      title: "EMPOWERING BUSINESS GROWTH",
      label: "Mission",
      description: "Delivering innovative logistics solutions worldwide",
      img: missionImg,
    },
    {
      title: "OUR GUIDING PRINCIPLES",
      label: "Values",
      description: "Building trust through integrity and collaborative innovation",
      img: valuesImg,
    },
  ];

  return (
    <section className="w-full relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg}
          alt="Background"
          className="object-cover w-full h-full"
          fill
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A175C] opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6 md:px-12">
        <p className="text-sm text-gray-300 mb-2 font-lato">Our approach</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-outfit">
          CORE PRINCIPLES
        </h2>
        <p className="text-gray-300 mb-12 font-lato">
          Driving global logistics forward
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden text-left shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-full h-[200px] bg-gray-200 relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-contain transform transition duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#0A175C] mb-1 font-lato">{item.label}</p>
                <h3 className="text-xl font-bold text-[#0A175C] mb-2 font-outfit">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm font-lato">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
