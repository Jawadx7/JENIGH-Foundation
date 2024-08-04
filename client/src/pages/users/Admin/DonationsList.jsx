import AdminDonationCard from "./AdminDonationCard";
import Spinner from "../../../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../../asserts/css/admin.scss";

const DonationsList = () => {
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/donations")
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="DonationsList">
          {donations.length ? (
            donations.map((donation) => (
              <AdminDonationCard key={donation._id} donation={donation} />
            ))
          ) : (
            <h1 className="h2 text-[3rem]">NO DONATIONS TO SHOW</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default DonationsList;
