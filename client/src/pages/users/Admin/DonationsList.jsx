import AdminDonationCard from "./AdminDonationCard";
import { donations_json } from "../../../asserts/mocks/donations_json";

const DonationsList = () => {
  return (
    <div className="DonationsList">
      {donations_json
        ? donations_json.map((donation) => (
            <AdminDonationCard key={donation.id} donation={donation} />
          ))
        : "NO DONATIONS TO SHOW"}
    </div>
  );
};

export default DonationsList;
