"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import aboutImage from "../../../public/dummyimg.png";

export default function HomeAbout() {
  return (
    <section className="bg-[#0A175C] py-15 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

        {/* ===== MOBILE HEADING ===== */}
        <div className="block lg:hidden w-full text-center text-white mb-6">
          <p
            className="text-base font-medium mb-2"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            About
          </p>
          <h2
            className="leading-snug text-[28px] sm:text-[32px] font-bold"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Transforming{" "}
            <span className="text-[#F05023]">Manufacturing</span> with{" "}
            <span className="text-[#F05023]">Innovative</span> Solutions
          </h2>
        </div>

        {/* ===== IMAGE ===== */}
        <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
          <Image
            src={aboutImage}
            alt="About illustration"
            width={406}
            height={428}
            className="object-contain rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[406px] h-auto"
            priority
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="lg:w-1/2 text-white flex flex-col justify-center order-2 lg:order-1 w-full">
          {/* Desktop Heading */}
          <div className="hidden lg:block text-left">
            <p
              className="text-base font-medium mb-2"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              About
            </p>
            <h2
              className="mb-6 leading-snug text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39px] font-bold"
              style={{ fontFamily: "Outfit, sans-serif", maxWidth: "900px" }}
            >
              Transforming{" "}
              <span className="text-[#F05023]">Manufacturing</span>{" "}
              <br className="hidden sm:block" />
              with <span className="text-[#F05023]">Innovative</span> Solutions
            </h2>
          </div>

          {/* Paragraph (left aligned on all views) */}
          <p
            className="mb-6 text-[16px] sm:text-[17px] leading-relaxed text-gray-200 text-left"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sure Supply is a leading manufacturing solutions provider dedicated
            to driving industrial innovation through advanced technologies and
            strategic partnerships.
          </p>

          {/* List (left aligned always) */}
          <ul
            className="list-disc list-inside mb-8 text-gray-200 flex flex-col gap-2 sm:gap-3 text-left"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            <li>Commitment to quality</li>
            <li>Cutting-edge technology integration</li>
            <li>Global industry expertise</li>
          </ul>

          {/* Button (center on mobile, left on desktop) */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/aboutUs2" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#F05023",
                  color: "#F05023",
                  textTransform: "none",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#F05023",
                    color: "#fff",
                    borderColor: "#F05023",
                  },
                }}
              >
                Discover
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
