"use client";
import React, { useState } from "react";
import Image from "next/image";
import reactjs from "@/public/assets/tech/reactjs.png";

const TechIcon = ({ technology }) => {
  return (
    <div className="relative inline-block">
      {technology.url !== null ? (
        <a href={technology.url}>
          <Image
            src={`/assets/tech/${technology.icon}`}
            alt={technology.text}
            width={32}
            height={32}
          />
        </a>
      ) : (
        <Image
          src={`/assets/tech/${technology.icon}`}
          alt={technology.text}
          width={32}
          height={32}
        />
      )}
    </div>
  );
};

export default TechIcon;
