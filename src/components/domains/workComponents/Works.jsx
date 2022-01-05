import React from "react";
import WebApps from "./WebApps";
import Websites from "./Websites";
import Footer from "../Footer";
import "./Works.css";

const Works = (props) => {
  return (
    <div className="Works">
      <div className="apps">
        <WebApps projects={props.projects} />
      </div>
      <div className="sites">
        <Websites projects={props.projects} />
      </div>
      <Footer />
    </div>
  );
};

export default Works;
