import HeroSection from "../components/home/heroSection";
import HomeAbout from "../components/home/homeAbout";
import WhySureSupply from "../components/home/WhySureSupply";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import QuoteForm from "../components/home/quote";
import ManufacturingProcesses from "../components/home/ManufacturingProcesses";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <ManufacturingProcesses />
      <HomeAbout />
      <WhySureSupply />
      <QuoteForm />
      <Footer />
    </main>
  );
}
