"use client";

import Image from "next/image";
import Button from "@mui/material/Button";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

// ✅ Import background and side image
import bgImage from "../../../public/about/aboutbg3.png";
import sideImage from "../../../public/dummy3.png"; // replace with your actual image

export default function HomePlatform() {
  return (
    <section className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
      {/* ✅ Background Image (no overlay now) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Platform background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ✅ Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <WarehouseOutlinedIcon sx={{ fontSize: 48, color: "#0A175C" }} />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A175C] leading-tight"
            style={{ fontFamily: "Outfit" }}
          >
            DIGITAL PLATFORM THAT POWERS GLOBAL LOGISTICS
          </h2>

          <p
            className="text-gray-700 text-base sm:text-lg max-w-md"
            style={{ fontFamily: "Work Sans" }}
          >
            Our technology connects complex supply chains with seamless precision
            and real-time insights
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#0A175C",
                color: "#0A175C",
                textTransform: "none",
                fontFamily: "Work Sans",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: "6px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#0A175C",
                  color: "#fff",
                },
              }}
            >
              Explore platform
            </Button>

            <Button
              variant="text"
              sx={{
                color: "#E65100",
                textTransform: "none",
                fontFamily: "Work Sans",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Get Instant Quote →
            </Button>
          </div>
        </div>

        {/* ✅ Right Side Image (no white background now) */}
        <div className="flex justify-center">
          <Image
            src={sideImage}
            alt="Platform visual"
            className="object-contain rounded-2xl shadow-none w-[90%] sm:w-[80%] md:w-[85%] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
