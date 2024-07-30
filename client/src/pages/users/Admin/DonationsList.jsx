import AdminDonationCard from "./AdminDonationCard";

const DonationsList = ({ donations }) => {
  return (
    <div className="DonationsList">
      {donations
        ? donations.map((donation) => (
            <AdminDonationCard key={donation._id} donation={donation} />
          ))
        : "NO DONATIONS TO SHOW"}
    </div>
  );
};

export default DonationsList;
