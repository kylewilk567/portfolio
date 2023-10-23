"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import mainImg from "@/public/assets/main.jpg";
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
      <p className="font-bold text-4xl pt-24 pb-8">
        Hi, I&rsquo;m&nbsp;
        <span className="font-bold text-brand_purple">
          {mainPageContent.name}
        </span>
        !
      </p>

      <div className="flex pb-6">
        <p className="text-2xl font-bold">I am a&nbsp;</p>
        <div className="font-bold text-brand_purple flex items-center">
          <TypeAnimation
            preRenderFirstString={true}
            className="text-2xl"
            sequence={titleSequenceArr}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-md pb-4">{mainPageContent.description}</p>
          <a href="/KyleResumeF23.pdf" download="Wilkinson_Kyle_Resume.pdf">
            <button className="bg-brand_purple p-3 text-white text-sm rounded-2xl">
              Download Resume
            </button>
          </a>
        </div>
        <div className="hidden lg:block lg:col-span-1">
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
        </div>
      </div>
    </>
  );
};

export default Main;
