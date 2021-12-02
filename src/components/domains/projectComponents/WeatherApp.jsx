import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import weatherReact from "../../images/projects/weatherReact.png";
import weatherReactCode from "../../images/projects/weatherReactCode.png";
import Footer from "../Footer";

export default function WeatherApp(props) {
  const contentImgs = [
    {
      src: `${props.projects[4].img}`,
      alt: `${props.projects[4].alt}`,
      className: "img-fluid project-tile ps-5",
      align: "align-left",
      offset: 1.5,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${weatherReact}`,
      alt: "coloured image of the weather app created with react",
      className: "img img-fluid",
      align: " align-right",
      offset: 2.7,
      speed: 0.9,
      factor: 1,
    },
    {
      src: `${weatherReactCode}`,
      alt: "image of the code setting the units for the weather react app",
      className: "img img-fluid big sm-padding-left",
      align: "align-left",
      offset: 2.7,
      speed: 0.8,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "weather app",
      className: "heading me-5 pe-3",
      align: "align-right",
      offset: 1.95,
      speed: 0.6,
    },
    {
      text: "npm",
      className: "skill-name",
      align: "text-center",
      offset: 2.5,
      speed: 0.95,
    },
  ];
  return (
    <div className="WeatherApp">
      <ParallaxLayer
        offset={4}
        speed={0.5}
        factor={1.7}
        style={{ backgroundColor: "#1c1b1a" }}
      >
        {contentImgs.map((content, index) => {
          return (
            <ParallaxLayer
              key={index}
              offset={content.offset}
              speed={content.speed}
              factor={content.factor}
            >
              <div className={content.align}>
                <img
                  className={content.className}
                  src={content.src}
                  alt={content.alt}
                />
              </div>
            </ParallaxLayer>
          );
        })}
        <div className="links">
          <ParallaxLayer offset={2.3} speed={0.9}>
            <p className="align-right ps-5 ms-4">
              open-sourced on{" "}
              <a
                href="https://github.com/TreeLife8/banana-react-weather"
                target="_blank"
                rel="noopener noreferrer"
                className="pe-5 me-3 link"
              >
                github
              </a>
            </p>
            <ParallaxLayer
              offset={1.2}
              speed={0.6}
              style={{
                paddingTop: "480px",
              }}
            >
              <div className="align-right me-5 btn-section">
                <Button
                  text="view project"
                  href={props.projects[4].href}
                  hidden={true}
                  target={true}
                  backgroundWhite={true}
                />
              </div>
            </ParallaxLayer>
          </ParallaxLayer>
        </div>
        {contentText.map((content, index) => {
          return (
            <ParallaxLayer
              key={index}
              offset={content.offset}
              speed={content.speed}
            >
              <div className={content.align}>
                <h2 className={content.className}>{content.text}</h2>
              </div>
            </ParallaxLayer>
          );
        })}
        <ParallaxLayer offset={2.5} speed={0.5}>
          <div className="footer mt-5">
            <Footer />
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
    </div>
  );
}
