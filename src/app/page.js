import HeroSection from "../components/home/heroSection";
import HomeAbout from "../components/home/homeAbout";
import WhySureSupply from "../components/home/WhySureSupply";
import QuoteForm from "../components/home/quote";
import ManufacturingProcesses from "../components/home/ManufacturingProcesses";
import HowSureSupplyWorks from "@/components/home/howSureSupplyWorks";
import Roadmap from "@/components/home/roadmap";
import ProcurementSection from "@/components/home/procurementSection";

export default function Home() {
  return (
    <main className="flex flex-col">
       
      <HeroSection />
      <ManufacturingProcesses />
      <HomeAbout />
      <WhySureSupply />
      <QuoteForm />
     <Roadmap />
     <ProcurementSection />
      {/* <HowSureSupplyWorks /> */}
    </main>
  );
}
