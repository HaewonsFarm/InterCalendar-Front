import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";
import LabelWithHighlight from "./LabelWithHighlight";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user/authSlice";

const Header = () => {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  return (
    <>
      <div className="header-container">
        <LabelWithHighlight title="InterCalendar" boxh={1} boxw={17} />
        <div className="account-menu">
          {loggedIn ? (
            <div className="account-layout">
              <Link to="/profile" className="account-link">
                <p>MyPage</p>
              </Link>
              <button
                className="account-button"
                onClick={() => dispatch(logout())}
              >
                <p>Logout</p>
              </button>
            </div>
          ) : (
            <div className="account-layout">
              <Link to="/signup" className="account-link">
                <p>SignUp</p>
              </Link>
              <Link to="/login" className="account-link">
                <p>Login</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
