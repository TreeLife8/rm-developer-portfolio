import React, { useEffect } from "react";
import Button from "../buttons/Button";
import "./SkillsGlance.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ParticleWaves from "../../animations/ParticleWaves";

export default function SkillsGlance() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="SkillsGlance">
      <div className="container-fluid">
        <ParticleWaves />
        <div className="mt-5 text-center">
          <h3
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="true"
            className="heading mb-5"
          >
            skills at a glance
          </h3>
          <Button text="about" hidden={true} href="./Contact" />
        </div>
      </div>
    </div>
  );
}
