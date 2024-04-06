import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Testimonial = ({ data, handleNext, handlePrev }) => {
  return (
    <>
      <div className="sm:flex mt-6 justify-between text-mygrey align-middle ">
        <div className="basis-[50%]">
          <img
            src={data?.image}
            className="p-4 border-3 rounded-l-full m-auto rounded-b-full object-cover  h-[22rem] w-[22rem]"
          />
        </div>
        <div className=" basis-[50%] flex-col p-2 sm:pl-2 sm:p-9 justify-between align-middle gap-4">
          <p>"{data?.comment}"</p>
          <div className="mt-7">
            <h3 className="font font-semibold text-mytheme text-[1.2rem] ">
              {data?.organization}
            </h3>
            <p>
              {data?.name} <span>({data?.designation}) </span>
            </p>
            <div className=" mt-5  ">
              <button
                onClick={handleNext}
                className="px-6 cursor-pointer hover:animate-bounce hover:transition   py-2 mx-2 border-3 bg-mytheme text-white  rounded-l-full m-auto rounded-b-full object-cover "
              >
                <FaLongArrowAltLeft />
              </button>
              <button
                onClick={handlePrev}
                className="px-6 cursor-pointer hover:animate-bounce hover:transition   py-2 mx-2 border-3  bg-mytheme text-white  rounded-l-full m-auto rounded-b-full object-cover"
              >
                {" "}
                <FaLongArrowAltRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
