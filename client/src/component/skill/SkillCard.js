import React, { useState } from "react";
import { FaRegStar, FaStar, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";

import SkillForm from "../form/SkillForm";
import { useDispatch } from "react-redux";

import {
  removeSkillAsync,
  skillFormBoxOpen,
} from "../../redux/skills/skillSlice";

const SkillCard = ({ skill, setEditProduct }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  const handleEdit = (e) => {
    setEditProduct(e);
    dispatch(skillFormBoxOpen());
  };

  return (
    // <div className="skillCard_container">
    <div className="flex relative flex-col   p-3 w-[10rem]  justify-center m-auto align-middle gap-2 ">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="w-[9rem]  relative m-auto h-[9rem]"
      >
        <img
          src={skill?.images}
          className={`object-cover animate-wiggle animate-infinite w-[9rem] rounded-full
            h-[9rem]`}
        />
        {isHover && (
          <div className="flex  rounded-lg absolute justify-between w-full p-2 text-[1.3rem] bottom-0 bg-opacity-60 bg-mygrey  align-middle ">
            <MdEditDocument
              onClick={() => handleEdit(skill)}
              className="text-mytheme hover:opacity-60  cursor-pointer"
            />
            <MdDeleteForever
              onClick={() => dispatch(removeSkillAsync(skill._id))}
              className="text-red-600 hover:opacity-60 cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="text-myblack text-center">{skill?.name}</div>
      <div className="flex  text-orange-400 text-[.9rem] gap-1 justify-start align-baseline">
        {new Array(5)
          .fill()
          .map((_, i) =>
            i + 1 > skill.stars ? <FaRegStar key={i} /> : <FaStar key={i} />
          )}

        <span className="text-myblack mx-2 mt-[.1rem]  text-[.7rem] ">
          ({skill?.stars})
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
