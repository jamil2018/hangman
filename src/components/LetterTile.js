import React from "react";

const LetterTile = ({ letter, isHidden }) => {
  return <div className="letter-tile">{!isHidden && letter}</div>;
};

export default LetterTile;
