'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroImg from '../../../public/dummy3.png';
import { Button } from '@mui/material';
import { Outfit, Lato } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function AboutUsSection() {
  const router = useRouter();

  const handleScrollToQuote = () => {
    router.push('/#quoteForm');
  };

  return (
    <section className="w-full h-screen bg-[#F9FAFB] flex items-center justify-center px-6 md:px-12">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className={`font-bold uppercase text-[#0A175C] leading-[110%] mb-6 text-[clamp(28px,5vw,48px)] ${outfit.className}`}
            style={{ letterSpacing: '-0.5%' }}
          >
            OUR STORY OF GLOBAL <br /> SUPPLY <br /> TRANSFORMATION
          </h1>

          <p
            className={`mb-10 max-w-full text-[clamp(16px,2.5vw,18px)] leading-[160%] ${lato.className}`}
            style={{ color: '#0A175C' }}
          >
            {`Founded by IIT and IIM alumni, SureSupply is redefining how products are made by removing manufacturing barriers. 
            We connect creators with India’s most capable suppliers to deliver precision-engineered components reliably and transparently. 
            Backed by engineering expertise, we take full ownership of every RFQ — matching the right supplier, process, and ensuring top-quality outcomes. 
            With a human-first approach, we collaborate on design, technical consulting, and production, empowering innovation without limits.`}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Button
              variant="contained"
              onClick={handleScrollToQuote}
              sx={{
                backgroundColor: '#F05023',
                textTransform: 'none',
                fontWeight: '600',
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: '#F05023' },
              }}
            >
              Get Instant Quote
            </Button>

            <Button
              variant="outlined"
              onClick={handleScrollToQuote}
              sx={{
                borderColor: '#0D1C45',
                color: '#F05023',
                textTransform: 'none',
                fontWeight: '600',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#F05023',
                  color: '#fff',
                  borderColor: '#F05023',
                },
              }}
            >
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-center items-center w-full">
          <div className="relative w-full max-w-[350px] h-[350px] md:max-w-[400px] md:h-[400px] lg:max-w-[450px] lg:h-[450px]">
            <Image
              src={heroImg}
              alt="Global supply transformation"
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
