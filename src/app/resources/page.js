import ResourcesHeroSection from "@/components/resources/heroSection";
import OurBlogs from "@/components/resources/ourBlogs";
import CaseStudies from "@/components/resources/caseStudies";
import BuyersGuide from "@/components/resources/buyersGuide";
export default function Home() {
  return (
    <main className="flex flex-col">
      <ResourcesHeroSection />
      <OurBlogs />
      <CaseStudies />
      <BuyersGuide />
    </main>
  );
}
