"use client";
import HeroSection from "../../components/supplierNetwork/heroSection";
import ProblemSection from "../../components/supplierNetwork/problemSection";
// import PromiseSection from "./PromiseSection";
// import ValueSection from "./ValueSection";
// import HowItWorksSection from "./HowItWorksSection";
// import ComparisonSection from "./ComparisonSection";
// import TestimonialsSection from "./TestimonialsSection";
// import CTASection from "./CTASection";

export default function SupplierNetworkPage() {
  return (
    <main className="font-lato text-[#0A175C]">
      <HeroSection />
      <ProblemSection />
    {/* <PromiseSection /> */}
      {/* <ValueSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection /> */}
    </main>
  );
}
