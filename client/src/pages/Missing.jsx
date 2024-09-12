import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="w-full h-[100vh] flex align-center justify-center flex-col bg-primary_green">
      <h1 className="relative text-[25rem] font-[900]">
        404
        <span className="absolute text-[5rem] top-0 right-0">error</span>
        {/* <span className="absolute text-[5rem] bottom-0 left-0 w-full">
          Page Not Found
        </span> */}
      </h1>
      <span className="text-[5rem] font-[900] uppercase">Page Not Found</span>
      <div className="flex align-center space-x-5">
        <Link
          to="/"
          className="bg-black px-10 py-6 text-white font-bold text-3xl"
        >
          Back to Home
        </Link>
        <Link
          to="/donations"
          className="bg-black px-10 py-6 text-white font-bold text-3xl"
        >
          Donations List
        </Link>
      </div>
    </div>
  );
};
export default Missing;
