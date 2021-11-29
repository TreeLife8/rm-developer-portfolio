import React from "react";
import Marquee from "react-fast-marquee";
import "./ScrollingText.css";

export default function ScrollingText() {
  return (
    <div className="ScrollingText pt-5">
      <Marquee
        pauseOnHover={true}
        speed={100}
        gradientWidth={0}
        className="scroll-text"
      >
        - kindness - understanding - authenticity - joy
      </Marquee>
    </div>
  );
}
