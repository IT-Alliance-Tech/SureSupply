"use client";

import Link from "next/link";

export default function JoinOurTeamSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-[#E6ECFF] flex flex-col items-center justify-center text-center border-t border-b border-blue-300">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E2A5E] mb-3 sm:mb-4 font-outfit leading-tight">
        {`WE'RE HIRING`}
      </h2>

      {/* Subheading */}
      <p className="text-sm sm:text-base md:text-lg text-[#1E2A5E] mb-6 max-w-xl font-lato leading-relaxed px-2 sm:px-0">
        Join our team of innovative logistics professionals and be part of our growing company.
      </p>

      {/* Button */}
      <Link
        href="/career"
        className="px-6 py-2 sm:px-8 sm:py-3 border border-[#F05023] text-[#F05023] rounded-md hover:bg-[#F05023] hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-base font-semibold"
      >
        Join Our Team
      </Link>

    </section>
  );
}
