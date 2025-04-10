"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { motion as m, useInView } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { CgPlayButtonO } from "react-icons/cg";
import { MdOutlineCloudDownload } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { IoInfiniteSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "../ui/button";
import Link from "next/link";

const CoursesSection = ({ coursesData }) => {
  const usps = [
    {
      id: "1",
      title: coursesData?.onDemandVideo,
      icon: <CgPlayButtonO />,
    },
    {
      id: "2",
      title: coursesData?.devices,
      icon: <MdOutlineCloudDownload />,
    },
    {
      id: "3",
      title: coursesData?.lifetimeAccess,
      icon: <GrCertificate />,
    },
    {
      id: "4",
      title: coursesData?.certificate,
      icon: <IoInfiniteSharp />,
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <main className="bg-white items-center py-[50px]" id="courses">
      <section className="container items-center">
        <article className="flex flex-col lg:flex-row justify-between items-center">
          <div className="">
            <h2 className="text-xl lg:text-3xl py-3 text-left border-b border-[#d5aaff]">
              Start with Our Most Popular Courses
            </h2>
            <p className="py-2">
              Browse our range of courses that have empowered thousands of
              learners to build new skills, gain confidence, and move closer to
              their dreams.
            </p>
          </div>
          <div className="hidden md:flex lg:flex justify-between text-2xl mb-2 ">
            <div
              className="slick-arrow text-[#1A0034] px-2"
              onClick={() => sliderRef?.current?.slickPrev()}>
              <HiMiniArrowLongLeft />
            </div>
            <div
              className="slick-arrow text-[#1A0034] px-2"
              onClick={() => sliderRef?.current?.slickNext()}>
              <HiOutlineArrowLongRight />
            </div>
          </div>
        </article>
      </section>

      <m.section
        ref={sectionRef}
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="container mt-8 flex items-center">
        <div className="w-full">
          <Slider
            ref={sliderRef}
            {...settings}
            className="flex flex-row justify-between items-center">
            {coursesData.map((item, idx) => (
              <article className="p-2" key={idx}>
                <div className="bg-white border border-[#1A0034] rounded-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row items-stretch h-[850px] md:h-[auto]">
                    <div className="relative w-full md:w-[350px] h-[450px]">
                      <Image
                        className="object-cover w-full h-full"
                        src={item?.homeThumb}
                        width={1200}
                        height={1000}
                        alt={idx}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {/* Right: Content */}
                    <div className="w-full md:flex-1 p-3 flex flex-col">
                      <div className="flex flex-col gap-2">
                        <div>
                          <Badge>Most Popular</Badge>
                        </div>
                        <h2 className="text-lg lg:text-xl font-semibold">
                          {item?.courseName}
                        </h2>
                        <p className="text-sm lg:text-md">
                          {item?.subHeadline}
                        </p>
                        <Separator className="my-1" />
                      </div>

                      <div className="flex flex-col gap-2 mt-1">
                        <p className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-[#FF3C3F]">
                            <CgPlayButtonO />
                          </span>
                          {item?.onDemandVideo}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-[#FF3C3F]">
                            <MdOutlineCloudDownload />
                          </span>
                          {item?.devices}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-[#FF3C3F]">
                            <GrCertificate />
                          </span>
                          {item?.lifetimeAccess}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-[#FF3C3F]">
                            <IoInfiniteSharp />
                          </span>
                          {item?.certificate}
                        </p>
                      </div>

                      <div className="mt-4">
                        <Link href={`/courses/${item?.slug}`}>
                          <Button>
                            Learn More <IoMdArrowForward />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </m.section>
    </main>
  );
};

export default CoursesSection;
