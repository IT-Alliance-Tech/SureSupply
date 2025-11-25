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
      <div className="relative text-center md:text-left text-white z-10 px-4 sm:px-6 lg:px-24 max-w-[1200px] mx-auto">

  <h1 className="text-[42px] sm:text-[64px] font-outfit font-bold tracking-wide mb-6 leading-tight drop-shadow-md">
    INDUSTRIES WE SERVE
  </h1>

  <div className="text-[16px] sm:text-[20px] font-outfit flex flex-wrap justify-center md:justify-center items-center gap-2">
    <Link href="/" className="hover:text-white transition-colors cursor-pointer">
      Home
    </Link>
    <span className="text-[#F05023]">/</span>
    <span className="text-[#F05023]">Industries We Serve</span>
  </div>

</div>

    </section>
  );
}
