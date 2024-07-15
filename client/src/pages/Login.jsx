import { Link } from "react-router-dom";
import "../asserts/css/auth.css";
import loginImg from "../asserts/images/login.png";

const Login = () => {
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
        <div id="right-container">
          <div className="welcome-back">
            <p>Welcome back</p>
          </div>
          <div className="login-page">
            <p class="login-header">Log into your account</p>
            <form className="inner-div">
              <input
                className="input-area"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="input-area"
                type="password"
                placeholder="Password"
                required
              />
              <input className="submit-button" type="submit" value="Login" />
              <div>
                <Link to="/register">Create Account</Link>
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
