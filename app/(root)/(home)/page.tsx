"use client";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSection from "@/components/TestimonialSection";
import { interests, skills } from "@/constants";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from 'react-countup';

const page = () => {
  return (
    <>
      {/* hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* left side */}
        <div
          className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2x1 overflow-hidden tablet:mr-10" // Added margin-right for separation
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <Image
            src={"/images/heroimg.png"}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        {/* right side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2x1 text-center tablet:text-left">
            <p
              className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded"
              data-aos="fade-down"
            >
              Hello there
            </p>
            <h1 className="text-grey" data-aos="fade-down" data-aos-delay="100">
              Im InsertUserNameHere
            </h1>
            <p
              className="text-grey-600"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos in reprehenderit adipisci enim velit sed nihil nobis,
              debitis natus quos, quisquam deserunt fuga placeat maiores
              inventore ad ipsam nisi totam.
            </p>
          </div>
          <div
            className="flex gap-5 mt-10 justify-center tablet:justify-start"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <Link href={"/contact"} className="btn btn-primary">
              <Phone />
              Contact now
            </Link>
            <Link href={"/about"} className="btn">
              More about me
              <ArrowRight size={16} />
            </Link>
          </div>
          {/* stats */}
          <div className="bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex">
            <div>
              <h3 className="text-grey-700">
                <CountUp end={12} duration={5} />
                <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                <CountUp end={35} duration={5} />
                <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Sales Made</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-grey-700">
                <CountUp end={8} duration={5} />
                <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Year of Experience</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-3 tablet:hidden">
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                <CountUp end={12} duration={5} />
                <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                <CountUp end={35} duration={5} />
                <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Sales Made</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                <CountUp end={5} duration={8} />
                <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Year of Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="My Skills"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ratione eos inventore"
        />
        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={65}
                  height={65}
                />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* interest section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Interest"
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti accusantium saepe dignissimos ipsa blanditiis incidunt,"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {interests.slice(0, 2).map((interest, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{interest.name}</h5>
              <p className="text-grey-600">{interest.description}</p>
            </div>
          ))}
        </div>
        <Link
          href={"/interest"}
          className="btn btn-primary mt-10 mx-auto w-max"
        >
          View all my interest
        </Link>
      </section>
      {/* testimonial section */}
      <TestimonialSection />
    </>
  );
};

export default page;
