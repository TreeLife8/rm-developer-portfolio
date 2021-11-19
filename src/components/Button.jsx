import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="Button">
      <a href={props.href}>
        <button className="btn-square"> </button>
        <button className="btn-text">{props.text}</button>
      </a>
    </div>
  );
}
