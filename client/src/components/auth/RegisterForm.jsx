import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="confirm_password">Confirm Password</label>
        <br />
        <input
          type="text"
          name="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
