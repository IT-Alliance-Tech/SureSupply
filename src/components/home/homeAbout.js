"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button"; // ✅ Import MUI Button
import aboutImage from "../../../public/dummyimg.png"; // adjust path if needed

export default function HomeAbout() {
  return (
    <section className="bg-[#0A175C80] py-12 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left content */}
        <div className="lg:w-1/2 text-white flex flex-col justify-center text-left">
          <p
            className="text-base font-medium mb-2"
            style={{ fontFamily: "Work Sans" }}
          >
            About
          </p>

          <h2
            className="mb-6 leading-snug text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39px] font-bold"
            style={{ fontFamily: "Outfit", maxWidth: "900px" }}
          >
            Transforming{" "}
            <span className="text-[#F05023]">Manufacturing</span>{" "}
            <br className="hidden sm:block" />
            with <span className="text-[#F05023]">Innovative</span> Solutions
          </h2>

          <p
            className="mb-6 text-[16px] sm:text-[17px] leading-relaxed text-gray-200"
            style={{ fontFamily: "Work Sans" }}
          >
            Sure Supply is a leading manufacturing solutions provider dedicated
            to driving industrial innovation through advanced technologies and
            strategic partnerships.
          </p>

          <ul
            className="list-disc list-inside mb-8 text-gray-200 flex flex-col gap-2 sm:gap-3"
            style={{ fontFamily: "Work Sans" }}
          >
            <li>Commitment to quality</li>
            <li>Cutting-edge technology integration</li>
            <li>Global industry expertise</li>
          </ul>

          {/* MUI Button wrapped with Next.js Link */}
          <div className="flex justify-start">
            <Link href="/aboutUs" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#F05023",
                  color: "#F05023",
                  textTransform: "none",
                  fontFamily: "Work Sans",
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

        {/* Right image */}
        <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
          <Image
            src={aboutImage}
            alt="About illustration"
            width={406}
            height={428}
            className="object-contain rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[406px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
