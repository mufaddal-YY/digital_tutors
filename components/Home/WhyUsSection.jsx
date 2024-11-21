import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";
import { Separator } from "../ui/separator";
import { RiPresentationLine } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { PiLaptopFill } from "react-icons/pi";
import { Button } from "../ui/button";

const whyUsps = [
  {
    id: "1",
    title: "Expert Trainers",
    icon: <RiPresentationLine />,
  },
  {
    id: "2",
    title: "Remote Learning",
    icon: <FaGlobeAsia />,
  },
  {
    id: "3",
    title: "Lifetime Access",
    icon: <GrPowerCycle />,
  },
  {
    id: "4",
    title: "Self Development",
    icon: <PiLaptopFill />,
  },
];

const WhyUsSection = ({ homeData }) => {
  return (
    <main className="bg-gray-100">
      <section className="container py-[50px]">
        {homeData.map((item, idx) => (
          <article
            className="flex flex-col lg:flex-row justify-between"
            key={idx}>
            <div className="w-full lg:w-5/12">
              <div className="flex justify-center">
                <Image
                  src={item.whySectionImage}
                  width={400}
                  height={400}
                  alt="Why us Image"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 p-4">
              <h1 className="text-4xl font-semibold text-[#1A0034] mb-4">
                {item.whySectionHead}
              </h1>
              <Separator className="my-2" />
              <PortableTextComponent content={item?.whySectionDesc} />
              <div className="flex flex-wrap my-4">
                {whyUsps.map((item) => (
                  <div className="w-full md:w-1/2 lg:w-1/2 my-2" key={item?.id}>
                    <Button size="xl" variant="secondary">
                      {item?.icon} {item?.title}{" "}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhyUsSection;
