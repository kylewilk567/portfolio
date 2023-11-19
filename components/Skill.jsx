"use client";
import React from "react";
import ProgressBar from "./ProgressBar"; // Assuming you have the ProgressBar component from the previous example
import Image from "next/image";

const Skill = ({ imgSource, label, progress }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imgSource}
        alt={`Skill: ${label}`}
        width={96}
        height={96}
        className="mb-2"
      />
      <p className="text-lg font-semibold mb-2">{label}</p>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Skill;
