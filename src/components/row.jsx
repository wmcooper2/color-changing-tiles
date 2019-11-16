import React from "react";
import Square from "./squares";

function Row(props) {
  const { choices } = props.props;
  let row = [];
  for (let i = 0; i < 5; i++) {
    row.push(
      <Seat
        seatKey={props.rowKey + i}
        key={props.rowKey + i}
        handleClick={props.handleClick}
        choices={choices}
      />
    );
  }
  return <div className="row">{row}</div>;
}

export default Row;
