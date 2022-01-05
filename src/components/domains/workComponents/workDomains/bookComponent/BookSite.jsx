import React from "react";
import BookHero from "./BookHero";
import "../Hero.css";
import Footer from "../../../Footer";

const BookSite = (props) => {
  return (
    <div className="BookSite">
      <BookHero projects={props.projects} />
      <Footer />
    </div>
  );
};

export default BookSite;
