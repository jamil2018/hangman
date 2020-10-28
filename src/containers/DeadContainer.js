import React from "react";
import MenuButton from "../components/MenuButton";
import MenuTitle from "../components/MenuTitle";

const DeadContainer = ({ endGameHandler }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <MenuTitle title="You ded!!!" />
        <MenuButton text="Go to main menu" clickHandler={endGameHandler} />
      </div>
    </div>
  );
};

export default DeadContainer;
