import React from "react";

const MenuButton = ({ text, clickHandler }) => {
  return (
    <div className="menu-button">
      <button onClick={clickHandler}>{text}</button>
    </div>
  );
};

export default MenuButton;
