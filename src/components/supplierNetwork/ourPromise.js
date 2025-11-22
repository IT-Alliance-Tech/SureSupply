"use client";

import { motion } from "framer-motion";
import {
  FaHandshake,
  FaTruck,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaBullhorn,
} from "react-icons/fa";

export default function OurPromise() {
  const items = [
    {
      icon: <FaHandshake className="text-[#F05023] text-3xl mb-3" />,
      title: "Sales & Customer Management",
      desc: "We handle buyer communication, follow-ups, and order coordination while you focus on manufacturing.",
    },
    {
      icon: <FaTruck className="text-[#F05023] text-3xl mb-3" />,
      title: "Logistics & Delivery Coordination",
      desc: "From dispatch to doorstep, we manage the complete delivery and logistics process seamlessly.",
    },
    {
      icon: <FaMoneyBillWave className="text-[#F05023] text-3xl mb-3" />,
      title: "Payments & Collections",
      desc: "You never have to chase payments — we ensure secure and timely transactions every time.",
    },
    {
      icon: <FaClipboardCheck className="text-[#F05023] text-3xl mb-3" />,
      title: "Compliance & Documentation",
      desc: "We manage all paperwork, audits, and certifications, keeping your operations hassle-free.",
    },
    {
      icon: <FaBullhorn className="text-[#F05023] text-3xl mb-3" />,
      title: "Branding & Credibility",
      desc: "Gain visibility and trust with OEMs through SureSupply’s verified and reliable platform name.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 bg-[#FFF9F8] text-center">
      {/* ===== Main Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-[#0A175C] mb-4 font-outfit"
      >
        Our Promise:{" "}
        <span className="text-[#F05023]">You Focus on Production,</span> We Handle
        the Rest
      </motion.h2>

      {/* ===== Subline ===== */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto text-gray-700 mb-10 text-base sm:text-lg font-lato"
      >
        {`At SureSupply, we bring verified, production-ready orders directly to you — 
        no cold calls, no commission, no risk. You manufacture, we manage everything else.`}
      </motion.p>

      {/* ===== Subheading ===== */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#0A175C] mb-12 font-outfit">
        What We Handle for You
      </h3>

      {/* ===== Unified Grid on Mobile & Tablet — KEEP DESKTOP SAME ===== */}
      <div className="max-w-6xl mx-auto">
        
        {/* === Unified Grid for Mobile/Tablet (1 or 2 columns) === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 place-items-center">
  {items.map((item, index) => (
    <div
      key={index}
      className={
        index === 4
          ? "sm:col-span-2 flex justify-center"
          : ""
      }
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center
        border border-gray-200 hover:shadow-xl transition-all duration-300 w-full max-w-[350px]"
      >
        {item.icon}
        <h4 className="text-lg font-semibold text-[#0A175C] mb-2 font-outfit">
          {item.title}
        </h4>
        <p className="text-gray-700 text-sm font-lato">{item.desc}</p>
      </motion.div>
    </div>
  ))}
</div>

        {/* === ORIGINAL DESKTOP LAYOUT (unchanged) === */}
        <div className="hidden lg:block">
          {/* First Row (1–3) */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {items.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center 
                border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {item.icon}
                <h4 className="text-lg font-semibold text-[#0A175C] mb-2 font-outfit">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm font-lato">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row (4–5) */}
          <div className="flex justify-center gap-8">
            {items.slice(3).map((item, index) => (
              <motion.div
                key={index + 3}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md p-8 w-[30%] flex flex-col items-center text-center 
                border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {item.icon}
                <h4 className="text-lg font-semibold text-[#0A175C] mb-2 font-outfit">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm font-lato">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
