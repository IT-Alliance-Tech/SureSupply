"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import LogoImg from "../../../public/logo.png"; // Logo import
import MenuLeftImg from "../../../public/dummy3.png"; // Left image import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleResources = () => setResourcesOpen(!resourcesOpen);

  const resourcesLinks = {
    Company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/career" },
      { name: "Investors", href: "/investors" },
    ],
    Insights: [
      { name: "Case studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "White papers", href: "/white-papers" },
      { name: "Webinars", href: "/webinars" },
    ],
    Support: [
      { name: "Help center", href: "/help-center" },
      { name: "Documentation", href: "/document" },
      { name: "Training", href: "/training" },
      { name: "Community", href: "/community" },
    ],
  };

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setResourcesOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={LogoImg} alt="SureSupply" width={160} height={50} />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <button className="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
           {` Login`}
          </button>
          <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
           {` Signup`}
          </button>
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
        <div className="fixed inset-0 z-40 flex">
          {/* Left Image occupies remaining space */}
          <div className="flex-1 relative">
            <Image
              src={MenuLeftImg}
              alt="Menu Left Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Right Menu */}
          <div
            ref={menuRef}
            className="w-[300px] bg-white p-6 flex flex-col shadow-2xl overflow-y-auto"
          >
            <h3 className="text-xl font-semibold mb-4 text-black">Menu</h3>
            <ul className="flex-1 space-y-4">
              <li>
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-black font-medium hover:text-blue-800"
                >
                 {` Home`}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="text-black font-medium hover:text-blue-800"
                >
                  {`Services`}
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities"
                  onClick={() => setMenuOpen(false)}
                  className="text-black font-medium hover:text-blue-800"
                >
                 {` Capabilities`}
                </a>
              </li>
              <li>
                <a
                  href="/ourSolution"
                  onClick={() => setMenuOpen(false)}
                  className="text-black font-medium hover:text-blue-800"
                >
                 {` Solutions`}
                </a>
              </li>

              {/* Resources */}
              <li>
                <button
                  onClick={toggleResources}
                  className="flex items-center justify-between w-full font-medium text-black hover:text-blue-800"
                >
                  <span>Resources</span>
                  <FaChevronDown
                    size={14}
                    className={`transition-transform ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {resourcesOpen && (
                  <div className="mt-3 pl-2 border-l border-black max-h-52 overflow-y-auto">
                    {Object.entries(resourcesLinks).map(([section, items]) => (
                      <div key={section} className="mb-3">
                        <h4 className="text-black font-semibold text-sm mb-1">
                          {section}
                        </h4>
                        <ul className="ml-3 space-y-1">
                          {items.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-blue-600 text-sm hover:text-blue-800"
                              >
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
            </ul>

            {/* Bottom buttons inside menu */}
            <div className="mt-auto flex flex-col gap-2">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
                {`Login`}
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                {`Signup`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slide-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
