import Banner from "@/components/Courses/Banner";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import Cta from "@/components/Cta";
import { getCoursesData, getHomeData } from "@/sanity/fetchedData";

const CoursesPage = async () => {
  const homeData = await getHomeData();
  const courseData = await getCoursesData();

  return (
    <main>
      <section className="mt-14">
        <Banner />
        <CoursesGrid courseData={courseData} />
        <Cta homeData={homeData} />
      </section>
    </main>
  );
};

export default CoursesPage;
