import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import LetterTileContainer from "./LetterTileContainer";
import LifeStatusContainer from "./LifeStatusContainer";

const GameBoard = ({ resetGame, deadMenuHandler }) => {
  const [keys, setKeys] = useState([
    { value: "Q", isDisabled: false, position: "top" },
    { value: "W", isDisabled: false, position: "top" },
    { value: "E", isDisabled: false, position: "top" },
    { value: "R", isDisabled: false, position: "top" },
    { value: "T", isDisabled: false, position: "top" },
    { value: "Y", isDisabled: false, position: "top" },
    { value: "U", isDisabled: false, position: "top" },
    { value: "I", isDisabled: false, position: "top" },
    { value: "O", isDisabled: false, position: "top" },
    { value: "P", isDisabled: false, position: "top" },
    { value: "A", isDisabled: false, position: "middle" },
    { value: "S", isDisabled: false, position: "middle" },
    { value: "D", isDisabled: false, position: "middle" },
    { value: "F", isDisabled: false, position: "middle" },
    { value: "G", isDisabled: false, position: "middle" },
    { value: "H", isDisabled: false, position: "middle" },
    { value: "J", isDisabled: false, position: "middle" },
    { value: "K", isDisabled: false, position: "middle" },
    { value: "L", isDisabled: false, position: "middle" },
    { value: "Z", isDisabled: false, position: "bottom" },
    { value: "X", isDisabled: false, position: "bottom" },
    { value: "C", isDisabled: false, position: "bottom" },
    { value: "V", isDisabled: false, position: "bottom" },
    { value: "B", isDisabled: false, position: "bottom" },
    { value: "N", isDisabled: false, position: "bottom" },
    { value: "M", isDisabled: false, position: "bottom" },
  ]);
  const [word, setWord] = useState("Apple");
  const [words, setWords] = useState([
    "Apple",
    "Orange",
    "Cat",
    "Banana",
    "Eat",
    "Frog",
    "Goat",
    "Horse",
    "Ice",
    "Jaguar",
    "Kite",
    "Lemonade",
  ]);
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [totalLives, setTotalLives] = useState(5);

  useEffect(() => {
    const resetGameValues = () => {
      setKeys(
        keys.map((key) => {
          key.isDisabled = false;
          return key;
        })
      );
      setMatchedLetters([]);
      setTotalLives(5);
    };
    if (resetGame === true) {
      resetGameValues();
    }
  }, [resetGame, keys]);

  useEffect(() => {
    if (totalLives <= 0) {
      deadMenuHandler();
    }
  }, [totalLives, deadMenuHandler]);

  useEffect(() => {
    const getRandomWord = (currentWord) => {
      const newRandomIndex = Math.floor(Math.random() * words.length);
      if (words[newRandomIndex] === currentWord) {
        getRandomWord(currentWord);
      }
      console.log(newRandomIndex);
      return words[newRandomIndex];
    };
    const resetGameValues = () => {
      setKeys(
        keys.map((key) => {
          key.isDisabled = false;
          return key;
        })
      );
      setMatchedLetters([]);
    };
    if (
      removeDuplicatesFromWordCharacters(word).length === matchedLetters.length
    ) {
      const newWord = getRandomWord(word);
      const timedProcess = setTimeout(() => {
        resetGameValues();
        setWord(newWord);
      }, [250]);
      return () => clearTimeout(timedProcess);
    }
  }, [matchedLetters, word, words, keys]);

  const removeDuplicatesFromWordCharacters = (word) => {
    const wordLetters = word.split("");
    return wordLetters.filter((a, b) => wordLetters.indexOf(a) === b);
  };
  const disableKey = (pressedKey, keys) => {
    const newKeyValues = [...keys];
    newKeyValues.find((key) => key.value === pressedKey).isDisabled = true;
    setKeys(newKeyValues);
  };
  const checkWordContainsPressedKey = (word, pressedKey) => {
    return (
      removeDuplicatesFromWordCharacters(word).find(
        (letter) => letter.toLowerCase() === pressedKey.toLowerCase()
      ) !== undefined
    );
  };
  const keyboardClickHandler = (pressedKeyValue) => {
    disableKey(pressedKeyValue, keys);
    if (checkWordContainsPressedKey(word, pressedKeyValue)) {
      setMatchedLetters((matchedLetters) => [
        ...matchedLetters,
        pressedKeyValue,
      ]);
    } else {
      const newTotalLives = totalLives - 1 >= 0 ? totalLives - 1 : totalLives;
      setTotalLives(newTotalLives);
    }
  };

  return (
    <div className="game-board-container">
      <LifeStatusContainer totalLives={totalLives} />
      <LetterTileContainer word={word} matchedLetters={matchedLetters} />
      <Keyboard keys={keys} clickHandler={keyboardClickHandler} />
    </div>
  );
};

export default GameBoard;
