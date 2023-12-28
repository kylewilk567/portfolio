"use client";
import React from "react";
import TechIcon from "./TechIcon";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="drop-shadow-md hover:drop-shadow-xl brand-nav-bg-color w-64 h-128 rounded-md overflow-hidden flex flex-col">
      <a
        className="flex-grow opacity-100 hover:opacity-50"
        href={`#${project.href}`}
      >
        <div className="w-full h-64 relative">
          <Image
            src={project.image}
            alt="image"
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>

        <div className="p-2">
          <h2 className="font-bold brand-text-color text-center text-base">
            {project.name}
          </h2>
          <h3 className="text-sm brand-text-color-secondary">
            {project.description}
          </h3>
        </div>
      </a>
      <div className="h-10 p-1 w-full brand-bg-color-secondary">
        <div className="flex gap-2 items-center">
          {project.technologies.map((technology) => (
            <TechIcon key={technology.text} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
