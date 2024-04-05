import React from "react";

const AddNewForm = ({ func, type }) => {
  return (
    <p className="sm:text-[1rem] text-[.8rem] text-right mx-5 mb-4">
      Are you Admin ?
      <span
        onClick={func}
        className="cursor-pointer sm:text-[1.2rem] text-[1rem] underline text-mytheme"
      >
        Add latest {type} here
      </span>{" "}
    </p>
  );
};

export default AddNewForm;
