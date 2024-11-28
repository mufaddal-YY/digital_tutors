import React from "react";
import { getAboutData, getHomeData } from "@/sanity/fetchedData";
import Cta from "@/components/Cta";
import PageBanner from "@/components/About/PageBanner";
import AboutDigital from "@/components/About/AboutDigital";
import VisionMission from "@/components/About/VisionMission";
export default async function AboutPage() {
  const homeData = await getHomeData();
  const aboutData = await getAboutData();

  return (
    <main>
      <section className="mt-[80px]">
        <PageBanner />
        <AboutDigital aboutData={aboutData} />
        <VisionMission aboutData={aboutData} />
        <Cta homeData={homeData} />
      </section>
    </main>
  );
}
