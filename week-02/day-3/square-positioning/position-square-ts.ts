'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function squareDrawer (x: number, y: number){
  let randX: number = 600 * Math.random();
  let randY: number = 400 * Math.random();
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(randX, randY, 50, 50);
  ctx.fill();
}

for (let i: number = 0; i < 3; i++){
  squareDrawer();
}
