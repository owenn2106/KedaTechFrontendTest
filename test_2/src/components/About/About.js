import React from "react";

import "../../styles/About/About.css";
import shopee from "../../images/clients/shopee.png";
import tokopedia from "../../images/clients/tokopedia.png";
import traveloka from "../../images/clients/traveloka.png";

const About = () => {
  return (
    <div className="about__wrapper" id="about">
      <div className="container">
        <div className="about__title">
          <h2>ERP Solutions</h2>
        </div>
        <div className="about__content">
          <p>
            ERP Solutions is a unique organization in the Enterprise Business
            Applications space providing innovative, cost-effective and
            configurable solutions and services for common business problems.
          </p>
          <p>
            Our mission is to{" "}
            <strong>
              provide innovative, configurable, flexible, cost-effective
              solutions and services
            </strong>{" "}
            for common business problems, enabling our clients to save time,
            increase productivity, minimize costs and maximize return on
            investment.
          </p>
        </div>
        <div className="clients">
          <h2>OUR TRUSTING CLIENTS</h2>
          <div className="client__wrapper">
            <div className="image__wrapper">
              <img src={shopee} alt="" />
            </div>
            <div className="image__wrapper">
              <img src={tokopedia} alt="" />
            </div>
            <div className="image__wrapper">
              <img src={traveloka} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
