import React from "react";

const SkillLoadingCard = () => {
  return (
    <div className="flex relative flex-col opacity-20 animate-pulse  p-3 w-[10rem]  justify-center m-auto align-middle gap-2 ">
      <div className="w-[9rem] bg-mygrey  animate-pulse rounded-full    relative m-auto h-[9rem]"></div>
      <div className=" text-center rounded-lg w-[8.2rem] h-[1.2rem] bg-mygrey"></div>
      <div className=" text-center rounded-lg w-[8rem] h-[1.1rem] bg-mygrey "></div>
    </div>
  );
};

export default SkillLoadingCard;
