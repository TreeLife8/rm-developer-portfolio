import React from "react";
import Button from "./Button";
import "./Home.css";
// import dopamine from "";

export default function Home() {
  return (
    <div className="Home">
      <div className="container-fluid">
        <div className="hero">
          <h2 className="title-heading">Frontend</h2>
          <h1 className="title">DEVELOPER</h1>
          <div className="row">
            <div className="col-8 lines">
              <hr className="banner" />
              <hr className="banner" />
              <hr className="banner" />
            </div>
            <div className="col-4">
              <h4 className="subtitle">full stack in the making</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3 className="heading">from chemist to coder</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button text="contact" />
          </div>
          <div className="col-sm-6">{/* <img src="" alt=""></img> */}</div>
        </div>
      </div>
    </div>
  );
}
