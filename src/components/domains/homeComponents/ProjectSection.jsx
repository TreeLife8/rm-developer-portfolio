import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ProjectSection.css";

function ProjectSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <div className="ProjectSection">
      <div className="dark">
        <h3
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          className="heading"
        >
          projects
        </h3>
      </div>
    </div>
  );
}

export default ProjectSection;
