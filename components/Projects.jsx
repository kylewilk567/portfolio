import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import { projects, technologies } from "@/constants";

const Projects = () => {
  return (
    <>
      <div className="mx-auto">
        <Header title="Projects and Leadership" />
        <p className="brand-text-color italic flex justify-center w-full">
          Click a project to learn more!
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {projects.map((uninitializedProject) => {
          // Replace the technology strings with their respective objects from the technologies list
          const updatedTechnologies = uninitializedProject.technologies.map(
            (tech) => technologies[tech]
          );

          // Return a new object with updated technology objects
          let project = {
            ...uninitializedProject,
            technologies: updatedTechnologies,
          };

          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
