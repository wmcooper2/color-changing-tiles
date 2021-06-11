import React from "react";
import Grid from "./components/grid";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size: 5
    };
    this.smallerGrid = this.smallerGrid.bind(this);
    this.biggerGrid = this.biggerGrid.bind(this);
    this.mostRestrictiveDimension = this.mostRestrictiveDimension.bind(this);
  }

  mostRestrictiveDimension = () => {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let restriction = windowHeight > windowWidth ? windowWidth : windowHeight;
    return restriction;
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
      <Grid size={this.state.size} dimension={this.mostRestrictiveDimension()}/>
      <div className="instructions">
        <p>Click on a square to change its color.</p>
        <p>Refresh the page to reset the board.</p>
          <button onClick={() => this.biggerGrid()}>bigger</button>
          <button onClick={() => this.smallerGrid()}>smaller</button>
      </div>
      
    </React.Fragment>
    );
  }
}

export default App;
