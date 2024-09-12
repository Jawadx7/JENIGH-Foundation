import "../../../asserts/css/client.scss";
import DonationCard from "../../../components/Donations/DonationCard";
import profile from "../../../asserts/images/user.png";
import "../../../App.css";
import { useState, useEffect } from "react";
import UpdateInfoCard from "./UpdateInfoCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ClientUser = () => {
  const [modalState, setModalState] = useState("closed");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState(null);
  const [userDonations, setUserDonations] = useState([]);
  const [allDonations, setAllDonations] = useState([]);
  const [commonDonations, setCommonDonations] = useState([]);
  const [totalDonationsAmount, setUserTotalDonationsAmount] = useState(0);

  const [navStatus, setNavStatus] = useState("closed");

  const getUserDonations = async (user_email) => {
    try {
      const userResponse = await fetch(
        `http://localhost:3001/users/${user_email}`
      );
      const userData = await userResponse.json();
      setUserDonations(userData.donations);
      setUserTotalDonationsAmount(userData.totalAmountDonated);

      const donationsResponse = await axios.get(
        "http://localhost:3001/donations/"
      );
      setAllDonations(donationsResponse.data);

      // getting common donations
      const commonDonations = donationsResponse.data.filter((donation) =>
        userData.donations.includes(donation._id)
      );
      setCommonDonations(commonDonations);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

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

      getUserDonations(email);
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
        <div className="hidden md:block sidebar md:w-auto transition-smooth flex-[1]">
          <span
            className="block md:hidden text-white text-[5rem] font-bold absolute top-5 right-10 hover:text-red-400"
            onClick={() => setNavStatus("closed")}
          >
            &times;
          </span>
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

          <div className="flex align-center justify-center flex-col text-white text-center mt-[5rem] text-3xl">
            <h1>You have made an overall donation amount of</h1>
            <span className="text-[3rem] font-bold mt-5">
              ${totalDonationsAmount}
            </span>
          </div>

          <div
            className="btn my-5 text-center absolute bottom-0 left-0 cursor-pointer"
            onClick={handleLogout}
          >
            Log Out
          </div>
        </div>

        {/* small screen menu slider */}
        <div
          className={`block md:hidden sidebar w-[80%] md:w-auto transition-smooth fixed top-0 z-10 ${
            navStatus === "closed" ? "left-[-100%]" : "left-0"
          }`}
        >
          <span
            className="block cursor-pointer md:hidden text-white text-[5rem] font-bold absolute top-5 right-10 hover:text-red-400"
            onClick={() => setNavStatus("closed")}
          >
            &times;
          </span>
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
          <div className="top flex align-center flex-col space-x-3 my-[3rem] absolute top-0 right-[1rem]">
            <span
              className="text-white px-3 text-5xl cursor-pointer"
              onClick={() => setNavStatus("opened")}
            >
              &#9776;
            </span>
            <Link
              id="link"
              to="/donations"
              className="text-teal-500 hover:text-teal-600"
            >
              ~~ Donations
            </Link>
            <Link
              id="link"
              to="/"
              className="text-teal-500 hover:text-teal-600"
            >
              ~~ Home
            </Link>
          </div>
          <div>
            {/* <h1>
              You have made a total donation of <span>$ 125,000.90</span>
            </h1> */}

            <div>
              {commonDonations.length ? (
                <div>
                  <h2 className="text-[2rem] font-bold mb-5">
                    Donations You have Contributed To: ({commonDonations.length}
                    )
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {commonDonations.map((donation) => (
                      <DonationCard key={donation._id} donation={donation} />
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h2 className="text-[3rem] mt-5">
                    You have not made any donations yet.
                  </h2>
                  <h2 className="text-[3rem] mt-5">
                    Checkout Our Donations List
                  </h2>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <div
        className={`modal z-20 absolute transform-center w-full h-[100vh] ${modalState} flex align-center justify-center shadow-bg`}
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
