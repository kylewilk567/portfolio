"use client";
import React from "react";

const ProgressBar = ({ progress }) => {
  const calculateColor = () => {
    // Calculate color based on progress value
    const red = Math.max(255 - progress * 2, 0);
    const green = Math.min(progress * 2, 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: calculateColor(),
  };

  return (
    <div className="w-full h-8 bg-gray-300 rounded-md overflow-hidden">
      <div
        style={progressStyle}
        className="h-full transition-all duration-300"
      ></div>
    </div>
  );
};

export default ProgressBar;
