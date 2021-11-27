import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Projects.css";
import DicCode from "../../images/projects/dictionaryCode.png";
import DictionaryApp from "./DictionaryApp";
import BookkeepingWebsite from "./BookkeepingWebsite";

export default function Projects(props) {
  return (
    <div className="Projects">
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <DictionaryApp projects={props.projects} />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ backgroundColor: "#eeeef1" }}
          factor={2}
        >
          <BookkeepingWebsite projects={props.projects} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#1f1f1f" }}
        />
        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          🍌
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
