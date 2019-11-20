import React from "react";
import Row from "./components/row";
import "./App.css";
// add reset buttons and an input that allows the user to choose the number of squares

function App() {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<Row key={i} />);
  }
  return <div className="App">{rows}</div>;
}

export default App;
