import React from "react";
import DonationCard from "../components/Donations/DonationCard";
import { donations_json } from "../asserts/mocks/donations_json";
import Navbar from "../components/common/Navbar";
import SearchInput from "../components/SearchInput";

const Donations = () => {
  return (
    <>
      <Navbar />
      <SearchInput />
      <div className="p-5 sm:p-[5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {donations_json.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
    </>
  );
};

export default Donations;
