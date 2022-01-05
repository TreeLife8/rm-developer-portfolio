import React from "react";
import ButtonExternal from "../../../buttons/ButtonExternal";

const PokedexHero = (props) => {
  const app = props.projects.find((element) => {
    if (element.text === "pokedex app") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a pokadex app that searches for any pokemon & displays details from multiple API calls",
    },
    {
      title: "build",
      text: "React.js, ES5/ES6+, Bootstrap, Github, Netlify, APIs",
    },
    {
      title: "team",
      text: "Regina Maher",
    },
    {
      title: "time",
      text: "2 weeks",
    },
  ];
  return (
    <div className="PokedexHero">
      <div className="row">
        <div className="col-sm-4 left-column">
          <h3 className="heading">Pokedex App</h3>
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

export default PokedexHero;
