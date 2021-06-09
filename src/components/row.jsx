import React from "react";
import Square from "./square";

let Row = ({Y, size}) => {
  let row = [];
  // let X = Y;
  // let Y = size;
  let X = 0;
  for (let i = 0; i < size; i++) {
    // console.log("coord", X, Y);
    row.push(<Square key={X} id={X} xpos={X} ypos={Y}/>);
    X++;
  }
  return <div className="row">{row}</div>;
}

export default Row;

