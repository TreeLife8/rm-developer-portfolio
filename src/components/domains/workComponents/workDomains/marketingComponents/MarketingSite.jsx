import React from "react";
import Footer from "../../../Footer";
import MarketingHero from "./MarketingHero";

const MarketingSite = (props) => {
  return (
    <div className="MarketingSite">
      <MarketingHero projects={props.projects} />
      <Footer />
    </div>
  );
};

export default MarketingSite;
