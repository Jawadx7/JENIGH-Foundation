import React, { useState } from "react";
import axios from "axios";
import Spinner from "../../../components/Spinner";
import Message from "../../../components/Message";

const UpdateInfoCard = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const token = localStorage.getItem("token");
  const [IsLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const setLocalStorageItems = (items) => {
    for (const [key, value] of Object.entries(items)) {
      localStorage.setItem(key, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!bio && !userName && !profilePicture) {
      setMessage("Cannot submit empty fields.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("token", token);
    if (profilePicture) formData.append("profilePicture", profilePicture);
    if (userName.trim()) formData.append("userName", userName);
    if (bio.trim()) formData.append("bio", bio);

    try {
      const response = await axios.post(
        "http://localhost:3001/users/updateProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setBio("");
        setUserName("");
        setProfilePicture(null);

        setLocalStorageItems({
          email: response.data.email,
          username: response.data.username,
          bio: response.data.newBio,
          profilePictureUrl: response.data.profilePictureUrl,
        });

        window.location.reload();
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Ooops. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Message message={message} />
      <div className="my-[1rem]">
        <div className="flex align-center space-x-3">
          <label htmlFor="profilePicture">Profile Picture</label>
        </div>
        <input
          type="file"
          className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </div>

      <div className="my-[1rem]">
        <div className="flex align-center space-x-3">
          <label htmlFor="userName">User Name</label>
        </div>
        <input
          type="text"
          className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <div className="flex align-center space-x-3">
          <label htmlFor="bio">Bio: (0 / 100 words)</label>
        </div>
        <textarea
          name="bio"
          className="mt-[1rem] bg-gray-200 outline-none p-[1rem] w-full h-[10rem]"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn text-center mx-auto mt-[3rem]">
        Submit
      </button>
      {IsLoading && <Spinner />}
    </form>
  );
};

export default UpdateInfoCard;
