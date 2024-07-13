import AdminDonationCard from "./AdminDonationCard";
import { donations_json } from "../../../asserts/mocks/donations_json";

const DonationsList = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {donations_json
          ? donations_json.map((donation) => (
              <AdminDonationCard key={donation.id} donation={donation} />
            ))
          : "NO DONATIONS TO SHOW"}
      </div>
    </div>
  );
};

export default DonationsList;
