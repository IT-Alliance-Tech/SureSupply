'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Outfit, Lato } from 'next/font/google';
import { FaCheckCircle, FaEye, FaLightbulb, FaHandsHelping, FaStar, FaUser } from 'react-icons/fa';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function Principles() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = document.getElementById('principles-section')?.getBoundingClientRect().top;
      if (top && top < window.innerHeight - 100) setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <FaCheckCircle size={28} className="text-[#F05023]" />,
      title: 'Integrity in Every Interaction',
      points: [
        'We believe trust is the foundation of all great partnerships.',
        'Every commitment is honored with honesty and accountability.',
      ],
    },
    {
      icon: <FaEye size={28} className="text-[#F05023]" />,
      title: 'Transparency by Design',
      points: [
        'From sourcing to delivery, we ensure complete visibility across processes.',
        'Our open, data-driven approach builds lasting confidence.',
      ],
    },
    {
      icon: <FaLightbulb size={28} className="text-[#F05023]" />,
      title: 'Innovation with Purpose',
      points: [
        'We challenge conventional manufacturing barriers.',
        'Technology, design thinking, and process optimization drive our innovation.',
      ],
    },
    {
      icon: <FaHandsHelping size={28} className="text-[#F05023]" />,
      title: 'Partnership Over Transaction',
      points: [
        'We build long-term collaborations, not just vendor relationships.',
        'Success is shared and growth is mutual.',
      ],
    },
    {
      icon: <FaStar size={28} className="text-[#F05023]" />,
      title: 'Excellence in Execution',
      points: [
        'Quality is non-negotiable.',
        'Every project is handled with precision, discipline, and attention to detail.',
      ],
    },
    {
      icon: <FaUser size={28} className="text-[#F05023]" />,
      title: 'Human-First Approach',
      points: [
        'Behind every great product are great people.',
        'We value empathy, respect, and teamwork to complement technological efficiency.',
      ],
    },
  ];

  return (
    <section
      id="principles-section"
      className="w-full py-20 px-6 md:px-12 bg-[#F9FAFB] flex flex-col items-center gap-16"
    >
      {/* Section Heading */}
      <motion.h1
        className={`text-3xl md:text-4xl font-bold text-[#0A175C] mb-8 ${outfit.className} text-center`}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Core Principles of SureSupply
      </motion.h1>

      {/* Vision & Mission */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Vision */}
        <motion.div
          className="flex-1 bg-white rounded-xl p-8 shadow-md border-t-4 border-[#F05023] cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold text-[#0A175C] mb-4 ${outfit.className}`}>
            Our Vision
          </h2>
          <p className={`text-[clamp(14px,1.8vw,16px)] text-[#0A175C] ${lato.className}`}>
            Enabling creators to build products without manufacturing barriers.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="flex-1 bg-white rounded-xl p-8 shadow-md border-t-4 border-[#F05023] cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold text-[#0A175C] mb-4 ${outfit.className}`}>
            Our Mission
          </h2>
          <p className={`text-[clamp(14px,1.8vw,16px)] text-[#0A175C] ${lato.className}`}>
            To build SureSupply as a reliable, transparent manufacturing ecosystem, driven by process-level data visibility, total ownership with supplier empowerment.
          </p>
        </motion.div>
      </div>

      {/* Our Values Heading */}
      <motion.h2
        className={`text-3xl md:text-4xl font-bold text-[#0A175C] mb-8 ${outfit.className} text-center`}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Our Values
      </motion.h2>

      {/* Values Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((val, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            {/* Icon */}
            {val.icon}
            {/* Title */}
            <h3 className={`text-xl font-bold text-[#0A175C] ${outfit.className} text-center`}>
              {val.title}
            </h3>
            {/* Bullet Points Left-aligned */}
            <ul className={`text-[clamp(14px,1.7vw,15px)] text-[#0A175C] list-disc list-inside ${lato.className} text-left mt-2`}>
              {val.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
