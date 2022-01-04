import React from "react";
import WebApps from "./WebApps";
import Websites from "./Websites";
import Footer from "../Footer";
import "./Works.css";

const Works = (props) => {
  return (
    <div className="Works">
      <WebApps projects={props.projects} />
      <Websites projects={props.projects} />
      <Footer />
    </div>
  );
};

export default Works;
