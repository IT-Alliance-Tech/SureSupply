"use client";

import Image from "next/image";
import buyersGuideImg from "../../../public/resources/dummyr2.png"; // 👈 replace with your actual image path

export default function BuyersGuide() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-sm">
            <Image
              src={buyersGuideImg}
              alt="Buyer's Guide"
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            BUYER’S <span className="text-orange-500">GUIDE</span>
          </h2>
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">
            Your Complete <span className="text-orange-500">Buying Resource</span>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Making the right choice shouldn’t be difficult. Our Buyer’s Guide walks
            you through everything you need to know—from understanding key features,
            comparing options, to evaluating costs and long-term value. Whether
            you’re purchasing for the first time or upgrading, this guide helps you
            make confident, informed decisions.
          </p>
          <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-md font-medium hover:bg-orange-500 hover:text-white transition">
            Download Buyer’s Guide
          </button>
        </div>
      </div>
    </section>
  );
}
