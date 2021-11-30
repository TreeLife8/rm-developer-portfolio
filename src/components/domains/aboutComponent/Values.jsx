import React from "react";
import ScrollingText from "./ScrollingText";
import "./Values.css";
import empathy from "../../images/about/empathy.jpg";

export default function Values() {
  return (
    <div className="Values">
      <div className="row">
        <div className="col-sm-6 values-bio">
          <h2 className="section-heading heading">values</h2>
          <ScrollingText />
        </div>
        <div className="col-sm-6 value-img">
          <img
            src={empathy}
            className="w-100 img-fluid"
            alt="two hands embracing"
          />
        </div>
      </div>
    </div>
  );
}
