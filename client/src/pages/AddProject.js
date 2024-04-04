import React from "react";
import ProjectForm from "../component/form/ProjectForm";

const AddProject = () => {
  return (
    <>
      <div>
        <h1 className="heading mt-9 text-center">
          Please Add <span className="text-myblack">new Project</span> here!
        </h1>
        <ProjectForm />
      </div>
    </>
  );
};

export default AddProject;
