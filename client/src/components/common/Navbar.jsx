import { Link } from "react-router-dom";
import logo from "../../asserts/images/logo.png";
// import img from "../../asserts/images/person_1.jpg";
import "../../asserts/css/navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPic, setUserPic] = useState("");
  useEffect(() => {
    try {
      const email = localStorage.getItem("email");
      // fetch(`http://localhost:3001/users/user/${email}`)
      //   .then((res) => res.json())
      //   .then((data) => setUserPic(data.profilePicture));
      setUserEmail(email);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <header className="bg-white shadow-md flex align-center justify-between py-[1rem] px-[5%] fixed top-0 w-full left-0 z-20">
      <img src={logo} alt="logo" className="w-[6rem]" />

      <ul className="flex align-center space-x-5">
        <Link to="/" className="link text-black hover:text-gray-500">
          Home
        </Link>
        {/* <Link to="/donations" className="link text-black hover:text-gray-500">
          Donations
        </Link> */}
      </ul>

      <div>
        {userEmail ? (
          <Link to="/users/clientUser">
            <img
              src={userPic}
              className="w-16 h-16 sm:w-24 sm:h-24 bg-primary_green rounded-full"
            />
          </Link>
        ) : (
          <Link to={"/login"} className="btn btn_primary">
            sign in
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
