import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

const CoursesCard = ({ slug, homeThumb, courseThumb, courseName }) => {
  return (
    <div className="mb-2 bg-white border-2 p-1 border-white hover:border-[#002391] shadow-[0px_0px_10px_1px_#edf2f7] rounded-xl">
      <div className="w-full overflow-hidden">
        <div className="relative rounded-t-lg overflow-hidden">
          <Link href={`/courses/${slug}`}>
            <div className="relative w-full">
              {/* Mobile Image */}
              <div className="relative block md:hidden w-full h-[450px]">
                <Image
                  className=" rounded-t-md"
                  src={homeThumb}
                  alt={courseName}
                  height={1000}
                  width={875}
                  priority
                />
              </div>

              {/* Desktop Image */}
              <div className="relative hidden md:block w-full h-[250px]">
                <Image
                  className="object-cover rounded-t-md"
                  src={courseThumb}
                  alt={courseName}
                  width={1920}
                  height={1080}
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="h-[80px]">
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
