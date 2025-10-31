"use client";

import dynamic from "next/dynamic";

// ✅ Common Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-[80vh] bg-white">
    <div className="w-12 h-12 border-4 border-[#F05023] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ✅ Dynamic Imports with Common Loader
const HeroSection = dynamic(() => import("../components/home/heroSection"), {
  ssr: false,
  loading: LoadingSpinner,
});
const ManufacturingProcesses = dynamic(
  () => import("../components/home/ManufacturingProcesses"),
  { loading: LoadingSpinner }
);
const HomeAbout = dynamic(() => import("../components/home/homeAbout"), {
  loading: LoadingSpinner,
});
const WhyChooseUs = dynamic(() => import("../components/home/test2"), {
  loading: LoadingSpinner,
});
const Roadmap = dynamic(() => import("@/components/home/roadmap"), {
  loading: LoadingSpinner,
});
const ProcurementSection = dynamic(
  () => import("@/components/home/procurementSection"),
  { loading: LoadingSpinner }
);
const QuoteForm = dynamic(() => import("@/components/home/quote"), {
  loading: LoadingSpinner,
});

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
