"use client";

import Image from "next/image";
import Link from "next/link";
import { TextField, Button } from "@mui/material";
import { Phone, Mail, MapPin } from "lucide-react";
import bannerImg from "../../../public/bannerC.png"; // top banner image

export default function ContactUsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (send data to API or display message)
    alert("Form submitted successfully!");
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
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            CONTACT US
          </h1>
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

          {/* ===== Left Section (Contact Info) ===== */}
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
                  <p className="text-gray-600"> +91 8780952559</p>
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
                    237, Second Floor, Copper crown building, mahavir circle, phase-3 dared, Jamnagar Gujarat (INDIA)-361004
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right Section (Form) ===== */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact <span className="text-[#F05023]">Me</span>
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <TextField
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    required
                    InputLabelProps={{ shrink: true }}
                    sx={{ '& .MuiInputLabel-root': { marginBottom: '4px' } }}
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    required
                    InputLabelProps={{ shrink: true }}
                    sx={{ '& .MuiInputLabel-root': { marginBottom: '4px' } }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <TextField
                  label="E-mail"
                  fullWidth
                  variant="outlined"
                  type="email"
                  required
                  InputLabelProps={{ shrink: true }}
                  sx={{ '& .MuiInputLabel-root': { marginBottom: '4px' } }}
                />
              </div>

              <div className="space-y-2">
                <TextField
                  label="Phone Number"
                  fullWidth
                  variant="outlined"
                  type="tel"
                  required
                  InputLabelProps={{ shrink: true }}
                  sx={{ '& .MuiInputLabel-root': { marginBottom: '4px' } }}
                />
              </div>

              <div className="space-y-2">
                <TextField
                  label="Message"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  InputLabelProps={{ shrink: true }}
                  sx={{ '& .MuiInputLabel-root': { marginBottom: '4px' } }}
                />
              </div>

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.806256356404!2d77.5945625!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b6f8d5f1%3A0x6c1d93a4fefb9f25!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696512345678!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </section>
    </div>
  );
}
