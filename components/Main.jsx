"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import headshot from "@/public/assets/headshot.jpg";
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
    <>
      <p className="font-bold">
        Hi, I&rsquo;m&nbsp;
        <span className="font-bold text-brand_purple">
          {mainPageContent.name}
        </span>
        !
      </p>

      <div className="flex">
        <p className="text-4xl font-bold">I am a&nbsp;</p>
        <div className="font-bold text-brand_purple flex items-center">
          <TypeAnimation
            preRenderFirstString={true}
            className="text-4xl"
            sequence={titleSequenceArr}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <p className="text-sm pb-4">{mainPageContent.description}</p>
          <a href="/KyleResumeF23.pdf" download="Wilkinson_Kyle_Resume.pdf">
            <button className="bg-brand_purple p-3 text-white text-sm rounded-2xl">
              Download Resume
            </button>
          </a>
        </div>
        <div className="sm:col-span-1">
          <Image src={headshot} alt="My adventures" width={256} />
        </div>
      </div>
    </>
  );
};

export default Main;
