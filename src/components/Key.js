import React from "react";

const Key = ({ keyValue, isDisabled, clickHandler }) => {
  const classes = isDisabled ? ["key", "disabled"] : ["key"];
  return (
    <button
      className={classes.join(" ")}
      onClick={() => clickHandler(keyValue)}
      disabled={isDisabled}
    >
      {keyValue}
    </button>
  );
};

export default Key;
