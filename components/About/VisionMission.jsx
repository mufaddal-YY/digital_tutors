import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";
import { MdPieChart } from "react-icons/md";
const VisionMission = ({ aboutData }) => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row">
        {aboutData.map((item, idx) => (
          <div
            key={idx}
            className="w-full lg:w-1/2 bg-no-repeat bg-center bg-cover lg:bg-cover items-center"
            style={{ backgroundImage: `url(${item?.visionSectionImage})` }}>
            {/* Add other content inside the div if needed */}
          </div>
        ))}

        <div className="w-full lg:w-1/2 bg-primary flex py-[20px] p-8">
          {aboutData.map((item, idx) => (
            <div className="flex flex-col w-full" key={idx}>
              <div className="py-2 text-white flex gap-2 items-center">
                <PortableTextComponent content={item?.visionDescription} />
              </div>

              <Separator className="my-2 text-white" />

              <div className="py-2 text-white flex gap-2 items-center">
                <PortableTextComponent content={item?.missionDescription} />
              </div>

              <Separator className="my-2 text-white" />

              <div className="py-2 text-white flex gap-2 items-center">
                <PortableTextComponent content={item?.valueDescription} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
