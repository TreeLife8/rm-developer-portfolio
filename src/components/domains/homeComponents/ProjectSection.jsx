import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ProjectSection.css";
import ButtonInternal from "../buttons/ButtonInternal";

export default function ProjectSection(props) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="ProjectSection">
      <div className="dark">
        <h3
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          className="heading"
        >
          projects
        </h3>
      </div>
      <div className="text-center mb-5">
        <ButtonInternal
          href="./Projects"
          text="explore"
          hidden={true}
          margin={false}
        />
      </div>
      <div className="row">
        {props.projects.map((project, index) => {
          return (
            <div key={index} className="col-sm project-tile">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="true"
                  className="img-overlay"
                >
                  <img
                    className="img-fluid w-100"
                    src={project.img}
                    alt={project.alt}
                  />
                </div>
                <h3
                  className="subtitle"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="true"
                >
                  {project.text}
                </h3>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
