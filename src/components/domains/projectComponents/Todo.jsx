import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import TodoCode from "../../images/projects/TodoCode.png";

export default function Todo(props) {
  const contentImgs = [
    {
      src: `${props.projects[2].img}`,
      alt: `${props.projects[2].alt}`,
      className: "img-fluid project-tile ps-5",
      align: "align-left",
      offset: 1.3,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${TodoCode}`,
      alt: "Code snapshot for colour pallet selection on todo list",
      className: "img img-fluid",
      align: "",
      offset: 2,
      speed: 3,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "todo list app",
      className: "heading sm-padding-right",
      align: "align-right",
      offset: 1.5,
      speed: 1.3,
    },
    {
      text: "APIs",
      className: "skill-name sm-padding-top sm-padding-right",
      align: "align-right",
      offset: 2.7,
      speed: 3,
    },
    {
      text: "React",
      className: "skill-name lg-padding-top md-padding-left",
      align: "align-left",
      offset: 1.99,
      speed: 1.4,
    },
  ];
  return (
    <div className="Todo">
      <ParallaxLayer offset={2} speed={0.5} factor={2}>
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
          <ParallaxLayer offset={1.4} speed={1.5}>
            <p className="align-right">
              open-sourced on{" "}
              <a
                href="https://github.com/TreeLife8/dictionary-react-project"
                target="_blank"
                rel="noopener noreferrer"
                className="pe-3"
              >
                github
              </a>
            </p>
            <ParallaxLayer offset={1.1} speed={0.3}>
              <div className="align-right">
                <Button
                  text="view project"
                  href={props.projects[2].href}
                  hidden={true}
                  target={true}
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
