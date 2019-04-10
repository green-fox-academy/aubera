'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
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

function drawRandomRectangles(size: number) {
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(300-(size/2), 200-(size/2), size, size);
  ctx.fill();
}

for (let i: number = 0; i < 4; i++) {
  let rand: number = 400 * Math.random();
  drawRandomRectangles(rand);
}
