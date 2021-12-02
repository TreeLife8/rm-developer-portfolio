import React from "react";
import "./DesignStatement.css";
import ButtonInternal from "../buttons/ButtonInternal";

export default function DesignStatement() {
  return (
    <div className="DesignStatement pb-5">
      <h2 className="heading">inspired by design</h2>
      <p className="descrip-title">- graphic and UX design -</p>
      <p className="description">
        driven by a love of coding and creative development
      </p>
      <ButtonInternal
        text="contact"
        href="../Contact"
        hidden={true}
        backgroundWhite={true}
      />
    </div>
  );
}
