import { Link, useNavigate } from "react-router-dom";
import "../asserts/css/auth.css";
import signupImg from "../asserts/images/register.png";
import { useState } from "react";
import axios from "axios";
import Message from "../components/Message";
import Spinner from "../components/Spinner";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [IsLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const setLocalStorageItems = (items) => {
    for (const [key, value] of Object.entries(items)) {
      localStorage.setItem(key, value);
    }
  };

  const handleRegister = async (e) => {
    setMessage("");
    setIsloading(true);
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setIsloading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        userName,
        email,
        password,
      });

      if (response.status === 200) {
        setLocalStorageItems({
          token: response.data.token,
          email: response.data.email,
          username: response.data.username,
          bio: response.data.bio,
        });
        navigate("/users/clientuser");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Registration failed. Please try again.");
      }
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="page_body">
      <section id="main-page">
        <div id="left-container">
          <div className="top-section">
            <img src={signupImg} alt="Sign Up" />
          </div>
          <Link
            to="/"
            className="mx-auto text-3xl text-white underline hover:text-black w-fit"
          >
            Back to Home
          </Link>
        </div>
        <div id="right-container" className="py-5">
          <div className="welcome-back">
            <p>Get Started</p>
            <Message message={message} />
          </div>
          <div className="login-page">
            <p className="login-header">Create a new account</p>
            <form className="inner-div" onSubmit={handleRegister}>
              <input
                className="input-area"
                type="text"
                placeholder="User Name"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className="input-area"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-area"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="input-area"
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input className="submit-button" type="submit" value="Sign Up" />
              <div>
                <Link to="/login" className="mr-5">
                  Log In
                </Link>
                <Link to="/forgotPassword">Forgot Password</Link>
              </div>
            </form>
          </div>
        </div>
        {IsLoading && <Spinner />}
      </section>
    </div>
  );
};

export default Register;
