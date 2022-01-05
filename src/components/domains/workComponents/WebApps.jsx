import React from "react";
import { Link } from "react-router-dom";
import "./WebApps.css";

const WebApps = (props) => {
  const projectDomains = new Map([
    ["dictionary app", "../Dictionary"],
    ["todo app", "../Todo"],
    ["weather app", "../Weather"],
    ["pokedex app", "../Pokedex"],
  ]);
  return (
    <div className="WebApps container-fluid">
      <div className="row">
        <div className="col-6">
          <h1 className="heading">web apps</h1>
        </div>
        <div className="col-6 projects-column">
          <div className="row">
            <div className="col-9 pt-5 pb-5">
              {props.projects.map((project, index) => {
                if (project.projectType === "web app") {
                  return (
                    <Link to={projectDomains.get(project.text)}>
                      <div key={index} className={"row project"}>
                        <div className="col-7">
                          <div className="tab">{project.text}</div>
                        </div>
                        <div className="col-5 breakdown">
                          <div>view breakdown</div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
            <div className="col-3">
              <div className="marquee-container">
                <h3 className="marquee"> api api api </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
