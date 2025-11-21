'use client';

import Image from 'next/image';
import ceoImg from '../../../public/dummy3.png';
import bgImg from '../../../public/about/aboutbg3.png';
import { Outfit, Lato } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function CEOMessageVertical() {
  return (
    <section className="w-full relative flex justify-center px-4 md:px-8 lg:px-12 py-16">
      
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Optional Blurred Circles */}
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-[#F05023]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0A175C]/10 rounded-full blur-3xl z-0"></div>

      {/* Main CEO Content */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 text-center relative z-10">
        {/* CEO Image */}
        <div className="relative w-[220px] h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <Image
            src={ceoImg}
            alt="CEO"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* CEO Name */}
        <h3 className={`font-bold text-[#F05023] text-lg md:text-xl ${outfit.className}`}>
          Jane Doe
        </h3>

        {/* CEO Designation */}
        <p className="text-sm md:text-base text-[#0A175C] font-medium">
          CEO, SureSupply
        </p>

        {/* CEO Message - Wider lines */}
        <p className={`text-[clamp(15px,2.2vw,17px)] leading-[160%] text-[#0A175C] ${lato.className} max-w-[95%] md:max-w-[1000px]`}>
          At the helm of SureSupply is our CEO, an IIM graduate and former Product Manager at ICICI Bank, who brings a strong blend of strategic, financial, and operational expertise. With rich experience in product management, sourcing, and supply chain strategy, he has worked closely with businesses across sectors to streamline procurement and strengthen supplier ecosystems.
        </p>

        <p className={`text-[clamp(15px,2.2vw,17px)] leading-[160%] text-[#0A175C] mt-6 ${lato.className} max-w-[95%] md:max-w-[1000px]`}>
          His journey from leading innovative financial solutions at ICICI Bank to driving manufacturing transformation at SureSupply reflects his passion for building reliable, transparent, and scalable business networks. Under his leadership, SureSupply continues to evolve as a trusted partner for creators — combining engineering precision with business intelligence to deliver excellence without barriers.
        </p>
      </div>
    </section>
  );
}
