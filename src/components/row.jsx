import React from "react";
import Square from "./square";

function Row() {
  let row = [];
  let squareID = 0;
  for (let i = 0; i < 5; i++) {
    row.push(<Square key={squareID} id={squareID} />);
    squareID++;
  }
  return <div className="row">{row}</div>;
}

export default Row;
