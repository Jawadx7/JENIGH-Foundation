import "../../../asserts/css/donations.scss";
import "../../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDonationCard = ({ donation }) => {
  let donation_percentage = 0;
  if (donation.amount > donation.raised) {
    donation_percentage = Math.floor((donation.raised * 100) / donation.amount);
  } else {
    donation_percentage = 100;
  }

  const handleDelete = () => {
    const donationId = donation._id;
    const password = prompt("Enter Admin Password to delete Donation.");
    if (password !== "adminpin") {
      alert("you dont have permission to delete a Donation");
    } else {
      axios
        .delete(`http://localhost:3001/donations/delete/${donationId}`)
        .then(() => {
          alert("Donation deleted succesfully");
          window.location.reload();
        })
        .catch((error) => console.log("donation not deleted", error));
    }
  };

  return (
    <li key={donation._id}>
      <div className="donate-card">
        <div className="card-content">
          <div className="progress-wrapper">
            <p className="progress-text">
              <span>Raised</span>

              <data value={donation.raised}>{donation.raised}</data>
            </p>

            <data className="progress-value" value="83">
              {donation_percentage}%
            </data>
          </div>

          <div className="progress-box">
            <div
              className="progress"
              style={{ width: `${donation_percentage}%` }}
            ></div>
          </div>

          <h3 className="h3 card-title">{donation.name}</h3>

          <div className="card-wrapper">
            <p className="card-wrapper-text">
              <span>Goal</span>

              <data className="green" value="34562">
                ${donation.amount}
              </data>
            </p>

            <p className="card-wrapper-text">
              <span>Raise</span>

              <data className="yellow" value="562">
                ${donation.raised}
              </data>
            </p>

            <p className="card-wrapper-text">
              <span>To Go</span>

              <data className="cyan" value="864">
                $
                {donation.amount > donation.raised
                  ? donation.amount - donation.raised
                  : "Target Reached"}
              </data>
            </p>
          </div>

          <Link
            to={`/users/admin/donation/${donation._id}`}
            className="btn btn-secondary"
          >
            <span>Learn More</span>
          </Link>

          <div className="mt-[2rem] grid align-center grid-cols-1 md:grid-cols-2 gap-5">
            <Link to={`update/${donation._id}`} className="btn">
              UPDATE
            </Link>
            <button className="btn btn-secondary" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AdminDonationCard;
