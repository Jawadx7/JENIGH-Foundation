import "../asserts/css/home.scss";
import "../App.css";
import img from "../asserts/images/person_1.jpg";
import HenryImg from "../asserts/images/Henry.jpg";
import JawadImg from "../asserts/images/Jawad.jpeg";
import JosephImg from "../asserts/images/Joseph.jpg";
import aboutImg1 from "../asserts/images/about-img-1.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import DonationCard from "../components/Donations/DonationCard";
import logo from "../asserts/images/logo.png";
import contactImg from "../asserts/images/about-img-3.jpg";
import { useEffect, useState } from "react";

const Home = ({ donations }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPic, setUserPic] = useState("");
  useEffect(() => {
    try {
      const email = localStorage.getItem("email");
      fetch(`http://localhost:3001/users/user/${email}`)
        .then((res) => res.json())
        .then((data) => setUserPic(data.profilePicture));
      setUserEmail(email);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {/* Navbar  */}

      <header className="bg-white shadow-md flex align-center justify-between py-[1rem] px-[5%] fixed top-0 w-full left-0 z-20">
        <img src={logo} alt="logo" className="w-[6rem]" />

        <ul className="flex align-center space-x-5">
          <a href="/#home" className="link text-black hover:text-gray-500">
            Home
          </a>
          <a href="#about" className="link text-black hover:text-gray-500">
            About
          </a>
          <a href="#donations" className="link text-black hover:text-gray-500">
            Donations
          </a>
          <a href="#contact" className="link text-black hover:text-gray-500">
            Contact
          </a>
        </ul>

        <div>
          {userEmail ? (
            <Link to="/users/clientUser">
              <img
                src={userPic}
                className="w-24 h-24 bg-primary_green rounded-full"
              />
            </Link>
          ) : (
            <Link to={"/login"} className="btn btn_primary">
              sign in
            </Link>
          )}
        </div>

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

      <div className="hero" id="home">
        <h1>Donate To Help The Less Fortunate Around The World.</h1>
        <a
          href="#donations"
          className="btn btn_primary cursor-pointer w-fit mx-auto mt-[3rem]"
        >
          Make Donation
        </a>

        <div className="values">
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Save the world</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              reprehenderit?
            </p>
          </div>
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Save the world</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              reprehenderit?
            </p>
          </div>
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Save the world</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              reprehenderit?
            </p>
          </div>
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Save the world</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              reprehenderit?
            </p>
          </div>
        </div>
      </div>

      <section className="about" id="about">
        <div className="images">
          <img src={aboutImg1} alt="" />
          <img src={aboutImg1} alt="" />
          <img src={aboutImg1} alt="" />
          <img src={aboutImg1} alt="" />
        </div>

        <div className="about_text">
          <h2>Raise Your Hand to Save</h2>
          <h1>The Poor Around The World</h1>

          <p className="mt-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsa,
            et nam optio quibusdam error nesciunt, veniam iure possimus dolor
            aperiam fugit autem sapiente natus doloremque illum porro eaque
            magni.
          </p>
        </div>
      </section>

      {/* OUR TEAM */}

      <section className="section team">
        <h2 className="section-title">
          Meet Our Management Team and <strong>Developers</strong>
        </h2>

        <div className="container">
          <div className="members_container">
            <div className="row">
              <div className="member">
                <img src={JawadImg} alt="" />
                <div className="name">Nassam Mohammed Jawad</div>
                <small>Project Manager</small>
              </div>
              <div className="member">
                <img src={img} alt="" />
                <div className="name">Gyamfi Jonathan Douglas</div>
                <small>Frontend Developer</small>
              </div>
              <div className="member">
                <img src={JosephImg} alt="" />
                <div className="name">Naatey Joseph Angmor</div>
                <small>Public Relations Officer</small>
              </div>
            </div>
            <div className="row">
              <div className="member">
                <img src={img} alt="" />
                <div className="name">Effah Clement Poku</div>
                <small>Information</small>
              </div>
              <div className="member">
                <img src={HenryImg} alt="" />
                <div className="name">Boakye Henry</div>
                <small>Database Manager</small>
              </div>
              <div className="member">
                <img src={img} alt="" />
                <div className="name">Mohammed Iddriss Adam</div>
                <small>Designer and Illustrator</small>
              </div>
            </div>
          </div>

          <div className="managers_container">
            <div className="manager_card">
              <img src={img} alt="" />
              <div className="name">Mr. Emmanuel Quayson</div>
              <p>Supervisor</p>
            </div>
            <div className="manager_card">
              <img src={img} alt="" />
              <div className="name">Dr. Eugene Angelina Smith</div>
              <p>Assistant Supervisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donations List */}
      <section id="donations">
        {donations.length ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mb-[5rem]">
              {donations.map((donationItem) => (
                <DonationCard key={donationItem._id} donation={donationItem} />
              ))}
            </div>

            <Link to="donations" className="btn btn-secondary w-fit mx-auto">
              View More
            </Link>
          </div>
        ) : (
          <h1 className="text-[2rem] text-center">
            NO Donation Available yet...
          </h1>
        )}
      </section>

      {/* Contact Us */}

      <div className="grid grid-cols-1 md:grid-cols-2" id="contact">
        <div className="contact_form p-[3rem] bg-[#212121] text-white">
          <h1>Send Us A Message</h1>
          <form className="m-[1rem]">
            <input
              type="text"
              placeholder="Full Name"
              className="my-[1.5rem] outline-none p-5 bg-gray-300 text-[#212121]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="my-[1.5rem] outline-none p-5 bg-gray-300 text-[#212121]"
            />
            <textarea
              placeholder="Your Message ..."
              className="my-[1.5rem] outline-none p-5 bg-gray-300 text-[#212121] w-full h-[15rem]"
            ></textarea>

            <button
              type="submit"
              className="btn btn_primary"
              onClick={() => alert("message sent")}
            >
              Send
            </button>
          </form>
        </div>
        <div className="contact_img flex align-center justify-center">
          <img src={contactImg} alt="" />
        </div>
      </div>

      {/* footer */}

      <Footer />
    </>
  );
};

export default Home;
