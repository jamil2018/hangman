import React from "react";
import Key from "./Key";

const Keyboard = ({ clickHandler, keys }) => {
  const topKeyElements = keys
    .filter((key) => key.position === "top")
    .map((key) => (
      <Key
        key={key.value}
        keyValue={key.value}
        isDisabled={key.isDisabled}
        clickHandler={clickHandler}
      />
    ));
  const middleKeyElements = keys
    .filter((key) => key.position === "middle")
    .map((key) => (
      <Key
        key={key.value}
        keyValue={key.value}
        isDisabled={key.isDisabled}
        clickHandler={clickHandler}
      />
    ));
  const bottomKeyElements = keys
    .filter((key) => key.position === "bottom")
    .map((key) => (
      <Key
        key={key.value}
        keyValue={key.value}
        isDisabled={key.isDisabled}
        clickHandler={clickHandler}
      />
    ));
  return (
    <div className="keyboard">
      <div className="top">{topKeyElements}</div>
      <div className="middle">{middleKeyElements}</div>
      <div className="bottom">{bottomKeyElements}</div>
    </div>
  );
};

export default Keyboard;
