import React from "react";
import SkillForm from "../component/form/SkillForm";

const SkillFormPage = () => {
  return (
    <>
      <>
        <div>
          <h1 className="heading mt-9 text-center">
            Please Add <span className="text-myblack">new Skill</span> here!
          </h1>
          <SkillForm />
        </div>
      </>
    </>
  );
};

export default SkillFormPage;
