"use client";
import React from "react";
import TechIcon from "./TechIcon";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="drop-shadow-md bg-slate-300 w-64 h-128 rounded-md overflow-hidden">
      <div className="w-full h-64 relative">
        <Image
          src={project.image}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h2>{project.name}</h2>
      <h3>{project.description}</h3>

      <div className="absolute bottom-2 w-full">
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
