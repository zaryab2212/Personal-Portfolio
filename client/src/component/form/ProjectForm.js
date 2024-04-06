import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, json, useNavigate } from "react-router-dom";
import { loginFuncAsync, registerFuncAsync } from "../../redux/auth/authSlice";
import {
  UpdateProjectAsync,
  addProjectAsync,
  nullError,
} from "../../redux/projectSlice";
import { FaWindowClose } from "react-icons/fa";
import { FallingLines, Oval } from "react-loader-spinner";

const ProjectForm = ({
  setisSubmited,
  projectEdit,
  setProjectEdit,
  setProjectFormBox,
}) => {
  const [Val, setVal] = useState({
    name: projectEdit?.name || " ",
    technologies: "",
    feature: "",
    description: projectEdit?.description || "",
    gitRepo: projectEdit?.gitRepo || "",
    projectLink: projectEdit?.projectLink || "",
  });
  const [technologies, settechnologies] = useState(
    projectEdit?.technologies || []
  );
  const [imgFiles, setimgFiles] = useState(null);
  const [feature, setfeature] = useState(projectEdit?.feature || []);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { error, loading } = useSelector((state) => state.project);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setisSubmited(false);
    setVal({ ...Val, [e.target.name]: e.target.value });
    dispatch(nullError());
  };

  const handleTech = (e) => {
    settechnologies([...new Set([...technologies, Val.technologies])]);

    setVal({ ...Val, technologies: "" });
  };
  const handleFeature = (e) => {
    setfeature([...new Set([...feature, Val.feature])]);
    setVal({ ...Val, feature: "" });
  };
  const handleTechRemove = (e) => {
    settechnologies(technologies.filter((t) => t !== e));
    // setVal({ ...Val, technologies: "" });
  };
  const handleFeatureRemove = (e) => {
    setfeature(feature.filter((t) => t !== e));
    // setVal({ ...Val, technologies: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stringTech = JSON.stringify(technologies);
    const stringFeature = JSON.stringify(feature);
    const formData = new FormData();
    formData.append("name", Val?.name);
    formData.append("gitRepo", Val?.gitRepo);
    formData.append("projectLink", Val?.projectLink);
    formData.append("description", Val?.description);
    formData.append("technologies", stringTech);
    formData.append("feature", stringFeature);
    if (imgFiles) {
      for (let i = 0; i < imgFiles.length; i++) {
        formData.append("image", imgFiles[i]);
      }
    }
    if (!projectEdit) {
      await dispatch(addProjectAsync(formData));
    } else {
      await dispatch(UpdateProjectAsync({ id: projectEdit._id, formData }));
    }
    setisSubmited(true);
  };

  const handeFormClose = () => {
    setProjectEdit(null);
    setProjectFormBox(false);
    dispatch(nullError());
  };

  return (
    <>
      <div className=" mt-3   m-auto p-4 sm:p-8 bg-mybg relative sm:px-[3rem]  border-[1px] border-mytheme rounded-2xl  ">
        <FaWindowClose
          onClick={handeFormClose}
          className="text-mytheme top-4 right-4 w-[1.3rem] h-[1.3rem] cursor-pointer hover:w-[1.4rem] hover:h-[1.4rem] absolute"
          //  left-2 top-2 "
        />
        <h1 className=" text-[1.5rem] font-semibold sm:text-[2rem] text-mytheme  text-center">
          Please{" "}
          <span className="text-white bg-mybg ">
            {projectEdit ? "Edit Project" : "Add Project"}
          </span>{" "}
          here!
        </h1>
        <form
          className="flex flex-col justify-center align-middle gap-3 mt-1"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 bg-mybg text-mygrey px-6 rounded-xl border-mytheme border-[2px]"
            name="name"
            value={Val?.name}
            onChange={handleInput}
            type="text"
            placeholder="Name"
            required
          />

          {/* technologies */}
          <div>
            <div className="flex justify-between gap-2 align-middle">
              <input
                className="py-2 bg-mybg text-mygrey px-6 w-full  rounded-xl border-mytheme border-[2px]"
                name="technologies"
                value={Val?.technologies}
                onChange={handleInput}
                type="text"
                placeholder="Tecnologies"
              />
              <button
                type="button"
                className="text-mygrey border-mybg px-3 py-1 bg-mytheme border-[1px] rounded-xl"
                onClick={handleTech}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap justify-start align-middle mt-1 gap-2">
              {technologies &&
                technologies.length > 0 &&
                technologies.map((tech) => {
                  return (
                    <div className="p-1 pr-4  rounded-lg  relative  border-mytheme border-[1px]">
                      <p
                        onClick={() => handleTechRemove(tech)}
                        className="text-mybg  border-mybg rounded-r-lg px-[2px] font-semibold absolute top-[-2px] right-[-2px] bg-mytheme border-[1px] cursor-pointer"
                      >
                        x
                      </p>
                      <p className="text-[.6rem ] text-mygrey ">{tech}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            {/* Features */}
            <div className="flex justify-between gap-2 align-middle">
              <input
                className="py-2 bg-mybg text-mygrey px-6 w-full  rounded-xl border-mytheme border-[2px]"
                name="feature"
                value={Val?.feature}
                onChange={handleInput}
                type="text"
                placeholder="Features"
              />
              <button
                className="text-white  border-mybg  px-3 py-1 bg-mytheme border-[1px] rounded-xl"
                onClick={handleFeature}
                type="button"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap justify-start align-middle mt-1 gap-2">
              {feature &&
                feature.length > 0 &&
                feature.map((f) => {
                  return (
                    <div className="p-1 pr-4  rounded-lg  relative  border-mytheme border-[1px]">
                      <p
                        onClick={() => handleFeatureRemove(f)}
                        className="text-mybg border-mybg rounded-r-lg px-[2px] font-semibold absolute top-[-2px] right-[-2px]  bg-mytheme border-[1px] cursor-pointer"
                      >
                        x
                      </p>
                      <p className="text-[.6rem] text-mygrey">{f}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <input
            className="py-2 w-full px-6 rounded-xl border-mytheme border-[2px]"
            name="imgFiles"
            // value={imgFiles}
            onChange={(e) => setimgFiles(e.target.files)}
            type="file"
            multiple
            placeholder="Add Gig images"
          />

          <div className="flex justify-between gap-3 align-middle">
            {" "}
            <input
              className="py-2 bg-mybg text-mygrey w-full px-6 rounded-xl border-mytheme border-[2px]"
              name="gitRepo"
              value={Val?.gitRepo}
              onChange={handleInput}
              type="text"
              placeholder="Git-Hub Code Link"
            />
            <input
              className="py-2 bg-mybg text-mygrey px-6 w-full rounded-xl border-mytheme border-[2px]"
              name="projectLink"
              value={Val?.projectLink}
              onChange={handleInput}
              type="text"
              placeholder="Project Link"
            />
          </div>
          <textarea
            className="py-2 bg-mybg text-mygrey px-6 rounded-xl border-mytheme border-[2px]"
            name="description"
            value={Val?.description}
            onChange={handleInput}
            type="text"
            placeholder="Description"
          />
          {error && (
            <p className="text-red-600 px-4">
              {" "}
              {error.message || error.error.message}
            </p>
          )}

          <button className="py-2 px-6 text-white border-mybg rounded-xl bg-mytheme text-center border-[2px]  ">
            {loading ? (
              <div className="text-mythem mt-[-4] pt-[-3] w-10 m-auto">
                <Oval
                  visible={true}
                  secondaryColor="##ffffff"
                  height="30"
                  width="30"
                  strokeWidth={3}
                  color="#ffffff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : projectEdit ? (
              "Edit"
            ) : (
              "ADD"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
