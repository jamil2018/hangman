import React from "react";
import LetterTile from "./LetterTile";

const LetterTileContainer = ({ word, matchedLetters }) => {
  const letterTitleElements = word
    .split("")
    .map((letter, index) => (
      <LetterTile
        key={index}
        letter={letter}
        isHidden={
          matchedLetters.find(
            (matchedLetter) =>
              matchedLetter.toLowerCase() === letter.toLowerCase()
          ) === undefined
        }
      />
    ));
  return <div className="letter-tile-container">{letterTitleElements}</div>;
};

export default LetterTileContainer;
