import React from "react";
import { gameOptions } from "../constants/gameOptions";
import GameOption from "./GameOption";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page-content">
      <h1>Click on any option to play</h1>
      <div className="game-choices">
        {gameOptions.map((option) => (
          <GameOption name={option.name} image={option.image} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
