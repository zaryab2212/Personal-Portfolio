import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { loginFuncAsync, registerFuncAsync } from "../../redux/auth/authSlice";
import { FallingLines, Oval } from "react-loader-spinner";

const AuthForm = ({ type = "login" }) => {
  const [Val, setVal] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const { user, error, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setVal({ ...Val, [e.target.name]: e.target.value });
  };

  //form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "register") {
      dispatch(registerFuncAsync(Val));
      navigate("/login", { replace: true });
    }
    if (type === "login") {
      dispatch(loginFuncAsync(Val));
    }
  };
  if (user) return <Navigate to="/" />;
  return (
    <div className="sm:max-w-[60%] w-[90%] mt-9 m-auto">
      <form
        className="flex flex-col justify-center align-middle gap-6 mt-8"
        onSubmit={handleSubmit}
      >
        <input
          className="py-2 px-6 rounded-xl border-mytheme border-[2px]"
          name="email"
          value={Val?.email}
          onChange={handleInput}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="py-2 px-6 rounded-xl border-mytheme border-[2px]"
          name="password"
          value={Val?.password}
          onChange={handleInput}
          type="password"
          placeholder="Password"
          required
        />

        {/* Error Display */}
        {error && (
          <p className="text-red-600 px-4">
            {" "}
            {error?.message || error?.error?.message}
          </p>
        )}
        <button className="py-2 px-6 rounded-xl bg-mytheme text-center border-[2px] text-white ">
          {loading ? (
            <div className="text-mythem mt-[-4] pt-[-3] w-10 m-auto">
              <Oval
                visible={true}
                secondaryColor="##ffffff"
                height="30"
                width="30"
                strokeWidth={3}
                color="#ffffff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : type === "login" ? (
            "Login"
          ) : (
            "Register"
          )}
        </button>
      </form>
      {type === "login" ? (
        <div className="mt-3">
          does not have an account?
          <Link to="/register">
            <span className="text-mytheme cursor-pointer"> Register here!</span>
          </Link>
        </div>
      ) : (
        <div className="mt-3">
          Already have an account?
          <Link to="/login">
            <span className="text-mytheme cursor-pointer"> Login here!</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
