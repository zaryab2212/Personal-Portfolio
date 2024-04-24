import React from "react";

const ProjectLoadingCard = () => {
  return (
    <>
      <div className="md:flex border-[1px] animate-pulse rounded-xl p-1 border-mygrey justify-start mt-4 align-middle gap-4">
        {" "}
        <div className="md:w-[45%] m-3  relative basis-[50%] flex-col object-cover">
          <h2 className="bg-mygrey opacity-20 w-[30%] mb-3 mt-6 font-semibold text-center text-[1.5rem]"></h2>{" "}
          <div className="w-[90%] h-[12rem] bg-mygrey opacity-20  "></div>
        </div>
        {/* right side */}
        <div className="text-[.9rem]  basis-[50%] mt-4 flex-col justify-start align-middle">
          {/* Discription */}
          <div className="  gap-5 flex mt-2  h-[1.2rem]  justify-start align-middle bg-mygrey rounded-lg w-full opacity-20 "></div>
          <div className="  gap-5 flex mt-2  h-[1.2rem]  justify-start align-middle bg-mygrey rounded-lg w-full opacity-20 "></div>
          <div className="  gap-5 flex mt-2  h-[1.2rem]  justify-start align-middle bg-mygrey rounded-lg w-full opacity-20 "></div>
          <div className="  gap-5 flex mt-2  h-[1.2rem]  justify-start align-middle bg-mygrey rounded-lg w-[60%] opacity-20 "></div>

          {/* Tecnologies */}
          <div className="  gap-3  grid text-[.9rem]  grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2 justify-start align-middle">
            <div className="bg-mygrey opacity-20  h-[1.5rem] w-[4.5rem] rounded-lg"></div>
            <div className="bg-mygrey opacity-20  h-[1.5rem] w-[4.5rem] rounded-lg"></div>
            <div className="bg-mygrey opacity-20  h-[1.5rem] w-[4.5rem] rounded-lg"></div>
            <div
              className="bg-mygrey opacity-20  h-[1.5rem] w-[4.5rem] rounded-lg
           "
            ></div>
          </div>
          {/* feature */}
          <div className="  gap-5 flex-col border-opacity-10 border-[1px] border-myblack   p-4 rounded-3xl mt-1 justify-start align-middle"></div>

          {/* buttons
           */}
          <div className="my-3 flex justify-center align-middle gap-3">
            {" "}
            <button className="w-full bg-mygrey  opacity-20 border-[1px] border-mytheme  p-2  text-mygrey font-semibold rounded-3xl">
              Visit project
            </button>{" "}
            <button className="w-full bg-mygrey opacity-20  border-[1px] border-mytheme  p-2  text-mygrey font-semibold rounded-3xl">
              Visit Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectLoadingCard;
