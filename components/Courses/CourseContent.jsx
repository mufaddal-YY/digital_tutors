import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";

const CourseContent = ({ coursesDetail }) => {
  return (
    <main className="my-2">
      <section className="">
        <article className="border rounded-xl p-2 lg:p-6">
          <h2 className="text-3xl font-medium mb-4">Course Content</h2>
          <div>
            <PortableTextComponent content={coursesDetail?.courseContent} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CourseContent;
