import React, { useEffect } from "react";
import Button from "../buttons/Button";
import "./SkillsGlance.css";
import ParticleWaves from "../../animations/ParticleWaves";

export default function SkillsGlance() {
  return (
    <div className="SkillsGlance">
      <div className="row pb-5">
        <div className="col-m-6">
          <ParticleWaves />
        </div>
        <div className="col-m-6">
          <div className="mt-5 text-center">
            <h3 className="heading mb-5 fade">skills at a glance</h3>
            <Button
              text="skills"
              hidden={true}
              href="./Skills"
              target={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
