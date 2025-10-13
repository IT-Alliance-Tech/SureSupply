"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Import local images
import news1 from "../../../public/resources/dummyr2.png";
import news2 from "../../../public/resources/dummyr2.png";

export default function NewsEvents() {
  const newsData = [
    {
      id: 1,
      title: "Launching Our New Digital Platform – Smarter, Faster, Better",
      image: news1,
      link: "#",
    },
    {
      id: 2,
      title: "Join Us at the Global Tech Expo 2025 – Booth #42",
      image: news2,
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A59] uppercase tracking-wide">
              NEWS & EVENTS
            </h2>
            <p className="text-4xl mt-2 text-[#1A2A59] font-light">
              Insights &{" "}<br />
              <span className="text-[#F15A29] font-semibold">Updates</span>
            </p>
          </div>

          <p className="max-w-md text-sm md:text-base text-[#1A2A59]/70 mt-6 md:mt-15 leading-relaxed">

            Stay ahead with the latest insights, updates, and announcements.
            From industry news to our latest initiatives, explore what’s shaping
            the future and how we’re part of it.
          </p>
        </div>

        {/* News Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {newsData.map((item) => (
            <div key={item.id} className="flex flex-col items-start">
              {/* Plain Image */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text and Arrow */}
              <div className="flex items-center justify-between w-full mt-4">
                <h3 className="text-[#1A2A59] font-semibold text-base md:text-lg leading-snug max-w-sm">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="bg-[#F15A29] hover:bg-[#e14e1d] text-white p-2 rounded-md transition-all flex-shrink-0"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
