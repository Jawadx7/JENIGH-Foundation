import UserCard from "../../../components/UserCard";
import { users_json } from "../../../asserts/mocks/users_json";

const UsersList = () => {
  return (
    <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {users_json.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
