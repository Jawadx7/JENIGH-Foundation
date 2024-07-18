import { Link, useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import "../asserts/css/donations.scss";
import { donations_json } from "../asserts/mocks/donations_json";

const DonationPage = () => {
  const { id } = useParams();
  const donationsItem = donations_json.find(
    (donationsItem) => donationsItem.id.toString() === id
  );
  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "100%",
          height: "60vh",
          background: `url(${donationsItem.img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="donation_banner flex align-center px-[5%]"
      ></div>

      <div className="donationContent px-[5%]">
        <div className="flex align-center space-x-3 my-[3rem]">
          <p>~~</p>
          <Link to="/donations" className="text-teal-500 hover:text-teal-600">
            Back to Donations List
          </Link>
        </div>

        <div>
          <div className="flex align-center space-x-5">
            <h6>Opened on {donationsItem.opened}</h6>
            <span
              style={{ fontSize: "1.5rem", fontWeight: "800" }}
              className="text-teal-600"
            >
              |
            </span>
            {donationsItem.closing ? (
              <h6>Closing on {donationsItem.closing}</h6>
            ) : (
              <p>No closing Date</p>
            )}
          </div>
          <h1 id="donation" style={{ fontSize: "3rem", fontWeight: "800" }}>
            {donationsItem.title}
          </h1>

          <div className="grid align-center grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex align-center space-x-5">
              <h1>${donationsItem.amount_raised}</h1>
              <h1 className="text-teal-500">Raised</h1>
            </div>
            <div className="flex align-center space-x-5">
              <h1 className="text-red-400">Targetting</h1>
              <h1>${donationsItem.target_amount}</h1>
            </div>
            <div>
              {donationsItem.target_amount === donationsItem.amount_raised ? (
                <h1 className="text-teal-500">Target Reached</h1>
              ) : (
                <div className="flex align-center space-x-5">
                  <h1 className="text-red-400">
                    ${donationsItem.target_amount - donationsItem.amount_raised}
                  </h1>
                  <h1 className="">To Go</h1>
                </div>
              )}
            </div>
          </div>

          <h3 className="my-[2rem]">Beneficiary(ies): Children</h3>

          <div className="mt-[3rem]">
            <h3 className="mt-[2rem]">About this Campaign</h3>

            <p className="mb-[2rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sequi aut repellat quibusdam amet nihil officia hic sit
              dignissimos eum velit enim magnam fugit modi, itaque nam in
              asperiores nemo quisquam omnis illo vel autem. Minima, accusamus
              dolorum? Aliquam deleniti impedit molestiae illum, fugit
              exercitationem temporibus dignissimos sed odio labore cum quae
              distinctio dolor iusto possimus. Sequi obcaecati numquam fugiat
              placeat doloremque quas praesentium quaerat ipsum quia aliquam
              nostrum aspernatur, quis quae, corporis amet quibusdam in iusto.
              Blanditiis quia consectetur deleniti quo ducimus natus
              voluptatibus magnam optio molestiae eos, rerum delectus culpa
              pariatur omnis voluptate aut tempora nihil nemo eius perferendis
              vitae nostrum dignissimos! Quaerat non alias magnam debitis optio
              voluptate. Magni, aliquid voluptates? Qui, exercitationem. Dolor
              vel et nulla saepe temporibus facilis blanditiis provident quod!
              Reiciendis soluta amet consectetur at voluptas molestias,
              accusantium adipisci earum labore quaerat. Illo sint nihil hic
              fugit dolorem placeat rem sed doloribus minima sapiente
              asperiores, esse laborum, recusandae dignissimos. Rerum, nulla ad
              quidem nam fugiat ipsam ratione autem eveniet pariatur molestiae
              doloremque sapiente enim consequuntur sit, laudantium repellendus
              numquam officia possimus magnam recusandae, vel iusto quis! Itaque
              provident vitae voluptatum, harum a laboriosam voluptatibus velit
              aliquam dignissimos pariatur odit? Quas tempora nesciunt
              cupiditate tenetur a beatae, repudiandae culpa aspernatur dolorum
              hic deleniti facere quaerat consectetur iusto vero sapiente
              veritatis modi exercitationem dicta dolore minus deserunt nemo
              voluptates quia. Odit, nostrum minus aperiam unde magni nisi
              ratione dicta iure ea? Excepturi modi nisi quos dolore quibusdam.
              Eaque fuga libero, ea nostrum accusantium quaerat nisi in
              accusamus at quo eos perferendis reprehenderit adipisci atque
              consectetur expedita alias iste odit facilis est dignissimos
              explicabo aspernatur culpa numquam. Voluptatem sed dolore, optio
              est fugit iusto error doloremque facere, velit natus facilis quos?
              Commodi inventore, repellendus nam eligendi quod veniam esse ullam
              velit sit aliquid quam iure tempora nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
