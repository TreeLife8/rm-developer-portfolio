import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

export default function Spinners() {
  const loaders = [
    "Audio",
    "Grid",
    // "Hearts",
    "Oval",
    "BallTriangle",
    "Rings",
    "Circles",
    // "Puff",
    "TailSpin",
    "ThreeDots",
    "Bars",
  ];
  return (
    <div className="Spinners">
      <div className="container">
        <div className="row">
          {loaders.map((loader, index) => (
            <div key={index} className="col-sm-4 cell">
              <Loader type={loader} color="#c7a44e" height={100} width={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
