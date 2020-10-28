import React from "react";
import MenuButton from "../components/MenuButton";
import MenuTitle from "../components/MenuTitle";

const MenuContainer = ({ startGameHandler }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <MenuTitle title="Hangman" />
        <MenuButton text="Start Game" clickHandler={startGameHandler} />
      </div>
    </div>
  );
};

export default MenuContainer;
