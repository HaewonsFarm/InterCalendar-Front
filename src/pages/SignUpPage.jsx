import { useState } from "react";
import "../styles/pages/SignUpPage.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputCheck, setPasswordInputCheck] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(false);

  return (
    <>
      <div className="signup-scaffold">
        <h1>Sign Up</h1>

        <form action="">
          <div className="input-scaffold">
            <div className="email-form">
              <input type="text" placeholder="Email Address" />
              <div className="username input-line" />
            </div>
            <div className="username-form">
              <input type="text" placeholder="Username" />
              <div className="username input-line" />
            </div>
            <div className="password-form">
              <input type="password" placeholder="Password" />
              <div className="password input-line" />
            </div>
            <div className="password-check-form">
              <input type="password" placeholder="Password Check" />
              <div className="password input-line" />
            </div>
            <div className="other-actions">
              <button className="signup-button">Sign Up</button>
              <div className="login-button-div">
                <Link to="/login" className="login-button">
                  Log In
                </Link>
                <p>already have an account?</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="background">
        <svg
          className="circle one"
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="39" cy="39" r="39" fill="#F8F6E3" />
        </svg>
      </div>
    </>
  );
};

export default SignUpPage;