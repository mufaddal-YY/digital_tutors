import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CourseBanner = ({ courseName, slug, subHeadline }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px] text-center flex flex-col gap-2">
        <h1 className="text-white text-4xl font-semibold">{courseName}</h1>
        <h4 className="text-white text-lg font-regular">{subHeadline}</h4>
        <div className="flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/courses/${slug}`}>
                  {courseName}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
    </main>
  );
};

export default CourseBanner;
