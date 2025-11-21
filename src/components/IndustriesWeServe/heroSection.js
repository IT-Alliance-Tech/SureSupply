"use client";

import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../public/bannerC.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImg}
        alt="Industries Banner"
        fill
        priority
        className="object-cover object-center absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="z-10 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center md:items-start text-center md:text-left text-white">
        <h1 className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-3 sm:mb-4 md:mb-6 leading-snug sm:leading-snug md:leading-tight lg:leading-tight">
          INDUSTRIES WE SERVE
        </h1>

        <div className="font-lato text-xs sm:text-sm md:text-base font-medium flex flex-wrap justify-center md:justify-start items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-[#F05023]">/</span>
          <span className="text-[#F05023]">Industries We Serve</span>
        </div>
      </div>
    </section>
  );
}
