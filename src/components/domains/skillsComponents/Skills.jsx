import React, { useEffect } from "react";
import "./Skills.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FurtherSkills from "./FurtherSkills";
import ButtonInternal from "../buttons/ButtonInternal";
import SkillBar from "./SkillBar";
import Loader from "react-loader-spinner";
import Footer from "../Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="Skills container">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2}
          style={{ backgroundColor: "#eeeef1" }}
          factor={1}
        />
        <ParallaxLayer offset={0} speed={0.7} factor={1}>
          <div className="pb-5">
            <SkillBar />
            <div className="text-end continued">
              <Loader type="Rings" color="#7f7262" height={50} width={50} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#1c1b1a" }}
        />
        <ParallaxLayer offset={0.99} speed={0.6} factor={1.7}>
          <div className="mb-5">
            <div className="d-flex further-skills justify-content-around">
              <FurtherSkills />
            </div>
            <div className="nav-links d-flex  justify-content-around">
              <ButtonInternal
                text="<< about"
                href={"../About"}
                hidden={true}
                margin={false}
              />
              <ButtonInternal
                text="projects >>"
                href={"../Projects"}
                hidden={true}
                margin={false}
              />
            </div>
          </div>
          <ParallaxLayer offset={1} speed={0.4}>
            <div className="footer">
              <Footer />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
