import React from "react";
import Button from "../buttons/Button";
import "./AboutBio.css";

export default function AboutBio() {
  return (
    <div className="AboutBio ps-4">
      <h1 className="heading fade-name">regina maher</h1>
      <h2 className="subtitle fade-nickname">aka gin</h2>
      <p className="bio-description">
        Hi! I'm a frontend developer from Sydney. True to my{" "}
        <a
          href="https://www.16personalities.com/enfp-personality"
          rel="noopener noreferrer"
          target="_blank"
        >
          ENFP-A
        </a>{" "}
        personality type, I'm an extremely enthusiastic individual with a
        passion for problem-solving, data analytics and creative development. I
        began my career as an analytical chemist, which gave me many years of
        experience in dealing with complex data sets to design practical
        solutions for large-scale industrial issues.
        <br />
        <br />
        Recently, I decided to learn web and software development, giving me the
        creative outlet I had been missing in science. Since then, I code so
        much that even my dreams are filled with loops and functions.
        <br />
        <br />
        Confident in frontend development, I look forward to put my skills to
        use whilst I further develope my skills in backend, data science and
        machine learning.
      </p>
      <Button text="contact" href="./Contact" target={false} margin={true} />
      <h2 className="silhouette-title">about</h2>
    </div>
  );
}
