import React, { useEffect } from "react";
import "./Button.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Button(props) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className={props.margin ? "Button" : "Button btn-margin"}>
      <a
        href={props.href}
        target={props.target ? "_blank" : null}
        rel={props.target ? "noopener noreferrer" : null}
      >
        <button className={props.hidden ? "hidden" : "btn-square"}> </button>
        <div className={props.hidden ? "" : "margin"}>
          <button
            className={props.backgroundWhite ? "btn-text white" : "btn-text"}
          >
            {props.text}
            <hr
              data-aos="flip-right"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              className={
                props.backgroundWhite ? "white underline" : "underline"
              }
            />
          </button>
        </div>
      </a>
    </div>
  );
}
