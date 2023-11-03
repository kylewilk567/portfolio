"use client";
import React, { useState } from "react";
import Image from "next/image";
import reactjs from "@/public/assets/tech/reactjs.png";

const TechIcon = ({ icon, url, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <Image
        src={reactjs}
        alt="React Icon"
        className="w-16 h-16"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <div className="bg-gray-800 text-white text-sm rounded py-1 px-2 absolute z-10 top-full left-1/2 transform -translate-x-1/2">
          React
        </div>
      )}
    </div>
  );
};

export default TechIcon;
