import React, { useEffect } from "react";
import Button from "./Button";
import "./SkillsGlance.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ParticleWaves from "./ParticleWaves";

export default function SkillsGlance() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="SkillsGlance">
      <div className="container-fluid">
        <h3
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          className="heading"
        >
          skills at a glance
        </h3>
        <section>
          <ParticleWaves />
        </section>
        <div className="d-flex justify-content-center">
          <Button text="contact" hidden={true} />
        </div>
      </div>
    </div>
  );
}
