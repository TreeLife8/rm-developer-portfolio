import React from "react";
import WorkMenu from "./WorkMenu";

const Works = (props) => {
  return (
    <div className="Works">
      <WorkMenu projects={props.projects} />
    </div>
  );
};

export default Works;
