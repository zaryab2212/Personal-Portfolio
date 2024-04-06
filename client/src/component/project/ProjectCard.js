import React, { useState } from "react";
import Slider from "../Slider";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteProjectAsync } from "../../redux/projectSlice";

const ProjectCard = ({ data, setProjectEdit, setProjectFormBox }) => {
  const {
    name,
    feature,
    gitRepo,
    goal,
    images,
    technologies,
    _id,
    description,
    projectLink,
  } = data;
  const [isReadFull, setisReadFull] = useState(false);

  const dispatch = useDispatch();

  const handleEditProject = (e) => {
    setProjectEdit(e);
    setProjectFormBox(true);
  };

  return (
    <>
      <div className="md:flex border-[1px] rounded-xl p-1 border-mygrey justify-start mt-4 align-middle gap-4">
        {" "}
        <div className="md:w-[45%] m-3  relative basis-[50%] flex-col object-cover">
          {/* <img src={img} alt={name} className="rounded-md" /> */}
          <h2 className="text-myblack mb-3 mt-6 font-semibold text-center text-[1.5rem]">
            {name}
          </h2>{" "}
          <Slider name={name} images={images} />
        </div>
        {/* right side */}
        <div className="text-[.9rem]  basis-[50%] mt-4 flex-col justify-start align-middle">
          <div className="flex justify-between mx-1 align-bottom">
            <div
              onClick={() => handleEditProject(data)}
              className="flex cursor-pointer  justify-center gap-1 mx-4 align-bottom"
            >
              <p className="text-mygrey underline  hover:text-[1rem] text-[.8rem]">
                Edit
              </p>
              <MdEditDocument className="text-[1.2rem]   hover:text-[1.4rem]  text-mytheme cursor-pointer" />
            </div>
            <div className="flex cursor-pointer  justify-center gap-1 mx-4 align-bottom">
              <p
                onClick={() => {
                  dispatch(deleteProjectAsync(data._id));
                }}
                className="text-mygrey hover:text-[1rem] cursor-pointer  underline text-center  text-bottom text-[.8rem]"
              >
                Remove
              </p>
              <MdDeleteForever className="text-[1.4rem]   hover:text-[1.6rem]  text-red-600" />
            </div>
          </div>

          {/* Discription */}
          <div className="  gap-5 flex mt-2  justify-start align-middle">
            <p className="text-mygrey tracking-widest">
              {!isReadFull
                ? description.split(" ").slice(0, 30).join(" ") + "...."
                : description + "...."}
              {!isReadFull ? (
                <span
                  onClick={() => setisReadFull(true)}
                  className="text-mytheme tracking-wide font-semibold cursor-pointer underline text-[.8rem] "
                >
                  Read more
                </span>
              ) : (
                <span
                  onClick={() => setisReadFull(false)}
                  className="text-mytheme font-semibold tracking-wide cursor-pointer underline text-[.8rem] "
                >
                  Read Less...
                </span>
              )}
            </p>
          </div>

          {/* Tecnologies */}
          <div className="  gap-3  grid text-[.9rem]  grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2 justify-start align-middle">
            {technologies &&
              technologies.length > 0 &&
              technologies.map((tech) => {
                return (
                  <button className="text-mygrey flex justify-between align-middle font-semibold rounded-3xl  px-2 mx-1">
                    <div className="text-mytheme justify-center align-middle flex">
                      ✔{" "}
                    </div>{" "}
                    <div>{tech}</div>
                  </button>
                );
              })}
          </div>
          {/* feature */}
          <div className="  gap-5 flex-col border-opacity-10 border-[1px] border-myblack   p-4 rounded-3xl mt-1 justify-start align-middle">
            <h3 className="text-mytheme text-center opacity-80  font-semibold ">
              FEATURES
            </h3>
            {!feature ? (
              "no Freaature"
            ) : (
              <ul>
                {feature.map((ft) => {
                  return (
                    <li className="pl-3 text-mygrey">
                      {" "}
                      <span className="text-mytheme"> ✔ </span> {ft}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* buttons
           */}
          <div className="mt-3 flex justify-center align-middle gap-3">
            <a className="w-full" href={projectLink}>
              {" "}
              <button className="w-full hover:bg-white hover:text-mytheme border-[1px] border-mytheme  p-2 bg-mytheme text-mygrey font-semibold rounded-3xl">
                Visit project
              </button>
            </a>
            <a className="w-full" href={gitRepo}>
              {" "}
              <button className="w-full  hover:bg-white hover:text-mytheme border-[1px] border-mytheme  p-2 bg-mytheme text-mygrey font-semibold rounded-3xl">
                Visit Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
