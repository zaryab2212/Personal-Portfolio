import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getSkillsAsync,
  nullError,
  skillFormBoxOpen,
} from "../../redux/skills/skillSlice";
import SkillForm from "../form/SkillForm";
import { Link } from "react-router-dom";
import AddNewForm from "../AddNewForm";

const Skills = () => {
  const { skills, formOpen, error } = useSelector((state) => state.skill);
  const [editProduct, setEditProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkillsAsync());
  }, []);
  if (error && !formOpen) {
    setTimeout(() => {
      dispatch(nullError());
    }, 1200);
  }

  return (
    <>
      {error && !formOpen && (
        <p className="text-red-700  w-full bg-mygrey bg-opacity-80  z-50 p-2 fixed top-0 text-center">
          {error.message || error.error.message}
        </p>
      )}
      <div className="mt-3 relative">
        <h1 className="heading font-semibold mx-4 my-4 text-start">
          <span className="text-myblack">My</span> Skills
        </h1>

        <AddNewForm func={() => dispatch(skillFormBoxOpen())} type={"Skill"} />

        <div className="">
          <div className="grid md:grid-cols-4 grid-cols-2 w-full gap-4">
            {skills &&
              skills.length > 0 &&
              skills.map((skill) => {
                return (
                  <SkillCard
                    setEditProduct={setEditProduct}
                    skill={{ ...skill }}
                  />
                );
              })}
          </div>
        </div>
        {formOpen && (
          <div className=" fixed z-40 w-[90%] sm:w-[65%] left-[5%]  top-5 sm:left-[22%] h-[80rem]">
            <SkillForm
              editProduct={editProduct}
              setEditProduct={setEditProduct}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
