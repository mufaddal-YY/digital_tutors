"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import { MdOutlineCloudDownload } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { IoInfiniteSharp } from "react-icons/io5";
import Link from "next/link";
import ReactPlayer from "react-player";

const CourseSidebar = ({ coursesDetail }) => {
  const usps = [
    {
      id: "1",
      title: coursesDetail?.onDemandVideo,
      icon: <CgPlayButtonO />,
    },
    {
      id: "2",
      title: coursesDetail?.devices,
      icon: <MdOutlineCloudDownload />,
    },
    {
      id: "3",
      title: coursesDetail?.lifetimeAccess,
      icon: <GrCertificate />,
    },
    {
      id: "4",
      title: coursesDetail?.certificate,
      icon: <IoInfiniteSharp />,
    },
  ];

  return (
    <main className="sticky-enquiry-form">
      <div className="bg-gray-100 rounded-xl p-2 lg:p-4">
        <div className="relative w-full h-[300px] max-w-lg mx-auto rounded-md overflow-hidden">
          {/* <Image
              className="rounded-lg"
              src={coursesDetail?.courseThumb}
              width={500}
              height={500}
              alt={coursesDetail?.courseName}
            /> */}
          <ReactPlayer
            url={coursesDetail?.videoLink}
            style={{
              width: "100%",
              height: "100%",
            }}
            width="100%" // Ensures it adapts to the parent div
            height="100%" // Maintains aspect ratio based on width
          />
          {/* <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white animate-pulse text-[#FF3C3F] rounded-full w-16 h-16 flex items-center justify-center">
            ▶
          </button> */}
        </div>

        <div className="my-4">
          <Link target="_blank" href={coursesDetail?.courseLink}>
            <Button size="xl" className="flex gap-2">
              Enroll Now <IoMdArrowForward />
            </Button>
          </Link>
        </div>

        <div className="my-4">
          <span className="flex gap-2 text-xl mb-3 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl text-gray-700">
            4.9/5 <span className="text-sm">Rating</span>
          </h2>
          <div className="flex flex-col gap-3 my-8">
            <h4>30-Day Money-Back Guarantee</h4>
            <h4 className="font-semibold">This course includes:</h4>
          </div>
          <div className="flex flex-col gap-3">
            {usps.map((item) => (
              <div className="w-full" key={item?.id}>
                <p className="flex items-center gap-2 mb-4">
                  <span className="text-[#FF3C3F] text-xl">{item?.icon}</span>
                  <span>{item?.title}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseSidebar;
