import React from "react";
import Square from "./square";

let Row = ({Y, size, dimension, onSquareClick}) => {
  let row = [];
  let X = 0;
  for (let i = 0; i < size; i++) {
    // row.push(<Square key={X} id={X} xpos={X} ypos={Y} dimensions={dimensions}/>);
    row.push(<Square key={X} id={X} xpos={X} ypos={Y} size={size} onSquareClick={onSquareClick}/>);
    X++;
  }
  return (<div
    className="row"
    style={{height: dimension/size}}
  
  >{row}</div>);
}

export default Row;

