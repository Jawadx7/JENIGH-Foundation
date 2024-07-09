import RegisterForm from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="bg-[#212121] w-full h-[100vh] flex align-center justify-center flex-col p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="bg-white p-5">
          <RegisterForm />
          <div className="flex align-center justify-center space-x-3 mt-5">
            <p>Already have an account ?</p>
            <Link to="/login" className="text-teal-500 hover:text-black">
              Login
            </Link>
          </div>
        </div>
        <div className="bg-teal-800 p-5"></div>
      </div>
    </main>
  );
};

export default Register;
