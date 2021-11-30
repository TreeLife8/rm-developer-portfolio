import React from "react";
import "./FurtherSkills.css";

export default function FurtherSkills() {
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
    <div className="FurtherSkills row">
      <div className="inprogress col-sm">
        <h2 className="title-heading pb-4">in progress...</h2>
        <ul>
          {inProgress.map((skill) =>
            skill.topics.map((topic, index) => {
              return (
                <li key={index}>
                  <h6 className="inprogress-skill">{topic}</h6>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="upcoming ps-4 col-sm">
        <h2 className="title-heading pb-4">upcoming...</h2>
        <ul>
          {upComing.map((skill) =>
            skill.topics.map((topic, index) => {
              return (
                <li key={index}>
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
