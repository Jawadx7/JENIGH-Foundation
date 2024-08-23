import logo from "../../asserts/images/logo.png";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#212121] w-full mt-[2rem] py-[7%] px-[3%] text-white grid align-center grid-cols-1 md:grid-cols-3 gap-[2rem]">
      <div>
        <div>
          <h2 className="text-[4rem]">About Us</h2>
          <p>
            We are the Organization which help people in their Bad Times and we
            are so much Proud of it
          </p>
        </div>

        <ul className="mt-[3rem]">
          <li
            className="flex space-x-5 align-center my-[2rem]"
            style={{ fontSize: "2rem", fontWeight: "600" }}
          >
            <div className="icon text-[#91be51]">&#9776;</div>
            <span>Empowering Change, Donate Today.</span>
          </li>
          <li
            className="flex space-x-5 align-center my-[2rem]"
            style={{ fontSize: "2rem", fontWeight: "600" }}
          >
            <div className="icon text-[#91be51]">&#9776;</div>
            <span>Together, We Build.</span>
          </li>
          <li
            className="flex space-x-5 align-center my-[2rem]"
            style={{ fontSize: "2rem", fontWeight: "600" }}
          >
            <div className="icon text-[#91be51]">&#9776;</div>
            <span>Give Hope, Change Lives.</span>
          </li>
        </ul>
      </div>

      <div
        className="text-center"
        style={{ fontSize: "4rem", fontWeight: "800" }}
      >
        <h1>JENIGH</h1>
        <h1 style={{ color: "#91be51" }}>FOUNDATION</h1>
        <div className="bg-white w-[15rem] h-[15rem] rounded-full flex align-center justify-center mx-auto">
          <img src={logo} alt="" style={{ width: "55%" }} />
        </div>
      </div>

      <div className="flex align-center justify-center space-x-[5rem]">
        <li
          className="hover:text-[#91be51] cursor-pointer"
          style={{ fontSize: "4rem", fontWeight: "800" }}
        >
          <a href="https://www.facebook.com" target="_blank">
            <Facebook />
          </a>
        </li>
        <li
          className="hover:text-[#91be51] cursor-pointer"
          style={{ fontSize: "4rem", fontWeight: "800" }}
        >
          <a href="https://www.x.com" target="_blank">
            <Twitter />
          </a>
        </li>
        <li
          className="hover:text-[#91be51] cursor-pointer"
          style={{ fontSize: "4rem", fontWeight: "800" }}
        >
          <a href="https://www.instagram.com" target="_blank">
            <Instagram />
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
