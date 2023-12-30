"use client";
import React from "react";
import Image from "next/image";

const TechIcon = ({ technology }) => {
  return (
    <div className="relative inline-block">
      {technology.url !== null ? (
        <a className="hover:opacity-50" href={technology.url}>
          <Image
            src={`/assets/tech/${technology.icon}`}
            alt={technology.text}
            width={32}
            height={32}
            sizes="32px"
            className="h-auto"
          />
        </a>
      ) : (
        <Image
          src={`/assets/tech/${technology.icon}`}
          alt={technology.text}
          width={32}
          height={32}
          sizes="32px"
          className="h-auto"
        />
      )}
    </div>
  );
};

export default TechIcon;
