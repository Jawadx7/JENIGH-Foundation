import { Link, useParams } from "react-router-dom";
import { donations_json } from "../asserts/mocks/donations_json";

const DonationPage = () => {
  const { id } = useParams();
  const donationsItem = donations_json.find(
    (donationsItem) => donationsItem.id.toString() === id
  );
  return (
    <div>
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
      ></div>

      <div className="flex align-center space-x-3 m-[3rem]">
        <p>~~</p>
        <Link to="/donations" className="text-teal-500 hover:text-teal-600">
          Back to Donations List
        </Link>
      </div>

      <div className="p-[2rem]">
        <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
          {donationsItem.title}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit
          odio minus minima sed nisi rem officiis possimus debitis id impedit
          temporibus magni consequuntur non quasi, unde aspernatur maiores culpa
          ipsam! At vero corporis voluptatem cum iure dolor eveniet labore
          cupiditate dolorum nesciunt nemo accusantium amet libero quibusdam
          laboriosam nisi cumque aliquam doloribus facere, id, quis velit?
          Reiciendis dolor deserunt deleniti voluptatum. Quod ratione ut
          delectus sequi molestiae impedit necessitatibus officia debitis
          repudiandae autem in sint corporis similique quae placeat cum
          doloribus voluptatem, minima quia blanditiis aliquam dolores! Aliquid
          exercitationem atque, nobis nam provident ipsum molestiae fugit enim
          obcaecati laborum sequi alias, perspiciatis officiis nisi tempora aut
          distinctio natus placeat veritatis aliquam pariatur? Autem aliquid
          quibusdam, illum facere vel, repellendus repudiandae distinctio, odit
          vero quis quidem? Voluptatibus, adipisci quisquam quidem earum
          reprehenderit soluta non delectus minima veniam nobis ad praesentium
          fuga commodi, ipsa sapiente dignissimos doloribus quia, architecto ab
          excepturi! Corrupti eos autem quisquam maxime repudiandae est aut,
          quas asperiores itaque ducimus accusamus a quibusdam consectetur harum
          ipsam dolorem voluptatum. Ipsum deserunt ullam suscipit sunt inventore
          voluptatem molestiae tempora aspernatur dolore, voluptate amet ab iste
          a quos nostrum eveniet explicabo praesentium possimus error est
          molestias quis quas sequi? Laborum, corrupti aspernatur assumenda,
          provident id dolore reprehenderit ut ipsam ullam, molestiae quod.
          Omnis corporis non, et perferendis accusantium ullam veniam quae velit
          eaque nihil sunt doloremque ab. Excepturi veritatis repellendus nam
          asperiores non rem a voluptate dolore dignissimos, quos ratione
          dolorum nisi repellat incidunt quibusdam possimus nulla saepe. Porro
          modi, adipisci, deserunt quia vitae at numquam dignissimos et officiis
          praesentium quos odit aperiam ad maxime blanditiis eaque quaerat odio
          quibusdam. Aliquid hic sint quidem necessitatibus dolorem distinctio,
          doloribus nulla cupiditate qui voluptates, nesciunt non sequi
          consequatur cumque aut accusantium blanditiis iusto modi, error veniam
          doloremque tempora consequuntur deleniti. Dolores voluptatibus,
          accusantium tempore totam incidunt perferendis. Dolore quidem quia
          voluptatum explicabo itaque, nulla corrupti animi veritatis, expedita
          facilis tenetur tempora facere asperiores, eveniet inventore esse
          repellat at culpa amet architecto nihil est! Deleniti deserunt
          doloremque ducimus cum error harum? Exercitationem qui ea incidunt
          nisi eos ratione, odit voluptatum sapiente perspiciatis temporibus?
          Voluptatem impedit omnis, officiis debitis nostrum sunt officia
          excepturi deleniti, porro ullam laboriosam et repudiandae eligendi
          esse fugiat vitae nulla fugit sapiente eum quos amet eius facilis
          atque! Possimus tenetur velit eligendi eos sit in autem ea
          exercitationem recusandae ducimus, vel quod illum eum culpa dolorum.
          Adipisci distinctio, corrupti, officiis dolorum fugit ratione
          voluptate tempore magnam ipsum necessitatibus praesentium quod dicta.
          Totam ullam error dolorum vel eos perferendis amet eius repudiandae
          porro quae harum ut quibusdam esse laboriosam temporibus voluptates
          molestiae eligendi, vitae consequatur dolorem nam! Numquam sed esse
          laboriosam excepturi iste vero fugit tenetur officia iure est magnam
          quibusdam similique, iure atque optio quasi voluptatibus delectus rem
          maxime, voluptatum ad veniam dolorem tenetur placeat praesentium
          quisquam libero ex voluptatem accusamus sed? Culpa obcaecati iure qui
          magnam hic odit illo quae non, vel debitis laboriosam delectus ipsum
          tempora voluptates? Nam voluptate nihil sapiente dolore culpa omnis
          dignissimos, magnam iure nostrum veritatis doloribus itaque id
          deleniti deserunt amet a officiis! Accusamus, est eligendi deserunt
          tempora enim aliquid fugit. Nam dicta harum nobis ullam ex ab dolore
          eum facere aut in blanditiis, delectus cupiditate laudantium officia
          aliquam maxime soluta eaque perspiciatis voluptas consequuntur.
          Debitis enim nemo ducimus beatae placeat sequi possimus minima ipsa,
          quibusdam deleniti voluptatum molestias laboriosam, aliquam totam
          obcaecati libero officiis molestiae quam laudantium ipsum. Corrupti
          quasi consequatur rerum dolore autem eum inventore sapiente facere
          iste, deleniti laboriosam vitae expedita accusamus, labore, neque qui
          est nisi maxime doloribus quis sed laborum sint. Repellat amet beatae
          qui sapiente, saepe, assumenda iusto provident cumque, illum
          voluptatem eaque.
        </p>
      </div>
    </div>
  );
};

export default DonationPage;
