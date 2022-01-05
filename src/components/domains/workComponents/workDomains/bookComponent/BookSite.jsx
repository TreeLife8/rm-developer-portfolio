import React from "react";
import Footer from "../../../Footer";
import Hero from "../Hero";

const BookSite = (props) => {
  const app = props.projects.find((element) => {
    if (element.projectType === "bookkeeping website") return element;
  });
  const outline = [
    {
      title: "task",
      text: "design and develop a business website that has a clean responsive design with interactive elements",
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
      text: "1 week",
    },
  ];
  return (
    <div className="BookSite">
      <Hero app={app} outline={outline} />
      <Footer />
    </div>
  );
};

export default BookSite;
