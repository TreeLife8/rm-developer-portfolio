import React from "react";
import "./App.css";
import Home from "./components/domains/homeComponents/Home";
import About from "./components/domains/aboutComponents/About";
import Projects from "./components/domains/projectComponents/Projects";
import Navbar from "./components/domains/Navbar";
import Contact from "./components/domains/Contact";
import { Routes, Route } from "react-router-dom";
// import NavBurger from "./components/domains/NavBurger";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NavBurger /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="Projects" element={<Projects />} />
        <Route exact path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
