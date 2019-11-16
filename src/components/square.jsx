import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 0,
      inPlay: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    let newChoice;
    if (this.state.choice >= 4) {
      newChoice = 0;
    } else {
      newChoice = this.state.choice + 1;
    }
    this.setState({
      inPlay: true,
      choice: newChoice
    });
  };

  defaultColor = "rgb(255,255,255)"; //white
  colors = [
    "rgb(0, 0, 255)", //blue
    "rgb(255, 16, 3)", //red
    "rgb(116, 255, 3)", //green
    "rgb(255, 3, 242)", //violet
    "rgb(255, 255, 0)" //yellow
  ];

  render() {
    let squareColor = this.state.inPlay
      ? this.colors[this.state.choice]
      : this.defaultColor;
    return (
      <div
        className="square"
        onClick={event => {
          this.handleClick(event);
        }}
        style={{ backgroundColor: squareColor }}
      ></div>
    );
  }
}

export default Square;
