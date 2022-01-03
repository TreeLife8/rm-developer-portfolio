import React from "react";
import "./WebApps.css";

const WebApps = () => {
  return (
    <div className="WebApps container-fluid">
      <h1 className="heading">web apps</h1>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-2">
          <div className="marquee-container">
            <h3 className="marquee"> api api api api api api api api </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
