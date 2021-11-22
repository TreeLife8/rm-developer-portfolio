import React, { useEffect } from "react";
import Button from "../buttons/Button";
import "./Home.css";
import dopamine from "../../images/Dopamine.png";
import love from "../../images/Love chemical.png";
import mind from "../../images/Mind chemical.png";
import SkillsGlance from "./SkillsGlance";
import Title from "./Title";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
import RubikAnimation from "../../animations/RubikAnimation";

export default function Home() {
  const line = [
    {
      duration: 1000,
      delay: 100,
    },
    {
      duration: 2000,
      delay: 500,
    },
    {
      duration: 3000,
      delay: 900,
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div className="Home">
      <div className="container-fluid">
        <div className="hero">
          <h2 className="title-heading mt-5 pt-5">Frontend</h2>
          <Title />
          <RubikAnimation />
          <div className="row mb-2">
            <div className="col-8 lines">
              {line.map((line, index) => {
                return (
                  <hr
                    key={index}
                    className="banner"
                    data-aos="flip-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    duration={line.duration}
                    data-aos-delay={line.delay}
                  />
                );
              })}
            </div>
            <div className="col-4">
              <h4 className="subtitle">full stack in the making</h4>
              <h4 className="dev-name">Regina Maher</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3
              data-aos="fade-in"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              className="heading"
            >
              from chemist to coder
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
            <Button text="contact" href="./Contact" />
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
        <SkillsGlance />
        <ProjectSection />
      </div>
    </div>
  );
}
