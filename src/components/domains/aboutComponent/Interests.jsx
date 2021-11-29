import React from "react";
import "./Interests.css";

export default function Interests() {
  const interests = [
    "hiking",
    "dancing",
    "philosophy",
    "metaphysics",
    "gardening",
    "trees",
    "eating",
  ];
  return (
    <div className="Interests">
      <div className="row">
        <div className="col-sm-6 values-bio">
          <h2 className="section-heading">interests</h2>
          <div className="list row d-flex">
            {interests.map((interest, index) => {
              return (
                <div key={index} className="col-sm-4 interest-list">
                  {interest}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-6 values"></div>
      </div>
    </div>
  );
}
