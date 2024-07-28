import { Link } from "react-router-dom";
import logo from "../../asserts/images/logo.png";
// import img from "../../asserts/images/person_1.jpg";
import "../../asserts/css/navbar.scss";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md flex align-center justify-between py-[1rem] px-[5%] fixed top-0 w-full left-0 z-20">
      <img src={logo} alt="logo" className="w-[6rem]" />

      <ul className="flex align-center space-x-5">
        <Link to="/" className="link text-black hover:text-gray-500">
          Home
        </Link>
        <Link to="/donations" className="link text-black hover:text-gray-500">
          Donations
        </Link>
      </ul>

      <Link to={"/login"} className="btn btn_primary">
        sign in
      </Link>

      {/* <div>
        {User ? (
          <Link to="/users/clientuser">
            <img
              src={img}
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full"
            />
          </Link>
        ) : (
          <Link to={"/login"} className="btn btn_primary">
            sign in
          </Link>
        )}
      </div> */}
    </header>
  );
};

export default Navbar;
