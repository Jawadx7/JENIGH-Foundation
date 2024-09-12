import { Link, useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import "../asserts/css/donations.scss";
import { useEffect, useState } from "react";

const DonationPage = ({ donations }) => {
  const [donationsItem, setDonationsItem] = useState({});
  const { id } = useParams();
  // const donationsItem = donations.find(
  //   (donationsItem) => donationsItem._id.toString() === id
  // );

  useEffect(() => {
    fetch(`http://localhost:3001/donations/${id}`)
      .then((res) => res.json())
      .then((data) => setDonationsItem(data));
  }, [id]);

  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "100%",
          height: "60vh",
          background: `url(${donationsItem.bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="donation_banner flex align-center px-[5%]"
      ></div>

      <div className="donationContent px-[5%]">
        <div className="flex-col sm:flex-row flex align-center justify-between">
          <div className="flex align-center space-x-3 my-[3rem]">
            <p>~~</p>
            <Link to="/donations" className="text-teal-500 hover:text-teal-600">
              Back to Donations List
            </Link>
          </div>

          <Link
            to={`/makeDonation/${donationsItem._id}`}
            className="btn btn-secondary w-fit my-3"
          >
            <span>Make Donation</span>
          </Link>
        </div>

        <div>
          <div className="flex align-center space-x-5">
            <h6>Opened on {donationsItem.createdAt}</h6>
            <span
              style={{ fontSize: "1.5rem", fontWeight: "800" }}
              className="text-teal-600"
            >
              |
            </span>
            {donationsItem.closing ? (
              <h6>Closing on {donationsItem.closing}</h6>
            ) : (
              <p>No closing Date</p>
            )}
          </div>
          <h1 id="donation" style={{ fontSize: "3rem", fontWeight: "800" }}>
            {donationsItem.name}
          </h1>

          <div className="grid align-center grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex align-center space-x-5">
              <h1>${donationsItem.raised}</h1>
              <h1 className="text-teal-500">Raised</h1>
            </div>
            <div className="flex align-center space-x-5">
              <h1 className="text-red-400">Targetting</h1>
              <h1>${donationsItem.amount}</h1>
            </div>
            <div>
              {donationsItem.amount <= donationsItem.raised ? (
                <h1 className="text-teal-500">Target Reached</h1>
              ) : (
                <div className="flex align-center space-x-5">
                  <h1 className="text-red-400">
                    ${donationsItem.amount - donationsItem.raised}
                  </h1>
                  <h1 className="">To Go</h1>
                </div>
              )}
            </div>
          </div>

          <h3 className="my-[2rem]">
            {/* Beneficiary(ies): */}
            {/* {donationsItem.beneficiaries.map((beneficiary) => (
              <span key={Math.random() * 10}>{beneficiary}</span>
            ))} */}
          </h3>

          <div className="mt-[3rem]">
            <h3 className="mt-[2rem]">About this Campaign</h3>

            <p className="mb-[2rem]">{donationsItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
