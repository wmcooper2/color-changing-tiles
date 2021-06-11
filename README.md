# [Color Changing Tiles](https://teflassistant.com/color-changing-tiles/)
A generic gameboard of color changing tiles.

![Screenshot](screenshot.jpg)

## Purpose/Goal
This is a clone of a game I saw someone demo at a teacher's training event. 
There was a significant problem with the version they made because of the quirks with PowerPoint, so I decided to recreate it in JavaScript.

## Operation
* click the squares to change the colors.
* to reset, just refresh the page.
* when clicked, a white square will cycle through 5 colors and not return to white as it is now "in play".
* it is meant to be a tool that keeps track of what "teams" have "won" which squares.
* this is meant to be a flexible game where you make up the rules.
* the game board keeps track of the game state.

## Tech/Libraries Used
* HTML
* CSS
* JavaScript

## Problems/Solutions
* getting the squares to adapt to the most restrictive window dimension so that it would always be square and fit within the window was a small challenge after having not coded in JavaScript for a few months.
* Now, I'm working on a button that allows the last clicked square to act as an anchor for automatically converting other squares between it and another square of the same color to its own color.

## More Information
N/A
