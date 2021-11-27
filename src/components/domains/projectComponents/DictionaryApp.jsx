import React from "react";
import DicCode from "../../images/projects/dictionaryCode.png";
import DicAPICode from "../../images/projects/dictionaryAPICode.png";
import DicPhotos from "../../images/projects/dicPhotosAPI.png";
import DicApp from "../../images/projects/DicApp.png";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";

export default function DictionaryApp(props) {
  return (
    <div className="DictionaryApp container">
      <ParallaxLayer offset={0} speed={0.5} factor={0.1}>
        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{
            paddingLeft: "50px",
          }}
        >
          <img
            className="img-fluid project-tile"
            src={props.projects[0].img}
            alt={props.projects[0].alt}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={1.1}
          style={{
            textAlign: "right",
            paddingRight: "100px",
          }}
        >
          <h2 className="heading">dictionary app</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={1.5}>
          <p className="align-right">
            open-sourced on{" "}
            <a
              href="https://github.com/TreeLife8/dictionary-react-project"
              target="_blank"
              rel="noopener noreferrer"
              className="pe-3"
            >
              github
            </a>
          </p>
          <ParallaxLayer offset={0.1} speed={0.3}>
            <div className="align-right">
              <Button
                text="view project"
                href={props.projects[0].href}
                hidden={true}
                target={true}
              />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={0.63} speed={4} factor={0.5}>
          <img
            src={DicCode}
            className="img img-fluid img-middle"
            alt="screenshot of the dictionay app code, showing the phenetic component"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.6}
          speed={0.9}
          style={{
            textAlign: "end",
            paddingRight: "150px",
            paddingTop: "130px",
          }}
        >
          <h4 className="skill-name">APIs</h4>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={1.4}
          style={{
            textAlign: "left",
            paddingLeft: "250px",
            paddingTop: "550px",
          }}
        >
          <h4 className="skill-name">ReactJS</h4>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={1.1}
          style={{
            paddingTop: "120px",
          }}
        >
          <img
            src={DicAPICode}
            className="img-middle img landscape img-fluid"
            alt="screenshot of the dictionay app code, showing the phenetic component"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={1.1}
          style={{
            textAlign: "right",
            paddingRight: "50px",
            paddingTop: "350px",
          }}
        >
          <img
            src={DicPhotos}
            className="img landscape img-fluid"
            alt="screenshot of the dictionay app code, showing the phenetic component"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={2}
          style={{
            textAlign: "right",
            paddingRight: "50px",
            paddingTop: "750px",
          }}
        >
          <h4 className="skill-name">netlify</h4>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={2.2}
          style={{
            paddingLeft: "50px",
            paddingTop: "450px",
          }}
        >
          <img
            className="img img-fluid"
            src={DicApp}
            alt="screenshot of the dictionary app"
          />
        </ParallaxLayer>
      </ParallaxLayer>
    </div>
  );
}
