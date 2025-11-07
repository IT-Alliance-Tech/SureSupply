'use client';

import Image from 'next/image';
import ceoImg from '../../../public/dummy3.png'; // CEO image
import bgImg from '../../../public/about/aboutbg3.png'; // Background image
import { Outfit, Lato } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function CEOMessageVertical() {
  return (
    <section className="w-full relative flex justify-center px-6 md:px-12 py-12">
      
      {/* Background Image with White Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70"></div> {/* White overlay */}
      </div>

      {/* Optional Blurred Circles for extra depth */}
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-[#F05023]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0A175C]/10 rounded-full blur-3xl z-0"></div>

      {/* Main CEO Content */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-4 text-center relative z-10">
        {/* CEO Image with Hover Effect */}
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
          {`Jane Doe`}
        </h3>

        {/* CEO Designation */}
        <p className="text-sm md:text-base text-[#0A175C] font-medium mb-2">
          {`CEO, SureSupply`}
        </p>

        {/* CEO Message */}
        <p className={`text-[clamp(15px,2.2vw,17px)] leading-[150%] text-[#0A175C] ${lato.className}`}>
          {`"At SureSupply, our mission has always been to remove barriers in manufacturing and enable creators to innovate freely. 
          We believe in precision, transparency, and collaboration at every step, and our team is committed to delivering exceptional outcomes for every project."`}
        </p>
      </div>
    </section>
  );
}
