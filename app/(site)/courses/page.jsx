import Banner from "@/components/Courses/Banner";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import Cta from "@/components/Cta";
import { getCoursesData, getHomeData } from "@/sanity/fetchedData";

// export async function generateMetadata() {
//   try {
//     const courseData = await getCoursesData();

//     if (!courseData) {
//       // Handle the case when shoppingData is undefined
//       throw new Error("Failed to fetch courses data");
//     }
//     const data = courseData[0];

//     return {
//       title: data.metatitle,
//       description: data.metaDescription,
//       keywords: data.metaKeywords,
//     };
//   } catch (error) {
//     // Handle errors, log them, or return a default metadata in case of an error
//     console.error("Error generating metadata:", error.message);
//   }
// }

const CoursesPage = async () => {
  const homeData = await getHomeData();
  const courseData = await getCoursesData();

  return (
    <main>
      <section className="mt-[80px]">
        <Banner />
        <CoursesGrid courseData={courseData} />
        <Cta homeData={homeData} />
      </section>
    </main>
  );
};

export default CoursesPage;
