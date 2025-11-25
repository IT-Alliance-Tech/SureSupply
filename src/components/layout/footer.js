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
import { categories } from "../capabilitiesContent";
import BgImage from "../../../public/Bg.png";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const mainCapabilities = categories.map((item) => ({
    title: item.title,
    id: item.id,
  }));

  const half = Math.ceil(mainCapabilities.length / 2);
  const firstColumn = mainCapabilities.slice(0, half);
  const secondColumn = mainCapabilities.slice(half);

  // SAME LOGIC AS INDUSTRIES
 const goToCapability = (id) => {
  router.push(`/capabilities?main=${id}`);
};


  return (
    <footer className="relative bg-white text-[#0A175C] overflow-hidden border-t border-gray-200">
      {/* ===== Background Image ===== */}
      <div className="absolute bottom-10 right-0 w-[480px] opacity-20 pointer-events-none hidden sm:block">
        <Image
          src={BgImage}
          alt="Background Pattern"
          width={550}
          height={350}
          className="object-contain"
        />
      </div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 relative z-10 text-left">
        
        {/* Column 1 — Logo + Contact */}
        <div>
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="SureSupply Logo"
              width={150}
              height={60}
              className="w-36 h-auto"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              237, Second Floor, Copper Crown Building, Mahavir Circle, Phase-3
              <br />Dared, Jamnagar Gujarat (INDIA) - 361004
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="text-sm text-[#0A175C] leading-relaxed">
              +91 87809 52559 <br />
              <Link href="mailto:info@suresupply.in" className="hover:underline">
                info@suresupply.in
              </Link>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2 text-lg">
            <Link href="#" className="hover:text-[#F05023]"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-[#F05023]"><FaInstagram /></Link>
            <Link href="#" className="hover:text-[#F05023]"><FaTwitter /></Link>
            <Link href="#" className="hover:text-[#F05023]"><FaLinkedinIn /></Link>
            <Link href="#" className="hover:text-[#F05023]"><FaYoutube /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/aboutUs2" className="hover:underline">About Us</Link></li>
            <li><Link href="/career" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* Our Capabilities - Works like Industries */}
        <div className="hidden md:block -ml-25">
          <h3 className="font-bold text-lg mb-4">Our Capabilities</h3>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <div className="space-y-3">
              {firstColumn.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => goToCapability(cap.id)}
                  className="hover:underline block text-left cursor-pointer bg-none border-none"
                >
                  {cap.title}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {secondColumn.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => goToCapability(cap.id)}
                  className="hover:underline block text-left cursor-pointer bg-none border-none"
                >
                  {cap.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6 py-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-start md:items-center px-6 max-w-7xl mx-auto">
        <p>© 2025 SureSupply. All rights reserved.</p>

        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/cookies" className="hover:underline">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
