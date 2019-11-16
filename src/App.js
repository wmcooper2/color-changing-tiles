import React from "react";
import "./App.css";

document.addEventListener("click", changeColor);
let gameSquares = [];
const colors = [
  "rgb(0, 0, 255)",   //blue
  "rgb(255, 16, 3)",  //red
  "rgb(116, 255, 3)", //green
  "rgb(255, 3, 242)", //violet
  "rgb(255, 255, 0)", //yellow
  ];

<div class="rowcontainer">
  <div class="rowdiv" id="a">
    <div class="square" id="aa"></div>
    <div class="square" id="ab"></div>
    <div class="square" id="ac"></div>
    <div class="square" id="ad"></div>
    <div class="square" id="ae"></div>
  </div>
  <div class="rowdiv" id="b"></div>

function changeColor(event) {
  //get square location and name
  let x = event.clientX;
  let y = event.clientY;
  let coords = [x, y];
  let element = document.elementFromPoint(x,y);

  //only change the squares' colors
  if (element.className == "square") {
    if (inPlay(element)){
    } else {
      gameSquares.push(element.id);
    }
    //apply the new color
    let myColor = newColor(element);
    element.style.backgroundColor = myColor;
  }
}

function inPlay(element) {
  return gameSquares.includes(element.id);
}

function newColor(element) {
  let colorIndex = colors.indexOf(element.style.backgroundColor);
  
  //don't go beyond the array
  if (colorIndex == colors.length-1){
    colorIndex = 0;
  } else {
    colorIndex++;
  }
  return colors[colorIndex];
}

function App() {
  return <div className="App"></div>;
}

export default App;
