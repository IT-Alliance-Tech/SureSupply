"use client";

import { useState, useEffect } from "react";   // ⬅️ UPDATED (added useEffect)
import { useSearchParams } from "next/navigation"; // ⬅️ ADDED
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QuoteForm() {

  const searchParams = useSearchParams(); // ⬅️ ADDED

  const [userType, setUserType] = useState("customer");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
    file: null,
    vendorName: "",
    contactName: "",
    productService: "",
    certifications: "",
    agreeComm: false,
    agreeData: false,
  });
  const [isHuman, setIsHuman] = useState(false);
  const [errors, setErrors] = useState({});

  // ⬇️ URL Based Auto Switching (NEW LOGIC)
  useEffect(() => {
    const type = searchParams.get("type");

    if (type === "vendor" || type === "customer") {
      setUserType(type);
    }
  }, [searchParams]); // ⬅️ REQUIRED FOR BUILD

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (userType === "customer") {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
      if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid phone number.";
      if (!formData.company.trim()) newErrors.company = "Company name is required.";
      if (!formData.service.trim()) newErrors.service = "Please select a service.";
      if (!formData.details.trim()) newErrors.details = "Please describe your project.";
      if (!formData.file) newErrors.file = "Please upload a file (drawing, RFQ, etc.).";
    } else {
      if (!formData.vendorName.trim()) newErrors.vendorName = "Vendor name is required.";
      if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required.";
      if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
      if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid phone number.";
      if (!formData.productService.trim()) newErrors.productService = "Please describe your product/service.";
      if (!formData.file) newErrors.file = "Company profile file is required.";
    }

    if (!formData.agreeComm) newErrors.agreeComm = "Please agree to receive communications.";
    if (!formData.agreeData) newErrors.agreeData = "Please agree to data processing.";
    if (!isHuman) newErrors.isHuman = "Please confirm you are not a robot.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Submitted:", { ...formData, userType });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      details: "",
      file: null,
      vendorName: "",
      contactName: "",
      productService: "",
      certifications: "",
      agreeComm: false,
      agreeData: false,
    });
    setIsHuman(false);
    setErrors({});

    toast.success(
      userType === "customer"
        ? "Thank you! Our team will contact you shortly."
        : "Vendor application submitted successfully. We'll get in touch soon!",
      {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        theme: "colored",
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      }
    );
  };

  return (
    <section
      id="quoteForm"
      className="bg-orange-600 py-12 px-4 sm:px-6 md:px-12 flex justify-center font-[Outfit]"
    >
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-[#0a1a4f] mb-2 font-[Lato]">
          {userType === "customer" ? "Connect With Our Team" : "Vendor Application Form"}
        </h2>
        <p className="text-[#0a1a4f] mb-6 font-[Outfit]">
          {userType === "customer"
            ? "Fill in the details below and our team will get back to you."
            : "Provide your company details and our procurement team will contact you."}
        </p>

        {/* ===== Toggle between forms ===== */}
        <div className="mb-6 flex space-x-4 cursor-pointer">
          <label className="flex items-center space-x-2 text-[#0a1a4f]">
            <input
              type="radio"
              name="userType"
              value="customer"
              checked={userType === "customer"}
              onChange={(e) => setUserType(e.target.value)}
              className="w-5 h-5 text-[#F05023] focus:ring-[#F05023] cursor-pointer accent-[#F05023]"
            />
            <span>Customer</span>
          </label>
          <label className="flex items-center space-x-2 text-[#0a1a4f] cursor-pointer">
            <input
              type="radio"
              name="userType"
              value="vendor"
              checked={userType === "vendor"}
              onChange={(e) => setUserType(e.target.value)}
              className="w-5 h-5 text-[#F05023] focus:ring-[#F05023] cursor-pointer accent-[#F05023]"
            />
            <span>Vendor</span>
          </label>
        </div>

        {/* ===== Form ===== */}
        <form onSubmit={handleSubmit} className="space-y-6 font-[Outfit]">
          {/* -------- CUSTOMER FORM -------- */}
          {userType === "customer" && (
            <>
              {/* Full name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Full Name*`}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                   {` Email Address*`}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Phone Number*`}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Company / Organization*`}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.company && <p className="text-red-600 text-sm">{errors.company}</p>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1 cursor-pointer">
                  {`Select Service of Interest*`}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500 cursor-pointer"
                >
                  <option value="">Select Service</option>
                  <option value="Casting">Casting</option>
                  <option value="Forging">Forging</option>
                  <option value="Fabrication">Fabrication</option>
                  <option value="Plastic Molding">Plastic Molding</option>
                  <option value="Machining">Machining</option>
                  <option value="Rapid Prototyping">Rapid Prototyping</option>
                  <option value="Others">Others</option>
                </select>
                {errors.service && <p className="text-red-600 text-sm cursor-pointer">{errors.service}</p>}
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                 {` Project Details / Requirements*`}
                </label>
                <textarea
                  name="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project, quantity, or specifications."
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                />
                {errors.details && <p className="text-red-600 text-sm">{errors.details}</p>}
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                  {`Upload File (Drawing / RFQ / Requirement)*`} 
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <label className="bg-gray-200 hover:bg-gray-300 cursor-pointer px-4 py-2 rounded-md text-[#0a1a4f] font-medium w-fit">
                    Choose File
                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      onChange={handleChange}
                    />
                  </label>
                  <span className="text-sm text-[#0a1a4f] break-words">
                    {formData.file ? formData.file.name : "No file chosen"}
                  </span>
                </div>
                {errors.file && <p className="text-red-600 text-sm">{errors.file}</p>}
              </div>
            </>
          )}

          {/* -------- VENDOR FORM -------- */}
          {userType === "vendor" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Vendor / Company Name*`}
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.vendorName && <p className="text-red-600 text-sm">{errors.vendorName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Contact Person Name*`}
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Enter contact name"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.contactName && <p className="text-red-600 text-sm">{errors.contactName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Email Address*`}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Phone Number*`}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  />
                  {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                  {`Product / Service You Provide*`}
                </label>
                <textarea
                  name="productService"
                  rows="4"
                  value={formData.productService}
                  onChange={handleChange}
                  placeholder="List your key products, capabilities, or services."
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                />
                {errors.productService && (
                  <p className="text-red-600 text-sm">{errors.productService}</p>
                )}
              </div>

              {/* Vendor File Upload */}
              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                 {` Upload Company Profile / Brochure*`}
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <label className="bg-gray-200 hover:bg-gray-300 cursor-pointer px-4 py-2 rounded-md text-[#0a1a4f] font-medium w-fit">
                    Choose File
                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      onChange={handleChange}
                    />
                  </label>
                  <span className="text-sm text-[#0a1a4f] break-words">
                    {formData.file ? formData.file.name : "No file chosen"}
                  </span>
                </div>
                {errors.file && <p className="text-red-600 text-sm">{errors.file}</p>}
              </div>
            </>
          )}

          {/* Agreements */}
          <div className="space-y-3">
            <label className="flex items-start space-x-2 text-[#0a1a4f] cursor-pointer">
              <input
                type="checkbox"
                name="agreeComm"
                checked={formData.agreeComm}
                onChange={handleChange}
                className="w-5 h-5 rounded-md accent-[#F05023] cursor-pointer focus:ring-[#F05023]"
              />
              <span>I agree to receive communications.*</span>
            </label>
            {errors.agreeComm && <p className="text-red-600 text-sm">{errors.agreeComm}</p>}

            <label className="flex items-start space-x-2 text-[#0a1a4f] cursor-pointer">
              <input 
                type="checkbox"
                name="agreeData"
                checked={formData.agreeData}
                onChange={handleChange}
                className="w-5 h-5 rounded-md accent-[#F05023] cursor-pointer focus:ring-[#F05023]"
              />
              <span>I agree to allow storing and processing my data.*</span>
            </label>
            {errors.agreeData && <p className="text-red-600 text-sm">{errors.agreeData}</p>}
          </div>

          {/* CAPTCHA */}
          <div className="flex items-center space-x-2 mb-4 ">
            <input
              type="checkbox"
              id="captchaCheckbox"
              checked={isHuman}
              onChange={(e) => setIsHuman(e.target.checked)}
               className="w-5 h-5 rounded-md accent-[#F05023] cursor-pointer focus:ring-[#F05023]"
            />
            <label htmlFor="captchaCheckbox" className="text-[#0a1a4f] cursor-pointer select-none">
              {`I'm not a robot`}
            </label>
          </div>
          {errors.isHuman && <p className="text-red-600 text-sm mb-2">{errors.isHuman}</p>}

          <div>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {userType === "customer" ? "Send Inquiry" : "Submit Vendor Application"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
}

