import Sidebar from "./Sidebar";
import { useState } from "react";
import "../../../asserts/css/admin.scss";
import DonationsList from "./DonationsList";
import UsersList from "./UsersList";
import AddDonation from "./AddDonation";
// http://localhost:3001/api/users/66a6c8aa018f1d693865e95c

const Admin = () => {
  const [active, setActive] = useState("dashboard");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminpin, setAdminPin] = useState("");
  const [adminAccess, setAdminAccess] = useState("denied");

  const AdminAccessCheck = (e) => {
    e.preventDefault();
    if (adminUsername === "jxd" && adminpin === "123") {
      setAdminAccess("allowes");
    } else {
      alert("Admin Page Access Denied");
    }
  };
  return (
    <>
      {adminAccess === "denied" ? (
        <form
          onSubmit={AdminAccessCheck}
          className="place-middle w-[80%] md:w-[60%] mx-auto mt-[10%]"
        >
          <div className="p[1rem]">
            {/* input */}
            <div className="my-[1rem]">
              <div className="flex align-center space-x-3">
                <label htmlFor="campaignName">ADMIN USERNAME: </label>
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                required
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
              />
            </div>
            {/* input end */}
            {/* input */}
            <div className="my-[1rem]">
              <div className="flex align-center space-x-3">
                <label htmlFor="campaignName">ADMIN PASSWORD: </label>
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                required
                value={adminpin}
                onChange={(e) => setAdminPin(e.target.value)}
                className="mt-[1rem] bg-gray-200 outline-none p-[1rem]"
              />
            </div>
            {/* input end */}
          </div>

          <button className="btn w-fit mx-auto text-center" type="submit">
            Submit Donation
          </button>
        </form>
      ) : (
        <div className="AdminPageContainer">
          <div className="sidebar bg-[#212121] text-white">
            <Sidebar active={active} setActive={setActive} />
          </div>
          <main>
            {active === "dashboard" ? (
              <DonationsList />
            ) : active === "users" ? (
              <UsersList />
            ) : (
              <AddDonation />
            )}
          </main>
        </div>
      )}
    </>
  );
};

export default Admin;
