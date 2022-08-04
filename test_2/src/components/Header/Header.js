import React from "react";
import { motion } from "framer-motion";

import "../../styles/Header/Header.css";
import web from "../../images/website.png";
import users from "../../images/users.png";
import services from "../../images/services.png";
import upgrade from "../../images/upgrade.png";
import features from "../../images/features.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="header__title"
      >
        Grow Your Business With Our ERP Solution.
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="header__tagline"
      >
        Big or small, physical or digital, we can help you create lasting impact
        with your customers
      </motion.p>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="header__cta"
        href="#pricing"
      >
        Our Pricing
      </motion.a>

      <div className="header__summary">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="summary__title"
        >
          <p>WHY USE OUR PRODUCTS</p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="summary__content"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
