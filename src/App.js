import React from "react";
import Grid from "./components/grid";
import "./App.css";
import {
  lookNorth,
  lookSouth,
  lookEast,
  lookWest,
  lookNorthEast,
  lookSouthEast,
  lookSouthWest,
  lookNorthWest,
  changeNorth,
  changeSouth,
  changeEast,
  changeWest,
  changeNorthEast,
  changeSouthEast,
  changeSouthWest,
  changeNorthWest} from "./capture";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size: 6,
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
    return restriction *.90;
  }

  captureSquares = () => {

    const sq = this.state.clickedSquare;
    const size = this.state.size;

    if (sq >= 0){
    const northMatch = lookNorth(sq, size);
    if (northMatch !== null){
      changeNorth(sq, northMatch, size);
    }

    const southMatch = lookSouth(sq, size);
    if (southMatch !== null){
      changeSouth(sq, southMatch, size);
    }

    const eastMatch = lookEast(sq, size);
    if (eastMatch !== null){
      changeEast(sq, eastMatch, size);
    }

    const westMatch = lookWest(sq, size);
    if (westMatch !== null){
      changeWest(sq, westMatch, size)
    }

    const northEastMatch = lookNorthEast(sq, size);
    if (northEastMatch !== null){
      changeNorthEast(sq, northEastMatch, size)
    }

    const southEastMatch = lookSouthEast(sq, size);
    if (southEastMatch !== null){
      changeSouthEast(sq, southEastMatch, size)
    }

    const southWestMatch = lookSouthWest(sq, size);
    if (southWestMatch !== null){
      changeSouthWest(sq, southWestMatch, size)
    }

    const northWestMatch = lookNorthWest(sq, size);
    if (northWestMatch !== null) {
      changeNorthWest(sq, northWestMatch, size)
    }
  }
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
      <div className="app">
      <Grid size={this.state.size} dimension={this.mostRestrictiveDimension()} onSquareClick={this.setClickedSquare}/>
          {/* <button onClick={() => this.biggerGrid()}>bigger</button> */}
          {/* <button onClick={() => this.smallerGrid()}>smaller</button> */}
          <button onClick={() => this.captureSquares()}>capture</button>
      </div>
    );
  }
}

export default App;

