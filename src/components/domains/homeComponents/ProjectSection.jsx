import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ProjectSection.css";
import bikeTile from "../../images/tiles/Tile - CloudBike.png";
import dictonTile from "../../images/tiles/Tile - Dic_Ipad.png";
import iaauTile from "../../images/tiles/Tile - IAAU.png";
import todoTile from "../../images/tiles/Tile - TOdo.png";
import WeatherTile from "../../images/tiles/Tile - Weather_Ipad.png";

export default function ProjectSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  const projects = [
    {
      img: `${dictonTile}`,
      text: "dictionary app",
      alt: "photo of react dictionary app on an Ipad",
    },
    {
      img: `${iaauTile}`,
      text: "website",
      alt: "website for bookkeeping service",
    },
    {
      img: `${todoTile}`,
      text: "todo app",
      alt: "photo of react todo app",
    },
    {
      img: `${bikeTile}`,
      text: "website",
      alt: "advertising website for bike products",
    },
    {
      img: `${WeatherTile}`,
      text: "weather app",
      alt: "photo of react weather app on an Ipad",
    },
  ];
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
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            return (
              <div key={index} className="col-sm project-tile">
                <img
                  className="img-fluid"
                  src={project.img}
                  alt={project.alt}
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="true"
                />
                <h3
                  className="subtitle"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="true"
                >
                  {project.text}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
