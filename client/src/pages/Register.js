import React from "react";
import AuthForm from "../component/form/AuthForm";

const Register = () => {
  return (
    <>
      <div>
        <h1 className="heading mt-9 text-center">
          Please <span className="text-myblack">Register</span> here!
        </h1>
        <AuthForm type={"register"} />
      </div>
    </>
  );
};

export default Register;
