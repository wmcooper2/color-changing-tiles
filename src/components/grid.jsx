import React from "react";
import Row from "./row";

let Grid = ({size, dimension}) => {
  let rows = []
  let Y = 0;
  for (let i = 0; i < size; i++) {
    rows.push(<Row key={Y} id={Y} size={size} Y={Y} dimension={dimension}/>);
    Y++;
  }
  return (
  <div
    className="grid"
    style={{width: dimension, height: dimension}}
  >{rows}</div>
  )
  
}

export default Grid;