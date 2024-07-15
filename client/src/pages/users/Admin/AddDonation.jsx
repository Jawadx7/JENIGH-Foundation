import React from "react";

const AddDonation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="p[1rem]">
        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Campaign Name:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}
        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Beneficiary(ies):</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            placeholder="eg. Children, Old, disabled ..."
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}
        {/* input */}
        <div className="my-[1rem]">
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Cause:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            required
            placeholder="eg. Education, Food Supply ..."
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
          />
        </div>
        {/* input end */}

        {/* text area */}
        <div>
          <div className="flex align-center space-x-3">
            <label htmlFor="campaignName">Description: (0 / 500 words)</label>
            <span className="text-red-500">*</span>
          </div>
          <textarea
            name="campaign_description"
            className="mt-[1rem] bg-gray-200 outline-none p-[1rem] w-full h-[40rem]"
          ></textarea>
        </div>
        {/* text area end */}
      </div>
      <div className="p-[1rem]">world</div>
    </div>
  );
};

export default AddDonation;
