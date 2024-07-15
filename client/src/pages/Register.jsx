import { Link } from "react-router-dom";
import "../asserts/css/auth.css";
import signupImg from "../asserts/images/register.png";

const Register = () => {
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
        <div id="right-container">
          <div className="welcome-back">
            <p>Get Started</p>
          </div>
          <div className="login-page">
            <p class="login-header">Create a new account</p>
            <form className="inner-div">
              <input
                className="input-area"
                type="text"
                placeholder="User Name"
                required
              />
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
              <input
                className="input-area"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <input className="submit-button" type="submit" value="Sign Up" />

              <div className="flex align-center flex-col">
                <Link to="/login">LogIn</Link>
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
