"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import headshot from "@/public/assets/headshot.jpg";

const Main = () => {
  return (
    <>
      <p className="font-bold">
        Hi, I&rsquo;m <span className="font-bold text-brand_purple">Kyle</span>!
      </p>

      <div className="flex">
        <p className="text-4xl font-bold">I am a&nbsp;</p>
        <div className="font-bold text-brand_purple flex items-center">
          <TypeAnimation
            preRenderFirstString={true}
            className="text-4xl"
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

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <p className="text-sm pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Few sentences
            on who I am
          </p>
          <a href="/KyleResumeF23.pdf" download="Wilkinson_Kyle_Resume.pdf">
            <button className="bg-brand_purple p-3 text-white text-sm rounded-2xl">
              Download Resume
            </button>
          </a>
        </div>
        <div className="sm:col-span-1">
          <Image src={headshot} alt="My Headshot" width={256} />
        </div>
      </div>
    </>
  );
};

export default Main;
