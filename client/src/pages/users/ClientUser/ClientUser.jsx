import "../../../asserts/css/client.scss";
import ClientDonationsList from "./clientDonationsList";
import profile from "../../../asserts/images/user.png";
import "../../../App.css";
import { useState, useEffect } from "react";
import UpdateInfoCard from "./UpdateInfoCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ClientUser = () => {
  const [modalSate, setModalState] = useState("closed");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      const email = localStorage.getItem("email");
      const bio = localStorage.getItem("bio") || "";
      const Picture = localStorage.getItem("profilePictureUrl") || profile;

      if (!token || !username || !email) {
        navigate("/login");
        return;
      }

      setUsername(username);
      setEmail(email);
      setToken(token);
      setBio(bio);
      setUrl(Picture);
    } catch (error) {
      navigate("/login");
    }
  }, [navigate]);

  const openModal = () => {
    setModalState("opened");
  };

  const closeModal = () => {
    setModalState("closed");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="clientPage relative">
        <div className="sidebar relative">
          <img
            src={url}
            alt="profile pic"
            className="w-[50%] mx-auto rounded-full"
          />

          <div className="userInfo my-[1.5rem]">
            <h1>{username}</h1>
            <h3>{email}</h3>
            <p>{bio}</p>
          </div>

          <div
            className="btn my-5 w-fit text-center mx-auto cursor-pointer"
            onClick={openModal}
          >
            Update Info
          </div>

          <div
            className="btn my-5 text-center absolute bottom-0 left-0 cursor-pointer"
            onClick={handleLogout}
          >
            Log Out
          </div>
        </div>

        <main className="relative">
          <div className="flex align-center flex-col space-x-3 my-[3rem] absolute top-0 right-[1rem]">
            <Link to="/donations" className="text-teal-500 hover:text-teal-600">
              ~~ Donations List
            </Link>
            <Link to="/" className="text-teal-500 hover:text-teal-600">
              ~~ Home
            </Link>
          </div>
          <h1>
            You have made a total donation of <span>$ 125,000.90</span>
          </h1>

          <ClientDonationsList />
        </main>
      </div>

      <div
        className={`modal absolute transform-center w-full h-[100vh] ${modalSate} flex align-center justify-center shadow-bg`}
      >
        <div className="closebtn" onClick={closeModal}>
          &times;
        </div>
        <div className="bg-white shadow-md p-[2rem] z-30 w-[95%] md:w-[70%] mx-auto">
          <UpdateInfoCard />
        </div>
      </div>
    </>
  );
};

export default ClientUser;
