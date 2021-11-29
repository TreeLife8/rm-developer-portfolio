import React from "react";
import ScrollingText from "./ScrollingText";
import "./Values.css";

export default function Values() {
  return (
    <div className="Values">
      <div className="row">
        <div className="col-sm-6 values-bio">
          <h2 className="heading">values</h2>
          <ScrollingText />
        </div>
        <div className="col-sm-6 values"></div>
      </div>
    </div>
  );
}
