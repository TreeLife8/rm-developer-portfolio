import React from "react";
import Footer from "../../../Footer";
import Hero from "../Hero";

const Dictionary = (props) => {
  const app = props.projects.find((element) => {
    if (element.text === "dictionary app") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a dictionary app that searches for words & displays word synonyms, definitions, audio, origin, adjectives &/ nouns & photos",
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
    <div className="Dictionary container-fluid">
      <Hero app={app} outline={outline} />
      <Footer />
    </div>
  );
};

export default Dictionary;
