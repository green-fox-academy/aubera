'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function lineDrawer(x: number, y: number) {
  let centerX: number = 300;
  let centerY: number = 200;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
}

for (let i: number = 0; i < 3; i++){
  let randX: number = 600 * Math.random();
  let randY: number = 400 * Math.random();
  lineDrawer(randX, randY);
}
