"use client";

import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../public/bannerC.png"; // replace with your banner image

export default function ResourcesHeroSection() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Banner Image */}
      <Image
        src={bannerImg}
        alt="Resources Banner"
        fill
        priority
        className="object-cover object-center absolute inset-0 -z-10"
      />

      {/* Banner Text */}
      <div className="text-left text-white z-10 px-4 sm:px-12 lg:px-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-3 sm:mb-4 leading-tight">
          LATEST <span className="text-white">POST</span>
        </h1>
        <div className="text-xs sm:text-sm md:text-base font-medium flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-[#F05023]">/</span>
          <span className="text-[#F05023]">Resources</span>
        </div>
      </div>
    </section>
  );
}
