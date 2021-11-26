import React from "react";
import soundCloud from "soundcloud";

SC.stream("/tracks/293").then(function (player) {
  player.play();
});
