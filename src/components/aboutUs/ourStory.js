"use client";

import Image from "next/image";
import heroImg from "../../../public/dummy3.png";
import { Button } from "@mui/material";

export default function OurStory() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 flex justify-center px-4">
      {/* Outer Box */}
      <div className="w-full max-w-6xl bg-white border border-[#0A175C] rounded-xl shadow-sm p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="font-bold uppercase text-[#0A175C] leading-[120%] mb-6 text-[clamp(24px,5vw,40px)]"
            style={{ fontFamily: 'Outfit', letterSpacing: '-0.5%' }}
          >
            OUR STORY OF GLOBAL <br /> SUPPLY <br /> TRANSFORMATION
          </h1>

          <p
            className="mb-8 max-w-full sm:max-w-md text-[clamp(14px,3vw,16px)] leading-[150%]"
            style={{ fontFamily: 'Lato', fontWeight: 400, color: '#0A175C' }}
          >
            Founded by IIT and IIM alumni, SureSupply is redefining how products are made by removing manufacturing barriers. 
            We connect creators with India’s most capable suppliers to deliver precision-engineered components reliably and transparently. 
            Backed by engineering expertise, we take full ownership of every RFQ — matching the right supplier, process, and ensuring top-quality outcomes. 
            With a human-first approach, we collaborate on design, technical consulting, and production, empowering innovation without limits.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F05023",
                textTransform: "none",
                fontWeight: "600",
                px: 3,
                "&:hover": { backgroundColor: "#F05023" },
              }}
            >
              Get Instant Quote
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#0D1C45",
                color: "#F05023",
                textTransform: "none",
                fontWeight: "600",
                px: 3,
                "&:hover": {
                  backgroundColor: "#F05023",
                  color: "#fff",
                  borderColor: "#F05023",
                },
              }}
            >
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-[500px] h-auto">
            <Image
              src={heroImg}
              alt="Global supply transformation"
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
