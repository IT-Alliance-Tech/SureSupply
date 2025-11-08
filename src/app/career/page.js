"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../public/bannerC.png";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    domain: "",
    degree: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted!");
  };

  return (
    <main className="w-full font-lato">
      {/* ------------------ Hero Section ------------------ */}
      <section className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Careers Banner"
          fill
          className="object-cover object-center absolute inset-0 -z-10"
          priority
        />
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold tracking-wide mb-2">
            Build Your Career with SureSupply
          </h1>
          <p className="text-lg font-medium mb-4 max-w-2xl mx-auto">
            Join us to shape the future of Indian manufacturing and make an impact that matters.
          </p>
          <div className="text-[16px] font-medium flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-[#F05023] transition-colors">
              Home
            </Link>
            <span className="text-[#F05023]">•</span>
            <span className="text-[#F05023]">Careers</span>
          </div>
        </div>
      </section>

      {/* ------------------ Content + Form Section ------------------ */}
      <section className="w-full py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-[#0A175C]">
              Build the Future of Manufacturing with Us
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We’re building more than a company — we’re shaping the future of Indian manufacturing.
              At SureSupply, you’ll work at the intersection of technology, operations, and engineering,
              solving real-world problems that drive industrial growth.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We value ownership, innovation, and collaboration. If you’re driven by impact,
              love solving complex challenges, and want to grow with a fast-evolving ecosystem — we’d love to hear from you.
            </p>
            <p className="text-[#F05023] text-lg md:text-xl font-semibold">
              → Join Us. Let’s simplify manufacturing, together.
            </p>
          </div>

          {/* Right Side Modern Form */}
          <div className="bg-white rounded-3xl shadow-lg border-l-4 border-[#F05023] p-10">
            <h3 className="text-2xl font-outfit font-bold text-[#0A175C] mb-8 text-center">
              Apply Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-gray-900 focus:outline-none focus:border-[#F05023]"
                  required
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all cursor-text">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-gray-900 focus:outline-none focus:border-[#F05023]"
                  required
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all cursor-text">
                  Mail ID
                </label>
              </div>

              {/* Mobile */}
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-gray-900 focus:outline-none focus:border-[#F05023]"
                  required
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all cursor-text">
                  Mobile Number
                </label>
              </div>

              {/* Domain */}
              <div className="relative">
                <input
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-gray-900 focus:outline-none focus:border-[#F05023]"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all cursor-text">
                  Domain
                </label>
              </div>

              {/* Degree */}
              <div className="relative">
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-gray-900 focus:outline-none focus:border-[#F05023]"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all cursor-text">
                  Highest Educational Degree
                </label>
              </div>

              {/* CV Upload - Button style */}
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Attach CV</label>
                <div className="flex items-center gap-3">
                  <label className="bg-[#F05023] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#d8431f] transition-colors font-medium">
                    Choose File
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="hidden"
                      required
                    />
                  </label>
                  <span className="text-gray-700 text-sm">
                    {formData.cv ? formData.cv.name : "No file chosen"}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#F05023] text-white py-3 rounded-xl hover:bg-[#d8431f] transition-colors font-semibold cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
