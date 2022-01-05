import React from "react";
import "../Hero.css";
import Footer from "../../../Footer";
import DicHero from "./DicHero";

const Dictionary = (props) => {
  return (
    <div className="Dictionary container-fluid">
      <DicHero projects={props.projects} />
      <Footer />
    </div>
  );
};

export default Dictionary;
