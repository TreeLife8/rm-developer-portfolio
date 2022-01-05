import React from "react";
import Footer from "../../../Footer";
import Hero from "../Hero";

const Pokedex = (props) => {
  const app = props.projects.find((element) => {
    if (element.text === "pokedex app") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a pokadex app that searches for any pokemon & displays details from multiple API calls",
    },
    {
      title: "build",
      text: "React.js, ES5/ES6+, Bootstrap, Github, Netlify, APIs",
    },
    {
      title: "team",
      text: "Regina Maher",
    },
    {
      title: "time",
      text: "2 weeks",
    },
  ];
  return (
    <div className="Pokedex">
      <Hero app={app} outline={outline} />
      <Footer />
    </div>
  );
};

export default Pokedex;
