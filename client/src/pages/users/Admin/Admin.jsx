import Sidebar from "./Sidebar";
import { useState } from "react";
import "../../../asserts/css/admin.scss";
import DonationsList from "./DonationsList";
import UsersList from "./UsersList";
import AddDonation from "./AddDonation";

const Admin = () => {
  const [active, setActive] = useState("dashboard");
  return (
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
  );
};

export default Admin;
