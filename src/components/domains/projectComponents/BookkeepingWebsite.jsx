import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import BookHero from "../../images/projects/BookHero.png";
import BookWebCodeMethod from "../../images/projects/BookCodeSerivces.png";

export default function BookkeepingWebsite(props) {
  const contentImgs = [
    {
      src: `${props.projects[1].img}`,
      alt: `${props.projects[1].alt}`,
      className: "img-fluid project-tile pe-5",
      align: "align-right sm-padding-top",
      offset: 0.3,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${BookHero}`,
      alt: "screenshot of the dictionay app code, showing the API calls",
      className: "img img-fluid big sm-padding-top",
      align: "align-right",
      offset: 1,
      speed: 0.4,
      factor: 1,
    },
    {
      src: `${BookWebCodeMethod}`,
      alt: "bookkeeping website testimonials",
      className: "img img-fluid landscape md-padding-top",
      align: "align-left",
      offset: 0.99,
      speed: 0.7,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "Bookkeeping Website",
      className: "heading sm-padding-top",
      align: "align-left ",
      offset: 0.25,
      speed: 0.55,
    },
    {
      text: "netlify",
      className: "skill-name md-padding-top",
      align: "align-left",
      offset: 1,
      speed: 0.7,
    },
  ];
  return (
    <div className="BookkeepingWebsite">
      <ParallaxLayer
        offset={1}
        speed={0.3}
        factor={1.5}
        style={{ backgroundColor: "#eeeef1" }}
      >
        <div className="white-section">
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
              offset={0.9}
              speed={0.6}
              style={{
                paddingTop: "100px",
              }}
            >
              <p className="align-left ps-5 ms-4">
                open-sourced on{" "}
                <a
                  href="https://github.com/TreeLife8/js-italladdsup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </p>
              <ParallaxLayer
                offset={0.4}
                speed={0.3}
                style={{
                  paddingTop: "100px",
                }}
              >
                <div className="align-left">
                  <Button
                    text="view project"
                    href={props.projects[1].href}
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
        </div>
      </ParallaxLayer>
    </div>
  );
}
