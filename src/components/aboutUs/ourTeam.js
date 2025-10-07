"use client";

import Image from "next/image";
// MUI icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

// Import images
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
      "Veteran logistics expert with 20 years of global supply chain management experience.",
    img: team1,
  },
  {
    name: "ABC",
    role: "Chief Technology Officer",
    description:
      "Digital transformation specialist leading our innovative platform development.",
    img: team2,
  },
  {
    name: "ABC",
    role: "Chief Operations Officer",
    description:
      "Strategic leader with deep expertise in global network optimization.",
    img: team3,
  },
  {
    name: "ABC",
    role: "Chief Sustainability Officer",
    description:
      "Driving our commitment to sustainable and responsible logistics solutions.",
    img: team4,
  },
  {
    name: "ABC",
    role: "Chief Marketing Officer",
    description:
      "Building brand awareness and driving growth through innovative marketing strategies.",
    img: team5,
  },
  {
    name: "ABC",
    role: "Chief Financial Officer",
    description:
      "Experienced finance professional managing fiscal operations and growth planning.",
    img: team6,
  },
  {
    name: "ABC",
    role: "Head of Human Resources",
    description:
      "Passionate about people and culture, fostering a thriving and inclusive workplace.",
    img: team7,
  },
  {
    name: "ABC",
    role: "Director of Business Development",
    description:
      "Expanding partnerships and identifying new market opportunities globally.",
    img: team8,
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-gray-500 mb-2">Leadership</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A175C] mb-2">
          OUR TEAM
        </h2>
        <p className="text-gray-500 mb-12">
          Experienced professionals driving global logistics innovation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="w-36 h-36 mb-4 relative rounded-lg overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  width={144}
                  height={144}
                />
              </div>

              <h3 className="text-lg font-bold text-[#0A175C]">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.description}</p>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  <LinkedInIcon fontSize="small" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <TwitterIcon fontSize="small" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
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
