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
      <section className="mt-24">
        <HeroBanner homeData={homeData} />
        <CoursesSection coursesData={coursesData} />
        <WhyUsSection homeData={homeData} />
        {homeData.map((item, idx) => (
          <div key={idx}>
            <Testimonials
              homeData={homeData}
              testimonialsData={item.testimonials}
            />
          </div>
        ))}
        <Cta homeData={homeData} />
      </section>
    </main>
  );
}
