import React from "react";
import Life from "./Life";

const LifeStatusContainer = ({ totalLives }) => {
  const lifeElements = [];
  for (let i = 0; i < totalLives; i++) {
    lifeElements.push(<Life key={i} />);
  }
  return <div className="life-status-container">{lifeElements}</div>;
};

export default LifeStatusContainer;
