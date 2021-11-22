import React from "react";
import "./App.css";
import Home from "./components/domains/homeComponents/Home";
import About from "./components/domains/About";
import Projects from "./components/domains/Projects";
import Navbar from "./components/domains/Navbar";
import Contact from "./components/domains/Contact";
import Footer from "./components/domains/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="Projects" element={<Projects />} />
        <Route exact path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
