"use client";

import Image from "next/image";
import Link from "next/link";
import handbookImg from "../../../public/resources/dummyr2.png"; // Update path if needed

export default function SupplierHandbook() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="mt-[-1rem] md:mt-[-2rem]"> {/* Slightly lift heading */}
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#0A175C] font-outfit leading-tight transform -translate-y-12">
                SUPPLIER’S <span className="text-[#F05023]">HANDBOOK</span>
              </h2>

              <p className="mt-3 text-[24px] sm:text-[28px] md:text-[34px] text-[#0A175C] font-semibold leading-snug transform -translate-y-10">
                Follow these Partnership Guidelines{" "}
                <span className="text-[#F05023]">with Us</span>
              </p>
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#0A175C]/80 max-w-xl leading-relaxed -mt-3">
              We believe in building strong, transparent partnerships with our
              suppliers. The Supplier’s Handbook outlines all the processes,
              compliance requirements, quality standards, and best practices for
              working with us. It’s designed to help you collaborate effectively,
              maintain consistency, and deliver excellence every time.
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="px-6 py-3 border border-[#F05023] text-[#F05023] rounded-md font-medium hover:bg-[#F05023] hover:text-white transition-colors"
              >
                Access Supplier&apos;s Handbook
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[500px] h-[300px]">
              <Image
                src={handbookImg}
                alt="Supplier handbook preview"
                fill
                style={{
                  objectFit: "contain",
                  transform: "translate(-30px, 10px)", // move left and down
                }}
                sizes="(max-width: 768px) 80vw, 45vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
