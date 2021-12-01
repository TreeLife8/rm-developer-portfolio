import React, { useEffect } from "react";
import Title from "./Title";
import Aos from "aos";
import "aos/dist/aos.css";
import RubikAnimation from "../../animations/RubikAnimation";

export default function Hero() {
  const line = [
    {
      duration: 1000,
      delay: 100,
    },
    {
      duration: 2000,
      delay: 500,
    },
    {
      duration: 3000,
      delay: 900,
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="Hero ms-2">
      <h2 className="title-heading">Frontend</h2>
      <h1 className="title mt-4 lights-flicker">DEVELOPER</h1>
      <h1 className="title shadow">DEVELOPER</h1>
      <RubikAnimation />
      <div className="row mb-2">
        <div className="col lines">
          {line.map((line, index) => {
            return (
              <hr
                key={index}
                className="banner"
                data-aos="flip-right"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="true"
                duration={line.duration}
                data-aos-delay={line.delay}
              />
            );
          })}
        </div>
        <div className="col">
          <h4 className="subtitle">full stack in the making</h4>
        </div>
      </div>
    </div>
  );
}
