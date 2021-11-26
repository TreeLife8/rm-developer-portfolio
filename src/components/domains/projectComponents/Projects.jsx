import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Projects.css";
import CSS from "../../images/imgSkills/css.png";
import html from "../../images/imgSkills/html.png";
import github from "../../images/imgSkills/github.png";
import javascript from "../../images/imgSkills/javascript.png";
import netlify from "../../images/imgSkills/netlify.png";
import api from "../../images/imgSkills/api.png";
import bootstrap from "../../images/imgSkills/bootstrap.png";
import react from "../../images/imgSkills/react.png";
import responsive from "../../images/imgSkills/responsive.png";

export default function Projects(props) {
  const skills = [
    {
      icon: `${CSS}`,
      alt: "CSS logo",
      text: "css",
      completed: true,
    },
    {
      icon: `${html}`,
      alt: "html logo",
      text: "html",
      completed: true,
    },
    {
      icon: `${javascript}`,
      alt: "javascript logo",
      text: "javascript",
      completed: true,
    },
    {
      icon: `${responsive}`,
      alt: "responsive logo",
      text: "responsive",
      completed: true,
    },
    {
      icon: `${bootstrap}`,
      alt: "bootstrap logo",
      text: "bootstrap",
      completed: true,
    },
    {
      icon: `${github}`,
      alt: "github logo",
      text: "github",
      completed: true,
    },
    {
      icon: `${react}`,
      alt: "react logo",
      text: "react",
      completed: true,
    },
    {
      icon: `${netlify}`,
      alt: "netlify logo",
      text: "netlify hosting",
      completed: true,
    },
    {
      icon: `${api}`,
      alt: "api logo",
      text: "api",
      completed: true,
    },
  ];
  return (
    <div className="Projects">
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.5} factor={0.5}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <ParallaxLayer
                  offset={0}
                  speed={0.8}
                  factor={0.5}
                  style={{
                    paddingLeft: "100px",
                  }}
                >
                  <a
                    href={props.projects[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="overlay">
                      <img
                        className="img-fluid project-tile"
                        src={props.projects[0].img}
                        alt={props.projects[0].alt}
                      />
                    </div>
                  </a>
                </ParallaxLayer>
              </div>
              <div className="col-sm-6 mt-5">
                <ParallaxLayer
                  offset={0}
                  speed={1.5}
                  factor={0.5}
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: "100px",
                  }}
                >
                  <h2 className="heading">dictionary app</h2>
                </ParallaxLayer>
                <div className="d-flex justify-content-evenly row listed-skills">
                  <ParallaxLayer
                    offset={0.5}
                    speed={4}
                    factor={0.5}
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      paddingRight: "300px",
                    }}
                  >
                    {/* {skills.map((skill, index) => {
                      return (
                        <div className="col-sm" key={index}>
                          <img
                            className="skill-icon"
                            src={skill.icon}
                            alt={skill.alt}
                          />
                          <h3 className="skills-description mt-2 mb-3">
                            {skill.text}
                          </h3>
                        </div>
                      );
                    })} */}
                  </ParallaxLayer>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#eeeef1" }}
          factor={1.5}
        />
        <ParallaxLayer
          offset={1}
          speed={0.7}
          factor={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          🍌
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#1f1f1f" }}
        />
        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          🍌
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
