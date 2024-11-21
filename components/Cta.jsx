import React from "react";
import { Button } from "./ui/button";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Cta = ({ homeData }) => {
  return (
    <main className="bg-white" id="#cta">
      <section className="container py-[100px]">
        {homeData.map((item, idx) => (
          <article
            className="bg-[#FFBB42] w-full md:w-3/4 lg:3/4 mx-auto rounded-3xl p-4 md:p-8 lg:p-12 py-[100px]"
            key={idx}>
            <h2 className="text-2xl lg:text-4xl font-semibold text-[#1A0034] text-center py-2">
              {item.ctaHead}
            </h2>
            <p className="text-lg font-regular text-[#3030308e] text-center">
              {item.ctaDesc}
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="xl" variant="secondary" className="flex gap-2">
                Start Learning <MdOutlineArrowForwardIos />
              </Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Cta;
