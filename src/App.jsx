import React, { useState } from "react";
import "./App.css";
import Home from "./components/domains/homeComponents/Home";
import About from "./components/domains/aboutComponent/About";
import Skills from "./components/domains/skillsComponents/Skills";
import Projects from "./components/domains/projectComponents/Projects";
import Navbar from "./components/domains/Navbar";
import Contact from "./components/domains/contactComponents/Contact";
import { Routes, Route } from "react-router-dom";
import bikeTile from "./components/images/tiles/Tile - CloudBike.png";
import dictonTile from "./components/images/tiles/Tile - Dic_Ipad.png";
import iaauTile from "./components/images/tiles/Tile - IAAU.png";
import todoTile from "./components/images/tiles/Tile - TOdo.png";
import WeatherTile from "./components/images/tiles/Tile - Weather_Ipad.png";
import ScrollToTop from "./components/domains/ScrollToTop";

function App() {
  const projects = [
    {
      img: `${dictonTile}`,
      text: "dictionary app",
      alt: "photo of react dictionary app on an Ipad",
      href: "https://sqigglydictionary.netlify.app/",
    },
    {
      img: `${iaauTile}`,
      text: "website",
      alt: "website for bookkeeping service",
      href: "https://italladdsup.netlify.app/",
    },
    {
      img: `${todoTile}`,
      text: "todo app",
      alt: "photo of react todo app",
      href: "https://todosquiggles.netlify.app/",
    },
    {
      img: `${bikeTile}`,
      text: "website",
      alt: "advertising website for bike products",
      href: "https://cloudninebikes.netlify.app/",
    },
    {
      img: `${WeatherTile}`,
      text: "weather app",
      alt: "photo of react weather app on an Ipad",
      href: "https://bananaweather.netlify.app/",
    },
  ];
  const [state, toggle] = useState(false);
  function toggleNavbar() {
    toggle(!state);
  }
  function handleTouch() {
    if (state) {
      toggleNavbar();
    }
  }
  return (
    <div className="App" onClick={handleTouch}>
      <ScrollToTop />
      <Navbar toggleNavbar={toggleNavbar} state={state} />
      <Routes>
        <Route exact path="/" element={<Home projects={projects} />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="Skills" element={<Skills />} />
        <Route
          exact
          path="Projects"
          element={<Projects projects={projects} />}
        />

        <Route exact path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
