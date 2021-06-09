import React from "react";
import Row from "./components/row";
import Grid from "./components/grid";
import "./App.css";
// add reset buttons and an input that allows the user to choose the number of squares

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size: 5
    };
    this.smallerGrid = this.smallerGrid.bind(this);
    this.biggerGrid = this.biggerGrid.bind(this);
  }

  smallerGrid = () => {
    console.log("smaller");
    this.setState({
      size: this.state.size - 1
    })
  }

  biggerGrid = () => {
    console.log("bigger", this.state.size);
    this.setState({
      size: this.state.size + 1
    })
  }


  render() {
    return (
    <React.Fragment>
      <div id="leftfiller"></div>
      <Grid size={this.state.size}/>
      <div className="instructions">
        <p>Click on a square to change its color.</p>
        <p>Refresh the page to reset the board.</p>
        <p>size
          <button onClick={() => this.biggerGrid()}>bigger</button>
          <button onClick={() => this.smallerGrid()}>smaller</button>
        </p>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
