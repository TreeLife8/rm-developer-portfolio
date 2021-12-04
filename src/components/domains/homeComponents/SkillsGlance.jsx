import React from "react";
import ButtonInternal from "../buttons/ButtonInternal";
import ParticleWaves from "../../animations/ParticleWaves";
import SkillsListed from "./SkillsListed";

export default function SkillsGlance() {
  return (
    <div className="SkillsGlance">
      <div className="text-center">
        <SkillsListed />
        <ButtonInternal
          text="see progress"
          hidden={true}
          href="../Skills"
          target={false}
        />
      </div>
      <ParticleWaves />
    </div>
  );
}
