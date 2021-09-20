import React from "react";

import ProjectCard from "./ProjectCard";

const ProjectCardStack = ({ projects, projectGroup }) => {
  return (
    <div className="card-stack">
      {projects[projectGroup].map((project) => {
        const projectDate = new Date(project.date);
        const year = `${projectDate.getFullYear()}`;
        const month = `${(projectDate.getMonth() + 1) < 10 ? `0${projectDate.getMonth() + 1}` : projectDate.getMonth() + 1}`; // add one because .getMonth starts counting months at 0 for Jan
        const day = `${projectDate.getDate() < 10 ? `0${projectDate.getDate()}` : projectDate.getDate()}`;
        return (
          <ProjectCard project={project} year={year} month={month} day={day} key={project.title} />
        );
      })}
    </div>
  );
}

export default ProjectCardStack;
