import React from "react";
import Footer from "../../../Footer";
import Hero from "../Hero";

const Weather = (props) => {
  const app = props.projects.find((element) => {
    if (element.text === "weather app") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a weather app that works with dates, geolocation and APIs",
    },
    {
      title: "build",
      text: "React.js, Bootstrap, Github, Netlify, APIs",
    },
    {
      title: "team",
      text: "Regina Maher",
    },
    {
      title: "time",
      text: "1 week",
    },
  ];
  return (
    <div className="Weather">
      <Hero app={app} outline={outline} />
      <Footer />
    </div>
  );
};

export default Weather;
