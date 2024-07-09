import "../../asserts/css/auth.scss";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="authLabel" htmlFor="email">
          Email Address
        </label>
        <br />
        <input
          className="authInput"
          type="text"
          name="email"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="authLabel" htmlFor="password">
          Password
        </label>
        <br />
        <input
          className="authInput"
          type="text"
          name="password"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <button className="authFormBtn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
