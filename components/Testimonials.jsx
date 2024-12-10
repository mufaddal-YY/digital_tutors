"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { InfiniteMovingCardsRight } from "./ui/infinite-moving-cards-right";
import PortableTextComponent from "./ui/PortableTextComponent";

const Testimonials = ({ homeData, testimonialsData }) => {
  return (
    <main className="bg-primary rounded-xl">
      <section className="pt-[50px]">
        {homeData.map((item, idx) => (
          <article className="container my-4" key={idx}>
            <h2 className="text-white text-4xl font-semibold">
              {item?.testimonialHead}
            </h2>
            <div className="text-white py-2">
              <PortableTextComponent content={item?.testimonialDesc} />
            </div>
          </article>
        ))}
      </section>
      <section className="py-[50px]">
        <article className="">
          <div className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonialsData}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCardsRight
              items={testimonialsData}
              direction="left"
              speed="slow"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Testimonials;
