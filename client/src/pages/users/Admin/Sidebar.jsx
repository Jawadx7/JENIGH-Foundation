import { Link } from "react-router-dom";
import "../.././../asserts/css/admin.scss";

const Sidebar = ({ active, setActive }) => {
  return (
    <div
      id="sidebarComponent"
      className="flex flex-col sm:flex-row lg:flex-col"
    >
      <div>Admin Dashboard</div>

      <ul className="mt-[3rem] grid grid-cols-3 gap-2 lg:flex flex-col md:space-x-0">
        <Link
          className={`${
            active === "dashboard"
              ? "bg-[#91be55] text-[#212121]"
              : "bg-transparent text-[#91be55] border-l-4 border-[#91be55]"
          } rounded-md p-3 my-2 text-center`}
          onClick={() => setActive("dashboard")}
        >
          Donations
        </Link>

        <Link
          className={`${
            active === "users"
              ? "bg-[#91be55] text-[#212121]"
              : "bg-transparent text-[#91be55] border-l-4 border-[#91be55]"
          } rounded-md p-3 text-center my-2`}
          onClick={() => setActive("users")}
        >
          Users
        </Link>

        <Link
          className={`${
            active === "add"
              ? "bg-[#91be55] text-[#212121]"
              : "bg-transparent text-[#91be55] border-l-4 border-[#91be55]"
          } rounded-md p-3 text-center my-2`}
          onClick={() => setActive("add")}
        >
          Add Donations
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
