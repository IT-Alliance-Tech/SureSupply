"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImg from "../../../public/dummy3.png";
import { User, Users, Settings, ClipboardCheck, Briefcase } from "lucide-react";

export default function PeopleOnGroundSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  // Field team cards with icon + title + single line description
  const fieldTeamFeatures = [
    {
      icon: ClipboardCheck,
      title: "Regular Supplier Visits",
      desc: "Oversees quality control and validates production setups."
    },
    {
      icon: User,
      title: "Verified Personnel",
      desc: "Ensure skilled team members are assigned to each task."
    },
    {
      icon: Settings,
      title: "Safety Protocols",
      desc: "Adherence to safety standards across all supplier sites."
    },
    {
      icon: Briefcase,
      title: "Performance Reporting",
      desc: "Regular reporting on supplier performance and compliance."
    },
  ];

  const teamMembers = [
    { icon: User, name: "Sales Team" },
    { icon: Settings, name: "Engineering Support Team" },
    { icon: ClipboardCheck, name: "Vendor Development Team" },
    { icon: Briefcase, name: "Project Management Team" },
    { icon: Users, name: "Quality Team" },
  ];

  return (
    <section className="w-full px-6 lg:px-20 py-20 bg-[#f5f8ff]">
      
      {/* ------------------ Heading Section ------------------ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h2 className="font-outfit text-4xl font-semibold text-[#0A175C] mb-2">
          People on Ground
        </h2>
        <div className="h-1 w-20 bg-[#F05023] rounded-full mx-auto"></div>
        <p className="font-lato text-gray-700 text-lg mt-2">
          Technology Meets Human Expertise
        </p>
      </motion.div>

      {/* ------------------ Content Section ------------------ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row items-center gap-10 mb-16"
      >
        {/* Left Side: Paragraphs */}
        <motion.div
          variants={fadeUp}
          className="lg:w-1/2 space-y-4 text-left"
        >
          <p className="font-lato text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
            Behind every successful order is a team that shows up on the ground, in the factory, and by your side.
            <br /><br />
            {`We believe manufacturing success comes from the right balance of digital precision and human experience.
            That’s why SureSupply combines platform intelligence with on-site presence to deliver confidence you can see, measure, and rely on.`}
            <br /><br />
            Our field teams visit supplier facilities, oversee quality control, validate production setups, and ensure that every commitment made digitally is fulfilled physically.
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          variants={fadeUp}
          className="lg:w-1/2 flex justify-center"
        >
          <Image
            src={placeholderImg}
            alt="People on ground illustration"
            width={300}
            height={300}
            className="object-contain drop-shadow-md"
          />
        </motion.div>
      </motion.div>

      {/* ------------------ Field Team Assurance ------------------ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16"
      >
        <motion.h3
          variants={fadeUp}
          className="font-outfit text-3xl font-semibold text-[#0A175C] text-center mb-8"
        >
          We ensure our field team has
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fieldTeamFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-white p-6 rounded-2xl shadow-md text-gray-700 flex flex-col items-center"
              >
                {/* Icon + Heading */}
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F0502320]">
                    <Icon size={24} strokeWidth={2.2} style={{ color: "#F05023" }} />
                  </div>
                  <h4 className="font-semibold text-[#F05023] text-lg ml-3">{item.title}</h4>
                </div>

                {/* One-line description */}
                {item.desc && <p className="text-sm text-center">{item.desc}</p>}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ------------------ Our Team ------------------ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3
          variants={fadeUp}
          className="font-outfit text-3xl font-semibold text-[#0A175C] text-center mb-8"
        >
          Our Team
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full bg-[#F0502320]">
                  <Icon size={32} strokeWidth={2.2} style={{ color: "#F05023" }} />
                </div>
                <p className="font-lato text-gray-700 font-semibold text-center">{member.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
