import React from "react";
import "./Websites.css";

const Websites = (props) => {
  return (
    <div className="Websites">
      <div className="row">
        <div className="col-sm-6 projects-column pt-5">
          {props.projects.map((project, index) => {
            return (
              <div
                key={index}
                className={
                  project.projectType !== "web app"
                    ? "row project ps-3"
                    : "hidden"
                }
              >
                <div className="col-7">
                  <div
                    className="tab"
                    onMouseEnter={() => props.setHover(true)}
                  >
                    {project.projectType}
                  </div>
                </div>
                <div className="col-5 breakdown">
                  <div>view breakdown</div>
                </div>
              </div>
            );
          })}
          <div className="marquee-container">
            <h3 className="marquee">build build</h3>
          </div>
        </div>
        <div className="col-sm-6">
          <h1 className="heading">websites</h1>
        </div>
      </div>
    </div>
  );
};

export default Websites;
