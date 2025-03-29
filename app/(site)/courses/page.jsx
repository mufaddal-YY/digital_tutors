import Banner from "@/components/Courses/Banner";
import CoursesGrid from "@/components/Courses/CoursesGrid";
import Cta from "@/components/Cta";
import { getCoursesData, getHomeData } from "@/sanity/fetchedData";

const CoursesPage = async () => {
  const homeData = await getHomeData();
  const courseData = await getCoursesData();

  const sortedCourses = courseData.sort((a, b) => a.courseNumber - b.courseNumber);

  return (
    <main>
      <section className="mt-[80px]">
        <Banner />
        <CoursesGrid courseData={sortedCourses} />
        <Cta homeData={homeData} />
      </section>
    </main>
  );
};

export default CoursesPage;
