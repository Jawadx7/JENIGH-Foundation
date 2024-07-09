import React, { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div></div>
    // <form onSubmit={handleSearch}>
    //   <input
    //     type="text"
    //     placeholder="search donations ..."
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value)}
    //     // style={{ width: "70%", margin: "2rem auto", fontSize: "1.5rem" }}
    //   />
    // </form>
  );
};

export default SearchInput;
