import React from "react";
import "./Skills.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FurtherSkills from "./FurtherSkills";
import Button from "../buttons/Button";
import SkillBar from "./SkillBar";
import Loader from "react-loader-spinner";

export default function Skills() {
  return (
    <div className="Skills container">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2}
          style={{ backgroundColor: "#eeeef1" }}
          factor={1.5}
        />
        <ParallaxLayer
          offset={0}
          speed={0.7}
          factor={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="pb-5">
            <SkillBar />
            <div className="text-end continued">
              <Loader type="ThreeDots" color="#7f7262" height={50} width={50} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#1f1f1f" }}
        />
        <ParallaxLayer offset={1} speed={0.5} factor={1.5}>
          <div className="d-flex justify-content-evenly mt-5">
            <FurtherSkills />
          </div>
          <div className="nav-links d-flex justify-content-end pt-4 pe-5 pb-5">
            <Button
              text="projects"
              href={"../Projects"}
              hidden={false}
              margin={false}
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
