"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Replace with your actual images
import img1 from "../../../public/dummy3.png";
import img2 from "../../../public/dummy3.png";
import img3 from "../../../public/dummy3.png";
import img4 from "../../../public/dummy3.png";
import img5 from "../../../public/dummy3.png";
import img6 from "../../../public/dummy3.png";

export default function ValueWeCreate() {
  const values = [
    {
      num: "01",
      title: "No Leads — Only Orders",
      desc: "We filter and verify every RFQ before assigning it to you. No wasted time on “maybes.”",
      image: img1,
    },
    {
      num: "02",
      title: "Zero Fees, Zero Stress",
      desc: "Unlike lead marketplaces, we charge no commission or subscription. You earn what you produce.",
      image: img2,
    },
    {
      num: "03",
      title: "Guaranteed Payments",
      desc: "Every order comes with assured payment protection — on time, every time.",
      image: img3,
    },
    {
      num: "04",
      title: "Work Under a Trusted Brand",
      desc: "Your products go to OEMs under the SureSupply name — backed by our reputation for quality and compliance.",
      image: img4,
    },
    {
      num: "05",
      title: "Long-Term Partnerships",
      desc: "We don’t just allocate orders — we build ongoing relationships that ensure consistent business and predictable income.",
      image: img5,
    },
    {
      num: "06",
      title: "Data-Driven Growth",
      desc: "We use 100+ data points — from quality score to delivery trends — to help you improve, benchmark, and win more work.",
      image: img6,
    },
  ];

  const words = useMemo(() => ["Reliable", "Transparent", "Accountable"], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words]);

  const wordVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section className="py-20 px-6 sm:px-12 bg-white">
      {/* ===== Header ===== */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-outfit mb-4"
        >
          <span className="text-[#0A175C]">Value We Create for</span>{" "}
          <span className="text-[#F05023]">Suppliers</span>
        </motion.h2>

        <div className="flex justify-center items-center text-xl sm:text-2xl font-semibold font-outfit text-gray-700">
          <span>{`Your Growth Partner —`}&nbsp;</span>
          <span
            className="text-[#F05023] inline-block w-[180px] text-left relative"
            style={{ height: "1.5em" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                variants={wordVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-0 top-0"
              >
                {words[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>

      {/* ===== Zigzag Layout ===== */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col items-center justify-center gap-10 w-full
              lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}
              text-center lg:text-left
            `}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-[85%] max-h-[280px] object-contain rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center">
              <h4 className="text-[#F05023] text-2xl font-bold mb-2 font-outfit">
                {item.num}
              </h4>
              <h3 className="text-[#0A175C] text-2xl sm:text-3xl font-semibold mb-4 font-outfit">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-lato">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
