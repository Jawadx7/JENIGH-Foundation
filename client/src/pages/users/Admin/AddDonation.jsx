import React, { useState } from "react";
import axios from "axios";

const AddDonation = () => {
  const [name, setDonationName] = useState("");
  const [cause, setCause] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [raised, setRaised] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [closing, setClosing] = useState("");
  const [bannerImg, setBannerImg] = useState("");

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const beneficiariesList = beneficiaries.split(" ");
    axios
      .post("http://localhost:3001/api/donations/new", {
        name,
        cause,
        description,
        amount,
        raised,
        beneficiaries: beneficiariesList,
        closing,
        bannerImg,
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={handleDonationSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <div className="p[1rem]">
        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Campaign Name:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setDonationName(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Beneficiary(ies):</label>
            <span className="text-red-500">*</span>
          </div>
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Seperate with space only</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            placeholder="eg. Children Old disabled ..."
            value={beneficiaries}
            onChange={(e) => setBeneficiaries(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Cause:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            placeholder="eg. Education, Food Supply ..."
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* text area */}
        <div>
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Description: (0 / 500 words)</label>
            <span className="text-red-500">*</span>
          </div>
          <textarea
            name="campaign_description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem] w-full h-[40rem]"
          ></textarea>
        </div>
        {/* text area end */}
      </div>
      <div className="p-[1rem]">
        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Target Amount ($):</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}
        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Amount Raised ($):</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="number"
            required
            value={raised}
            onChange={(e) => setRaised(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Closing Date</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="date"
            required
            placeholder="eg. Education, Food Supply ..."
            value={closing}
            onChange={(e) => setClosing(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Banner Image</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="file"
            required
            value={bannerImg}
            onChange={(e) => setBannerImg(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}
      </div>

      <button className="btn w-[60%] mx-auto text-center" type="submit">
        Submit Donation
      </button>
    </form>
  );
};

export default AddDonation;
