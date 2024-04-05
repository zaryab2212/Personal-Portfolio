import React from "react";
// import educationImage from "../assest/img/education.gif"
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="eduction mt-6  " id="education">
      <h1 className="heading">
        {" "}
        <span className="text-myblack">My</span> Education
      </h1>
      <div className="education_content">
        <div className="education_left">
          <EducationCard
            Institute={"University of Sargodha"}
            year={"2016-2020"}
            degree={"BS Information Tecnology"}
          />
          <EducationCard
            Institute={"BISE Sargodha"}
            year={"2012-2014"}
            degree={"intermediate"}
          />
          <EducationCard
            Institute={"Central Model High School"}
            year={"2010-2012"}
            degree={"Matric "}
          />
        </div>
        <div className="education_right">
          <div className="education_image">
            <img src={"/images/education.gif"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
