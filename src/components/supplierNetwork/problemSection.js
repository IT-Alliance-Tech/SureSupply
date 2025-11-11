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
      icon: <FaTimesCircle className="text-red-500 text-4xl mb-3" />,
      text: "Unqualified leads that waste time and energy",
    },
    {
      icon: <FaMoneyBillWave className="text-yellow-500 text-4xl mb-3" />,
      text: "Unpredictable cash flow from inconsistent orders",
    },
    {
      icon: <FaTruckMoving className="text-blue-500 text-4xl mb-3" />,
      text: "Logistics & buyer follow-ups eating into production hours",
    },
    {
      icon: <FaCogs className="text-gray-600 text-4xl mb-3" />,
      text: "Commission-based platforms that take margins but not responsibility",
    },
    {
      icon: <FaRegSadCry className="text-purple-500 text-4xl mb-3" />,
      text: "Credibility gaps that make buyers hesitant to trust new suppliers",
    },
  ];

  return (
    <section className="relative py-16 px-6 sm:px-12 bg-gradient-to-b from-gray-50 to-white">
      {/* ===== Header ===== */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A175C] font-outfit mb-3">
          {`Why It’s Tough to Be a`}{" "}
          <span className="text-[#F05023]">Manufacturer</span> Today
        </h2>
        <p className="text-gray-700 text-lg sm:text-[18px] font-lato leading-relaxed">
          {`Running a manufacturing business is harder than ever. Even great
          manufacturers struggle with:`}
        </p>
      </div>

      {/* ===== Cards Layout ===== */}
      <div className="flex flex-col items-center gap-10">
        {/* Top Row (1, 2, 3) */}
        <div className="flex flex-wrap justify-center gap-8">
          {problems.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-[270px] text-center"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <p className="text-gray-700 text-[15px] sm:text-[17px] font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row (4, 5) */}
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {problems.slice(3, 5).map((item, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-[270px] text-center"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <p className="text-gray-700 text-[15px] sm:text-[17px] font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Closing Quote ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="mt-16 text-center max-w-2xl mx-auto"
      >
        <p className="text-lg sm:text-xl italic text-[#0A175C] font-semibold bg-[#FFF5F3] p-6 rounded-2xl shadow-sm border-l-4 border-[#F05023]">
          {`“Manufacturers should be doing what they do best — manufacturing, not
          chasing business.”`}
        </p>
      </motion.div>
    </section>
  );
}
