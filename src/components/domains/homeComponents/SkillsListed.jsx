import React, { useEffect } from "react";
import "./SkillsListed.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CSS from "../../images/whiteSkills/white - CSS.png";
import html from "../../images/whiteSkills/white - Html.png";
import github from "../../images/whiteSkills/white - Github.png";
import javascript from "../../images/whiteSkills/white - Javascript.png";
import netlify from "../../images/whiteSkills/white - Netlify.png";
import php from "../../images/whiteSkills/white - PhP.png";
import python from "../../images/whiteSkills/white - Python.png";
import api from "../../images/whiteSkills/white - Api.png";
import bootstrap from "../../images/whiteSkills/white - Bootstrap.png";
import mysql from "../../images/whiteSkills/white - MySQL.png";
import react from "../../images/whiteSkills/white - React.png";
import responsive from "../../images/whiteSkills/white - Responsive.png";
import seo from "../../images/whiteSkills/white - Seo.png";
import swift from "../../images/whiteSkills/white - Swift.png";
import nodejs from "../../images/whiteSkills/white - Nodejs.png";
import flutter from "../../images/whiteSkills/white - Flutter.png";

export default function SkillsListed() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  const skills = [
    {
      icon: `${CSS}`,
      alt: "CSS logo",
      text: "css",
      completed: true,
    },
    {
      icon: `${html}`,
      alt: "html logo",
      text: "html",
      completed: true,
    },
    {
      icon: `${javascript}`,
      alt: "javascript logo",
      text: "javascript",
      completed: true,
    },
    {
      icon: `${responsive}`,
      alt: "responsive logo",
      text: "responsive",
      completed: true,
    },
    {
      icon: `${bootstrap}`,
      alt: "bootstrap logo",
      text: "bootstrap",
      completed: true,
    },
    {
      icon: `${github}`,
      alt: "github logo",
      text: "github",
      completed: true,
    },
    {
      icon: `${react}`,
      alt: "react logo",
      text: "react",
      completed: true,
    },
    {
      icon: `${netlify}`,
      alt: "netlify logo",
      text: "netlify hosting",
      completed: true,
    },
    {
      icon: `${api}`,
      alt: "api logo",
      text: "api",
      completed: true,
    },
    {
      icon: `${seo}`,
      alt: "seo logo",
      text: "seo",
      completed: true,
    },
    {
      icon: `${nodejs}`,
      alt: "nodejs logo",
      text: "node.js",
      completed: true,
    },
    {
      icon: `${mysql}`,
      alt: "mysql logo",
      text: "mysql",
      completed: false,
    },
    {
      icon: `${python}`,
      alt: "python logo",
      text: "python",
      completed: false,
    },
    {
      icon: `${php}`,
      alt: "php logo",
      text: "php",
      completed: false,
    },
    {
      icon: `${flutter}`,
      alt: "flutter logo",
      text: "flutter",
      completed: false,
    },
    {
      icon: `${swift}`,
      alt: "swift logo",
      text: "swift",
      completed: false,
    },
  ];
  return (
    <div className="SkillsListed">
      <div className="container-fluid">
        <h3
          className="heading mb-5"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
        >
          skills at a glance
        </h3>
        <div className="listed-skills row mt-5">
          {skills.map((skill, index) => {
            return (
              <div className="col-sm">
                <div className="d-flex justify-content-evenly">
                  <img
                    className={
                      skill.completed ? "skill-icon" : "skill-icon incomplete"
                    }
                    key={index}
                    src={skill.icon}
                    alt={skill.alt}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
