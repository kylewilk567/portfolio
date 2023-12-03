"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import mainImg from "@/public/assets/main.png";
import { mainPageContent } from "@/constants";

function createSequenceArray(inputArray) {
  const outputArray = [];

  // Start with "500"
  outputArray.push(500);

  for (const str of inputArray) {
    // Add the input string
    outputArray.push(str);
    // Add "1000"
    outputArray.push(1000);
  }

  // End with "500"
  outputArray.push(500);

  return outputArray;
}

const Main = () => {
  const titleSequenceArr = createSequenceArray(mainPageContent.titles);

  return (
    <div className="w-full grid lg:grid-cols-3 pt-32 gap-4">
      <div className="lg:col-span-2 text-center">
        <p className="brand-text-color font-bold text-7xl pt-24 pb-16">
          Hi, I&rsquo;m&nbsp;
          <span className="font-bold text-brand_purple">
            {mainPageContent.name}
          </span>
          !
        </p>
        <div className="lg:hidden flex flex-col justify-center items-center">
          <Image
            className="min-w-[128px] p-3 border-4"
            style={{
              borderImageSource:
                "linear-gradient(45deg, transparent 25%, rgba(255,209,0,1) 25%, rgba(0,42,84,1) 75%, transparent 75%, transparent 100%)",
              borderImageSlice: "1",
            }}
            src={mainImg}
            alt="My adventures"
            width={256}
          />
          <div className="py-6 flex">
            <p className="md:text-3xl text-2xl font-bold brand-text-color">
              I am a&nbsp;
            </p>
            <div className="font-bold text-brand_purple flex items-center">
              <TypeAnimation
                preRenderFirstString={true}
                className="md:text-3xl text-2xl"
                sequence={titleSequenceArr}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        <p className="text-md xl:text-lg pb-16">
          {mainPageContent.description}
        </p>
        <a href="/KyleResumeF23.pdf" download="Wilkinson_Kyle_Resume.pdf">
          <button className="btn">Download Resume</button>
        </a>
      </div>
      <div className="lg:col-span-1 lg:flex hidden lg:flex-col justify-center items-center">
        <Image
          className="min-w-[128px] p-3 border-4"
          style={{
            borderImageSource:
              "linear-gradient(45deg, transparent 25%, rgba(255,209,0,1) 25%, rgba(0,42,84,1) 75%, transparent 75%, transparent 100%)",
            borderImageSlice: "1",
          }}
          src={mainImg}
          alt="My adventures"
          width={256}
        />
        <div className="pt-6 flex">
          <p className="md:text-xl xl:text-2xl font-bold brand-text-color">
            I am a&nbsp;
          </p>
          <div className="font-bold text-brand_purple flex items-center">
            <TypeAnimation
              preRenderFirstString={true}
              className="md:text-xl xl:text-2xl"
              sequence={titleSequenceArr}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
