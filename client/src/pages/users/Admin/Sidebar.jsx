import { Link } from "react-router-dom";
import "../.././../asserts/css/admin.scss";

const Sidebar = ({ active, setActive }) => {
  return (
    <div id="sidebarComponent">
      <div>
        <div>Admin Dashboard</div>
      </div>

      <ul className="mt-[3rem]">
        <Link
          className={`${
            active === "dashboard"
              ? "bg-[#91be55] text-[#212121]"
              : "bg-transparent text-[#91be55] border-l-4 border-[#91be55]"
          } rounded-md p-3 text-center my-5`}
          onClick={() => setActive("dashboard")}
        >
          Donations
        </Link>
        <br />
        <Link
          className={`${
            active === "users"
              ? "bg-[#91be55] text-[#212121]"
              : "bg-transparent text-[#91be55] border-l-4 border-[#91be55]"
          } rounded-md p-3 text-center my-5`}
          onClick={() => setActive("users")}
        >
          Users
        </Link>
        <br />
        <Link
          className={`${
            active === "add"
              ? "bg-[#91be55] text-[#212121]"
              : "bg-transparent text-[#91be55] border-l-4 border-[#91be55]"
          } rounded-md p-3 text-center my-5`}
          onClick={() => setActive("add")}
        >
          Add Donations
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
