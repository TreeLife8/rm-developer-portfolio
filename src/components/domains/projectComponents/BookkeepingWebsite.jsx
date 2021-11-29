import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import BookWebCode from "../../images/projects/BookCodeWeb.png";
import BookHero from "../../images/projects/BookHero.png";
import BookTestimonials from "../../images/projects/BookTestimonialWeb.png";
import BookWebCodeMethod from "../../images/projects/BookCodeSerivces.png";

export default function BookkeepingWebsite(props) {
  const contentImgs = [
    {
      src: `${props.projects[1].img}`,
      alt: `${props.projects[1].alt}`,
      className: "img-fluid project-tile pe-5",
      align: "align-right",
      offset: 0.3,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${BookWebCode}`,
      alt: "screenshot of the bookkeeping website code",
      className: "img img-fluid img-middle landscape",
      align: "",
      offset: 1,
      speed: 3,
      factor: 1,
    },
    {
      src: `${BookHero}`,
      alt: "screenshot of the dictionay app code, showing the API calls",
      className: "img img-fluid big",
      align: "align-left",
      offset: 1.3,
      speed: 1.5,
      factor: 1,
    },
    {
      src: `${BookTestimonials}`,
      alt: "bookkeeping website testimonials",
      className: "img img-fluid landscape md-padding-top",
      align: "align-right",
      offset: 1.9,
      speed: 2.5,
      factor: 1,
    },
    {
      src: `${BookWebCodeMethod}`,
      alt: "bookkeeping website testimonials",
      className: "img img-fluid img-middle lg-padding-top big",
      align: "",
      offset: 1.9,
      speed: 2,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "Bookkeeping Website",
      className: "heading lg-padding-top",
      align: "align-left",
      offset: 0.5,
      speed: 1.3,
    },
    {
      text: "netlify",
      className: "skill-name sm-padding-top",
      align: "align-right pt-5",
      offset: 1.7,
      speed: 3,
    },
    {
      text: "github",
      className: "skill-name lg-padding-top",
      align: "align-left",
      offset: 1.9,
      speed: 3,
    },
  ];
  return (
    <div className="BookkeepingWebsite">
      <ParallaxLayer
        offset={1}
        speed={0.5}
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
              speed={0.9}
              style={{
                paddingTop: "150px",
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
                offset={0.6}
                speed={0.3}
                style={{
                  paddingTop: "50px",
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
