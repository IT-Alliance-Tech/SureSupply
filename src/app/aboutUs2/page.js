'use client';

import AboutHero from '../../components/aboutUs2/aboutHero';
import AboutUsSection from '@/components/aboutUs2/aboutUsSection';
import CEOMessage from '@/components/aboutUs2/ceoSection';
import Principles from '@/components/aboutUs2/principles';


export default function aboutUs2() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <AboutUsSection />
      <CEOMessage />
      <Principles />
    </main>
  );
}
