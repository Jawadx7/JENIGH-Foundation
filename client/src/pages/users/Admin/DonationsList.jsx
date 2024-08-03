import AdminDonationCard from "./AdminDonationCard";
import Spinner from "../../../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";

const DonationsList = () => {
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/api/donations")
      .then((response) => {
        setDonations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="DonationsList">
        {donations
          ? donations.map((donation) => (
              <AdminDonationCard key={donation._id} donation={donation} />
            ))
          : "NO DONATIONS TO SHOW"}
      </div>
    </div>
  );
};

export default DonationsList;
