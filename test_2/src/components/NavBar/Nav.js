import React from "react";

import "../../styles/NavBar/Nav/Nav.css";
import logo from "../../images/random-logo.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo__wrapper">
        <img src={logo} alt="Company Logo" />
        <a href="#">ERP SOLUTIONS</a>
      </div>
      <ul className="nav__links">
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">PRICING</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
