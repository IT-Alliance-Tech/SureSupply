"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import digitalImg from "../../../public/dummy3.png";
import unique1 from "../../../public/dummy3.png";
import unique2 from "../../../public/dummy3.png";
import unique3 from "../../../public/dummy3.png";
import unique4 from "../../../public/dummy3.png";
import { CheckCircle, BarChart3, RefreshCcw, ShieldCheck } from "lucide-react";

export default function DigitalPlatform() {
  const features = [
    {
      title: "Data-Backed Supplier Network",
      desc: "Verified suppliers onboarded through a detailed capability, compliance, and quality evaluation.",
      img: unique1,
      icon: CheckCircle,
      reverse: false,
    },
    {
      title: "Smart RFQ Management",
      desc: "Dynamic routing to the most suitable suppliers based on capability match and performance history.",
      img: unique2,
      icon: BarChart3,
      reverse: true,
    },
    {
      title: "Transparent Order Lifecycle",
      desc: "Real-time dashboards showing production status, inspection updates, logistics, and payments.",
      img: unique3,
      icon: RefreshCcw,
      reverse: false,
    },
    {
      title: "Integrated QC & Compliance",
      desc: "Digital inspection records, certifications, and supplier scoring embedded in every workflow.",
      img: unique4,
      icon: ShieldCheck,
      reverse: true,
    },
  ];

  // Simple motion variants for smooth stagger animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  return (
    <section
      className="w-full px-6 lg:px-20 py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f5f8ff 100%)",
      }}
    >
      {/* ------------------ OUR DIGITAL PLATFORM ------------------ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="mb-10 text-center"
        >
          <h2
            className="text-4xl font-extrabold mb-2 tracking-tight"
            style={{ color: "#0A175C" }}
          >
            Our Digital Platform
          </h2>
          <div
            className="h-1 w-20 mx-auto rounded-full mb-3"
            style={{ backgroundColor: "#F05023" }}
          ></div>
          <p className="text-gray-700 font-medium text-lg">
            Where Technology Powers Manufacturing
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="flex flex-col lg:flex-row items-center gap-10 mb-6"
          >
            <div className="space-y-4 text-gray-700 leading-relaxed text-base lg:w-1/2">
              <p>
                <strong style={{ color: "#0A175C" }}>
                  Modern manufacturing demands speed, transparency, and
                  coordination
                </strong>{" "}
                — yet many supply chains still depend on fragmented communication,
                manual follow-ups, and limited visibility.
              </p>
              <p>
                <strong>{`SureSupply’s digital platform`}</strong> bridges this gap by
                bringing together{" "}
                <strong>buyers, suppliers, and internal teams</strong> into one
                connected ecosystem that transforms how manufacturing operates
                every day.
              </p>
            </div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="lg:w-1/2 flex justify-center"
            >
              <Image
                src={digitalImg}
                alt="Digital platform illustration"
                width={350}
                height={250}
                className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="space-y-3 text-gray-700 leading-relaxed text-base mt-2"
          >
            <p>
              {`In today’s world of`} <strong>global competition</strong> and{" "}
              <strong>shortened product cycles</strong>, manufacturers can’t rely
              on phone calls, scattered spreadsheets, or unverified suppliers.
              Our platform introduces{" "}
              <strong>data-driven decision-making</strong>,{" "}
              <strong>process standardization</strong>, and{" "}
              <strong>end-to-end traceability</strong>, turning traditional
              workflows into <strong>real-time, insight-driven operations</strong>.
            </p>
            <p>
              By combining <strong>digital visibility</strong> with{" "}
              <strong>human accountability</strong>, SureSupply empowers every
              stakeholder in the supply chain to operate with{" "}
              <strong>clarity, confidence, and trust</strong>.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ------------------ WHAT MAKES SURESUPPLY UNIQUE ------------------ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-10"
      >
        <motion.div variants={fadeUp} custom={0.2} className="mb-14 text-center">
          <h2
            className="text-4xl font-extrabold mb-2"
            style={{ color: "#0A175C" }}
          >
            What Makes SureSupply Unique
          </h2>
          <div
            className="h-1 w-20 mx-auto rounded-full mb-4"
            style={{ backgroundColor: "#F05023" }}
          ></div>
          <p className="text-gray-700 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
            {`Unlike generic B2B marketplaces, SureSupply is a managed
            manufacturing ecosystem. Our platform doesn’t just connect buyers
            and suppliers — it takes ownership of outcomes. Every RFQ, order, and
            inspection passes through structured digital workflows backed by
            on-ground teams, ensuring quality, compliance, and timely delivery
            every time.`}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-20">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={0.2 * index}
                className={`flex flex-col lg:flex-row items-center gap-10 ${
                  item.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* TEXT SECTION */}
                <motion.div
                  variants={fadeUp}
                  className="lg:w-1/2 space-y-3 text-gray-700 leading-relaxed px-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-full shadow-md"
                      style={{ backgroundColor: "#F0502320" }}
                    >
                      <Icon
                        size={26}
                        strokeWidth={2.2}
                        style={{ color: "#F05023" }}
                      />
                    </div>
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: "#0A175C" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed">{item.desc}</p>
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                  variants={fadeUp}
                  className="lg:w-1/2 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={230}
                    className="object-contain w-[320px] h-auto drop-shadow-md"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
