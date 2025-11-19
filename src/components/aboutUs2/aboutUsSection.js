'use client';

import Image from 'next/image';
import heroImg from '../../../public/dummy3.png';
import { Outfit, Lato } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function AboutUsSection() {
  const handleScrollToQuote = () => {
    const el = document.getElementById('quoteForm');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Image: Top on mobile, right on desktop */}
        <div className="flex-1 flex justify-center md:justify-end w-full order-1 md:order-2">
          <div className="relative w-[250px] sm:w-[300px] md:w-[300px] lg:w-[350px] h-auto">
            <Image
              src={heroImg}
              alt="Global supply transformation"
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1
            className={`font-bold uppercase text-[#0A175C] leading-[110%] mb-4 text-[clamp(24px,4vw,36px)] ${outfit.className}`}
            style={{ letterSpacing: '-0.5px' }}
          >
            OUR STORY OF GLOBAL <br /> SUPPLY <br /> TRANSFORMATION
          </h1>

          <p
            className={`mb-6 max-w-full text-[clamp(14px,2.2vw,16px)] leading-[1.6] ${lato.className}`}
            style={{ color: '#0A175C' }}
          >
            {`SureSupply is more than a digital sourcing platform — it’s your dedicated manufacturing partner, delivering precision-engineered components through India’s top suppliers. Founded by IIT and IIM alumni, we combine deep engineering expertise with business insight to simplify complex manufacturing.`}

            <br /><br />

            {`Our human-first approach blends digital precision with real-world expertise. We offer DFM support, technical consulting, and complete transparency, ensuring every project meets tight tolerances, complex geometries, and mission-critical timelines with reliability and excellence.`}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <button
              onClick={handleScrollToQuote}
              className="bg-[#F05023] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#d9451f] transition"
            >
              Get Instant Quote
            </button>
            <button
              onClick={handleScrollToQuote}
              className="border-2 border-[#0D1C45] text-[#F05023] font-semibold py-2 px-6 rounded-lg hover:bg-[#F05023] hover:text-white transition"
            >
              Become a Partner
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
