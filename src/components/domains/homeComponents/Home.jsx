import React, { useEffect, useState } from "react";
import "./Home.css";
import SkillsGlance from "./SkillsGlance";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
import Hero from "./Hero";
import Intro from "./Intro";
import Footer from "../Footer";
import Loader from "react-loader-spinner";
import Projects from "../projectsComponents/Projects";

export default function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  const [loaded, setLoading] = useState(false);
  if (loaded) {
    return (
      <div className="Home">
        <div className="container-fluid">
          <Hero />
          <Intro />
          <SkillsGlance />
          <ProjectSection projects={props.projects} />
          {/* <Projects /> */}
          <Footer />
        </div>
      </div>
    );
  } else {
    setLoading(true);
    return (
      <div className="d-flex loader">
        <Loader
          type="Puff"
          color="#c7a44e"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}
