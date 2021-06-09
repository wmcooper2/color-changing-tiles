import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIndex: 0,
      inPlay: false,
      color: "white",
      classes: "square",
      animated: false,
      squareID: props.id,
      xpos: props.xpos,
      ypos: props.ypos,
    };
    this.colors = ["purple", "red", "yellow", "green", "blue"];
    this.handleClick = this.handleClick.bind(this);
    this.cycleColor = this.cycleColor.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  cycleColor = () => {
    let color;
    if (this.state.colorIndex >= 4) {
      color = 0;
    } else {
      color = this.state.colorIndex + 1;
    }
    this.setState({
      inPlay: true,
      colorIndex: color,
      classes: "square " + this.colors[this.state.colorIndex]
    });
  }

  toggleAnimation = () => {
    console.log("toggle animation");
    this.setState(() => ({
      animated:true
    }));
    setTimeout(() => this.setState(
      () => ({animated: false})), 300);
  }

  handleClick = () => {
    this.cycleColor();
    this.toggleAnimation();
    console.log(this.state.xpos, this.state.ypos);
  };

  render() {
    let squareColor = this.state.inPlay
      ? this.colors[this.state.colorIndex]
      : this.state.color;

    // let classes = "square " + squareColor;
    return (
      <div
        className={`${this.state.classes} ${this.state.animated ? "animated" : ""}`}
        onClick={event => {
          this.handleClick(event);
        }}
      ></div>
    );
  }
}

export default Square;