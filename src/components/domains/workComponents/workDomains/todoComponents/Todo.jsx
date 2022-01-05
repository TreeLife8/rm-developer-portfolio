import React from "react";
import Footer from "../../../Footer";
import Hero from "../Hero";

const Todo = (props) => {
  const app = props.projects.find((element) => {
    if (element.text === "todo app") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a todo app that logs todos, stores them in local drive and can customise todos by colour",
    },
    {
      title: "build",
      text: "React.js, ES5/ES6+, Bootstrap, Github, Netlify",
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
    <div className="Todo">
      <Hero app={app} outline={outline} />
      <Footer />
    </div>
  );
};

export default Todo;
