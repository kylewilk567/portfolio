"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <>
      <p className="font-bold">
        Hi, I&rsquo;m <span className="font-bold text-purple-400">Kyle</span>!
      </p>

      <div className="flex">
        <p className="text-sm font-normal text-sky-100">I am a&nbsp;</p>
        <div className="text-sm font-normal text-sky-300">
          <TypeAnimation
            preRenderFirstString={true}
            className="text-sm"
            sequence={[
              500,
              "Software Engineer",
              1000,
              "Michigan Wolverine",
              1000,
              "Innovator",
              1000,
              "Tech Enthusiast",
              1000,
              "Nature Lover",
              1000,
              "Problem Solver",
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
