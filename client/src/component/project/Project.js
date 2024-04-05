import React, { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsAsync, nullError } from "../../redux/projectSlice";
import ProjectForm from "../form/ProjectForm";
import AddNewForm from "../AddNewForm";

const Project = () => {
  const dispatch = useDispatch();
  const { projects, error } = useSelector((state) => state.project);
  const [projectFormBoxOpen, setProjectFormBox] = useState(false);
  const [isSubmited, setisSubmited] = useState(false);

  const [projectEdit, setProjectEdit] = useState(null);

  useEffect(() => {
    dispatch(getAllProjectsAsync());
  }, []);

  const handleFormOpen = () => {
    setProjectFormBox(true);
    dispatch(nullError());
  };

  if (error && !projectFormBoxOpen) {
    setTimeout(() => {
      dispatch(nullError());
    }, 1200);
  }
  if (isSubmited) {
    if (!error) {
      setisSubmited(false);
      setProjectEdit(null);
      setProjectFormBox(false);
    }
  }
  return (
    <>
      {error && !projectFormBoxOpen && (
        <p className="text-red-600  w-full bg-mygrey bg-opacity-80 z-50 p-2 fixed top-0 text-center">
          {error.message || error.error.message}
        </p>
      )}
      <div className="project" id="project">
        <h1 className="heading  font-semibold mx-2  mt-7 sm:m-7">
          Highlight: <span className="text-myblack"> My Projects</span>
        </h1>

        <AddNewForm func={handleFormOpen} type={"Project"} />
        <div className="w-full mt-7">
          {projects &&
            projects.length > 0 &&
            projects.map((p) => {
              return (
                <ProjectCard
                  data={p}
                  setProjectEdit={setProjectEdit}
                  setProjectFormBox={setProjectFormBox}
                />
              );
            })}
        </div>
        {projectFormBoxOpen && (
          <div className=" fixed z-40 w-[80%] sm:w-[80%] max-h-[4rem] left-[1%] sm:left-[10%]   top-[-1%] ">
            <ProjectForm
              projectEdit={projectEdit}
              setProjectFormBox={setProjectFormBox}
              setProjectEdit={setProjectEdit}
              setisSubmited={setisSubmited}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
