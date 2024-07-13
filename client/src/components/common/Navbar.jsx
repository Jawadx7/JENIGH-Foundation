import { Link } from "react-router-dom";
import logo from "../../asserts/images/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md flex align-center justify-between py-[1rem] px-[5%] fixed top-0 w-full left-0 z-20">
      <img src={logo} alt="logo" className="w-[6rem]" />

      <ul className="flex align-center space-x-5">
        <Link to="/" className="text-black hover:text-gray-500">
          Home
        </Link>
        <Link to="/donations" className="text-black hover:text-gray-500">
          Donations
        </Link>
      </ul>

      <div className="profile">
        <img src="" alt="profileImg" />
      </div>
    </header>
  );
};

export default Navbar;
