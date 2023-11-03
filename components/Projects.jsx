import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import { projects, technologies } from "@/constants";

const Projects = () => {
  return (
    <>
      <Header title="Projects and Leadership" />

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
    </>
  );
};

export default Projects;
