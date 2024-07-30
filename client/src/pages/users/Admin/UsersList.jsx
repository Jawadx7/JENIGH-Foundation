import UserCard from "../../../components/UserCard";
import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
