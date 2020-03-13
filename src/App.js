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
      <div id="leftfiller"></div>
      <div className="App">{rows}</div>
      <div className="instructions">
        <p>Click on a square to change its color.</p>
        <p>Squares cycle through these colors.</p>
        <p>Refresh the page to reset the board.</p>
        <p className="colors">
          <span className="red">Red</span>
          <span className="yellow">Yellow</span>
          <span className="green">Green</span>
          <span className="blue">Blue</span>
          <span className="purple">Purple</span>
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
