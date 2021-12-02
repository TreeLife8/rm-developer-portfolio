import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ButtonExternal from "../buttons/ButtonExternal";
import TodoCode from "../../images/projects/TodoCode.png";
import todo from "../../images/projects/todo.png";

export default function Todo(props) {
  const contentImgs = [
    {
      src: `${props.projects[2].img}`,
      alt: `${props.projects[2].alt}`,
      className: "img-fluid project-tile ps-5 lg-padding-top",
      align: "align-left",
      offset: 0.99,
      speed: 0.5,
      factor: 1,
    },
    {
      src: `${TodoCode}`,
      alt: "Code snapshot for colour pallet selection on todo list",
      className: "img img-fluid",
      align: "align-left",
      offset: 1.7,
      speed: 0.7,
      factor: 1,
    },
    {
      src: `${todo}`,
      alt: "Display of the colour pallet selection on todo list",
      className: "img img-fluid lg-padding-top landscape",
      align: "align-right",
      offset: 1.8,
      speed: 1,
      factor: 1,
    },
  ];
  const contentText = [
    {
      text: "todo list app",
      className: "heading pt-5",
      align: "align-right",
      offset: 1,
      speed: 0.8,
    },
    {
      text: "ES5/ES6",
      className: "skill-name",
      align: "align-right",
      offset: 1.8,
      speed: 0.9,
    },
  ];
  return (
    <div className="Todo">
      <ParallaxLayer
        offset={2}
        speed={0.5}
        factor={1}
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
          <ParallaxLayer offset={1.3} speed={0.7}>
            <p className="align-right ps-5 ms-4">
              open-sourced on{" "}
              <a
                href="https://github.com/TreeLife8/todo-list"
                target="_blank"
                rel="noopener noreferrer"
                className="pe-5 me-3 link"
              >
                github
              </a>
            </p>
            <ParallaxLayer offset={0.7} speed={0.3}>
              <div className="align-right me-5 btn-section">
                <ButtonExternal
                  text="view project"
                  href={props.projects[2].href}
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
