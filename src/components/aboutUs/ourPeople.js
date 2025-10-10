"use client";

import Image from "next/image";
import Button from "@mui/material/Button";

import icon1 from "../../../public/about/logo1.png";
import icon2 from "../../../public/about/logo2.png";
import icon3 from "../../../public/about/logo1.png";
import icon4 from "../../../public/about/logo2.png";
import sideImage from "../../../public/dummy3.png";

const icons = [icon1, icon2, icon3, icon4];

export default function PeopleOnGround() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[550px]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-16 bg-[#F05023] text-white">
        <span className="font-lato text-[16px] mb-1 block">Our team</span>

        <h2 className="font-houtfit text-[40px] leading-snug mb-2">
          PEOPLE ON THE <br /> GROUND
        </h2>

        <p className="font-lato text-[16px] text-white/90 mb-4">
          The human network behind every successful delivery
        </p>

        {/* Icons */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`flex justify-start items-center h-[40px] ${
                index === 3 ? "col-span-1" : ""
              }`}
            >
              <Image
                src={icon}
                alt={`Icon ${index + 1}`}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#0A175C",
              color: "#0A175C",
              textTransform: "none",
              fontFamily: "Lato, sans-serif",
              fontWeight: 600,
              borderRadius: "8px",
              padding: "6px 20px",
              "&:hover": {
                backgroundColor: "rgba(10,23,92,0.1)",
                borderColor: "#0A175C",
              },
            }}
          >
            Connect
          </Button>

          <Button
            variant="text"
            sx={{
              color: "#0A175C",
              textTransform: "none",
              fontFamily: "Lato, sans-serif",
              fontWeight: 600,
              padding: "6px 20px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Get Instant Quote →
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative h-[500px] md:h-auto">
        <Image
          src={sideImage}
          alt="Team visual"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
