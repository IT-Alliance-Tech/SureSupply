"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

// 🖼️ Your images
import LogoImg from "../../../public/logo.png";
import MenuLeftImg from "../../../public/dummy3.png";

// 🧩 You will import your own icons here
// Example:
// import { AboutIcon, ContactIcon, CareerIcon } from "@/icons/YourIcons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeAndGoBack = () => {
    setMenuOpen(false);
    setResourcesOpen(false);
    router.back();
  };

  const toggleResources = () => setResourcesOpen(!resourcesOpen);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      {/* ====== TOP NAVBAR ====== */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={LogoImg} alt="SureSupply" width={160} height={50} />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3">
            <button className="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition text-base font-medium">
              Login
            </button>
            <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition text-base font-medium">
              Signup
            </button>
          </div>

          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className="p-2 border border-blue-500 rounded-lg hover:bg-blue-50 transition"
          >
            {menuOpen ? (
              <FaTimes size={20} className="text-blue-600" />
            ) : (
              <FaBars size={20} className="text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* ====== SLIDE-OUT MENU ====== */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col md:flex-row">
          {/* ====== LEFT SIDE (IMAGE + RESOURCES OVERLAY) ====== */}
          <div className="w-full md:w-[60%] relative bg-black">
            <Image
              src={MenuLeftImg}
              alt="Menu Left Image"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay Content for Resources */}
            {resourcesOpen && (
              <div className="absolute inset-0 bg-black/70 text-white p-10 overflow-y-auto animate-fadeIn">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
                  {/* ========== COMPANY SECTION ========== */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                      Company
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <AboutIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            About
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Manufacturing expertise you can trust
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <ContactIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Contact
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Get in touch with our team
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <CareerIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Careers
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Join our innovative team
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <InvestorIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Investors
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Financial insights
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* ========== INSIGHTS SECTION ========== */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                      Insights
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <CaseStudyIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Case Studies
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Successful projects
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <BlogIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Blog
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Industry trends
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <WhitePaperIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            White Papers
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            In-depth research
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <WebinarIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Webinars
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Expert-led discussions
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* ========== SUPPORT SECTION ========== */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                      Support
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <HelpCenterIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Help Center
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Find quick answers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <DocsIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Documentation
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Detailed guides & references
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <TrainingIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Training
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Hands-on learning resources
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-blue-400 mt-1">
                          {/* <CommunityIcon size={20}/> */}
                        </span>
                        <div>
                          <h5 className="font-semibold text-lg leading-tight">
                            Community
                          </h5>
                          <p className="text-gray-300 text-sm leading-snug">
                            Join and connect with peers
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ====== RIGHT SIDE MENU ====== */}
          <div
            ref={menuRef}
            className="w-full md:w-[40%] bg-white p-8 flex flex-col shadow-2xl overflow-y-auto relative"
          >
            {/* Cancel Icon */}
            <button
              onClick={closeAndGoBack}
              className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 transition"
            >
              <FaTimes size={24} />
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-black mt-2">
              Menu
            </h3>

            <ul className="flex-1 space-y-5">
              <li>
                <Link
                  href="/"
                  onClick={() => setResourcesOpen(false)}
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => setResourcesOpen(false)}
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/ourCapabilities"
                  onClick={() => setResourcesOpen(false)}
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleResources}
                  className="flex items-center justify-between w-full text-left text-black font-semibold text-lg hover:text-blue-800"
                >
                  <span>Resources</span>
                  <FaChevronDown
                    className={`ml-2 transform transition-transform ${
                      resourcesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </li>
            </ul>

            {/* Buttons inside menu */}
            <div className="mt-auto flex flex-col gap-3">
              <button className="px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition text-base font-medium">
                Login
              </button>
              <button className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base font-medium">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====== ANIMATION ====== */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
