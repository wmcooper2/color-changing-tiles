import React from "react";
import Row from "./row";

let Grid = ({size}) => {
  console.log("size", size);
  let rows = []
  let Y = 0;
  for (let i = 0; i < size; i++) {
    console.log("size", size);
    rows.push(<Row key={Y} id={Y} size={size} Y={Y}/>);
    Y++;
  }
  return <div className="grid">{rows}</div>
}

export default Grid;