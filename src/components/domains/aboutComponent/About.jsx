import React from "react";
import Values from "../aboutComponent/Values";
import AboutBio from "./AboutBio";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <AboutBio />
      <Values />
    </div>
  );
}
