"use client";

import dynamic from "next/dynamic";

// Lazy load each section component
const OurStory = dynamic(() => import("@/components/aboutUs/ourStory"), { ssr: false });
const CorePrinciples = dynamic(() => import("@/components/aboutUs/core"), { ssr: false });
const OurTeam = dynamic(() => import("@/components/aboutUs/ourTeam"), { ssr: false });
const HiringSection = dynamic(() => import("@/components/aboutUs/hiringSection"), { ssr: false });
const HomePlatform = dynamic(() => import("@/components/aboutUs/homePlatform"), { ssr: false });
const PeopleOnGround = dynamic(() => import("@/components/aboutUs/ourPeople"), { ssr: false });

export default function AboutUsPage() {
  return (
    <main className="flex flex-col">
      <OurStory />
      <CorePrinciples />
      <OurTeam />
      <HiringSection />
      <HomePlatform />
      <PeopleOnGround />
    </main>
  );
}
