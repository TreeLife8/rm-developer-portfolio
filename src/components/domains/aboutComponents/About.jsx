import React, { useEffect } from "react";
import Skills from "./Skills";
import "./About.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FurtherSkills from "./FurtherSkills";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="About container-fluid">
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="container">
            <h1 className="heading fade-name">regina maher</h1>
            <div className="row">
              <p className="col-8 bio-description">
                Hi! I'm a frontend developer from Sydney. I'm an extremely
                enthusiastic individual with a passion for problem-solving, data
                analytics and creative development. I began my career as an
                analytical chemist. This gave me many years of experience in
                dealing with complex data sets to design practical solutions for
                large-scale industrial issues.
                <br />
                <br />
                Recently, I decided to learn web and software development,
                giving me the creative outlet I had been missing in science.
                Since then, I code so much that even my dreams are filled with
                loops and functions.
                <br />
                <br />
                Confident in frontend development, I look forward to put my
                skills to use whilst I further develope my skills in backend,
                data science and machine learning.
              </p>
              <div className="col-4">
                <h2 className="silhouette-title">about</h2>
              </div>
            </div>
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
            <div className="text-end continued">...</div>
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
