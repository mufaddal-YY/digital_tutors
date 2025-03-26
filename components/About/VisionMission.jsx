import React from "react";
import { Separator } from "../ui/separator";
import PortableTextComponent from "../ui/PortableTextComponent";
import Eye from "@/public/Eye.png";
import Mission from "@/public/Mission.png";
import PieChart from "@/public/Pie Chart.png";
import Image from "next/image";

const VisionMission = ({ aboutData }) => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row">
        {aboutData.map((item, idx) => (
          <div
            key={idx}
            className="w-full lg:w-5/12 bg-no-repeat bg-center bg-cover lg:bg-cover items-center"
            style={{
              backgroundImage: `url("${item?.visionSectionImage}")`,
            }}></div>
        ))}

        <div className="w-full lg:w-7/12 bg-primary flex py-[100px] p-8">
          {aboutData.map((item, idx) => (
            <div className="flex flex-col w-full" key={idx}>
              <div className="py-2 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="">
                    <Image
                      src={Eye}
                      width={30} // Adjust size to match container
                      height={30}
                      alt="vision"
                    />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold">Vision</h4>
                  </div>
                </div>
                <PortableTextComponent content={item?.visionDescription} />
              </div>

              <Separator className="my-2 text-white" />

              <div className="py-2 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="">
                    <Image
                      src={Mission}
                      width={30} // Adjust size to match container
                      height={30}
                      alt="Mission"
                    />
                  </div>
                  <div>
                    {" "}
                    <h4 className="text-md font-semibold">Mission</h4>
                  </div>
                </div>
                <PortableTextComponent content={item?.missionDescription} />
              </div>

              <Separator className="my-2 text-white" />

              <div className="py-2 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="mt-2">
                    <Image
                      src={PieChart}
                      width={30} // Adjust size to match container
                      height={30}
                      alt="Pie Chart"
                    />
                  </div>
                  <div>
                    {" "}
                    <h4 className="text-md font-semibold">Values</h4>
                  </div>
                </div>
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
