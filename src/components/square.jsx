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

  defaultColor = "white";
  colors = ["purple", "red", "yellow", "green", "blue"];

  render() {
    let squareColor = this.state.inPlay
      ? this.colors[this.state.choice]
      : this.defaultColor;
    let classes = "square " + squareColor;
    return (
      <div
        className={classes}
        onClick={event => {
          this.handleClick(event);
        }}
      ></div>
    );
  }
}

export default Square;
