import React from "react";
import { FaDigitalOcean, FaEthereum, FaGuilded, FaLeaf } from "react-icons/fa";

const Specializion = () => {
  return (
    <div className="mx-1 mt-6 sm:mx-7 ">
      <h1 className="heading">
        {" "}
        <span className="text-myblack">My</span> Specializions
      </h1>

      <div className="  sm:gap-5 gap-1 grid  lg:grid-cols-4 grid-cols-2 text-start     mt-9  justify-center ">
        <div className="flex animate-jump-in flex-col hover:border-mytheme transition   border-mygrey p-3 sm:p-5 gap-4  border-[.1rem] rounded-2xl  justify-top align-middle">
          <div className="flex sm:p-2 justify-between align-middle">
            {" "}
            <h2 className="text-mytheme text-[1.1rem] sm:text-[1.2rem] font-semibold">
              {" "}
              FrontEnd Development
            </h2>
            <div className="flex justify-center align-middle ">
              <FaDigitalOcean className="text-myblack animate-bounce mt-1 text-[1.3rem]" />
            </div>
          </div>
          <p className="text-mygrey text-[.8rem]">
            {" "}
            Proficient in modern frontend tech, I specialize in transforming
            PDFs, XD, or Figma files into responsive websites using ReactJS,
            Redux, Next.js, and CSS frameworks like Bootstrap or Tailwind. From
            design to dynamic functionality, I ensure seamless user experiences
            across devices.
          </p>
        </div>
        <div className="flex animate-jump-in  hover:border-mytheme transition   flex-col basis-[23%] border-mygrey p-3 sm:p-5 gap-4  border-[.1rem] rounded-2xl  justify-top align-middle">
          <div className="flex sm:p-2 justify-between align-middle">
            {" "}
            <h2 className="text-mytheme text-[1.1rem] sm:text-[1.2rem] font-semibold">
              {" "}
              Backend Development
            </h2>
            <div className="flex justify-center align-middle ">
              <FaEthereum className="text-white animate-bounce mt-1 text-[1.3rem]" />
            </div>
          </div>
          <p className="text-mygrey text-[.8rem]">
            {" "}
            Skilled in Node.js/Express.js, I create MongoDB-driven APIs for web
            projects, ensuring seamless data management and robust functionality
          </p>
        </div>
        <div className="flex animate-jump-in flex-col basis-[23%]  hover:border-mytheme transition border-mygrey p-3 sm:p-5 gap-4  border-[.1rem] rounded-2xl  justify-top align-middle">
          <div className="flex sm:p-2 justify-between align-middle">
            {" "}
            <h2 className="text-mytheme text-[1.1rem] sm:text-[1.2rem] font-semibold">
              {" "}
              API Integration
            </h2>
            <div className="flex justify-center align-middle ">
              <FaGuilded className="text-myblack  hover:border-mytheme transition  animate-bounce mt-1 text-[1.3rem]" />
            </div>
          </div>
          <p className="text-mygrey text-[.8rem]">
            {" "}
            "To bridge frontend with backend, I employ contemporary methods for
            seamless API integration."
          </p>
        </div>
        <div className="flex animate-jump-in flex-col basis-[23%] hover:border-mytheme transition border-mygrey p-3 sm:p-5 gap-4  border-[.1rem] rounded-2xl  justify-top align-middle">
          <div className="flex sm:p-2 justify-between align-middle">
            {" "}
            <h2 className="text-mytheme text-[1.1rem] sm:text-[1.2rem] font-semibold">
              {" "}
              Deployment
            </h2>
            <div className="flex justify-center align-middle ">
              <FaGuilded className="text-myblack animate-bounce mt-1 text-[1.3rem]" />
            </div>
          </div>
          <p className="text-mygrey text-[.8rem]">
            {" "}
            I deploy web applications across Heroku, Hostinger, Vercel, and
            Netlify for optimal performance and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specializion;
