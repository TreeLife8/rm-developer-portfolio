import React from "react";
import dopamine from "../../images/graphicElements/Dopamine.png";
import love from "../../images/graphicElements/Love chemical.png";
import mind from "../../images/graphicElements/Mind chemical.png";
import Button from "../buttons/Button";

export default function Intro() {
  return (
    <div className="Intro ps-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="heading fade-name">
              from chemist to{" "}
              <span className="gold-highlight fade-word"> coder</span>
            </h3>
            <h3 className="dev-name pt-3">Regina Maher</h3>
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button
              text="about"
              href="./About"
              target={false}
              hidden={false}
              margin={true}
            />
          </div>
          <div className="col-sm-6 right-side">
            <div className="d-flex justify-content-around mt-3">
              <img
                className="img-fluid chemical pt-5"
                src={dopamine}
                alt="the chemical structure of the chemical messenger of pleasure"
              ></img>
              <img
                className="img-fluid chemical pb-5"
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
