"use client";

import Image from "next/image";
import heroImg from "../../../public/dummy3.png";
import { Button } from "@mui/material";

export default function OurStory() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 mt-24 flex justify-center px-4">
      {/* Outer Box */}
      <div className="w-full max-w-6xl bg-white border border-[#0A175C] rounded-xl shadow-sm p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className="md:translate-x-8">
            <h1
              className="text-[40px] font-bold uppercase text-[#0A175C] leading-[120%] mb-6"
              style={{ fontFamily: 'Outfit', letterSpacing: '-0.5%' }}
            >
              {`OUR STORY OF GLOBAL`} <br /> SUPPLY <br /> {`TRANSFORMATION`}
            </h1>

            <p
              className="text-[16px] leading-[150%] mb-8 max-w-md"
              style={{ fontFamily: 'Lato', fontWeight: 400, letterSpacing: '0%', color: '#0A175C' }}
            >
              {`Founded by IIT and IIM alumni, SureSupply is redefining how products are made by removing manufacturing barriers. 
We connect creators with India’s most capable suppliers to deliver precision-engineered components reliably and transparently. 
Backed by engineering expertise, we take full ownership of every RFQ — matching the right supplier, process, and ensuring top-quality outcomes. 
With a human-first approach, we collaborate on design, technical consulting, and production, empowering innovation without limits.`}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                {`Get Instant Quote`}
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
                {`Become a Partner`}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end md:-translate-x-8">
            <div className="bg-white w-[500px] h-[500px] flex items-center justify-center rounded-lg relative">
              <Image
                src={heroImg}
                alt="Global supply transformation"
                className="object-contain"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
