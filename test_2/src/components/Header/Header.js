import React from "react";

import "../../styles/Header/Header.css";
import web from "../../images/website.png";
import users from "../../images/users.png";
import services from "../../images/services.png";
import upgrade from "../../images/upgrade.png";
import features from "../../images/features.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">
        Grow Your Business With Our ERP Solution.
      </h1>
      <p className="header__tagline">
        Big or small, physical or digital, we can help you create lasting impact
        with your customers
      </p>
      <a className="header__cta">Our Pricing</a>

      <div className="header__summary">
        <div className="summary__title">
          <p>WHY USE OUR PRODUCTS</p>
        </div>
        <div className="summary__content">
          <div className="content__item">
            <img src={web} alt="Web Illustration" />
            <p>100% Web Based</p>
          </div>
          <div className="content__item">
            <img src={users} alt="Web Illustration" />
            <p>Unlimited Users</p>
          </div>
          <div className="content__item">
            <img src={services} alt="Web Illustration" />
            <p>Free Additional Services</p>
          </div>
          <div className="content__item">
            <img src={upgrade} alt="Web Illustration" />
            <p>Free Upgrade</p>
          </div>
          <div className="content__item">
            <img src={features} alt="Web Illustration" />
            <p>Full Features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
