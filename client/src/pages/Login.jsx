import { Link, useNavigate } from "react-router-dom";
import "../asserts/css/auth.css";
import loginImg from "../asserts/images/login.png";
import { useState } from "react";
import axios from "axios";
import Message from "../components/Message";
import Spinner from "../components/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const setLocalStorageItems = (items) => {
    for (const [key, value] of Object.entries(items)) {
      localStorage.setItem(key, value);
    }
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setLocalStorageItems({
          token: response.data.token,
          email: response.data.email,
          username: response.data.username,
          bio: response.data.bio,
          profilePictureUrl: response.data.profilePictureUrl,
        });
        navigate("/users/clientuser");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="page_body">
        <section id="main-page">
          <div id="left-container">
            <div className="top-section">
              <img src={loginImg} alt="" />
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
              <p>Welcome back</p>
              <Message message={message} />
            </div>
            <div className="login-page">
              <p className="login-header">Log into your account</p>
              <form className="inner-div" onSubmit={(e) => handleLogin(e)}>
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
                <input className="submit-button" type="submit" value="Login" />
                <div>
                  <Link to="/register" className="mr-5">
                    Create Account
                  </Link>
                  <Link to="/forgotPassword">Forgot Password</Link>
                </div>
              </form>
            </div>
          </div>
          {IsLoading && <Spinner />}
        </section>
      </div>
    </>
  );
};

export default Login;
