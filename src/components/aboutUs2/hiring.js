"use client";

import Link from "next/link";

export default function JoinOurTeamSection() {
  return (
    <section className="w-full py-16 bg-[#E6ECFF] flex flex-col items-center justify-center text-center border-t border-b border-blue-300">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1E2A5E] mb-2 font-outfit">
       {` WE'RE HIRING`}
      </h2>

      {/* Subheading */}
      <p className="text-sm md:text-base text-[#1E2A5E] mb-6 font-lato max-w-xl">
        Join our team of innovative logistics professionals and be part of our growing company.
      </p>

      {/* Button */}
      <Link
  href="/career"
  className="px-6 py-2 border border-[#F05023] text-[#F05023] rounded hover:bg-[#F05023] hover:text-white transition-colors duration-300"
>
  View positions
</Link>

    </section>
  );
}
