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

  const [errors, setErrors] = useState({});

  // STRICT LIVE VALIDATION
  const strictValidate = (name, value) => {
    let newValue = value;

    // NAME → letters + space
    if (name === "name") {
      newValue = newValue.replace(/[^A-Za-z ]/g, "");
      newValue = newValue.replace(/\s+/g, " ");
      newValue = newValue.trimStart();
    }

    // EMAIL → no spaces
    if (name === "email") {
      newValue = newValue.replace(/\s/g, "");
    }

    // MOBILE → only digits, max 10
    if (name === "mobile") {
      newValue = newValue.replace(/[^0-9]/g, "");
      if (newValue.length > 10) newValue = newValue.slice(0, 10);
    }

    // DOMAIN → letters & spaces only
    if (name === "domain") {
      newValue = newValue.replace(/[^A-Za-z ]/g, "");
      newValue = newValue.trimStart();
    }

    // DEGREE → letters + numbers allowed
    if (name === "degree") {
      newValue = newValue.replace(/[^A-Za-z0-9 ]/g, "");
      newValue = newValue.trimStart();
    }

    return newValue;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // CV UPLOAD VALIDATION
    if (name === "cv") {
      const file = files[0];
      if (file) {
        const allowed = ["pdf", "doc", "docx"];
        const ext = file.name.split(".").pop().toLowerCase();

        if (!allowed.includes(ext)) {
          setErrors((prev) => ({
            ...prev,
            cv: "Invalid file format. Only PDF, DOC, or DOCX allowed.",
          }));
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          setErrors((prev) => ({
            ...prev,
            cv: "File size must be less than 5 MB.",
          }));
          return;
        }

        setFormData((prev) => ({ ...prev, cv: file }));
        setErrors((prev) => ({ ...prev, cv: "" }));
      }
      return;
    }

    const cleanValue = strictValidate(name, value);

    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateBeforeSubmit = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (formData.mobile.length !== 10)
      newErrors.mobile = "Mobile number must be exactly 10 digits.";

    if (!formData.domain.trim()) newErrors.domain = "Domain is required.";

    if (!formData.degree.trim()) newErrors.degree = "Degree is required.";

    if (!formData.cv) newErrors.cv = "Please upload your CV.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateBeforeSubmit()) return;

    console.log("SUBMITTED DATA:", formData);
    alert("Application submitted successfully!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      domain: "",
      degree: "",
      cv: null,
    });
    setErrors({});
  };

  return (
    <main className="w-full font-lato">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
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

      {/* CONTENT + FORM */}
      <section className="w-full py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side Content (restored full content) */}
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

          {/* FORM */}
          <div className="bg-white rounded-3xl shadow-lg border-l-4 border-[#F05023] p-10">
            <h3 className="text-2xl font-outfit font-bold text-[#0A175C] mb-8 text-center">
              Apply Now
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
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
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* EMAIL */}
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
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* MOBILE */}
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
                {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
              </div>

              {/* DOMAIN */}
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
                {errors.domain && <p className="text-red-600 text-sm mt-1">{errors.domain}</p>}
              </div>

              {/* DEGREE */}
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
                {errors.degree && <p className="text-red-600 text-sm mt-1">{errors.degree}</p>}
              </div>

              {/* CV UPLOAD */}
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
                    />
                  </label>
                  <span className="text-gray-700 text-sm">
                    {formData.cv ? formData.cv.name : "No file chosen"}
                  </span>
                </div>
                {errors.cv && <p className="text-red-600 text-sm mt-1">{errors.cv}</p>}
              </div>

              {/* SUBMIT */}
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
