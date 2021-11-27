import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Button from "../buttons/Button";
import BookWebCode from "../../images/projects/BookCodeWeb.png";

export default function BookkeepingWebsite(props) {
  return (
    <div className="BookkeepingWebsite">
      <div className="white-section">
        <ParallaxLayer
          offset={0.3}
          speed={0.5}
          style={{
            textAlign: "right",
            paddingRight: "50px",
          }}
        >
          <img
            className="img-fluid project-tile"
            src={props.projects[1].img}
            alt={props.projects[1].alt}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.7}
          speed={0.8}
          style={{
            textAlign: "left",
            paddingTop: "150px",
            paddingLeft: "50px",
          }}
        >
          <h2 className="heading">Bookkeeping Website</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.9}
          style={{
            paddingTop: "250px",
          }}
        >
          <p className="align-left ps-5 ms-4">
            open-sourced on{" "}
            <a
              href="https://github.com/TreeLife8/dictionary-react-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </p>
          <ParallaxLayer
            offset={0.6}
            speed={0.3}
            style={{
              paddingTop: "150px",
            }}
          >
            <div className="align-left">
              <Button
                text="view project"
                href={props.projects[1].href}
                hidden={true}
                target={true}
                backgroundWhite={true}
              />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={3}
          style={{
            marginTop: "-100px",
          }}
        >
          <img
            src={BookWebCode}
            className="img img-fluid img-middle"
            alt="screenshot of the bookkeeping website code"
          />
        </ParallaxLayer>
      </div>
    </div>
  );
}
