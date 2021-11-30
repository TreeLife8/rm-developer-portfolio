import React from "react";
import { Parallax } from "@react-spring/parallax";
import "./Projects.css";
import DictionaryApp from "./DictionaryApp";
import BookkeepingWebsite from "./BookkeepingWebsite";
import MarketingWebsite from "./MarketingWebsite";
import Todo from "./Todo";
import WeatherApp from "./WeatherApp";

export default function Projects(props) {
  return (
    <div className="Projects">
      <Parallax pages={5.55} style={{ top: "0", left: "0" }}>
        <DictionaryApp projects={props.projects} />
        <BookkeepingWebsite projects={props.projects} />
        <Todo projects={props.projects} />
        <MarketingWebsite projects={props.projects} />
        <WeatherApp projects={props.projects} />
      </Parallax>
    </div>
  );
}
