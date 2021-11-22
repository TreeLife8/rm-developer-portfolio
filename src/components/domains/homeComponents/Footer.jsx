import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer mt-5 mb-5">
      <div className="container">
        <div className="row">
          <hr
            data-aos="flip-right"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="true"
            className="underline"
          />
          <div className="col-sm-4">
            <h4 className="subtitle mb-3">Regina Maher</h4>
            <h6 className="contact">regina.maher8@gmail.com</h6>
            <h6 className="contact">
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
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
