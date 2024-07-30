import "../../asserts/css/donations.scss";
import "../../App.css";
import { Link } from "react-router-dom";
import img from "../../asserts/images/cause.jpg";

const DonationCard = ({ donation }) => {
  let donation_percentage = 0;
  if (donation.amount > donation.raised) {
    donation_percentage = Math.floor((donation.raised * 100) / donation.amount);
  } else {
    donation_percentage = 100;
  }
  return (
    <div className="donate-card">
      <figure className="card-banner">
        <img
          src={img}
          width="520"
          height="325"
          loading="lazy"
          alt="Elephant"
          className="img-cover"
        />
      </figure>

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

            <data className="yellow">${donation.raised}</data>
          </p>

          <p className="card-wrapper-text">
            <data className="cyan">
              <span>To Go</span>: $
              {donation.amount > donation.raised
                ? donation.amount - donation.raised
                : "Target Acheived"}
            </data>
          </p>
        </div>

        <Link
          to={`/donation/${donation._id}/#donation`}
          className="btn btn-secondary"
        >
          <span>Learn More</span>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
