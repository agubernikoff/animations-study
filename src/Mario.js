import React from "react";
import bowser from "./kart/bowser.png";
import dk from "./kart/dk.png";
import koopa from "./kart/koopa.png";
import luigi from "./kart/luigi.png";
import mario from "./kart/mario.png";
import peach from "./kart/peach.png";
import toad from "./kart/toad.png";
import yoshi from "./kart/yoshi.png";

function Mario() {
  const racers = [bowser, dk, koopa, luigi, mario, peach, toad, yoshi];
  const mappedRacers = racers.map((r) => (
    <img
      key={r.split("/")[3].split(".")[0]}
      src={r}
      alt={r.split("/")[3].split(".")[0]}
      id={r.split("/")[3].split(".")[0]}
    />
  ));
  return (
    <div className="mario-container">
      <h1 className="animation-title">Mario Kart</h1>
      <div className="mario-sky"></div>
      <div className="mario-grass"></div>
      <div className="mario-road"></div>
      <div className="mario-stripe"></div>
      <div className="mario-road">{mappedRacers}</div>
      <div className="mario-grass"></div>
    </div>
  );
}

export default Mario;
