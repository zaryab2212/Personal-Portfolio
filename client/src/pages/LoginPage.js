import React from "react";
import AuthForm from "../component/form/AuthForm";

const LoginPage = () => {
  return (
    <>
      <div>
        <h1 className="heading mt-9 text-center">
          Please <span className="text-myblack">Login</span> here!
        </h1>
        <AuthForm />
      </div>
    </>
  );
};

export default LoginPage;
