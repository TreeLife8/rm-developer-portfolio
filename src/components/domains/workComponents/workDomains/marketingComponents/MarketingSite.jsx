import React from "react";
import Footer from "../../../Footer";
import Hero from "../Hero";

const MarketingSite = (props) => {
  const app = props.projects.find((element) => {
    if (element.projectType === "marketing website") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a marketing website that has a clean design with a landing page",
    },
    {
      title: "build",
      text: "React.js, Bootstrap, Github, Netlify",
    },
    {
      title: "team",
      text: "Regina Maher",
    },
    {
      title: "time",
      text: "2 days",
    },
  ];
  return (
    <div className="MarketingSite">
      <Hero app={app} outline={outline} />
      <Footer />
    </div>
  );
};

export default MarketingSite;
