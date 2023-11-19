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
              <h2>Education</h2>
              <div className="drop-shadow-md hover:drop-shadow-xl brand-nav-bg-color w-64 h-128 rounded-md overflow-hidden">
                Content here
              </div>
            </div>
            <div className="flex flex-col">
              <h2>Experience</h2>
              <Experience />
            </div>
          </div>
        </div>
        <div className="">
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
