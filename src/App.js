import React from "react";
import Row from "./components/row";
import "./App.css";
// add reset buttons and an input that allows the user to choose the number of squares

function App() {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<Row key={i} />);
  }
  return (
    <React.Fragment>
      <div className="App">{rows}</div>
      <p className="instructions">
        Click on a square to change its color. Squares cycle through
        <span className="colors">
          <span className="red">Red</span>,<span className="green"> Green</span>
          ,<span className="purple"> Purple</span>,
          <span className="yellow"> Yellow</span> and
          <span className="blue"> Blue</span>.
        </span>
        <br />
        Refresh the page to reset the board.
      </p>
    </React.Fragment>
  );
}

export default App;
