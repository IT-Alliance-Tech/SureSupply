"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import bannerImg from "../../../public/bannerC.png";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (No backend connected)");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* ===== TOP BANNER SECTION ===== */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Contact Banner"
          fill
          className="object-cover object-center absolute inset-0 -z-10"
          priority
        />
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold tracking-wide mb-4">CONTACT US</h1>
          <div className="text-[16px] font-medium flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-[#F05023] transition-colors">Home</Link>
            <span className="text-[#F05023]">•</span>
            <span className="text-[#F05023]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-6 rounded-2xl p-6">
            <div>
              <h5 className="text-[#F05023] uppercase tracking-wide font-semibold">Contact Us</h5>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Get in Touch <span className="text-[#F05023]">With Us</span>
              </h2>
              <p className="text-gray-700 mt-4">
                Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#F0502320] rounded-full">
                  <Phone className="text-[#F05023]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Contact</p>
                  <p className="text-gray-600">+91 8780952559</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#F0502320] rounded-full">
                  <Mail className="text-[#F05023]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">E-mail</p>
                  <p className="text-gray-600">info@suresupply.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#F0502320] rounded-full">
                  <MapPin className="text-[#F05023]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Our Address</p>
                  <p className="text-gray-600">
                    237, Second Floor, Copper Crown Building, Mahavir Circle, Phase-3 Dared, Jamnagar Gujarat (INDIA)-361004
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact <span className="text-[#F05023]">Me</span>
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-gray-800 font-semibold mb-1">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F05023]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-gray-800 font-semibold mb-1">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F05023]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 font-semibold mb-1">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F05023]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-800 font-semibold mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F05023]"
                />
              </div>

              <div className="flex flex-col">
  <label htmlFor="message" className="text-gray-800 font-semibold mb-1">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows={4}
    value={formData.message}
    onChange={handleChange}
    required
    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F05023] resize-none text-gray-900 bg-white"
    placeholder="Type your message here..."
  ></textarea>
</div>


              <button
                type="submit"
                className="bg-[#F05023] hover:bg-[#d9451f] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d70.0645!3d22.4701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c3d0f1234567%3A0xabcdef123456789!2sCopper%20Crown%20Building%2C%20Jamnagar!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>
    </div>
  );
}
