import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="container-fluid hero">
        <h2 className="heading-title">Fronend</h2>
        <h1 className="title">DEVELOPER</h1>
        <div className="row">
          <div className="col-8 lines">
            <hr className="banner" />
            <hr className="banner" />
            <hr className="banner" />
          </div>
          <div className="col-4">
            <h3 className="subtitle">full stack in the making</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
