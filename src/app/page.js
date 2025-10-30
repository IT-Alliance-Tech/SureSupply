"use client";

import dynamic from "next/dynamic";


const HeroSection = dynamic(() => import("../components/home/heroSection"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[80vh] bg-black">
      <p className="text-gray-500 text-[20px] animate-pulse">
        Loading Hero Section...
      </p>
    </div>
  ),
});
const ManufacturingProcesses = dynamic(() => import("../components/home/ManufacturingProcesses"));
const HomeAbout = dynamic(() => import("../components/home/homeAbout"));
const WhyChooseUs = dynamic(() => import("../components/home/test2"));
const Roadmap = dynamic(() => import("@/components/home/roadmap"));
const ProcurementSection = dynamic(() => import("@/components/home/procurementSection"));
const QuoteForm = dynamic(() => import("@/components/home/quote"));

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ManufacturingProcesses />
      <HomeAbout />
      <WhyChooseUs />
      <Roadmap />
      <ProcurementSection />
      <QuoteForm />
    </main>
  );
}
