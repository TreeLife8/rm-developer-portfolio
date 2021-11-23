import React, { useEffect } from "react";
import Skills from "./Skills";
import "./About.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FurtherSkills from "./FurtherSkills";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="About container-fluid">
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container-fluid">
            <h1
              className="heading"
              data-aos="fade-in"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
            >
              regina maher
            </h1>
            <p className="bio-description">
              Hi! I'm a frontend developer from Sydney. I'm an extremely
              enthusiastic individual with a passion for problem-solving, data
              analytics and creative development. I began my career as an
              analytical chemist. This gave me many years of experience in
              dealing with complex data sets to design practical solutions for
              large-scale industrial issues.
              <br />
              <br />
              Recently, I decided to learn web and software development, giving
              me the creative outlet I had been missing in science. Since then,
              I code so much that even my dreams are filled with loops and
              functions.
              <br />
              <br />
              Confident in frontend development, I look forward to put my skills
              to use whilst I further develope my skills in backend, data
              science and machine learning.
            </p>
          </div>
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
          <div className="mt-5 mb-5 pt-5 pb-5">
            <Skills />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#1f1f1f" }}
        />
        <ParallaxLayer offset={2} speed={0.5}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FurtherSkills />
          </div>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
