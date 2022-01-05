import React from "react";
import ButtonExternal from "../../buttons/ButtonExternal";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="Hero">
      <div className="row">
        <div className="col-sm-4 left-column">
          <h3 className="heading">
            {props.app.text === "website"
              ? props.app.projectType
              : props.app.text}
          </h3>
          <div className="d-flex">
            <img
              src={props.app.img}
              alt={props.app.alt}
              className="tile img-fluid pe-3"
            />
          </div>
        </div>
        <div className="col-sm-8 right-coloumn">
          <div className="d-flex">
            {props.outline.map((point, index) => {
              return (
                <div className="outline card text-center pt-3" key={index}>
                  <h5 className="card-title">{point.title}</h5>
                  <hr />
                  <p>
                    {point.text === "website" ? point.projectType : point.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-start buttons mt-2">
            <ButtonExternal
              text="launch project"
              href={props.app.href}
              hidden={true}
            />
            <ButtonExternal
              text="view github"
              href={props.app.github}
              hidden={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
