"use client";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ReactPlayer from "react-player";

const people = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const HeroBanner = ({ homeData }) => {
  return (
    <>
      <main className="w-full items-center justify-center">
        <section className=" bg-primary rounded-2xl">
          <section className="py-[50px]">
            <section className="container mx-auto">
              {homeData.map((item, idx) => (
                <article
                  className="flex flex-col lg:flex-row mx-auto items-center"
                  key={idx}>
                  <article className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <div className="w-full mb-4 md:items-center md:justify-center">
                      <div className="p-2 mx-auto relative z-10 w-full lg:py-12 md:pt-0">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl leading-snug font-semibold text-left py-3 text-white">
                          Unlock Your Potential with Practical Skills for
                          Tomorrow
                        </h2>

                        <p className="mt-4 font-normal lg:text-lg text-gray-50 max-w-2xl text-left">
                          {item.subHeadline}
                        </p>

                        <div className="my-6">
                          <Link href="/#courses">
                            <Button size="xl" className="flex gap-2">
                              Start Learning <MdOutlineArrowForwardIos />
                            </Button>
                          </Link>
                        </div>

                        <Separator className="my-8 w-full lg:w-3/4 bg-gray-300" />

                        <div className=" flex items-center gap-4">
                          <div className="">
                            <span className="flex gap-2 text-xl mb-3 text-yellow-500">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </span>
                            <h2 className="text-3xl lg:text-5xl text-white">
                              4.9/5 <span className="text-sm">Rating</span>
                            </h2>
                          </div>
                          <Separator
                            orientation="vertical"
                            className="h-20 bg-gray-400"
                          />

                          <div>
                            <p className="text-white mb-2">
                              From over 2k+ reviews.
                            </p>
                            <div className="flex items-center">
                              <AnimatedTooltip items={people} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="w-full lg:w-1/2">
                    <div className="flex justify-center mt-3 items-center">
                      {/* <ReactPlayer
                        url={propertyDetail?.video}
                        style={{ borderRadius: "24px" }}
                      /> */}

                      <Image
                        src={item.heroImage}
                        width={500}
                        height={500}
                        alt={item.headline}
                      />
                    </div>
                  </article>
                </article>
              ))}
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default HeroBanner;
//
