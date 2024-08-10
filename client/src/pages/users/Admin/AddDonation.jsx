import React, { useState } from "react";
import axios from "axios";
import Spinner from "../../../components/Spinner";

const AddDonation = ({ setActive }) => {
  const [name, setDonationName] = useState("");
  const [cause, setCause] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [raised, setRaised] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState("");
  const [closing, setClosing] = useState("");
  const [bannerImg, setBannerImg] = useState(null);

  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setDonationName("");
    setCause("");
    setDescription("");
    setAmount(0);
    setRaised(0);
    setBeneficiaries("");
    setClosing("");
    setBannerImg(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const beneficiariesList = beneficiaries.trim().split(/\s+/);

    try {
      const response = await axios.post("http://localhost:3001/donations/new", {
        name,
        cause,
        description,
        amount: parseFloat(amount),
        raised: parseFloat(raised),
        beneficiaries: beneficiariesList,
        closing,
        bannerImg, // Base64 string
      });

      if (response.status === 200) {
        alert("Donation added Successfully :) ...");
        clearForm();
        setActive("dashboard");
      }
    } catch (error) {
      console.log("Donation not sent", error);
    } finally {
      setLoading(false);
    }
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
            <label htmlFor="beneficiaries">Beneficiary(ies):</label>
            <span className="text-red-500">*</span>
          </div>
          <div className="flex align-center space-x-3">
            <label htmlFor="beneficiaries">Separate with comma</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            placeholder="e.g. Children Old disabled ..."
            value={beneficiaries}
            onChange={(e) => setBeneficiaries(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="cause">Cause:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            placeholder="e.g. Education, Food Supply ..."
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* text area */}
        <div>
          <div className="flex align-center space-x-3">
            <label htmlFor="description">Description: (0 / 500 words)</label>
            <span className="text-red-500">*</span>
          </div>
          <textarea
            name="description"
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
            <label htmlFor="amount">Target Amount ($):</label>
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
            <label htmlFor="raised">Amount Raised ($):</label>
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
            <label htmlFor="closing">Closing Date:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="date"
            required
            value={closing}
            onChange={(e) => setClosing(e.target.value)}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="bannerImg">Banner Image:</label>
          </div>
          <input
            type="file"
            accept=".jpeg, .png, .jpg"
            onChange={handleFileChange}
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}
      </div>

      <button className="btn w-[60%] mx-auto text-center" type="submit">
        Submit Donation
      </button>

      {loading && <Spinner />}
    </form>
  );
};

export default AddDonation;
