"use client";

import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../public/bannerC.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src={bannerImg}
        alt="Industries Banner"
        fill
        priority
        className="object-cover object-left absolute inset-0 -z-10"
      />

      <div className="z-10 px-6 md:px-24 flex flex-col items-center md:items-start text-center md:text-left text-white">
        <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold tracking-wide mb-4 leading-tight">
          INDUSTRIES WE SERVE
        </h1>

        <div className="text-xs sm:text-sm md:text-base font-medium flex flex-wrap justify-center md:justify-start items-center gap-2">
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
