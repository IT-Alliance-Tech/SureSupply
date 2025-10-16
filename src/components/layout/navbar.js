"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImg from "../../../public/logo.png";
import MenuLeftImg from "../../../public/dummy3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // When ❌ is clicked → close menu & go back
  const closeAndGoBack = () => {
    setMenuOpen(false);
    router.back();
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      {/* Top Navbar */}
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

      {/* Slide-Out Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col md:flex-row">
          {/* Left Image (55%) */}
          <div className="w-full md:w-[55%] relative bg-black">
            <Image
              src={MenuLeftImg}
              alt="Menu Left Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Menu (45%) */}
          <div
            ref={menuRef}
            className="w-full md:w-[45%] bg-white p-8 flex flex-col shadow-2xl overflow-y-auto relative"
          >
            {/* Cancel Icon (go back only when clicked) */}
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
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/ourCapabilities"
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/ourSolution"
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-black font-semibold text-lg hover:text-blue-800"
                >
                  Resources
                </Link>
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
    </header>
  );
};

export default Navbar;
