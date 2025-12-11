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

  const [errors, setErrors] = useState({});

  const handleStrictInput = (name, value) => {
    let newValue = value;

    // STRICT VALIDATIONS
    if (name === "firstName" || name === "lastName") {
      newValue = newValue.replace(/[^A-Za-z]/g, ""); // only letters
    }

    if (name === "phone") {
      newValue = newValue.replace(/[^0-9]/g, ""); // only digits
    }

    if (name === "email") {
      newValue = newValue.replace(/\s/g, ""); // no spaces allowed
    }

    if (name === "message") {
      if (newValue.startsWith(" ")) newValue = newValue.trimStart(); // no leading space
    }

    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Form submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col">

      {/* ===== TOP BANNER SECTION ===== */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
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

          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE FORM */}
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {`Let’s Build `}<span className="text-[#F05023]">Something Together</span>
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* FIRST + LAST NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex flex-col">
                    <label className="text-gray-800 font-semibold mb-1">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleStrictInput("firstName", e.target.value)
                      }
                      maxLength={30}
                      className="border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#F05023]"
                      required
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-800 font-semibold mb-1">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleStrictInput("lastName", e.target.value)
                      }
                      maxLength={30}
                      className="border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#F05023]"
                      required
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex flex-col">
                  <label className="text-gray-800 font-semibold mb-1">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleStrictInput("email", e.target.value)
                    }
                    className="border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#F05023]"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div className="flex flex-col">
                  <label className="text-gray-800 font-semibold mb-1">Phone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      handleStrictInput("phone", e.target.value)
                    }
                    maxLength={10}
                    className="border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#F05023]"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col">
                  <label className="text-gray-800 font-semibold mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleStrictInput("message", e.target.value)
                    }
                    className="border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#F05023] resize-none bg-white"
                    required
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-[#F05023] text-white py-3 rounded-lg hover:bg-[#D9451F] font-semibold"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}
