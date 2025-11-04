"use client";
import { motion } from "framer-motion";
import {
  FaTimesCircle,
  FaMoneyBillWave,
  FaTruckMoving,
  FaCogs,
  FaRegSadCry,
} from "react-icons/fa";

export default function ProblemSection() {
  const problems = [
    {
      icon: <FaTimesCircle className="text-red-500 text-3xl mb-3" />,
      text: "Unqualified leads that waste time and energy",
    },
    {
      icon: <FaMoneyBillWave className="text-yellow-500 text-3xl mb-3" />,
      text: "Unpredictable cash flow from inconsistent orders",
    },
    {
      icon: <FaTruckMoving className="text-blue-500 text-3xl mb-3" />,
      text: "Logistics & buyer follow-ups eating into production hours",
    },
    {
      icon: <FaCogs className="text-gray-600 text-3xl mb-3" />,
      text: "Commission-based platforms that take margins but not responsibility",
    },
    {
      icon: <FaRegSadCry className="text-purple-500 text-3xl mb-3" />,
      text: "Credibility gaps that make buyers hesitant to trust new suppliers",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white">
      {/* ===== Header ===== */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A175C] font-outfit mb-3">
          {`Why It’s Tough to Be a`}{" "}
          <span className="text-[#F05023]">Manufacturer</span> Today
        </h2>
        <p className="text-gray-700 text-lg sm:text-[18px] font-lato leading-relaxed">
          {`Running a manufacturing business is harder than ever. Even great
          manufacturers struggle with:`}
        </p>
      </div>

      {/* ===== Timeline ===== */}
      <div className="relative max-w-3xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#F05023]/40 rounded-full"></div>

        {/* Problem Cards */}
        <div className="flex flex-col gap-10">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center gap-4 ${
                index % 2 === 0 ? "flex-row-reverse text-right" : "text-left"
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#F05023] w-4 h-4 rounded-full shadow-md border-4 border-white"></div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-md p-5 w-[85%] sm:w-[45%] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center justify-center text-center">
                  {item.icon}
                  <p className="text-gray-700 text-[15px] sm:text-[17px] font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Closing Quote ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-12 text-center max-w-2xl mx-auto"
      >
        <p className="text-lg sm:text-xl italic text-[#0A175C] font-semibold bg-[#FFF5F3] p-5 rounded-2xl shadow-sm border-l-4 border-[#F05023]">
          {`“Manufacturers should be doing what they do best — manufacturing, not
          chasing business.”`}
        </p>
      </motion.div>
    </section>
  );
}
