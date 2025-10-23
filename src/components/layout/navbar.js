"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

// 🖼️ Your images
import LogoImg from "../../../public/logo.png";
import MenuLeftImg from "../../../public/dummy3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleResources = () => setResourcesOpen(!resourcesOpen);

  const navigateTo = (path) => {
    setMenuOpen(false);
    setResourcesOpen(false);
    router.push(path);
  };

  const companyItems = [
    { title: "About", desc: "Manufacturing expertise you can trust", path: "/about" },
    { title: "Contact", desc: "Get in touch with our team", path: "/contact" },
    { title: "Careers", desc: "Join our innovative team", path: "/careers" },
    { title: "Investors", desc: "Financial insights", path: "/investors" },
  ];

  const insightsItems = [
    { title: "Case Studies", desc: "Successful projects", path: "/case-studies" },
    { title: "Blog", desc: "Industry trends", path: "/blog" },
    { title: "White Papers", desc: "In-depth research", path: "/white-papers" },
    { title: "Webinars", desc: "Expert-led discussions", path: "/webinars" },
  ];

  const supportItems = [
    { title: "Help Center", desc: "Find quick answers", path: "/help-center" },
    { title: "Documentation", desc: "Detailed guides & references", path: "/documentation" },
    { title: "Training", desc: "Hands-on learning resources", path: "/training" },
    { title: "Community", desc: "Join and connect with peers", path: "/community" },
  ];

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      {/* ====== TOP NAVBAR ====== */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
        {/* Logo */}
       <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image className="logoImage" src={LogoImg} alt="SureSupply" width={160} height={50} />
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
          {/* ====== LEFT SIDE (IMAGE + DESKTOP RESOURCES OVERLAY) ====== */}
          <div className="w-full md:w-[60%] relative bg-black flex-shrink-0">
            {/* Desktop image */}
            <div className="hidden md:block w-full h-full relative">
              <Image
                src={MenuLeftImg}
                alt="Menu Left Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Mobile image on top */}
            <div className="md:hidden w-full h-48 relative">
              <Image
                src={MenuLeftImg}
                alt="Menu Top Image"
                fill
                className="object-cover"
              />
            </div>

            {/* Desktop Resources Overlay */}
            {resourcesOpen && (
              <div className="hidden md:block absolute inset-0 bg-black/70 text-white p-10 overflow-y-auto animate-fadeIn">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Company</h3>
                    <ul className="space-y-6">
                      {companyItems.map((item, i) => (
                        <li key={i}>
                          <h5 className="font-semibold text-lg">{item.title}</h5>
                          <p className="text-gray-300 text-sm">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Insights</h3>
                    <ul className="space-y-6">
                      {insightsItems.map((item, i) => (
                        <li key={i}>
                          <h5 className="font-semibold text-lg">{item.title}</h5>
                          <p className="text-gray-300 text-sm">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Support</h3>
                    <ul className="space-y-6">
                      {supportItems.map((item, i) => (
                        <li key={i}>
                          <h5 className="font-semibold text-lg">{item.title}</h5>
                          <p className="text-gray-300 text-sm">{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ====== RIGHT SIDE MENU ====== */}
          <div
            ref={menuRef}
            className="w-full md:w-[40%] bg-white p-8 flex flex-col overflow-y-auto relative"
          >
            {/* Cancel Icon */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 transition"
            >
              <FaTimes size={24} />
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-black mt-2">Menu</h3>

            <ul className="flex-1 space-y-5">
              <li>
                <button
                  onClick={() => navigateTo("/")}
                  className="text-black font-semibold text-lg hover:text-blue-800 w-full text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("/ourservices")}
                  className="text-black font-semibold text-lg hover:text-blue-800 w-full text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("/ourCapabilities")}
                  className="text-black font-semibold text-lg hover:text-blue-800 w-full text-left"
                >
                  Capabilities
                </button>
              </li>

              {/* Resources button */}
              <li className="relative">
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

                {/* Mobile dropdown */}
                {resourcesOpen && (
                  <div className="md:hidden mt-2 pl-2 flex flex-col space-y-4 border-l-2 border-gray-200">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Company</h4>
                      {companyItems.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => navigateTo(item.path)}
                          className="text-black font-normal hover:text-blue-600 text-left w-full mb-1"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Insights</h4>
                      {insightsItems.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => navigateTo(item.path)}
                          className="text-black font-normal hover:text-blue-600 text-left w-full mb-1"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Support</h4>
                      {supportItems.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => navigateTo(item.path)}
                          className="text-black font-normal hover:text-blue-600 text-left w-full mb-1"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
