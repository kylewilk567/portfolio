import React from "react";
import Image from "next/image";

const CircularProgress = ({
  imageSrc,
  text,
  progress,
  color,
  backgroundColor,
  size,
}) => {
  return (
    <div className="flex flex-col items-center justify-center brand-circle-progress w-32 h-32 rounded-full">
      <Image src={imageSrc} alt="Circular Progress Image" className="w-8 h-8" />
      <p className="text-base text-center text-gray-800">{text}</p>
    </div>
  );
};

export default CircularProgress;
