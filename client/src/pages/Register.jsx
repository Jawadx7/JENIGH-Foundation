import RegisterForm from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import signupImg from "../asserts/images/sign_up-white.png";

const Register = () => {
  return (
    <main className="bg-teal-400 w-full h-[100vh] flex align-center justify-center p-[2rem]">
      <div className="bg-teal-500 shadow-lg rounded-3xl w-[70%] md:h-[80vh] grid grid-cols-1 md:grid-cols-2">
        <div className="p-[2rem] hidden align-center justify-center relative md:flex">
          <img
            src={signupImg}
            alt=""
            className="absolute w-[100%] h-[100%] rounded-b-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>

        <div className="p-[1rem] md:p-[2rem] flex align-center justify-center">
          <div>
            <RegisterForm />
            <div className="flex align-center space-x-3 mt-5">
              <p className="text-black">Already have an account ?</p>
              <Link className="text-white" to="/login">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
