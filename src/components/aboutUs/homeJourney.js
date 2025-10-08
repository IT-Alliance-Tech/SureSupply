"use client";

import Image from "next/image";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ✅ Import your background image
import bgImage from "../../../public/about/aboutbg2.png";

export default function HomeJourney() {
  const timeline = [
    {
      year: "2018",
      text: "Founded with a bold vision to revolutionize global supply networks",
    },
    {
      year: "2019",
      text: "Expanded operations across multiple international sectors",
    },
    {
      year: "2021",
      text: "Launched groundbreaking digital platform transforming logistics",
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Journey background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#0A175C]/90"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-sm mb-2 opacity-90"
          style={{ fontFamily: "Work Sans" }}
        >
          Journey
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: "Outfit" }}
        >
          OUR GROWTH AND TRANSFORMATION
        </h2>
        <p
          className="text-gray-200 mb-8"
          style={{ fontFamily: "Work Sans" }}
        >
          A decade of innovation and global expansion
        </p>

        {/* MUI Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            textTransform: "none",
            fontFamily: "Work Sans",
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: "6px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#0A175C",
            },
          }}
        >
          Get Instant Quote
        </Button>

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-md mr-4 transition">
              <ArrowBackIosNewIcon fontSize="small" />
            </button>

            {/* Timeline Bar */}
            <div className="flex items-center justify-between w-full max-w-4xl border-t border-gray-400 relative">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center mt-8"
                  style={{ flex: "1" }}
                >
                  {/* Circle */}
                  <div className="w-4 h-4 bg-white rounded-full -mt-[10px]"></div>
                  {/* Year */}
                  <h3
                    className="text-xl font-bold mt-6"
                    style={{ fontFamily: "Outfit" }}
                  >
                    {item.year}
                  </h3>
                  {/* Description */}
                  <p
                    className="text-gray-300 text-sm mt-2 max-w-[220px]"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-md ml-4 transition">
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
