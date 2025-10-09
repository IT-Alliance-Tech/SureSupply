import Ourstory from "../../components/aboutUs/ourStory";
import CorePrinciples from "@/components/aboutUs/core";
import OurTeam from "../../components/aboutUs/ourTeam";
import HomeJourney from "@/components/aboutUs/homeJourney";
import HomePlatform from "@/components/aboutUs/homePlatform";
import PeopleOnGround from "@/components/aboutUs/ourPeople";
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Added a dummy comment */}
      <Ourstory />
      <CorePrinciples />
      <OurTeam />
      <HomeJourney />
      <HomePlatform />
      <PeopleOnGround />
    </main>
  );
}
