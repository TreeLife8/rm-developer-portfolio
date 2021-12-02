import React from "react";
import DicCode from "../../images/projects/dictionaryCode.png";
import DicAPICode from "../../images/projects/dictionaryAPICode.png";
import DicApp from "../../images/projects/DicApp.png";
import { ParallaxLayer } from "@react-spring/parallax";
import ButtonExternal from "../buttons/ButtonExternal";

export default function DictionaryApp(props) {
  const contentImgs = [
    {
      src: `${props.projects[0].img}`,
      alt: `${props.projects[0].alt}`,
      className: "img-fluid project-tile ps-5",
      align: "align-left",
      offset: 0,
      speed: 0.8,
      factor: 1,
    },
    {
      src: `${DicCode}`,
      alt: "screenshot of the dictionay app code, showing the phenetic component",
      className: "img img-fluid img-middle",
      align: "",
      offset: 0.63,
      speed: 1.4,
      factor: 0.5,
    },
    {
      src: `${DicAPICode}`,
      alt: "screenshot of the dictionay app code, showing the API calls",
      className: "img landscape img-fluid md-padding-top",
      align: "align-left",
      offset: 0.99,
      speed: 1.1,
      factor: 1,
    },
    {
      src: `${DicApp}`,
      alt: "dictionay app showing the photosearch results of a word",
      className: "img img-fluid sm-padding-top ps-3",
      align: "align-right",
      offset: 0.9,
      speed: 0.7,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "dictionary app",
      className: "heading",
      align: "align-right",
      offset: 0.1,
      speed: 0.6,
    },
    {
      text: "APIs",
      className: "skill-name sm-padding-top sm-padding-right",
      align: "align-right",
      offset: 0.5,
      speed: 0.9,
    },
    ,
  ];
  return (
    <div className="DictionaryApp container">
      <ParallaxLayer offset={0} speed={0.5} factor={1}>
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
        <ParallaxLayer offset={0.4} speed={0.6}>
          <div className="links">
            <p className="align-right">
              open-sourced on{" "}
              <a
                href="https://github.com/TreeLife8/dictionary-react-project"
                target="_blank"
                rel="noopener noreferrer"
                className="pe-3 link"
              >
                github
              </a>
            </p>
            <ParallaxLayer offset={0.1} speed={0.3}>
              <div className="align-right btn-section">
                <ButtonExternal
                  text="view project"
                  href={props.projects[0].href}
                  hidden={true}
                />
              </div>
            </ParallaxLayer>
          </div>
        </ParallaxLayer>
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
