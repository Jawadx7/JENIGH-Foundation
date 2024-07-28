import { Link, useNavigate } from "react-router-dom";
import "../asserts/css/auth.css";
import signupImg from "../asserts/images/register.png";
import { useState } from "react";
import axios from "axios";
import Message from "../components/Message";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      axios
        .post("http://localhost:3001/auth/register", {
          userName,
          email,
          password,
          confirmPassword,
        })
        .then(() => {
          console.log("posted");
          navigate("/login");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="page_body">
      <section id="main-page">
        <div id="left-container">
          <div className="top-section">
            {/* <div className="div-img"></div> */}
            <img src={signupImg} alt="" />
          </div>
          {/* <div className="botton-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              explicabo. Loremmm ipsum dolor sit amet consectetur adipisicing
              elit. Quod eligendi non
            </p>
          </div> */}
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
                type="text"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="input-area"
                type="text"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input className="submit-button" type="submit" value="Sign Up" />

              <div>
                <Link to="/login" className="mr-5">
                  LogIn
                </Link>
                <Link to="">Forgot Password</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
