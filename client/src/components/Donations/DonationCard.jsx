import "../../asserts/css/donations.scss";
import "../../App.css";

const DonationCard = ({ donation }) => {
  return (
    <li>
      <div className="donate-card">
        <figure className="card-banner">
          <img
            src={donation.img}
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

              <data value={donation.amount_raised}>
                {donation.amount_raised}
              </data>
            </p>

            <data className="progress-value" value="83">
              83%
            </data>
          </div>

          <div className="progress-box">
            <div className="progress"></div>
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

          <button className="btn btn-secondary">
            <span>Donate</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default DonationCard;
