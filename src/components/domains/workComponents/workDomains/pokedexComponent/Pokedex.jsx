import React from "react";
import Footer from "../../../Footer";
import PokedexHero from "./PokedexHero";
import "../Hero.css";

const Pokedex = (props) => {
  return (
    <div className="Pokedex">
      <PokedexHero projects={props.projects} />
      <Footer />
    </div>
  );
};

export default Pokedex;
