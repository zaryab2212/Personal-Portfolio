import React from "react";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="project" id="project">
      <h1 className="heading text-center">Project</h1>
      <div className="project_content">
        <ProjectCard
          name="E-Commerce"
          url="https://friendly-sunburst-6bddb9.netlify.app"
          img={"/images/ecommrasce.png"}
        />
        <ProjectCard
          name="Movies Site"
          url="https://moviedite.netlify.app"
          img={"/images/movies.png"}
        />
      </div>
    </div>
  );
};

export default Project;
