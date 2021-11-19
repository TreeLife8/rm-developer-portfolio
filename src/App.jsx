import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
