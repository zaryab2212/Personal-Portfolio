import React from "react";

const TestimonialLoadingCard = () => {
  return (
    <div className="sm:flex mt-6 animate-pulse justify-between text-mygrey align-middle ">
      <div className="basis-[50%]">
        <div className="p-4 border-3 rounded-l-full m-auto bg-mygrey opacity-20 rounded-b-full object-cover  h-[22rem] w-[22rem]"></div>
      </div>
      <div className=" basis-[50%] flex-col p-2 sm:pl-2 sm:p-9 justify-between align-middle gap-4">
        {/* <p className=" rounded-lg   w-[3rem] h-[1.2rem]"></p>
        <p className="  rounded-lg  w-[3rem] h-[1.2rem]"></p>
        <p className="  rounded-lg  w-[3rem] h-[1.2rem]"></p>
        <p className="  rounded-lg  w-[3rem] h-[1.2rem]"></p> */}
        <div className="mt-7">
          <div className="font font-semibold text-mytheme w-[3rem] h-[1.2rem] "></div>
          <div className="w-full rounded-lg mt-1  h-[1.4rem] bg-mygrey opacity-20"></div>
          <div className="w-full rounded-lg mt-1  h-[1.4rem] bg-mygrey opacity-20"></div>
          <div className="w-full rounded-lg  mt-1 h-[1.4rem] bg-mygrey opacity-20"></div>
          <div className=" mt-5  ">
            <button className="px-6 h-[1.5rem]    py-2 mx-2 border-3 bg-mygrey opacity-20 rounded-l-full m-auto rounded-b-full object-cover "></button>
            <button className="px-6 h-[1.5rem]  opacity-20   py-2 mx-2 border-3 bg-mygrey opacity-20text-white  rounded-l-full m-auto rounded-b-full object-cover">
              {" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialLoadingCard;
