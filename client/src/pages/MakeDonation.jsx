import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Message from "../components/Message";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router";

import { PaystackButton } from "react-paystack";

const MakeDonation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donation, setDonation] = useState({});
  const [donationAmount, setDonationAmount] = useState(0);
  const [phone, setPhone] = useState("");
  const [network, setNetwork] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [userDonations, setUserDonations] = useState([]);

  const publicKey = "pk_test_a43d8a6be2f829f2a615d3937fbdabf960c205da";
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:3001/users/${email}`)
      .then((res) => res.json())
      .then((data) => setUserDonations(data.donations));

    setLoading(true);

    axios
      .get(`http://localhost:3001/donations/${id}`)
      .then((response) => {
        setDonation(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateUserDonations = () => {
    console.log(userDonations);
    axios
      .put(`http://localhost:3001/users/updateDonations/${email}`, {
        donations: userDonations,
      })
      .then((response) => {
        console.log("Donations updated successfully", response.data);
      })
      .catch((error) => console.log("Can't update donations list", error));
  };

  // const componentProps = {
  //   email: donation.email || "default@example.com",
  //   amount: donationAmount * 100,
  //   metadata: {
  //     phone,
  //     custom_fields: [
  //       {
  //         display_name: "Donation Amount",
  //         variable_name: "donation_amount",
  //         value: donationAmount,
  //       },
  //     ],
  //   },
  //   publicKey,
  //   text: "Make Donation",
  //   onSuccess: () => alert("Thanks for your donation!"),
  //   onClose: () => alert("You closed the payment window."),
  // };

  const handleMakeDonation = (e) => {
    e.preventDefault();
    setLoading(true);
    if (donationAmount == 0) {
      setMessage("All fields are equired");
      setLoading(false);
    } else {
      const preAmount = donation.raised;
      const newAmount = preAmount + Number(donationAmount);
      axios
        .put(`http://localhost:3001/donations/update/${id}`, {
          raised: newAmount,
        })
        .then(() => {
          // console.log(results);
          userDonations.push(donation);
          updateUserDonations();
          window.location.reload();
        })
        .catch((error) => console.log("cant update", error));
      setMessage("");
      // console.log(donationAmount, network);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div
        style={{
          width: "100%",
          height: "30vh",
          background: `url(${donation.bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="donation_banner flex align-center px-[5%]"
      ></div>

      <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-[5%]">
        <div>
          <h1 id="donation" style={{ fontSize: "3rem", fontWeight: "800" }}>
            {donation.name}
          </h1>
          <div className="flex align-center space-x-5 text-[3rem] font-[700]">
            <h1 className="text-red-400">Targetting</h1>
            <h1>${donation.amount}</h1>
          </div>
          <div className="flex align-center space-x-5 text-[3rem] font-[700]">
            <h1>${donation.raised}</h1>
            <h1 className="text-teal-500">Raised</h1>
          </div>
          <div className="text-[3rem] font-[700]">
            {donation.amount <= donation.raised ? (
              <h1 className="text-teal-500">Target Reached</h1>
            ) : (
              <div className="flex align-center space-x-5">
                <h1 className="text-red-400">
                  ${donation.amount - donation.raised}
                </h1>
                <h1 className="">To Go</h1>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleMakeDonation}>
          <h1 className="text-[3rem] font-[600] text-center">
            Make a Donation With MTN MoMo Here ...
          </h1>
          <Message message={message} />
          <div className="" onSubmit={handleMakeDonation}>
            {/* select network */}
            {/* <div className="flex align-center space-x-3">
              <label htmlFor="Network">Network:</label>
              <span className="text-red-500">*</span>
            </div>
            <select
              id="Network"
              className="w-full mt-[1rem] bg-gray-200 outline-none p-[1rem]"
              required
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="">Select</option>
              <option value="mtn">MTN MoMo</option>
              <option value="telecel">Telecel Cash</option>
              <option value="paypal">Paypal</option>
            </select> */}
            {/* select network ends*/}

            {/* input */}
            <div className="my-[1rem]">
              <div className="flex align-center space-x-3">
                <label htmlFor="Amount">Amount:</label>
                <span className="text-red-500">*</span>
              </div>
              <input
                id="Amount"
                type="number"
                required
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
              />
            </div>
            {/* input end */}

            {/* input */}
            <div className="my-[1rem]">
              <div className="flex align-center space-x-3">
                <label htmlFor="phone">Phone Number:</label>
                <span className="text-red-500">*</span>
              </div>
              <input
                id="phone"
                type="number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
              />
            </div>
            {/* input end */}

            <button
              // {...componentProps}
              className="btn mt-3 w-[60%] mx-auto text-center"
              type="submit"
            >
              Send Money
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default MakeDonation;
