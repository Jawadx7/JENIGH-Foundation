import React from "react";
import img from "../asserts/images/person_2.jpg";
import axios from "axios";

const UserCard = ({ user }) => {
  const handleUserDelete = () => {
    const donationId = user._id;
    const password = prompt("Enter Admin Password to delete Donation.");
    if (password !== "adminpin") {
      alert("you dont have permission to delete a User");
    } else {
      axios
        .delete(`http://localhost:3001/api/users/${donationId}`)
        .then((result) => alert("User has been deleted successfully"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="shadow-md p-[1.5rem] md:p-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <figure>
          <img src={img} alt="" className="w-[10rem] h-[10rem] rounded-full" />
        </figure>

        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
            {user.userName}
          </h1>
          <h1>{user.email}</h1>
          {/* <h1>{user.phone}</h1> */}
        </div>
      </div>
      <div></div>
      <div className="mt-[2rem] grid align-center grid-cols-1 lg:grid-cols-2 gap-5">
        {/* <button className="btn btn-secondary">INFO</button> */}
        <button className="btn btn-secondary" onClick={handleUserDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default UserCard;
