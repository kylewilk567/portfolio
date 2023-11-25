"use client";
import React from "react";
import TechIcon from "./TechIcon";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="drop-shadow-md hover:drop-shadow-xl brand-nav-bg-color w-64 h-128 rounded-md overflow-hidden flex flex-col">
      <a className="flex-grow" href={`#${project.href}`}>
        <div className="w-full h-64 relative">
          <Image
            src={project.image}
            alt="image"
            // layout="fill"
            fill
            // objectFit="cover"
            sizes="256px"
            className="object-cover"
          />
        </div>

        <div className="p-2">
          <h2 className="font-bold text-center text-base">{project.name}</h2>
          <h3 className="text-sm">{project.description}</h3>
        </div>
      </a>
      <div className="h-10 p-1 w-full bg-slate-300">
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
