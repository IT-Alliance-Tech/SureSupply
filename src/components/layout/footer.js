"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

import Logo from "../../../public/logo.png";
import BgImage from "../../../public/Bg.png";

export default function Footer() {
  const capabilitiesLinks = [
    { title: "Capabilities", href: "/ourCapabilities#capabilities" },
    { title: "Processes", href: "/ourCapabilities#processes" },
    { title: "Post Casting", href: "/ourCapabilities#post-casting" },
    { title: "Standards", href: "/ourCapabilities#standards" },
    { title: "Prototype", href: "/ourCapabilities#prototype" },
    { title: "Pressure", href: "/ourCapabilities#pressure" },
    { title: "Production", href: "/ourCapabilities#production" },
    { title: "Review", href: "/ourCapabilities#review" },
  ];

  const firstColumn = capabilitiesLinks.slice(0, 4);
  const secondColumn = capabilitiesLinks.slice(4, 8);

  return (
    <footer
      className="relative bg-white text-[#0a1a4f] overflow-hidden"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      {/* Background Image */}
      <div className="absolute bottom-0 right-0 w-[500px] opacity-20 pointer-events-none">
        <Image
          src={BgImage}
          alt="Factory Background"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left - Logo, Address, Contact */}
        <div className="space-y-6">
          <Link href="/">
            <Image
              src={Logo}
              alt="SureSupply Logo"
              className="w-40 h-auto cursor-pointer mb-6"
            />
          </Link>
          <div>
            <h3
              className="font-bold text-lg"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Address
            </h3>
            <p>
              237, Second Floor, Copper Crown Building, Mahavir Circle, Phase-3
              Dared, Jamnagar Gujarat (INDIA) - 361004
            </p>
          </div>
          <div>
            <h3
              className="font-bold text-lg"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Contact
            </h3>
            <Link
              href="tel:1800manufacturing"
              className="text-blue-700 hover:underline"
            >
              +91 87809 52559 <br />
              info@suresupply.in
            </Link>
          </div>
          <div className="flex space-x-4 text-2xl mt-2">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-blue-600 transition cursor-pointer" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition cursor-pointer" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-sky-500 transition cursor-pointer" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition cursor-pointer" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6 hover:text-red-600 transition cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pl-6">
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-5">
            <li>
              <Link href="/" className="hover:underline cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className="hover:underline cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline cursor-pointer">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Capabilities (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center -ml-50">
          <h3
            className="font-bold text-lg mb-4 text-left -ml-20"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Our Capabilities
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <div className="space-y-5">
              {firstColumn.map((cap) => (
                <Link
                  key={cap.href}
                  href={cap.href}
                  className="hover:underline block cursor-pointer"
                >
                  {cap.title}
                </Link>
              ))}
            </div>
            <div className="space-y-5">
              {secondColumn.map((cap) => (
                <Link
                  key={cap.href}
                  href={cap.href}
                  className="hover:underline block cursor-pointer"
                >
                  {cap.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Investors */}
        <div>
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Investors
          </h3>
          <ul className="space-y-5">
            <li>
              <Link href="/resources" className="hover:underline cursor-pointer">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline cursor-pointer">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:underline cursor-pointer">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline cursor-pointer">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-300 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Sure Supply. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:underline cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:underline cursor-pointer">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
