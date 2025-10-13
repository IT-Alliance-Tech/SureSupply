import ResourcesHeroSection from "@/components/resources/heroSection";
import OurBlogs from "@/components/resources/ourBlogs";
import CaseStudies from "@/components/resources/caseStudies";
import BuyersGuide from "@/components/resources/buyersGuide";
import SupplierHandbook from "@/components/resources/supplierHandbook";
import NewsEvents from "@/components/resources/newsEvents";
export default function Home() {
  return (
    <main className="flex flex-col">
      <ResourcesHeroSection />
      <OurBlogs />
      <CaseStudies />
      <BuyersGuide />
      <SupplierHandbook />
      <NewsEvents />
    </main>
  );
}
