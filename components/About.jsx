"use client";
import React from "react";
import Header from "./Header";
import { aboutPageContent, categories } from "@/constants";
import Skill from "./Skill";
import Experience from "./Experience";

const About = () => {
  return (
    <>
      <div className="mx-auto">
        <Header title="About Me" />
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl my-4">Education</h2>
              <div className="shadow-[0_3px_0_#ddd] brand-nav-bg-color rounded-md overflow-hidden flex flex-col p-8 w-[95%] max-w-[1170px]">
                <h1 className="text-2xl font-bold flex">
                  University of Michigan - College of Engineering
                </h1>
                <h2 className="text-lg text-gray-600 flex">Ann Arbor, MI</h2>
                <p className="mb-2 flex">May 2023</p>
                <p className="mb-2 flex">
                  B.S.E. in Computer Science, Minor in Electrical Engineering
                </p>
                <p className="text-green-600 font-semibold flex">
                  Summa Cum Laude
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl my-4">Experience</h2>
              <Experience />
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col">
            <h2 className="font-bold text-2xl my-4">Skills</h2>
            {categories.map((category) => {
              const skillsInCategory = aboutPageContent.skills.filter(
                (skill) => skill.technology.category === category
              );

              if (skillsInCategory.length > 0) {
                return (
                  <div key={`Category${category}`}>
                    <h2 className="font-semibold text-xl my-4">{category}</h2>
                    <div className="flex flex-wrap justify-start lg:grid lg:grid-cols-2 lg:justify-center gap-4">
                      {skillsInCategory.map((skill) => (
                        <Skill
                          key={`Skill${skill.technology.text}`}
                          imgSource={`/assets/tech/${skill.technology.icon}`}
                          label={skill.technology.text}
                          progress={skill.skillLevel}
                        />
                      ))}
                    </div>
                  </div>
                );
              }

              return null; // Do not render the category if there are no skills in it
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
