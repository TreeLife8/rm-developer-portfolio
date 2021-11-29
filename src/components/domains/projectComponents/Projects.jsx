import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Projects.css";
import DictionaryApp from "./DictionaryApp";
import BookkeepingWebsite from "./BookkeepingWebsite";

import Todo from "./Todo";

export default function Projects(props) {
  return (
    <div className="Projects">
      <Parallax pages={5} style={{ top: "0", left: "0" }}>
        <DictionaryApp projects={props.projects} />
        <BookkeepingWebsite projects={props.projects} />
        <Todo projects={props.projects} />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#eeeef1" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#eeeef1" }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}
