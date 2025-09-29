// components/Navbar.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImg from "../../../public/logo.png"; // Replace with your logo path

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Solutions", href: "/solutions" },
];

const resourcesLinks = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "Investors", href: "/investors" },
  ],
  Insights: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
  ],
  Support: [
    { name: "Help Center", href: "/help-center" },
    { name: "Document", href: "/document" },
    { name: "Training", href: "/training" },
    { name: "Community", href: "/community" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={LogoImg} alt="Logo" width={150} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 text-gray-700 font-medium relative">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-blue-600">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}

          {/* Resources Dropdown */}
          <li
            className="relative hover:text-blue-600 cursor-pointer"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <span onClick={toggleResources}>Resources ▾</span>

            {isResourcesOpen && (
              <div className="absolute top-full left-0 bg-white border mt-2 w-72 shadow-lg z-50 p-4 grid grid-cols-3 gap-4">
                {Object.entries(resourcesLinks).map(([section, items]) => (
                  <div key={section}>
                    <h4 className="font-semibold mb-2">{section}</h4>
                    <ul className="space-y-1 text-gray-600">
                      {items.map((item) => (
                        <li key={item.name} className="hover:text-blue-600">
                          <a href={item.href}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Right-side Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-blue-600">
                <a href={link.href} onClick={toggleMenu}>
                  {link.name}
                </a>
              </li>
            ))}

            {/* Mobile Resources */}
            <li className="w-full">
              <button
                className="w-full text-left font-medium hover:text-blue-600"
                onClick={toggleResources}
              >
                Resources ▾
              </button>
              {isResourcesOpen && (
                <div className="mt-2 pl-4">
                  {Object.entries(resourcesLinks).map(([section, items]) => (
                    <div key={section} className="mb-2">
                      <h4 className="font-semibold mb-1">{section}</h4>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item.name} className="hover:text-blue-600">
                            <a href={item.href} onClick={toggleMenu}>
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 mt-2 w-full">
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
                Sign Up
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Login
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
