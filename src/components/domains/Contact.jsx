import React from "react";
import WabbleGeometries from "../animations/WabbleGeometries";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <a
        href="mailto: regina.maher8@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="page-title">contact me</h1>
      </a>
      <WabbleGeometries />
    </div>
  );
}
