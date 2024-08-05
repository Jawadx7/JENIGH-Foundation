import React from "react";
import axios from "axios";
const UserCard = ({ user }) => {
  const handleUserDelete = () => {
    const donationId = user._id;
    const password = prompt("Enter Admin Password to delete Donation.");

    if (password !== "adminpin") {
      alert("you dont have permission to delete a User");
    } else {
      axios
        .delete(`http://localhost:3001/users/delete/${donationId}`)
        .then(() => alert("User has been deleted"))
        .catch((error) => console.log(error));
    }
  };

  let profilePath = "";

  const getProfilepic = () => {
    const filePath = user.profilePicture;
    const correctFilePath = filePath.replace(/\\/g, "/");
    profilePath = `../../../server/${correctFilePath}`;
  };
  getProfilepic();

  return (
    <div className="shadow-md p-[1.5rem] md:p-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <figure>
          <img
            src="../../../server/uploads/1722818487079.jpg"
            alt=""
            className="w-[10rem] h-[10rem] rounded-full"
          />
        </figure>

        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
            {user.userName}
          </h1>
          <h1>{user.email}</h1>
        </div>
      </div>
      <div></div>
      <div className="mt-[2rem] grid align-center grid-cols-1 lg:grid-cols-2 gap-5">
        <button className="btn btn-secondary" onClick={handleUserDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default UserCard;
