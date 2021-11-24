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
      <a href={props.href}>
        <button className={props.hidden ? "hidden" : "btn-square"}> </button>
        <button className={props.hidden ? "btn-text" : "margin btn-text"}>
          {props.text}
          <hr
            data-aos="flip-right"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="true"
            className="underline"
          />
        </button>
      </a>
    </div>
  );
}
