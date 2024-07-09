import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="bg-[#212121] w-full h-[100vh] flex align-center justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="bg-white p-5">
          <LoginForm />
          <div className="flex align-center justify-center space-x-3 mt-5">
            <p>Don't have an account ?</p>
            <Link to="/register" className="text-teal-500 hover:text-black">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="bg-teal-800 p-2 p-5"></div>
      </div>
    </main>
  );
};

export default Login;
