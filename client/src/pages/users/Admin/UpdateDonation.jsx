import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

const UpdateDonation = () => {
  const [name, setDonationName] = useState("");
  const [cause, setCause] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [raised, setRaised] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [closing, setClosing] = useState("");
  const [bannerImg, setBannerImg] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get(`http://localhost:3001/donations/${id}`)
      .then((response) => {
        setDonationName(response.data.name);
        setCause(response.data.cause);
        setDescription(response.data.description);
        setAmount(response.data.amount);
        setRaised(response.data.raised);
        setBeneficiaries(response.data.beneficiaries);
        // setClosing(response.data.closing);
        // setBannerImg(bannerImg);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name,
      cause,
      description,
      amount,
      raised,
      beneficiaries,
      closing,
      bannerImg, // base64 image string
    };
    axios
      .put(`http://localhost:3001/donations/update/${id}`, data)
      .then((results) => {
        // console.log(results);
        navigate("/users/admin");
      })
      .catch((error) => console.log("cant update", error));
  };

  return (
    <div className="p-[2rem]">
      <form
        onSubmit={handleUpdate}
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
              <label htmlFor="campaignName">Seperate with comma</label>
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
              accept=".jpeg, .png, .jpg"
              onChange={handleFileChange}
              className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
            />
          </div>
          {/* input end */}
        </div>

        <button className="btn w-[60%] mx-auto text-center" type="submit">
          Update Donation
        </button>
      </form>
    </div>
  );
};

export default UpdateDonation;
