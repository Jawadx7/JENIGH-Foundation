import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-900 flex align-center justify-between py-[3rem] px-[5%]">
      <div className="logo text-white">JENIGH</div>

      <ul className="flex align-center space-x-3">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/donations" className="text-white">
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
