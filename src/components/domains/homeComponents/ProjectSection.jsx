import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ProjectSection.css";
import ButtonInternal from "../buttons/ButtonInternal";
import pokedexTile from "../../images/tiles/Tile - pokedex.png";
import ButtonExternal from "../buttons/ButtonExternal";

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
          className="big-heading pb-5"
        >
          projects
        </h3>
      </div>
      <div className="row">
        <div className="col-sm-6 pb-5 current">
          <a
            href="https://pokedex-react-app-squiggle.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              className="img-overlay"
            >
              <img
                src={pokedexTile}
                alt="photo of react pokedex app"
                className="img-fluid w-100 current-project"
              />
            </div>
          </a>
        </div>
        <div className="col-sm-6">
          <h3
            className="heading mb-5"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="true"
          >
            ongoing project
          </h3>
          <h3
            className="subtitle pb-3 text-start"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="true"
          >
            pokedex app
          </h3>
          <p className="align-left">
            open-sourced on{" "}
            <a
              href="https://github.com/regina-maher/pokedex"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              github
            </a>
          </p>
          <p>built with React.js, ES6+ and APIs</p>
          <ButtonExternal
            text="view project"
            href="https://pokedex-react-app-squiggle.netlify.app/"
            hidden={true}
            backgroundWhite={true}
          />
        </div>
      </div>
      <h3
        className="heading mb-5 ps-5"
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="true"
      >
        early projects
      </h3>
      <div className="row d-flex justify-content-center">
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
                  className="subtitle pb-3"
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
      <div className="text-center mb-5">
        <ButtonInternal
          href="./Projects"
          text="explore"
          hidden={true}
          margin={false}
        />
      </div>
    </div>
  );
}
