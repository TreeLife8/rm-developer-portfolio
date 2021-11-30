import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import MarketingService from "../../images/projects/MarketingService.png";
import marketingCode from "../../images/projects/marketingCode.png";

export default function MarketingWebsite(props) {
  const contentImgs = [
    {
      src: `${props.projects[3].img}`,
      alt: `${props.projects[3].alt}`,
      className: "img-fluid project-tile pe-5",
      align: "align-right",
      offset: 0.9,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${MarketingService}`,
      alt: "support services displayed for bike purchases on bike marketing website",
      className: "img img-fluid big  lg-padding-top",
      align: "align-left",
      offset: 1.7,
      speed: 1.4,
      factor: 1,
    },
    {
      src: `${marketingCode}`,
      alt: "snapshot of the code used in the marketing website",
      className: "img img-fluid",
      align: "align-right",
      offset: 2.1,
      speed: 3,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "Marketing Website",
      className: "heading md-padding-top",
      align: "align-left md-padding-top",
      offset: 0.99,
      speed: 0.95,
    },
    {
      text: "ReactJS",
      className: "skill-name lg-padding-top md-padding-right",
      align: "text-center pt-5",
      offset: 1.99,
      speed: 2,
    },
  ];
  return (
    <div className="MarketingWebsite">
      <ParallaxLayer
        offset={2}
        speed={0.5}
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
              offset={1.2}
              speed={0.9}
              style={{
                paddingTop: "50px",
              }}
            >
              <p className="align-left ps-5 ms-4">
                open-sourced on{" "}
                <a
                  href="https://github.com/TreeLife8/marketing-website-bikes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </p>
              <ParallaxLayer offset={0.8} speed={0.3}>
                <div className="align-left">
                  <Button
                    text="view project"
                    href={props.projects[3].href}
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
