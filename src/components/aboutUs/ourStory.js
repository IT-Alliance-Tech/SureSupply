"use client";

import Image from "next/image";
import heroImg from "../../../public/dummy3.png";
import { Button } from "@mui/material";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
        
        {/* Left Content: moved slightly to the right */}
        <div className="md:translate-x-8">
         <h1
  className="text-[40px] font-bold uppercase text-[#0A175C] leading-[120%] mb-6"
  style={{ fontFamily: 'Outfit', letterSpacing: '-0.5%' }}
>
  OUR STORY OF GLOBAL <br /> SUPPLY <br />TRANSFORMATION
</h1>


          <p
  className="text-[16px] leading-[150%] mb-8 max-w-md"
  style={{ fontFamily: 'Lato', fontWeight: 400, letterSpacing: '0%', color: '#0A175C' }}
>
  We build networks that connect industries across continents. Our
  digital platform transforms complex supply chains into seamless,
  efficient systems.
</p>


          {/* MUI Buttons */}
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
              Become a partner
            </Button>
          </div>
        </div>

        {/* Right Image: moved slightly to the left, fixed 500x500, no shadow */}
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
    </section>
  );
}
