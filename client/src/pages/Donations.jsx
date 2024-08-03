import DonationCard from "../components/Donations/DonationCard";
// import { donations_json } from "../asserts/mocks/donations_json";
import Navbar from "../components/common/Navbar";
import SearchInput from "../components/SearchInput";
import { useState, useEffect } from "react";

const Donations = ({ donations }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = donations.filter((donation) =>
      donation.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(results);
  }, [search, donations]);

  return (
    <>
      <Navbar />
      <div className="pt-[10rem] flex align-center flex-col justify-center">
        <SearchInput search={search} setSearch={setSearch} />
        <div className="p-5 sm:p-[5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {searchResults ? (
            searchResults.map((donation) => (
              <DonationCard key={donation._id} donation={donation} />
            ))
          ) : (
            <h1>No Data Available</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Donations;
