import React from "react";

import PricingCard from "./PricingCard";

import "../../styles/Pricing/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing__wrapper">
      <div className="container">
        <h1 className="pricing__title">OUR PRICING</h1>
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
