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

const usps = [
  {
    id: "1",
    title: "30 hours on-demand video",
    icon: <CgPlayButtonO />,
  },
  {
    id: "2",
    title: "85 downloadable resources",
    icon: <MdOutlineCloudDownload />,
  },
  {
    id: "3",
    title: "Certificate of completion",
    icon: <GrCertificate />,
  },
  {
    id: "4",
    title: "Full lifetime access",
    icon: <IoInfiniteSharp />,
  },
];

const CoursesSection = ({ coursesData }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
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
    <main className="bg-white items-center py-[100px]">
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
              <article key={idx}>
                <div className="bg-white border border-[#1A0034] rounded-xl p-2">
                  <div className="flex flex-col md:flex-row lg:flex-row items-center">
                    <div className="w-full lg:w-1/3">
                      <Image
                        className="rounded-md"
                        src={item?.courseThumb}
                        width={500}
                        height={500}
                        alt={idx}
                      />
                    </div>
                    <div className="w-full lg:w-2/3 p-3">
                      <div className="flex flex-col gap-2 flex-start">
                        <div>
                          <Badge>Most Popular</Badge>
                        </div>

                        <h2 className="text-2xl">{item?.courseName}</h2>
                        <p>{item?.subHeadline}</p>

                        <Separator className="my-2" />
                      </div>
                      <div className="flex flex-wrap">
                        {usps.map((item) => (
                          <div
                            className="w-full md:w-1/2 lg:w-1/2"
                            key={item?.id}>
                            <p className="flex items-center gap-2 mb-4">
                              <span className="text-[#FF3C3F]">
                                {item?.icon}
                              </span>
                              <span>{item?.title}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="my-2">
                        <Button>
                          Learn More <IoMdArrowForward />
                        </Button>
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