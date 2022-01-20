import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import SkillsGlance from "./SkillsGlance";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
import Hero from "./Hero";
import Intro from "./Intro";
import Footer from "../Footer";
import Loader from "react-loader-spinner";
import useMeasure from "../useMeasure";

export default function Home(props) {
  const [loaded, setLoading] = useState(false);
  const homeRef = useRef();
  const [introRect, introRef] = useMeasure();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  if (loaded) {
    return (
      <div className="Home" ref={homeRef}>
        <div className="container-fluid">
          <Hero introRef={introRef} introRect={introRect} />
          <Intro introRef={introRef} />
          <SkillsGlance />
          <ProjectSection projects={props.projects} />
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
