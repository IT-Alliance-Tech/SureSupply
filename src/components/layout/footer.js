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
    <footer className="relative bg-white text-[#0a1a4f] overflow-hidden">
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
            <Image src={Logo} alt="SureSupply Logo" className="w-40 h-auto cursor-pointer mb-6" />
          </Link>
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
          <div className="flex space-x-4 text-2xl mt-2">
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

        {/* Quick Links */}
        <div className="md:pl-6">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-5">
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

        {/* Our Capabilities (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center -ml-50">
          <h3 className="font-bold text-lg mb-4 text-left -ml-20">Our Capabilities</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <div className="space-y-5 ">
              {firstColumn.map((cap) => (
                <Link key={cap.href} href={cap.href} className="hover:underline block">
                  {cap.title}
                </Link>
              ))}
            </div>
            <div className="space-y-5 ">
              {secondColumn.map((cap) => (
                <Link key={cap.href} href={cap.href} className="hover:underline block">
                  {cap.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Investors */}
        <div>
          <h3 className="font-bold text-lg mb-4">Investors</h3>
          <ul className="space-y-5">
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
                Help center
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
