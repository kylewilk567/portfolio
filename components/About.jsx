"use client";
import React from "react";
import Header from "./Header";
import { aboutPageContent } from "@/constants";
import Skill from "./Skill";
import Experience from "./Experience";

const About = () => {
  return (
    <>
      <div className="mx-auto">
        <Header title="About Me" />
        <div>
          <div className="flex flex-col">
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
        </div>
        <div className="flex flex-wrap gap-4 mt-4 sm:justify-start justify-center">
          {aboutPageContent.skills.map((skill) => (
            <Skill
              key={"Skill" + skill.technology.text}
              imgSource={`/assets/tech/${skill.technology.icon}`}
              label={skill.technology.text}
              progress={skill.skillLevel}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
