import "../../asserts/css/auth.scss";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="text"
          name="password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
