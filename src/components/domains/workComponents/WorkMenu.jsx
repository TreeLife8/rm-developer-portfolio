import React from "react";
import "./WorkMenu.css";

const WorkMenu = (props) => {
  const projects = props.projects;
  console.log(projects);
  return (
    <div className="WorkMenu">
      <nav>
        <ul>
          {projects.map((project, index) => {
            return (
              <li className="projects-list" key={index}>
                {project.text}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default WorkMenu;
