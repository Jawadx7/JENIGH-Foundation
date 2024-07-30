import React from "react";
import img from "../asserts/images/person_2.jpg";

const UserCard = ({ user }) => {
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
        <button className="btn btn-secondary">INFO</button>
        <button className="btn btn-secondary">DELETE</button>
      </div>
    </div>
  );
};

export default UserCard;
