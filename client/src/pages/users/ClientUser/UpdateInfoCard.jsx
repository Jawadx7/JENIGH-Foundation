import React from "react";

const UpdateInfoCard = () => {
  return (
    <>
      {/* input */}
      <div className="my-[1rem]">
        <div className="flex align-center space-x-3">
          <label htmlFor="campaignName">Profile Picture</label>
        </div>
        <input
          type="file"
          required
          className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
        />
      </div>
      {/* input end */}

      {/* input */}
      <div className="my-[1rem]">
        <div className="flex align-center space-x-3">
          <label htmlFor="campaignName">User Name</label>
        </div>
        <input
          type="text"
          required
          className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
        />
      </div>
      {/* input end */}

      {/* text area */}
      <div>
        <div className="flex align-center space-x-3">
          <label htmlFor="campaignName">Bio: (0 / 100 words)</label>
        </div>
        <textarea
          name="campaign_description"
          className="mt-[1rem] bg-gray-200 outline-none p-[1rem] w-full h-[10rem]"
        ></textarea>
      </div>
      {/* text area end */}

      {/* input button */}

      <button type="submit" className="btn text-center mx-auto mt-[3rem]">
        submit
      </button>

      {/* input button end */}
    </>
  );
};

export default UpdateInfoCard;
