'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  FileText,
  CheckCircle,
  BarChart3,
  Truck,
  UserCheck,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function BuyerSupplierPortal() {
  const [role, setRole] = useState("buyer");

  const portals = {
    supplier: {
      heading: "Supplier Portal - Empowering Partners for Growth",
      subline:
        "SureSupply’s Supplier Portal enables manufacturers to showcase their capabilities, receive matched RFQs, and grow with consistent, qualified business.",
      title: "Key Benefits for Suppliers:",
      cards: [
        { icon: ClipboardList, text: "Streamlined access to verified buyer requirements." },
        { icon: FileText, text: "Faster RFQ response and quotation management." },
        { icon: Target, text: "Predictable business flow from trusted buyers." },
        { icon: ShieldCheck, text: "Simplified documentation and compliance tracking." },
        { icon: BarChart3, text: "Visibility into performance metrics and quality scores." },
      ],
      footer:
        "We empower our suppliers to not just participate but excel through structured data, training support, and opportunities for continuous improvement.",
    },

    buyer: {
      heading: "Buyer Portal - Simplifying Procurement Like Never Before",
      subline:
        "The Buyer Portal brings all your sourcing and manufacturing requirements into one smart workspace. From raising RFQs to tracking order progress and verifying inspections, buyers experience total transparency and control.",
      title: "Key Benefits for Buyers:",
      cards: [
        { icon: ClipboardList, text: "Single dashboard for all RFQs, orders, and deliveries." },
        { icon: CheckCircle, text: "Data-driven supplier selection and risk reduction." },
        { icon: FileText, text: "Verified quality with digital inspection records." },
        { icon: UserCheck, text: "Real-time communication with dedicated SureSupply teams." },
        { icon: Truck, text: "One-stop visibility from PO to dispatch — no follow-ups required." },
      ],
      footer:
        "With SureSupply, procurement shifts from a reactive task to a strategic, insight-driven process saving time, improving reliability, and driving higher efficiency.",
    },
  };

  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const current = portals[role];

  return (
    <section
      className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-white to-[#f5f8ff] overflow-hidden"
      id="portal"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-10 md:p-16">

        {/* Top row: role switch + heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            {["buyer", "supplier"].map((type) => (
              <button
                key={type}
                onClick={() => setRole(type)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  role === type
                    ? "bg-[#F05023] text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type === "buyer" ? "Buyer" : "Supplier"}
              </button>
            ))}
          </div>

          <motion.div key={role} className="flex flex-col items-center max-w-full mt-4">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A175C] text-center leading-tight break-words"
            >
              {current.heading}
            </motion.h3>
          </motion.div>
        </div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            {/* Subline */}
            <motion.p
              variants={fade}
              custom={0.2}
              className="font-lato text-gray-700 text-base sm:text-lg md:text-xl font-medium mb-8 leading-relaxed text-center max-w-3xl mx-auto"
            >
              {current.subline}
            </motion.p>

            {/* Title */}
            <motion.h4
              variants={fade}
              custom={0.3}
              className="font-outfit text-xl sm:text-2xl font-bold mb-8 text-[#0A175C] text-center"
            >
              {current.title}
            </motion.h4>

            {/* 🌟 NEW RESPONSIVE LAYOUT 🌟 */}
            <motion.div variants={fade} custom={0.4}>

              {/* TOP ROW → 1 2 3 (desktop), stacked on mobile */}
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                {current.cards.slice(0, 3).map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                      className="bg-[#fdfdff] border border-gray-100 rounded-2xl p-6 text-center shadow-sm w-full md:w-72"
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: "#F0502320" }}
                      >
                        <Icon size={22} strokeWidth={2.2} style={{ color: "#F05023" }} />
                      </div>
                      <p className="font-lato text-gray-700 font-medium leading-relaxed">
                        {card.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM ROW → 4 5 (desktop centered), stacked on mobile */}
              <div className="flex flex-col md:flex-row justify-center gap-8">
                {current.cards.slice(3, 5).map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                      className="bg-[#fdfdff] border border-gray-100 rounded-2xl p-6 text-center shadow-sm w-full md:w-72"
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: "#F0502320" }}
                      >
                        <Icon size={22} strokeWidth={2.2} style={{ color: "#F05023" }} />
                      </div>
                      <p className="font-lato text-gray-700 font-medium leading-relaxed">
                        {card.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>

            {/* Footer */}
            <motion.p
              variants={fade}
              custom={0.5}
              className="font-lato text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-center mt-12"
            >
              {current.footer}
            </motion.p>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
