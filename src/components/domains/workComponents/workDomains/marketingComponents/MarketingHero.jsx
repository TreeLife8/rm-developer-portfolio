import React from "react";
import ButtonExternal from "../../../buttons/ButtonExternal";

const MarketingHero = (props) => {
  const app = props.projects.find((element) => {
    if (element.projectType === "marketing website") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a marketing website that has a clean design with a landing page",
    },
    {
      title: "build",
      text: "React.js, Bootstrap, Github, Netlify",
    },
    {
      title: "team",
      text: "Regina Maher",
    },
    {
      title: "time",
      text: "1 week",
    },
  ];
  return (
    <div className="MarketingHero">
      <div className="row">
        <div className="col-sm-4 left-column">
          <h3 className="heading">{app.projectType}</h3>
          <div className="d-flex">
            <img src={app.img} alt={app.alt} className="tile img-fluid pe-3" />
          </div>
        </div>
        <div className="col-sm-8 right-coloumn">
          <div className="d-flex">
            {outline.map((point, index) => {
              return (
                <div className="outline card text-center pt-3" key={index}>
                  <h5 className="card-title">{point.title}</h5>
                  <hr />
                  <p>{point.text}</p>
                </div>
              );
            })}
          </div>
          <div className="text-start buttons mt-2">
            <ButtonExternal
              text="launch project"
              href={app.href}
              hidden={true}
            />
            <ButtonExternal
              text="view github"
              href={app.github}
              hidden={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHero;
