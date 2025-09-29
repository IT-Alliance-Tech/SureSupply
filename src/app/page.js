import HeroSection from "@/components/home/heroSection";
import HomeAbout from "@/components/home/homeAbout";
import WhySureSupply from "@/components/home/WhySureSupply";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <HomeAbout />
      <WhySureSupply />
    </main>
  );
}
