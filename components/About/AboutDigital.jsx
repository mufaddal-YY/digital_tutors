import React from 'react'
import Image from "next/image";
import PortableTextComponent from "../ui/PortableTextComponent";
import { Separator } from "../ui/separator";
import { RiPresentationLine } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { PiLaptopFill } from "react-icons/pi";
import { Button } from "../ui/button";

const AboutDigital = ({aboutData}) => {
  return (
    <main className="bg-gray-100">
    <section className="container py-[50px]">
      {aboutData.map((item, idx) => (
        <article
          className="flex flex-col lg:flex-row justify-between"
          key={idx}>
          <div className="w-full lg:w-5/12">
            <div className="flex justify-center">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt="Why us Image"
              />
            </div>
          </div>
          <div className="w-full lg:w-7/12 p-4">
            <h1 className="text-4xl font-semibold text-[#1A0034] mb-4">
              {item.headline}
            </h1>
            <Separator className="my-2" />
            <PortableTextComponent content={item?.content} />
            
          </div>
        </article>
      ))}
    </section>
  </main>
  )
}

export default AboutDigital