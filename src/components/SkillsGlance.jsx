import React from "react";
import Button from "./Button";
import "./SkillsGlance.css";

export default function SkillsGlance() {
  return (
    <div className="SkillsGlance">
      <div className="container-fluid">
        <h3 className="heading">skills at a glance</h3>
        <div className="d-flex justify-content-center">
          <Button text="contact" hidden={true} />
        </div>
      </div>
    </div>
  );
}
