import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";
import loginImg from "../asserts/images/login-white.png";

const Login = () => {
  return (
    <main className="bg-teal-400 w-full h-[100vh] flex align-center justify-center p-[2rem]">
      <div className="bg-teal-500 shadow-lg rounded-3xl w-[70%] h-[80vh] grid grid-cols-1 md:grid-cols-2">
        <div className="p-[2rem] flex align-center justify-center relative">
          <img
            src={loginImg}
            alt=""
            className="absolute w-[100%] h-[100%] rounded-b-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>

        <div className="p-[1rem] md:p-[2rem] flex align-center justify-center">
          <div>
            <LoginForm />
            <div className="flex align-center space-x-3 mt-5">
              <p className="text-black">Don't have an account ?</p>
              <Link className="text-white" to="/register">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
