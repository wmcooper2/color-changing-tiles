import React from "react";
import Grid from "./components/grid";
import "./App.css";
import {lookNorth, lookSouth, lookEast, lookWest} from "./capture";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size: 5,
      clickedSquare: -1
    };
    this.smallerGrid = this.smallerGrid.bind(this);
    this.biggerGrid = this.biggerGrid.bind(this);
    this.mostRestrictiveDimension = this.mostRestrictiveDimension.bind(this);
    this.captureSquares = this.captureSquares.bind(this);
  }

  mostRestrictiveDimension = () => {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let restriction = windowHeight > windowWidth ? windowWidth : windowHeight;
    return restriction;
  }

  captureSquares = () => {
    const north = lookNorth(this.state.clickedSquare, this.state.size);
    console.log("NORTH", north);

    const south = lookSouth(this.state.clickedSquare, this.state.size);
    console.log("SOUTH", south);

    const east = lookEast(this.state.clickedSquare, this.state.size);
    console.log("EAST", east);

    const west = lookWest(this.state.clickedSquare, this.state.size);
    console.log("WEST", west);
  }

  setClickedSquare = (squareId) => {
    this.setState({
      clickedSquare: squareId
    })
  }

  smallerGrid = () => {
    let currentSize = this.state.size;
    this.setState({
      size: currentSize > 3 ? currentSize - 1 : 3
    })
  }

  biggerGrid = () => {
    let currentSize = this.state.size;
    this.setState({
      size: currentSize < 10 ? currentSize + 1 : 10
    })
  }

  render() {
    return (
    <React.Fragment>
      <div id="leftfiller"></div>
      <Grid size={this.state.size} dimension={this.mostRestrictiveDimension()} onSquareClick={this.setClickedSquare}/>
      <div className="instructions">
        <p>Refresh to reset.</p>
          <button onClick={() => this.biggerGrid()}>bigger</button>
          <button onClick={() => this.smallerGrid()}>smaller</button>
          <button onClick={() => this.captureSquares()}>capture</button>
      </div>
      
    </React.Fragment>
    );
  }
}

export default App;

