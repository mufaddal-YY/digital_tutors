import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";

const WhatYouLearn = ({ coursesDetail }) => {
  return (
    <main className="my-2">
      <section className="">
        <article className="border rounded-xl p-2 lg:p-6">
          <h2 className="text-3xl font-medium mb-4">What you'll learn</h2>
          <div>
            <PortableTextComponent content={coursesDetail?.whatYouLearn} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default WhatYouLearn;
