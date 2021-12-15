import React from "react";
import ButtonInternal from "../buttons/ButtonInternal";
import "./AboutBio.css";
import CV from "../../../resources/Regina Maher - Dec 2021 Resume.pdf";

export default function AboutBio() {
  return (
    <div className="AboutBio ps-4">
      <h2 className="silhouette-title">about</h2>

      <h1 className="heading fade-name">regina maher</h1>
      <h2 className="subtitle fade-nickname">aka gin</h2>
      <p className="bio-description">
        Hi! I'm a frontend developer based in Sydney. True to my{" "}
        <a
          href="https://www.16personalities.com/enfps-at-work"
          rel="noopener noreferrer"
          target="_blank"
        >
          ENFP-A
        </a>{" "}
        personality type, I'm an extremely enthusiastic individual with a
        passion for problem-solving, data analytics and creative development. I
        began my career as an analytical chemist, gaining years of experience in
        dealing with complex data sets to design practical solutions for
        large-scale industrial issues.
        <br />
        <br />
        Recently, I decided to learn web and software development to give me the
        creative outlet I had been missing in science. Since then, I code so
        much that my dreams are filled with loops and functions.
        <br />
        <br />
        Confident in frontend development, I look forward to putting my skills
        to use whilst I further develope my skills in backend, data science and
        machine learning.
      </p>
      <a className="resume-link" href={CV} download="Regina Maher - Resume">
        Download my resume
      </a>
      <ButtonInternal
        text="contact"
        href="../Contact"
        hidden={true}
        margin={true}
      />
    </div>
  );
}
