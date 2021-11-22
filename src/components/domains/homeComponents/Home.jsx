import React, { useEffect } from "react";
import "./Home.css";
import SkillsGlance from "./SkillsGlance";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
import Hero from "./Hero";
import Intro from "./Intro";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div className="Home">
      <div className="container-fluid">
        <Hero />
        <Intro />
        <SkillsGlance />
        <ProjectSection />
      </div>
    </div>
  );
}
