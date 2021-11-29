import React from "react";
import Values from "../aboutComponent/Values";
import AboutBio from "./AboutBio";
import "./About.css";
import Accomplishments from "./Accomplishments";
import Interests from "./Interests";
import Footer from "../Footer";
import DesignStatement from "./DesignStatement";

export default function About() {
  return (
    <div className="About">
      <AboutBio />
      <Values />
      <Accomplishments />
      <Interests />
      <DesignStatement />
      <Footer />
    </div>
  );
}
