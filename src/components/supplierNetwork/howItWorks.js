"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const router = useRouter();

  const handleScrollToQuote = () => {
  router.replace("/?type=vendor", { scroll: false });

  window.scrollTo({ top: 0, behavior: "instant" });
  
  setTimeout(() => {
    const element = document.getElementById("quoteForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 200);
};


  const steps = [
    {
      step: "Step 1:",
      title: "We Find the Demand",
      desc: "SureSupply identifies market needs and allocates verified orders from OEMs.",
    },
    {
      step: "Step 2:",
      title: "You Manufacture",
      desc: "Focus on what you do best while we manage coordination and logistics.",
    },
    {
      step: "Step 3:",
      title: "Get Paid & Grow",
      desc: "On-time payments, continuous order flow, and transparent communication.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 bg-[#F9FAFB] relative overflow-hidden">
      
      {/* ===== Header ===== */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#0A175C] font-outfit mb-3"
        >
          How It Works
        </motion.h2>
        <p className="text-gray-600 text-lg font-lato">
          Getting started is simple.
        </p>
      </div>

      {/* ===== Steps with Flow Lines ===== */}
      <div className="flex flex-col gap-28 max-w-6xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Step Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 relative ${
                index % 2 === 1 ? "self-end" : "self-start"
              }`}
            >
              {/* Orange Accent Bar */}
              <div className="absolute top-0 left-0 h-full w-[6px] bg-[#F05023] rounded-l-2xl"></div>

              <h4 className="text-[#F05023] text-xl font-semibold mb-2 font-outfit">
                {step.step}
              </h4>
              <h3 className="text-[#0A175C] text-2xl font-semibold mb-3 font-outfit">
                {step.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-lato">
                {step.desc}
              </p>
            </motion.div>

            {/* ===== Flow Lines - hidden on mobile ===== */}
            {index === 0 && (
              <>
                <div className="hidden sm:block absolute top-full left-[25%] -translate-x-1/2 w-[3px] h-50 bg-[#F05023]"></div>
                <div className="hidden sm:flex absolute top-[calc(100%+195px)] left-[25%] items-center">
                  <div className="w-65 h-[3px] bg-[#F05023]"></div>
                  <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-[#F05023]"></div>
                </div>
              </>
            )}

            {index === 1 && (
              <>
                <div className="hidden sm:block absolute top-[calc(100%+10px)] left-[75%] -translate-x-1/2 w-[3px] h-[190px] bg-[#F05023]"></div>
                <div className="hidden sm:flex absolute top-[calc(100%+195px)] right-[25%] items-center flex-row-reverse">
                  <div className="w-[260px] h-[3px] bg-[#F05023]"></div>
                  <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-transparent border-r-[#F05023]"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ===== CTA Button ===== */}
      <div className="text-center mt-28">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(240, 80, 35, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={handleScrollToQuote}
          className="bg-[#F05023] text-white px-10 py-4 rounded-lg font-semibold shadow-md text-lg font-outfit transition-all cursor-pointer"
        >
          Join the Network Today
        </motion.button>
      </div>
    </section>
  );
}
