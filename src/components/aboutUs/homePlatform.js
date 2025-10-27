"use client";

import Image from "next/image";
import Button from "@mui/material/Button";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import { useRouter } from "next/navigation";
import { Outfit, Lato } from "next/font/google";

// Images
import bgImage from "../../../public/about/aboutbg3.png";
import sideImage from "../../../public/dummy3.png";

// ✅ Load fonts
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function HomePlatform() {
  const router = useRouter();

  // ✅ Navigate to platform page
  const handlePlatformRedirect = () => {
    router.push("/platform");
  };

  // ✅ Navigate to homepage and scroll to quote form
  const handleQuoteRedirect = () => {
    router.push("/#quoteForm");
  };

  return (
    <section className="relative overflow-hidden py-10 px-6 sm:px-10 lg:px-20">
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
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 order-1">
          {/* Icon */}
          <div
            className="flex items-center justify-center md:justify-start"
            style={{ width: 50, height: 50 }}
          >
            <WarehouseOutlinedIcon
              sx={{
                width: 50,
                height: 50,
                color: "#0A175C",
              }}
            />
          </div>

          {/* Heading */}
          <h2
            className={`${outfit.className} leading-tight text-[clamp(24px,5vw,40px)] font-bold`}
            style={{
              color: "#0A175C",
              margin: 0,
            }}
          >
            DIGITAL PLATFORM THAT POWERS GLOBAL LOGISTICS
          </h2>

          {/* Content */}
          <p
            className={`${lato.className} text-[clamp(14px,3vw,18px)] leading-relaxed max-w-md`}
            style={{
              color: "#374151",
              margin: 0,
            }}
          >
            Our technology connects complex supply chains with seamless precision
            and real-time insights.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 pt-2 w-full">
            {/* Explore platform */}
            <Button
              onClick={handlePlatformRedirect}
              variant="outlined"
              sx={{
                borderColor: "#0A175C",
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
                },
              }}
            >
              Explore platform
            </Button>

            {/* Get Instant Quote */}
            <Button
              onClick={handleQuoteRedirect}
              variant="text"
              sx={{
                color: "#F05023",
                textTransform: "none",
                fontFamily: "Lato, sans-serif",
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

        {/* Right image */}
        <div className="flex justify-center md:justify-end order-2 w-full">
          <div className="w-full max-w-[600px] h-auto flex items-center justify-center">
            <Image
              src={sideImage}
              alt="Platform visual"
              width={600}
              height={600}
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
