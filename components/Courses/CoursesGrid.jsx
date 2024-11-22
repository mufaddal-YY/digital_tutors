import React from "react";
import CoursesCard from "./CoursesCard";

const CoursesGrid = ({ courseData }) => {
  return (
    <main className="bg-white ">
      <section className="container py-8">
        <article className="flex flex-wrap flex-row">
          {courseData.map((item) => (
            <div
              className="w-full mb-2 md:w-1/2 lg:w-1/3 lg:p-2"
              key={item.courseName}>
              <CoursesCard
                courseThumb={item?.courseThumb}
                slug={item?.slug}
                courseName={item?.courseName}
              />
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default CoursesGrid;
