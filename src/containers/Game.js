import React, { useEffect, useState } from "react";
import DeadContainer from "./DeadContainer";
import GameContainer from "./GameContainer";
import MenuContainer from "./MenuContainer";

const Game = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [showDeadMenu, setShowDeadMenu] = useState(false);

  useEffect(() => {
    setResetGame(false);
  }, [resetGame]);

  const startGameHandler = () => {
    setStartGame(true);
    setShowMenu(false);
  };
  const endGameHandler = () => {
    setStartGame(false);
    setShowMenu(true);
    setShowDeadMenu(false);
  };
  const resetGameHandler = () => {
    setResetGame(true);
  };
  const deadMenuHandler = () => {
    setShowDeadMenu(true);
    setStartGame(false);
  };

  return (
    <>
      {showMenu && <MenuContainer startGameHandler={startGameHandler} />}
      {startGame && (
        <GameContainer
          endGameHandler={endGameHandler}
          resetGame={resetGame}
          resetGameHandler={resetGameHandler}
          deadMenuHandler={deadMenuHandler}
        />
      )}
      {showDeadMenu && <DeadContainer endGameHandler={endGameHandler} />}
    </>
  );
};

export default Game;
