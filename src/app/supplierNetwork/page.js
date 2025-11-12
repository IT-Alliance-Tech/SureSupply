"use client";
import HeroSection from "../../components/supplierNetwork/heroSection";
import ProblemSection from "../../components/supplierNetwork/problemSection";
import Section6_WhyChooseSureSupply from "@/components/supplierNetwork/Section6_WhyChooseSureSupply";
import OurPromise from "@/components/supplierNetwork/ourPromise";
import ValueWeCreate from "@/components/supplierNetwork/valueWeCreate";
import HowItWorks from "@/components/supplierNetwork/howItWorks";
import Testimonals from "@/components/supplierNetwork/testimonals";
import CTASection from "@/components/supplierNetwork/ctaSection";


export default function SupplierNetworkPage() {
  return (
    <main className="font-lato text-[#0A175C]">
      <HeroSection />
      <ProblemSection />
      <OurPromise />  
      <ValueWeCreate />
      <HowItWorks />
      <Section6_WhyChooseSureSupply />
      <Testimonals />
      <CTASection />
    </main>
  );
}
