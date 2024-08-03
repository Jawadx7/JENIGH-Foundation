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
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // const sendCurrentUser = async () => {
  //   try {
  //     console.log({ email });
  //     const currentUserResult = await axios.post(
  //       "http://localhost:3002/api/loggedin",
  //       { email }
  //     );
  //     console.log("current user sent", currentUserResult);
  //   } catch (currentUserError) {
  //     console.log("current user not sent", currentUserError);
  //   }
  // };

  // axios.defaults.withCredentials = true;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResult = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });

      if (loginResult.status === 200) {
        localStorage.setItem('token' , loginResult.data.token);
        navigate("/users/clientuser");
        // sendCurrentUser();
<<<<<<< HEAD
     
      }
    } catch (error) {
      if(error.response.error){
=======
      } else if (loginResult.data === "login failed") {
>>>>>>> 6087d8cc1e8e209d9e77834e37db0d2cc1669e64
        setMessage(
          "The password was incorrect. Try again or choose 'Forgot Password'"
        );

      }
      console.log("Login error:", error);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Login;
