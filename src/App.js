import React from "react";
import Row from "./components/row";
import "./App.css";

function App() {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<Row key={i} />);
  }
  return <div className="App">{rows}</div>;
}

export default App;
