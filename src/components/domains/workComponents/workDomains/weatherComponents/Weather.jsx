import React from "react";
import WeatherHero from "./WeatherHero";

const Weather = (props) => {
  return (
    <div className="Weather">
      <WeatherHero projects={props.projects} />
    </div>
  );
};

export default Weather;
