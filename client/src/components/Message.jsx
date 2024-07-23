import React from "react";

const Message = ({ message }) => {
  return (
    <div
      className={`w-2/3 p-3 rounded-md text-center bg-red-500 mx-auto  mt-2 ${
        message ? "block bg-red-500" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};

export default Message;
