import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="Button">
      <a href={props.href}>
        <button className={props.hidden ? "hidden" : "btn-square"}> </button>
        <button className={props.hidden ? "btn-text" : "margin btn-text"}>
          {props.text}
        </button>
      </a>
    </div>
  );
}
