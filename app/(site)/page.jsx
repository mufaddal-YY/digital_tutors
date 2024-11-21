import { getCoursesData, getHomeData } from "@/sanity/fetchedData";
import HeroBanner from "@/components/Home/HeroBanner";
import CoursesSection from "@/components/Home/CoursesSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";

export default async function Home() {

  const homeData = await getHomeData();
  const coursesData = await getCoursesData();

  return (
    <main>
      <section className="p-2 mt-14">
        <HeroBanner homeData={homeData} />
        <CoursesSection coursesData={coursesData} />
        <WhyUsSection homeData={homeData} />
        <Testimonials homeData={homeData} />
        <Cta homeData={homeData} />
      </section>
    </main>
  );
}
