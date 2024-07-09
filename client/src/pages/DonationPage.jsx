import { Link } from "react-router-dom";

const DonationPage = () => {
  return (
    <div>
      <div className="flex align-center space-x-3">
        <p>~~</p>
        <Link to="/donations" className="text-teal-500 hover:text-teal-600">
          Back to Donations List
        </Link>
      </div>
    </div>
  );
};

export default DonationPage;
