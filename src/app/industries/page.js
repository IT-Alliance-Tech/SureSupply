"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import bannerImg from "../../../public/bannerC.png";
import placeholderImg from "../../../public/dummyimg.png"; // Replace with your real image later

export default function IndustriesNetworksPage() {
  return (
    <div className="flex flex-col">

      {/* ===== TOP BANNER SECTION ===== */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Industries Banner"
          fill
          className="object-cover object-center absolute inset-0 -z-10"
          priority
        />
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            OUR <span className="text-orange-500">INDUSTRIES & NETWORKS</span>
          </h1>
          <div className="text-sm font-medium flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span className="text-orange-500">•</span>
            <span className="text-orange-500">Our Industries & Networks</span>
          </div>
        </div>
      </section>

      {/* ===== SUPPLIER NETWORK SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side (Image) */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[200px] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
              <Image
                src={placeholderImg}
                alt="Supplier Network"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Side (Text) */}
          <div className="space-y-5">
            <h5 className="text-xl font-bold">
              <span className="text-blue-900">SUPPLIER </span>
              <span className="text-orange-500">NETWORK</span>
            </h5>

            <h2 className="text-3xl font-bold text-gray-900">
              Why Partner with <span className="text-blue-900">suresupply</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Partnering with SureSupply means working with a team dedicated to streamlining your supply chain from end to end. 
              We bring expertise, technology, and proven strategies to help manufacturers, suppliers, and businesses achieve greater efficiency, 
              reduce operational costs, and ensure faster time-to-market. 
              With a strong focus on agility, transparency, and reliability, we act as a trusted partner for sustainable growth.
            </p>

            {/* Arrows */}
            <div className="flex items-center gap-4 mt-4">
              <button className="p-2 bg-orange-500 hover:bg-orange-600 rounded-full text-white transition">
                <ArrowLeft size={18} />
              </button>
              <button className="p-2 bg-orange-500 hover:bg-orange-600 rounded-full text-white transition">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
