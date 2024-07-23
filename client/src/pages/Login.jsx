import { Link, useNavigate } from "react-router-dom";
import "../asserts/css/auth.css";
import loginImg from "../asserts/images/login.png";
import { useState } from "react";
import axios from "axios";
import Message from "../components/Message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // const sendCurrentUser = () => {

  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginResult = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (loginResult.data === "login success") {
        navigate("/users/clientuser");

        try {
          console.log({ email });
          const currentUserResult = await axios.post(
            "http://localhost:3002/api/loggedin",
            { email }
          );
          console.log("current user sent", currentUserResult);
        } catch (currentUserError) {
          console.log("current user not sent", currentUserError);
        }
      } else if (loginResult.data === "login failed") {
        setMessage(
          "The password was incorrect. Try again or choose 'Forgot Password'"
        );
      } else if (loginResult.data === "no user found") {
        setMessage(
          "No user with this email was found. Try creating an account first"
        );
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const loginResults = await axios
  //       .post("http://localhost:3001/login", { email, password })
  //       .then((result) => {
  //         if (result.data === "login success") {
  //           navigate("/users/clientuser");
  //           axios
  //             .post("http://localhost:3002/api/currentUser", "hello")
  //             .then((result) => console.log("current user sent"))
  //             .catch((error) => console.log("current user not sent"));
  //         } else if (result.data === "login failed") {
  //           setMessage(
  //             "The password was incorret. Try again or choose 'Forgot Password'"
  //           );
  //         } else if (result.data === "no user found") {
  //           setMessage(
  //             "No user with this email was found. Try creating an account first"
  //           );
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="page_body">
      <section id="main-page">
        <div id="left-container">
          <div className="top-section">
            {/* <div className="div-img"></div> */}
            <img src={loginImg} alt="" />
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
                <Link to="">Forgot Password</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
