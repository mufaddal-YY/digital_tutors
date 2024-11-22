import React from "react";
import { Separator } from "../ui/separator";
import PortableTextComponent from "../ui/PortableTextComponent";

const VisionMission = ({ aboutData }) => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row">
        {aboutData.map((item, idx) => (
          <div
            key={idx}
            className="w-full lg:w-1/2 bg-no-repeat bg-center bg-cover lg:bg-cover items-center"
            style={{ backgroundImage: `url(${item?.visionSectionImage})` }}>
            
          </div>
        ))}

        <div className="w-full lg:w-1/2 bg-primary flex py-[100px] p-8">
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
