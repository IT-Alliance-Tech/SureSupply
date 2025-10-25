"use client";

import Link from "next/link";

export default function HiringSection() {
  return (
    <section className="w-full py-16 bg-[#E6ECFF] flex flex-col items-center justify-center text-center border-t border-b border-blue-300">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1E2A5E] mb-2 font-outfit">
        {`WE'RE HIRING`}
      </h2>
      <p className="text-sm md:text-base text-[#1E2A5E] mb-6 font-lato">
        Join our team of innovative logistics professionals
      </p>
      <Link
        href="/careers" // Replace with your careers page link
        className="px-6 py-2 border border-[#F05023] text-[#F05023] rounded hover:bg-[#F05023] hover:text-white transition-colors"
      >
        View positions
      </Link>
    </section>
  );
}
