import { getCoursesData, getHomeData } from "@/sanity/fetchedData";
import HeroBanner from "@/components/Home/HeroBanner";
import CoursesSection from "@/components/Home/CoursesSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";

export async function generateMetadata() {
  try {
    const homeData = await getHomeData();

    if (!homeData) {
      // Handle the case when shoppingData is undefined
      throw new Error("Failed to fetch homes data");
    }
    const data = homeData[0];

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

export default async function Home() {
  const homeData = await getHomeData();
  const coursesData = await getCoursesData();

  const sortedCourses = coursesData.sort(
    (a, b) => a.courseNumber - b.courseNumber
  );

  return (
    <main>
      <section className="mt-24">
        <HeroBanner homeData={homeData} />
        <CoursesSection coursesData={sortedCourses} />
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
