import React from "react";

//changed: seat to square, seatKey to squareKey
const Square = props => {
  const { squareKey, choices } = props;
  let style;
  if (choices.includes(squareKey)) {
    style = { backgroundColor: "white" };
  } else {
    style = { backgroundColor: "#39525e" };
  }

  return (
    <div
      className="seat"
      value="true"
      onClick={() => {
        props.handleClick(squareKey);
      }}
      id={squareKey}
      style={style}
    ></div>
  );
};

export default Square;
