'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawRandomRectangles(){
  let randX: number = 600 * Math.random();
  let randY: number = 400 * Math.random();
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(randX * Math.random() , randY * Math.random(), randX, randY);
  ctx.fill();
}

for (let i: number = 0; i < 4; i++){
  drawRandomRectangles();
}
