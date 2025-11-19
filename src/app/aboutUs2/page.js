'use client';

import AboutHero from '../../components/aboutUs2/aboutHero';
import AboutUsSection from '@/components/aboutUs2/aboutUsSection';
import CEOMessage from '@/components/aboutUs2/ceoSection';
import Principles from '@/components/aboutUs2/principles'; 
import DigitalPlatform from '@/components/aboutUs2/digitalPlatform';
import BuyerSupplierSection from '@/components/aboutUs2/buyerSupplierSection';
import PeopleOnGroundSection from '@/components/aboutUs2/peopleOnGroundSec';
import Hiring from '@/components/aboutUs2/hiring';  


export default function aboutUs2() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <AboutUsSection />
      <CEOMessage />
      <Principles />
      <Hiring />
      <DigitalPlatform />
      <BuyerSupplierSection />  
      <PeopleOnGroundSection />
    </main>
  );
}
