import React from "react";
import dopamine from "../../images/graphicElements/Dopamine.png";
import penicillin from "../../images/graphicElements/penicillin.png";
import mind from "../../images/graphicElements/Mind chemical.png";
import ButtonInternal from "../buttons/ButtonInternal";

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
            <h3 className="dev-name pt-3">
              <strong>Regina Maher (Gin)</strong>
              <br /> frontend developer / data analyst / problem solver
            </h3>
            <p className="intro-description">
              Equipped with a Masters of Research in analytical chemistry, I had
              the opportunity to work as an industrial problem-solver for SGS, a
              world leading analysis company. Realising the importance of
              technology to solve industry problems & my love for data analysis,
              I made the switch to web and software development.
            </p>
            <ButtonInternal
              text="about"
              href="./About"
              hidden={false}
              margin={true}
            />
          </div>
          <div className="col-sm-6 right-side">
            <div className="d-flex justify-content-around mt-3">
              <img
                className="img-fluid chemical chem-one"
                src={mind}
                alt="the chemical structure of mind opening chemical"
              ></img>
              <img
                className="img-fluid chemical chem-two"
                src={dopamine}
                alt="the chemical structure of the chemical messenger of pleasure"
              ></img>
            </div>
            <img
              className="img-fluid chemical chem-three"
              src={penicillin}
              alt="the chemical structure of the antibiotic penicillin"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
