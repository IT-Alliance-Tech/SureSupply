"use client";

import { useState } from "react";

export default function ContactForms() {
  const [userType, setUserType] = useState("customer"); // customer or vendor
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
    file: null,
    agreeComm: false,
    agreeData: false,
  });
  const [isHuman, setIsHuman] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, userType });

    // Simulate success message
    setSubmitted(true);

    // Clear form data
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      details: "",
      file: null,
      agreeComm: false,
      agreeData: false,
    });
    setIsHuman(false);

    setTimeout(() => setSubmitted(false), 4000);
  };

  const isFormValid = () => {
    const requiredFields =
      userType === "customer"
        ? ["fullName", "email", "phone", "company", "service", "details"]
        : ["vendorName", "contactName", "email", "phone", "productService", "certifications", "file"];
    return (
      Object.keys(formData)
        .filter((key) => requiredFields.includes(key))
        .every((key) => formData[key]?.toString().trim() !== "") &&
      formData.agreeComm &&
      formData.agreeData &&
      isHuman
    );
  };

  return (
    <section
      id="contactForms"
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

        {/* Type Toggle */}
        <div className="mb-6 flex space-x-4">
          <label className="flex items-center space-x-2 text-[#0a1a4f]">
            <input
              type="radio"
              name="userType"
              value="customer"
              checked={userType === "customer"}
              onChange={(e) => setUserType(e.target.value)}
              className="w-4 h-4"
            />
            <span>Customer</span>
          </label>
          <label className="flex items-center space-x-2 text-[#0a1a4f]">
            <input
              type="radio"
              name="userType"
              value="vendor"
              checked={userType === "vendor"}
              onChange={(e) => setUserType(e.target.value)}
              className="w-4 h-4"
            />
            <span>Vendor</span>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-[Outfit]">
          {/* CUSTOMER FORM */}
          {userType === "customer" && (
            <>
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
                    required
                  />
                </div>

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
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                   {` Phone Number*`}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                    required
                  />
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
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                  {`Select Service of Interest*`}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  required
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
              </div>

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
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                 {` Upload Reference File (if any)`}
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
              </div>
            </>
          )}

          {/* VENDOR FORM */}
          {userType === "vendor" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                   {` Vendor / Company Name*`}
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName || ""}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                    {`Contact Person Name*`}
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName || ""}
                    onChange={handleChange}
                    placeholder="Enter contact name"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                    required
                  />
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
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                   {` Phone Number*`}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                  {`Product / Service You Provide*`}
                </label>
                <textarea
                  name="productService"
                  rows="4"
                  value={formData.productService || ""}
                  onChange={handleChange}
                  placeholder="List your key products, capabilities, or services."
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1a4f] mb-1">
                 {` Certifications / Approvals`}
                </label>
                <input
                  type="text"
                  name="certifications"
                  value={formData.certifications || ""}
                  onChange={handleChange}
                  placeholder="e.g., ISO 9001, IATF 16949"
                  className="w-full border rounded-md px-4 py-2 bg-gray-50 text-black focus:ring-2 focus:ring-orange-500"
                />
              </div>

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
                      required
                    />
                  </label>
                  <span className="text-sm text-[#0a1a4f] break-words">
                    {formData.file ? formData.file.name : "No file chosen"}
                  </span>
                </div>
              </div>
            </>
          )}

          {/* CONSENTS */}
          <div className="space-y-3">
            <label className="flex items-start space-x-2 text-[#0a1a4f]">
              <input
                type="checkbox"
                name="agreeComm"
                checked={formData.agreeComm}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I agree to receive communications.*</span>
            </label>
            <label className="flex items-start space-x-2 text-[#0a1a4f]">
              <input
                type="checkbox"
                name="agreeData"
                checked={formData.agreeData}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I agree to allow storing and processing my data.*</span>
            </label>
          </div>

          {/* CAPTCHA */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="captchaCheckbox"
              checked={isHuman}
              onChange={(e) => setIsHuman(e.target.checked)}
              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="captchaCheckbox" className="text-[#0a1a4f]">
             {` I'm not a robot`}
            </label>
          </div>

          {/* SUBMIT */}
          <div>
            <button
              type="submit"
              disabled={!isFormValid()}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {userType === "customer" ? "Send Inquiry" : "Submit Vendor Application"}
            </button>
          </div>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="text-green-600 font-semibold mt-4">
              {userType === "customer"
                ? "✅ Thank you! Our team will review your requirements and contact you shortly."
                : "✅ Thank you for showing interest in partnering with us. Our procurement team will connect with you soon."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
