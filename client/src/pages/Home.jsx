import "../asserts/css/home.scss";
import "../App.css";
import MrQuayson from "../asserts/images/Mr-Quayson.jpeg";
import HenryImg from "../asserts/images/Henry.jpg";
import JawadImg from "../asserts/images/Jawad.jpeg";
import JosephImg from "../asserts/images/Joseph.jpg";
import Omah from "../asserts/images/omah.jpg";
import Hill from "../asserts/images/hill.jpg";
import Mohammed from "../asserts/images/Mohammed.jpg";
import aboutImg1 from "../asserts/images/about-img-1.jpeg";
import aboutImg2 from "../asserts/images/about-img-2.jpeg";
import aboutImg3 from "../asserts/images/about-img-3.jpeg";
import aboutImg4 from "../asserts/images/about-img-4.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import DonationCard from "../components/Donations/DonationCard";
import logo from "../asserts/images/logo.png";
import contactImg from "../asserts/images/about-img-4.jpg";
import { useEffect, useState } from "react";

const Home = ({ donations }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPic, setUserPic] = useState("");
  const [navStatus, setNavStatus] = useState("closed");
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
    <>
      {/* Navbar  */}

      <header className="bg-white shadow-md flex align-center justify-between py-[1rem] px-[5%] fixed top-0 w-full left-0 z-20">
        <span
          className="block sm:hidden text-4xl cursor-pointer"
          onClick={() => setNavStatus("opened")}
        >
          &#9776;
        </span>
        <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />

        <ul className="hidden sm:flex align-center space-x-5">
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

        {/* small screen nav slider menu */}
        <ul
          className={`fixed transition-smooth sm:hidden top-0 ${
            navStatus === "closed" ? "left-[-100%]" : "left-0"
          } w-[80%] h-[100vh] bg-white z-10 shadow-md flex flex-col space-y-10 p-[5rem]`}
        >
          <span
            className="absolute top-5 right-10 hover:text-red-500 text-[5rem]"
            onClick={() => setNavStatus("closed")}
          >
            &times;
          </span>
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
            <h3>Empower Communities</h3>
            <p>
              Empowering individuals through education, resources, and support
              to build self-sufficient communities.
            </p>
          </div>
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Support Sustainable Change</h3>
            <p>
              Fostering long-term development projects that create lasting
              impacts and improve lives for future generations.
            </p>
          </div>
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Provide Lifesaving Aid</h3>
            <p>
              Delivering critical assistance to those in need, ensuring access
              to essentials like food, water, and healthcare.
            </p>
          </div>
          <div className="value_box">
            <div className="icon">&#9776;</div>
            <h3>Inspire Global Action</h3>
            <p>
              Encouraging collective efforts to address global challenges,
              promoting unity, and driving meaningful change worldwide.
            </p>
          </div>
        </div>
      </div>

      <section className="about" id="about">
        <div className="images">
          <img src={aboutImg1} alt="" />
          <img src={aboutImg2} alt="" />
          <img src={aboutImg3} alt="" />
          <img src={aboutImg4} alt="" />
        </div>

        <div className="about_text">
          <h2>Raise Your Hand to Save</h2>
          <h1>The Poor Around The World</h1>

          <p className="mt-[2rem]">
            At JENINIGH Foundation, we are dedicated to making a positive impact
            in the world. Our mission is to empower communities, drive
            meaningful change, and create opportunities for those in need. With
            a focus on compassion and innovation, we strive to address the
            challenges faced by the most vulnerable, offering support and
            resources to build brighter futures.
          </p>

          <p className="mt-[2rem]">
            We believe in the power of collective action and the difference a
            single act of kindness can make. Through our efforts, we aim to
            inspire hope, foster growth, and contribute to a more just and
            equitable society.
          </p>

          <p className="mt-[2rem]">
            Join us on this journey as we work together to create lasting
            change.
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
                <img src={Hill} alt="" />
                <div className="name">Gyamfi Jonathan Douglas</div>
                <small>Frontend Developer</small>
              </div>
              <div className="member">
                <img src={JosephImg} alt="" />
                <div className="name">Naatey Joseph Angmor</div>
                <small>Public Relations Officer</small>
              </div>

              <div className="member">
                <img src={Omah} alt="" />
                <div className="name">Effah Clement Poku</div>
                <small>Advisor</small>
              </div>
              <div className="member">
                <img src={HenryImg} alt="" />
                <div className="name">Boakye Henry</div>
                <small>Database Manager</small>
              </div>
              <div className="member">
                <img src={Mohammed} alt="" />
                <div className="name">Mohammed Iddriss Adam</div>
                <small>Designer and Illustrator</small>
              </div>
            </div>
          </div>

          <div className="managers_container">
            <div className="manager_card">
              <img src={MrQuayson} alt="" />
              <div className="name">Mr. Ebenezer Quayson</div>
              <p>Lecturer/Supervisor</p>
              <a
                target="_blank"
                href="https://uenr.edu.gh/staff/ebenezer-quayson/"
                className="text-primary_green underline"
              >
                Learn More
              </a>
            </div>
            {/* <div className="manager_card">
              <img src={img} alt="" />
              <div className="name">Eugene Smith</div>
              <p>Assistant Supervisor</p>
              <a
                // target="_blank"
                href=""
                className="text-primary_green underline"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Donations List */}
      <h2 className="text-center text-[3rem]">
        Available Doantion <strong>Campaigns</strong>
      </h2>
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
