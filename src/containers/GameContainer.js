import React from "react";
import GameBoard from "../components/GameBoard";
import MenuButton from "../components/MenuButton";

const GameContainer = ({
  endGameHandler,
  resetGame,
  resetGameHandler,
  deadMenuHandler,
}) => {
  return (
    <>
      <div className="game-menu">
        <MenuButton text="Return to main menu" clickHandler={endGameHandler} />
        <MenuButton text="Reset Game" clickHandler={resetGameHandler} />
      </div>
      <GameBoard resetGame={resetGame} deadMenuHandler={deadMenuHandler} />
    </>
  );
};

export default GameContainer;
