import React from "react";
import { getAboutData, getHomeData } from "@/sanity/fetchedData";
import Cta from "@/components/Cta";
import PageBanner from "@/components/About/PageBanner";
import AboutDigital from "@/components/About/AboutDigital";
import VisionMission from "@/components/About/VisionMission";

export async function generateMetadata() {
  try {
    const aboutData = await getAboutData();

    if (!aboutData) {
      // Handle the case when shoppingData is undefined
      throw new Error("Failed to fetch about data");
    }
    const data = aboutData[0];

    return {
      title: data.metatitle,
      description: data.metaDescription,
      keywords: data.metaKeywords,
    };
  } catch (error) {
    // Handle errors, log them, or return a default metadata in case of an error
    console.error("Error generating metadata:", error.message);
  }
}

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
