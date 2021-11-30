import React from "react";
import "./Interests.css";
// import danceBlackWhite from "../../images/about/danceBW.jpg";
import danceColour from "../../images/about/danceColourR.jpg";

export default function Interests() {
  const interests = [
    "hiking",
    "dancing",
    "philosophy",
    "yoga",
    "meditation",
    "metaphysics",
    "trees",
  ];
  return (
    <div className="Interests">
      <div className="row">
        <div className="col-sm-6 interest">
          <h2 className="section-heading heading change-colour">interests</h2>
          <div className="list row d-flex pt-5 justify-content-center">
            {interests.map((interest, index) => {
              return (
                <div key={index} className="col-sm-3 interest-list p-3">
                  {interest}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-6 d-flex">
          <img
            className="img-fluid w-100"
            src={danceColour}
            alt="girl dancing in black and white"
          />
        </div>
      </div>
    </div>
  );
}
