import React from "react";
import "./Websites.css";
import { Link } from "react-router-dom";

const Websites = (props) => {
  const projectDomains = new Map([
    ["bookkeeping website", "../BookSite"],
    ["marketing website", "../MarketingSite"],
  ]);
  return (
    <div className="Websites">
      <div className="row">
        <div className="col-sm-6 projects-column pt-5">
          {props.projects.map((project, index) => {
            if (project.projectType !== "web app") {
              return (
                <Link to={projectDomains.get(project.projectType)}>
                  <div key={index} className={"row project ps-3"}>
                    <div className="col-8">
                      <div className="tab">{project.projectType} >></div>
                    </div>
                    <div className="col-4 breakdown">
                      <div>view work</div>
                    </div>
                  </div>
                  //{" "}
                </Link>
              );
            }
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
