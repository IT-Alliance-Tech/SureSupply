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

// Import your logo and background image
import Logo from "../../../public/logo.png"; // replace with actual logo
import BgImage from "../../../public/Bg.png"; // replace with actual background

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#0a1a4f] overflow-hidden">
      {/* Background Image - bottom right only */}
      <div className="absolute bottom-0 right-0 w-[500px] opacity-20 pointer-events-none">
        <Image
          src={BgImage}
          alt="Factory Background"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Logo, Address, Contact */}
        <div className="space-y-6">
          <Image src={Logo} alt="SureSupply Logo" className="w-40 h-auto" />
          <div>
            <h3 className="font-bold text-lg">Address</h3>
            <p>123 Manufacturing Way, Industrial Park</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <Link
              href="tel:1800manufacturing"
              className="text-blue-700 hover:underline"
            >
              1800 manufacturing
            </Link>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-blue-600 transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-sky-500 transition" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6 hover:text-red-600 transition" />
            </Link>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/capabilities" className="hover:underline">
                Capabilities
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
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

        {/* Right - Investors */}
        <div>
          <h3 className="font-bold text-lg mb-4">Investors</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/case-studies" className="hover:underline">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:underline">
                Help center
              </Link>
            </li>
            <li>
              <Link href="/docs" className="hover:underline">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-300 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Sure Supply. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of service
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookie settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
