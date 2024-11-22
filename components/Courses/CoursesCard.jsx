import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

const CoursesCard = ({ slug, courseThumb, courseName }) => {
  return (
    <div className="mb-2 bg-white border-2 p-1 border-white hover:border-[#002391] shadow-[0px_0px_10px_1px_#edf2f7] rounded-xl">
      <div className="w-full overflow-hidden">
        <div className="relative h-[250px] rounded-t-lg overflow-hidden">
          <Link href={`/courses/${slug}`}>
            <div className="relative w-full h-[250px]">
              <Image
                className="object-cover rounded-t-md"
                src={courseThumb}
                alt={courseName}
                layout="fill"
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="">
          <div className="flex flex-col">
            <div>
              <Link href={`/courses/${slug}`}>
                <h4 className="font-medium text-gray-800 capitalize text-md">
                  {courseName}
                </h4>
              </Link>
            </div>
            <div>
              <Link href={`/courses/${slug}`}>
                <Button
                  className="text-[#FF3C3F] hover:text-[#f5595b] -ml-3"
                  size="sm"
                  variant="link">
                  Learn more <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
