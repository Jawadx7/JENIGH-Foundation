import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-[5%]">
      <div>Home Page is yet to be connected</div>
      <Link to="/donations" className="text-teal-500">
        click here to Go to Donations page
      </Link>
    </div>
  );
};

export default Home;
