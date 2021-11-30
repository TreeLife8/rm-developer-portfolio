import React from "react";
import Button from "../buttons/Button";
import "./DesignStatement.css";

export default function DesignStatement() {
  return (
    <div className="DesignStatement pb-5">
      <h2 className="heading">inspired by design</h2>
      <p className="descrip-title">- graphic and UX design -</p>
      <p className="description">
        driven by a love of coding and creative development
      </p>
      <Button
        text="contact"
        href="./Contact"
        hidden={true}
        backgroundWhite={true}
      />
    </div>
  );
}
