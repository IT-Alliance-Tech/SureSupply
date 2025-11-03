"use client";

import Image from "next/image";
import Link from "next/link";
import { TextField, Button } from "@mui/material";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxo-7k0lGIYan7qMXFu4n6xG16Kglc89o5C27qoFINZUaxwBnQ4JYm12S58BOtr2O0h/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      if (result.result === "success") {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send data. Please check your internet or script permissions.");
    }
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
            <Link href="/" className="hover:text-[#F05023] transition-colors">
              Home
            </Link>
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
              <h5 className="text-[#F05023] uppercase tracking-wide font-semibold">
                Contact Us
              </h5>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Get in Touch <span className="text-[#F05023]">With Us</span>
              </h2>
              <p className="text-gray-700 mt-4">
                Reach out for any inquiries, support, or to discuss how we can
                meet your industrial needs.
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
                    237, Second Floor, Copper Crown Building, Mahavir Circle,
                    Phase-3 Dared, Jamnagar Gujarat (INDIA)-361004
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  name="firstName"
                  label="First Name"
                  fullWidth
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <TextField
                name="email"
                label="E-mail"
                fullWidth
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <TextField
                name="message"
                label="Message"
                fullWidth
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#F05023",
                  "&:hover": { backgroundColor: "#d9451f" },
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
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
