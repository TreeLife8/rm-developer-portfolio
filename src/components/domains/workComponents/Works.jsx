import React from "react";
import WebApps from "./WebApps";
import WorkMenu from "./WorkMenu";
import "./Works.css";

const Works = (props) => {
  return (
    <div className="Works">
      <WebApps />
      {/* <WorkMenu projects={props.projects} /> */}
      <div className="row">
        <div className="col-sm-6 left top"></div>
        <div className="col-sm-6 right top"></div>
      </div>
    </div>
  );
};

export default Works;
