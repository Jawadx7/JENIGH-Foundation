import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="shadow-md p-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <figure>
          <img
            src={user.img}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full"
          />
        </figure>

        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
            {user.username}
          </h1>
          <h1>{user.email}</h1>
          <h1>{user.phone}</h1>
        </div>
      </div>
      <div></div>
      <div className="mt-[2rem] grid align-center grid-cols-1 lg:grid-cols-2 gap-5">
        <button className="btn btn-secondary">Learn More</button>
        <button className="btn btn-secondary">DELETE</button>
      </div>
    </div>
  );
};

export default UserCard;
