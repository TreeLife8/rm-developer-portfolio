import React from "react";
import Button from "../buttons/Button";
import "./SkillsGlance.css";
import ParticleWaves from "../../animations/ParticleWaves";
import SkillsListed from "./SkillsListed";

export default function SkillsGlance() {
  return (
    <div className="SkillsGlance">
      <div className="text-center">
        <SkillsListed />
        <Button
          text="see progress"
          hidden={true}
          href="./Skills"
          target={false}
        />
      </div>
      <ParticleWaves />
    </div>
  );
}
