"use client";
import React, { useState } from "react";
import Image from "next/image";
import reactjs from "@/public/assets/tech/reactjs.png";

const TechIcon = ({ technology }) => {
  // const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <a href={technology.url}>
        <Image
          src={`/assets/tech/${technology.icon}`}
          alt={technology.text}
          width={32}
          height={32}
          // onMouseEnter={() => setShowTooltip(true)}
          // onMouseLeave={() => setShowTooltip(false)}
        />
      </a>
      {/* {showTooltip && (
        <div className="absolute bg-gray-800 text-white text-sm rounded py-1 px-2 z-30 top-full left-1/2 transform -translate-x-1/2">
          React
        </div>
      )} */}
    </div>
  );
};

export default TechIcon;
