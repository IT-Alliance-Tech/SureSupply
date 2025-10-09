"use client";

import Image from "next/image";
import Button from "@mui/material/Button";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

// Background and side image (update paths if your structure differs)
import bgImage from "../../../public/about/aboutbg3.png";
import sideImage from "../../../public/dummy3.png";

export default function HomePlatform() {
  return (
    <section className="relative overflow-hidden py-9.2 px-6 sm:px-10 lg:px-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Platform background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left content */}
        <div className="space-y-5">
          {/* Icon wrapper - exact size */}
          <div
            className="flex items-center gap-3"
            style={{ width: 50, height: 50 }}
            aria-hidden
          >
            <WarehouseOutlinedIcon
              sx={{
                width: 50,
                height: 50,
                color: "#0A175C",
              }}
            />
          </div>

          {/* Heading: Outfit, bold, 40px, color #0A175C */}
          <h2
            className="leading-tight"
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "40px",
              color: "#0A175C",
              margin: 0,
            }}
          >
            DIGITAL PLATFORM THAT POWERS GLOBAL LOGISTICS
          </h2>

          {/* Subheading / description: Lato, 18px */}
          <p
            className="max-w-md"
            style={{
              fontFamily: "Lato, Work Sans, system-ui, sans-serif",
              fontSize: "18px",
              color: "#374151",
              marginTop: "6px",
            }}
          >
            Our technology connects complex supply chains with seamless precision
            and real-time insights
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#0A175C",
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
                },
              }}
            >
              Explore platform
            </Button>

            {/* Instant Quote - text button, orange text (#F05023) */}
            <Button
              variant="text"
              sx={{
                color: "#F05023",
                textTransform: "none",
                fontFamily: "Outfit, system-ui, sans-serif",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                height: "40px",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                },
              }}
            >
              Get Instant Quote →
            </Button>
          </div>
        </div>

        {/* Right image: exact 600x600 */}
        <div className="flex justify-center">
          <div className="w-[600px] h-[600px] flex items-center justify-center">
            <Image
              src={sideImage}
              alt="Platform visual"
              width={600}
              height={600}
              className="object-contain rounded-2xl shadow-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
