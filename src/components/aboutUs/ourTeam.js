"use client";

import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

import team1 from "../../../public/dummy3.png";
import team2 from "../../../public/dummy3.png";
import team3 from "../../../public/dummy3.png";
import team4 from "../../../public/dummy3.png";
import team5 from "../../../public/dummy3.png";
import team6 from "../../../public/dummy3.png";
import team7 from "../../../public/dummy3.png";
import team8 from "../../../public/dummy3.png";

const teamMembers = [
  {
    name: "ABC",
    role: "Chief Executive Officer",
    description:
      "Veteran logistics expert with 20 years of global supply chain experience.",
    img: team1,
  },
  {
    name: "ABC",
    role: "Chief Technology Officer",
    description:
      "Digital transformation specialist driving innovative platform solutions.",
    img: team2,
  },
  {
    name: "ABC",
    role: "Chief Operations Officer",
    description:
      "Strategic leader optimizing global supply networks efficiently.",
    img: team3,
  },
  {
    name: "ABC",
    role: "Chief Sustainability Officer",
    description:
      "Leading our commitment to sustainable and responsible logistics.",
    img: team4,
  },
  {
    name: "ABC",
    role: "Chief Marketing Officer",
    description:
      "Building brand presence and driving strategic market growth.",
    img: team5,
  },
  {
    name: "ABC",
    role: "Chief Financial Officer",
    description:
      "Finance professional ensuring strong fiscal operations and planning.",
    img: team6,
  },
  {
    name: "ABC",
    role: "Head of Human Resources",
    description:
      "Creating a thriving and inclusive workplace for all teams.",
    img: team7,
  },
  {
    name: "ABC",
    role: "Director of Business Development",
    description:
      "Expanding partnerships and uncovering new market opportunities.",
    img: team8,
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
        <p className="text-sm mb-2 font-lato text-[#0A175C]">Leadership</p>
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-[#0A175C] mb-2">
          OUR TEAM
        </h2>
        <p className="mb-12 font-lato text-[#0A175C]">
          Experienced professionals driving global logistics innovation
        </p>

        {/* Centered single card */}
        <div className="flex justify-center">
          {teamMembers.slice(0, 1).map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[224px] h-auto mb-4 relative rounded-lg overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  width={224}
                  height={200}
                  unoptimized
                />
              </div>

              <h3 className="text-lg font-outfit font-bold text-[#0A175C] mb-2">
                {member.name}
              </h3>
              <p className="text-sm mb-1 font-lato text-[#0A175C] mb-2">{member.role}</p>

              {/* Shorter text width + definite visible gap below */}
              <p
                className="text-sm font-lato text-[#0A175C] leading-relaxed"
                style={{
                  maxWidth: "240px",
                  margin: "0 auto 20px auto", // ensures visible gap below
                  lineHeight: "1.5",
                }}
              >
                {member.description}
              </p>

              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-blue-700 text-[#0A175C]">
                  <LinkedInIcon fontSize="small" />
                </a>
                <a href="#" className="hover:text-blue-500 text-[#0A175C]">
                  <TwitterIcon fontSize="small" />
                </a>
                <a href="#" className="hover:text-green-600 text-[#0A175C]">
                  <LanguageIcon fontSize="small" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
