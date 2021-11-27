import React from "react";
import dopamine from "../../images/Dopamine.png";
import love from "../../images/Love chemical.png";
import mind from "../../images/Mind chemical.png";
import Button from "../buttons/Button";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="heading fade-name">
              from chemist to{" "}
              <span className="gold-highlight fade-word"> coder</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button text="contact" href="./Contact" target={false} />
          </div>
          <div className="col-sm-6">
            <div className="d-flex justify-content-around mt-3">
              <img
                className="img-fluid chemical"
                src={dopamine}
                alt="the chemical structure of the chemical messenger of pleasure"
              ></img>
              <img
                className="img-fluid chemical"
                src={love}
                alt="the chemical structure of a chemical that increases the activity of the neurotransmitters serotonin"
              ></img>
            </div>
            <img
              className="img-fluid chemical chem-three"
              src={mind}
              alt="the chemical structure of mind opening chemical"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
