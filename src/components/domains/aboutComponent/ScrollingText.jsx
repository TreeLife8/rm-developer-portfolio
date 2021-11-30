import React from "react";
import Marquee from "react-fast-marquee";
import "./ScrollingText.css";

export default function ScrollingText() {
  return (
    <div className="ScrollingText">
      <Marquee
        pauseOnHover={true}
        speed={150}
        gradientWidth={0}
        className="scroll-text"
      >
        - kindness - understanding - authenticity - wisdom - resilience -
      </Marquee>
    </div>
  );
}
