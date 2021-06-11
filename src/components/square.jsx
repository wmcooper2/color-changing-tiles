import React from "react";

class Square extends React.Component {
  constructor({id, xpos, ypos}) {
    super();
    this.state = {
      colorIndex: 0,
      inPlay: false,
      color: "white",
      classes: "square",
      animated: false,
      squareID: id,
      xpos: xpos,
      ypos: ypos,
    };
    this.colors = ["purple", "red", "yellow", "green", "blue"];
    this.handleClick = this.handleClick.bind(this);
    this.cycleColor = this.cycleColor.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  cycleColor = () => {
    let color = this.state.colorIndex >= 4 ? 0 : this.state.colorIndex +1;
    this.setState({
      inPlay: true,
      colorIndex: color,
      classes: "square " + this.colors[this.state.colorIndex]
    });
  }

  toggleAnimation = () => {
    this.setState(() => ({
      animated:true
    }));
    setTimeout(() => this.setState(
      () => ({animated: false})), 300);
  }

  handleClick = () => {
    this.cycleColor();
    this.toggleAnimation();
  };

  render() {
    return (
      <div
        className={`${this.state.classes} ${this.state.animated ? "animated" : ""}`}
        onClick={event => { this.handleClick(event); }}>
      </div>
    );
  }
}

export default Square;