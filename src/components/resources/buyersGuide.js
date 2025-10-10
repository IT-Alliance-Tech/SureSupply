"use client";

import Image from "next/image";
import buyersGuideImg from "../../../public/resources/dummyr2.png"; // 👈 replace with your actual image path

export default function BuyersGuide() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Heading at the top */}
      <div className="max-w-6xl mx-auto mb-12 text-left ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A175C] mb-2">
          BUYER’S <span className="text-[#F05023]">GUIDE</span>
        </h2>
        <h3 className="text-2xl md:text-3xl  text-[#0A175C] mt-2">
          Your Complete <span className="text-[#F05023] font-semibold">Buying Resource</span>
        </h3>
      </div>

      {/* Image + Content below */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">
            <Image
              src={buyersGuideImg}
              alt="A visual illustration for the Buyer's Guide"
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="space-y-6 text-left">
          <p className="text-[#0A175C] leading-relaxed">
            Making the right choice shouldn’t be difficult. Our Buyer’s Guide walks
            you through everything you need to know—from understanding key features,
            comparing options, to evaluating costs and long-term value. Whether
            you’re purchasing for the first time or upgrading, this guide helps you
            make confident, informed decisions.
          </p>
          <div>
            <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-md font-medium hover:bg-orange-500 hover:text-white transition">
              Download Buyer’s Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
