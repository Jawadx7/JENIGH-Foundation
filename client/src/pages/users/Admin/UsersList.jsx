import UserCard from "../../../components/UserCard";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {users.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {users.map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
            </div>
          ) : (
            <h1 className="h2 text-[3rem]">NO USERS TO SHOW</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersList;
