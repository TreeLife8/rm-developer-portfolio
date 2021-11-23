import React, { useEffect } from "react";
import "./SkillsListed.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CSS from "../../images/imgSkills/css.png";
import html from "../../images/imgSkills/html.png";
import github from "../../images/imgSkills/github.png";
import javascript from "../../images/imgSkills/javascript.png";
import netlify from "../../images/imgSkills/netlify.png";
import php from "../../images/imgSkills/php.gif";
import python from "../../images/imgSkills/python.png";
import api from "../../images/imgSkills/api.png";
import bootstrap from "../../images/imgSkills/bootstrap.png";
import mysql from "../../images/imgSkills/mysql.png";
import react from "../../images/imgSkills/react.png";
import responsive from "../../images/imgSkills/responsive.png";
import seo from "../../images/imgSkills/seo.png";
import swift from "../../images/imgSkills/swift.png";
import nodejs from "../../images/imgSkills/nodejs.png";
import flutter from "../../images/imgSkills/flutter.png";

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
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          className="heading mb-5"
        >
          skills at a glance
        </h3>
        <div className="listed-skills row mt-5">
          {skills.map((skill, index) => {
            return (
              <div
                className="col-sm"
                data-aos="fade-in"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="true"
              >
                <div className=" d-flex justify-content-evenly">
                  <img
                    className={
                      skill.completed ? "skill-icon" : "skill-icon incomplete"
                    }
                    index={index}
                    src={skill.icon}
                    alt={skill.alt}
                  />
                </div>
                <h3 className="skills-description mt-5">{skill.text}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
