import { getCoursesDetailData, getHomeData } from "@/sanity/fetchedData";
import CourseBanner from "@/components/Courses/CourseBanner";
import CourseContent from "@/components/Courses/CourseContent";
import WhatYouLearn from "@/components/Courses/WhatYouLearn";
import CourseDescription from "@/components/Courses/CourseDescription";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import CourseSidebar from "@/components/Courses/CourseSidebar";

export async function generateMetadata({ params }) {
  const { slug } = await params; // Await params here
  const coursesDetail = await getCoursesDetailData(slug);

  return {
    title: coursesDetail?.metatitle,
    description: coursesDetail?.metaDescription,
    keywords: coursesDetail?.metaKeywords,
  };
}

const CourseDetailPage = async ({ params }) => {
  const { slug } = await params; // Await params here
  const coursesDetail = await getCoursesDetailData(slug);
  const homeData = await getHomeData();

  return (
    <main>
      <section className="mt-[80px]">
        <CourseBanner
          courseName={coursesDetail.courseName}
          slug={coursesDetail.slug}
          subHeadline={coursesDetail.subHeadline}
        />
      </section>
      <section className="py-3 container">
        <article className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-8/12 py-6">
            <article className="py-3">
              <WhatYouLearn coursesDetail={coursesDetail} />
              <CourseContent coursesDetail={coursesDetail} />
              <CourseDescription coursesDetail={coursesDetail} />
              <Testimonials
                homeData={homeData}
                testimonialsData={coursesDetail?.testimonials}
              />
            </article>
          </div>
          <div
            className="w-full lg:w-4/12 py-6 order-first lg:order-last"
            id="enquiry">
            <div className="sticky-enquiry-form">
              <CourseSidebar coursesDetail={coursesDetail} />
            </div>
          </div>
        </article>
      </section>
      {/* <section>
        <Cta homeData={homeData} />
      </section> */}
    </main>
  );
};

export default CourseDetailPage;
