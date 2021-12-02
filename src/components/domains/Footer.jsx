import React from "react";
import Boxes from "../animations/Boxes";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer mt-5 mb-5">
      <div className="row">
        <hr
          data-aos="flip-right"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          className="underline mb-5"
        />
        <div className="col-sm-4 left-side ps-5">
          <a href="/">
            <h4 className="subtitle mb-3 ">Regina Maher</h4>
          </a>
          <h6 className="contact">regina.maher8@gmail.com</h6>
          <h6 className="contact mt-2">
            <a
              href="https://www.linkedin.com/in/regina-maher-ecs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedIn
            </a>
          </h6>
          <h6 className="contact">0415 925 230</h6>
        </div>
        <div className="col-sm-4 text-center">
          <a href="/" className="d-flex justify-content-center">
            <Boxes />
          </a>
          <div className="github-link">
            crafted by Regina Maher, opened-sourced on
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/TreeLife8/rm-developer-portfolio"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="col-sm-4 right-side pe-5">
          <h4 className="subtitle mb-3">explore</h4>
          <h6>
            <a href="/About">about</a>
          </h6>
          <h6>
            <a href="/Projects">projects</a>
          </h6>
          <h6>
            <a href="/Contact">contact</a>
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
