import React from "react";
import Skills from "./Skills";
import "./About.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function About() {
  return (
    <div className="About container-fluid">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="heading">regina maher</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#eeeef1" }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skills />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
