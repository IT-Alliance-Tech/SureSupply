"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { categories } from "../capabilitiesContent"; // ✅ dynamic capabilities import
import BgImage from "../../../public/Bg.png"; // ✅ background image

export default function Footer() {
  // ✅ Split capabilities into two columns dynamically
  const mainCapabilities = categories.map((item) => ({
    title: item.title,
    href: `/capabilities#${item.id}`,
  }));

  const half = Math.ceil(mainCapabilities.length / 2);
  const firstColumn = mainCapabilities.slice(0, half);
  const secondColumn = mainCapabilities.slice(half);

  return (
    <footer className="relative bg-white text-[#0A175C] overflow-hidden border-t border-gray-200">
      {/* ===== Background Image ===== */}
      <div className="absolute bottom-10 right-0 w-[480px] opacity-20 pointer-events-none">
        <Image
          src={BgImage}
          alt="Background Pattern"
          width={550}
          height={350}
          className="object-contain"
        />
      </div>

      {/* ===== Footer Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-14 relative z-10">
        {/* ========= COLUMN 1: Logo + Address ========= */}
        <div className="ml-8">
          <div>
            <img src="/logo.png" alt="SureSupply Logo" className="w-36" />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              237, Second Floor, Copper Crown Building, Mahavir Circle, Phase-3
              <br />
              Dared, Jamnagar Gujarat (INDIA) - 361004
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="text-sm text-[#0A175C] leading-relaxed">
              +91 87809 52559
              <br />
              <Link href="mailto:info@suresupply.in" className="hover:underline">
                info@suresupply.in
              </Link>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2 text-lg">
            <Link href="#" className="hover:text-[#F05023]">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-[#F05023]">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-[#F05023]">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-[#F05023]">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-[#F05023]">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* ========= COLUMN 2: Quick Links ========= */}
        <div className="pl-6">
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* ========= COLUMN 3: Our Capabilities ========= */}
        <div className="-ml-25">
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Our Capabilities
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <div className="space-y-3">
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
            <div className="space-y-3">
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

        {/* ========= COLUMN 4: Investors / Resources ========= */}
        <div className="ml-8">
          <h3
            className="font-bold text-lg mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Investors
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/resources" className="hover:underline">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ========= FOOTER BOTTOM ========= */}
      <div className="border-t border-gray-200 mt-6 py-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto relative z-10">
        <p>© 2025 SureSupply. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:underline">
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
