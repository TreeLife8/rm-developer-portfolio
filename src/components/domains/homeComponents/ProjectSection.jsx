import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ProjectSection.css";
import bikeTile from "../../images/tiles/Tile - CloudBike.png";
import dictonTile from "../../images/tiles/Tile - Dic_Ipad.png";
import iaauTile from "../../images/tiles/Tile - IAAU.png";
import todoTile from "../../images/tiles/Tile - TOdo.png";
import WeatherTile from "../../images/tiles/Tile - Weather_Ipad.png";
import Button from "../buttons/Button";

export default function ProjectSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  const projects = [
    {
      img: `${dictonTile}`,
      text: "dictionary app",
      alt: "photo of react dictionary app on an Ipad",
      href: "https://xenodochial-bell-b72f23.netlify.app/",
    },
    {
      img: `${iaauTile}`,
      text: "website",
      alt: "website for bookkeeping service",
      href: "https://sleepy-wilson-1bbb7b.netlify.app/",
    },
    {
      img: `${todoTile}`,
      text: "todo app",
      alt: "photo of react todo app",
      href: "https://suspicious-jennings-48bead.netlify.app/",
    },
    {
      img: `${bikeTile}`,
      text: "website",
      alt: "advertising website for bike products",
      href: "https://gallant-kepler-6cc631.netlify.app/",
    },
    {
      img: `${WeatherTile}`,
      text: "weather app",
      alt: "photo of react weather app on an Ipad",
      href: "https://agitated-austin-14832c.netlify.app/",
    },
  ];
  return (
    <div className="ProjectSection pt-5 mt-5">
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
      <div className="text-center">
        <Button href="./Projects" text="explore" hidden={true} margin={false} />
      </div>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            return (
              <div key={index} className="col-sm project-tile">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
