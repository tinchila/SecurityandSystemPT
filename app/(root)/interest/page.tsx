import SectionHeading from "@/components/SectionHeading";
import { Metadata } from "next";
import { interests } from "@/constants";
import React from "react";

export const metadata: Metadata = {
  title: "Interest - User Name",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <SectionHeading
          title="Interest"
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti accusantium saepe dignissimos ipsa blanditiis incidunt,"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {interests.slice(0, 2).map((interest, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2" data-aos="fade-down"
          data-aos-delay="200">{interest.name}</h5>
              <p className="text-grey-600" data-aos="fade-down"
          data-aos-delay="300">{interest.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {interests.slice(2).map((interest, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2" data-aos="fade-down"
          data-aos-delay="200">{interest.name}</h5>
              <p className="text-grey-600" data-aos="fade-down"
          data-aos-delay="300">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
