'use client';

import Image from "next/image";
import Link from "next/link";
import { Outfit, Lato } from "next/font/google";
import heroImg from '../../../public/bannerC.png';

// Fonts
const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutHero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="About Banner"
        fill
        className="object-cover object-center absolute inset-0 -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="text-center text-white z-10 px-4">
        {/* Headline */}
        <h1 className={`text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg ${outfit.className}`}>
          Empowering Manufacturers Across India
        </h1>

        {/* Tagline */}
        <p className={`text-lg md:text-xl mb-8 drop-shadow-md ${lato.className}`}>
          Connecting you to growth, efficiency, and trusted partners.
        </p>

        {/* Breadcrumb / Lines */}
        <div className={`text-[16px] font-medium flex justify-center items-center gap-2 ${lato.className}`}>
          <Link href="/" className="hover:text-[#F05023] transition-colors">Home</Link>
          <span className="text-[#F05023]">•</span>
          <span className="text-[#F05023]">About Us</span>
        </div>
      </div>
    </section>
  );
}
