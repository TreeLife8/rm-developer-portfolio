import React, { useState } from "react";
import WabbleGeometries from "../../animations/WabbleGeometries";
import "./Contact.css";
import Loader from "react-loader-spinner";

export default function Contact() {
  const [loaded, setLoading] = useState(false);
  if (loaded) {
    return (
      <div className="Contact">
        <a
          className="title-group"
          href="mailto: regina.maher8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="page-title">contact</h1>
        </a>
        <WabbleGeometries />
        <div className="large"></div>
      </div>
    );
  } else {
    setLoading(true);
    return (
      <div className="d-flex loader">
        <Loader
          type="Puff"
          color="#c7a44e"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}
