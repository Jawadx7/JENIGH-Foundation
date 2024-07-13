import React, { useState } from "react";

const SearchInput = ({ handleSearch, search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="search donations ..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bg-gray-100 w-[90%] sm:w-[80%] mx-auto my-[2rem] px-[2rem] py-[1.5rem] outline-none"
    />
  );
};

export default SearchInput;
