import "../../../asserts/css/donations.scss";
import "../../../App.css";
import { Link } from "react-router-dom";

const AdminDonationCard = ({ donation }) => {
  let donation_percentage = 0;
  if (donation.target_amount > donation.amount_raised) {
    let difference = donation.target_amount - donation.amount_raised;
    donation_percentage = Math.floor(
      (difference * 100) / donation.target_amount
    );
  } else {
    donation_percentage = 100;
  }
  return (
    <li>
      <div className="donate-card">
        {/* <figure className="card-banner">
          <img
            src={donation.img}
            width="520"
            height="325"
            loading="lazy"
            alt="Elephant"
            className="img-cover"
          />
        </figure> */}

        <div className="card-content">
          <div className="progress-wrapper">
            <p className="progress-text">
              <span>Raised</span>

              <data value={donation.amount_raised}>
                {donation.amount_raised}
              </data>
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

          <h3 className="h3 card-title">{donation.title}</h3>

          <div className="card-wrapper">
            <p className="card-wrapper-text">
              <span>Goal</span>

              <data className="green" value="34562">
                ${donation.target_amount}
              </data>
            </p>

            <p className="card-wrapper-text">
              <span>Raise</span>

              <data className="yellow" value="562">
                ${donation.amount_raised}
              </data>
            </p>

            <p className="card-wrapper-text">
              <span>To Go</span>

              <data className="cyan" value="864">
                $
                {donation.target_amount > donation.amount_raised
                  ? donation.target_amount - donation.amount_raised
                  : "Target amount has been reached"}
              </data>
            </p>
          </div>

          <Link
            to={`/donation/${donation.id}/#donation`}
            className="btn btn-secondary"
          >
            <span>Learn More</span>
          </Link>

          <div className="mt-[2rem] grid align-center grid-cols-1 md:grid-cols-2 gap-5">
            <button className="btn">UPDATE</button>
            <button className="btn btn-secondary">DELETE</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AdminDonationCard;
