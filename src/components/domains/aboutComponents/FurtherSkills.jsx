import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./FurtherSkills.css";

export default function FurtherSkills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const inProgress = [
    {
      category: "frontend",
      topics: ["advanced javascript", "animation", "reactjs"],
    },
    {
      category: "backend",
      topics: ["nodejs"],
    },
    {
      category: "data",
      topics: ["SQL", "mySQL", "mongoDB", "mongoose", "data science"],
    },
  ];
  const upComing = [
    {
      category: "frontend",
      topics: ["flutter", "swift iOS"],
    },
    {
      category: "backend",
      topics: ["python", "php", "R", "privacy & security"],
    },
    {
      category: "data",
      topics: ["machine learning", "AI"],
    },
  ];
  return (
    <div className="FurtherSkills d-flex">
      <div className="inprogress">
        <h2
          className="title-heading pb-4"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
        >
          in progress...
        </h2>
        <ul>
          {inProgress.map((skill) =>
            skill.topics.map((topic, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="true"
                >
                  <h6 className="inprogress-skill">{topic}</h6>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="upcoming ps-4">
        <h2
          className="title-heading  pb-4"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
        >
          upcoming...
        </h2>
        <ul>
          {upComing.map((skill) =>
            skill.topics.map((topic, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="true"
                >
                  <h6 className="inprogress-skill">{topic}</h6>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
