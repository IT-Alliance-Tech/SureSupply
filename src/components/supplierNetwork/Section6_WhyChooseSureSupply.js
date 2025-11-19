"use client";

import { motion } from "framer-motion";
import {
  FaHandshake,
  FaMoneyBillWave,
  FaShieldAlt,
  FaTruck,
  FaUserTie,
  FaDatabase,
  FaChartLine,
  FaExclamationTriangle,
  FaPercentage,
  FaHourglassHalf,
  FaCogs,
  FaUserSlash,
  FaEyeSlash,
  FaExchangeAlt,
} from "react-icons/fa";

export default function Section6_WhyChooseSureSupply() {
  const comparisons = [
    {
      iconSure: <FaHandshake className="text-[#F05023] text-xl" />,
      sure: "Verified OEM orders",
      iconTrad: <FaExclamationTriangle className="text-[#F05023] text-xl" />,
      trad: "Random unverified leads",
    },
    {
      iconSure: <FaMoneyBillWave className="text-[#F05023] text-xl" />,
      sure: "Zero commission, zero subscription",
      iconTrad: <FaPercentage className="text-[#F05023] text-xl" />,
      trad: "5–15% commission + hidden costs",
    },
    {
      iconSure: <FaShieldAlt className="text-[#F05023] text-xl" />,
      sure: "Guaranteed payments",
      iconTrad: <FaHourglassHalf className="text-[#F05023] text-xl" />,
      trad: "Delayed or uncertain payments",
    },
    {
      iconSure: <FaTruck className="text-[#F05023] text-xl" />,
      sure: "End-to-end logistics & compliance",
      iconTrad: <FaCogs className="text-[#F05023] text-xl" />,
      trad: "You manage everything yourself",
    },
    {
      iconSure: <FaUserTie className="text-[#F05023] text-xl" />,
      sure: "Branded credibility with OEMs",
      iconTrad: <FaUserSlash className="text-[#F05023] text-xl" />,
      trad: "Credibility issues with small traders",
    },
    {
      iconSure: <FaDatabase className="text-[#F05023] text-xl" />,
      sure: "Centralized digital dashboard",
      iconTrad: <FaEyeSlash className="text-[#F05023] text-xl" />,
      trad: "No data or visibility",
    },
    {
      iconSure: <FaChartLine className="text-[#F05023] text-xl" />,
      sure: "Long-term partnership",
      iconTrad: <FaExchangeAlt className="text-[#F05023] text-xl" />,
      trad: "Transactional, one-time jobs",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 bg-white">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A175C] font-outfit mb-3">
          Why Choose <span className="text-[#F05023]">SureSupply</span> Over
          {` Traditional Platforms?`}
        </h2>
      </div>

      {/* ===== Responsive Table Wrapper ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[700px] max-w-6xl mx-auto text-left border border-gray-200 rounded-2xl overflow-hidden shadow-md bg-white border-collapse">
          <thead className="bg-[#0A175C] text-white font-outfit">
            <tr>
              <th className="py-4 px-6 text-center w-[6%]"></th>
              <th className="py-4 px-6 text-center w-[44%] font-semibold text-sm sm:text-base">
                SureSupply
              </th>
              <th className="w-[2px] bg-[#F05023]/40 p-0"></th>
              <th className="py-4 px-6 text-center w-[6%]"></th>
              <th className="py-4 px-6 text-center w-[44%] font-semibold text-sm sm:text-base">
                {`Traditional Platforms / Brokers`}
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-800 font-lato">
            {comparisons.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-t border-gray-200"
              >
                {/* SureSupply Column */}
                <td className="py-5 px-6 text-center">{item.iconSure}</td>
                <td className="py-5 px-8 text-center font-medium text-[#0A175C] transition-all duration-300 hover:bg-[#FFF5F3] hover:shadow-sm hover:rounded-lg">
                  {item.sure}
                </td>

                {/* Divider */}
                <td className="w-[2px] bg-[#F05023]/30"></td>

                {/* Traditional Column */}
                <td className="py-5 px-6 text-center">{item.iconTrad}</td>
                <td className="py-5 px-8 text-center text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:shadow-sm hover:rounded-lg">
                  {item.trad}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
