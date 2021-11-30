import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import weatherReact from "../../images/projects/weatherReact.png";
import weatherReactCode from "../../images/projects/weatherReactCode.png";

export default function WeatherApp(props) {
  const contentImgs = [
    {
      src: `${props.projects[4].img}`,
      alt: `${props.projects[4].alt}`,
      className: "img-fluid project-tile ps-5 lg-padding-top",
      align: "align-left sm-padding-top",
      offset: 0.99,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${weatherReact}`,
      alt: "coloured image of the weather app created with react",
      className: "img img-fluid",
      align: " align-right",
      offset: 2.1,
      speed: 2,
      factor: 1,
    },
    {
      src: `${weatherReactCode}`,
      alt: "image of the code setting the units for the weather react app",
      className: "img img-fluid big md-padding-right sm-padding-top",
      align: "align-right",
      offset: 2.99,
      speed: 4,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "weather app",
      className: "heading me-5 pe-3 lg-padding-top",
      align: "align-right sm-padding-top",
      offset: 1.4,
      speed: 1.3,
    },
    {
      text: "npm",
      className: "skill-name md-padding-left lg-padding-top",
      align: "text-start md-padding-top",
      offset: 1.99,
      speed: 1.4,
    },
  ];
  return (
    <div className="WeatherApp">
      <ParallaxLayer
        offset={2.99}
        speed={0.5}
        factor={0.9}
        style={{ backgroundColor: "#1f1f1f" }}
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
          <ParallaxLayer
            offset={1.1}
            speed={0.9}
            style={{
              paddingTop: "500px",
            }}
          >
            <p className="align-right ps-5 ms-4">
              open-sourced on{" "}
              <a
                href="https://github.com/TreeLife8/banana-react-weather"
                target="_blank"
                rel="noopener noreferrer"
                className="pe-5 me-3"
              >
                github
              </a>
            </p>
            <ParallaxLayer
              offset={0.9}
              speed={0.3}
              style={{
                paddingTop: "480px",
              }}
            >
              <div className="align-right me-5">
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
      </ParallaxLayer>
    </div>
  );
}
