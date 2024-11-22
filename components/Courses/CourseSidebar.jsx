import React from "react";
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import { MdOutlineCloudDownload } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { IoInfiniteSharp } from "react-icons/io5";
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

const CourseSidebar = ({ coursesDetail }) => {
  return (
    <main>
      <div className="bg-gray-100 rounded-xl p-2 lg:p-4">
        <Image
          className=""
          src={coursesDetail?.courseThumb}
          width={500}
          height={500}
          alt={coursesDetail?.courseName}
        />

        <div className="my-4">
          <Button size="xl" className="flex gap-2">
            Enroll Now <IoMdArrowForward />
          </Button>
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
