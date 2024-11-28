import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";

const CourseDescription = ({ coursesDetail }) => {
  return (
    <main className="my-2">
      <section className="">
        <article className="border rounded-xl p-2 lg:p-6">
          <h2 className="text-3xl font-medium mb-4">Description</h2>
          <div className="text-sm text-gray-700">
            <PortableTextComponent content={coursesDetail?.courseDescription} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CourseDescription;
