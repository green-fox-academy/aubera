'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function squareDrawing (size: number, color: any){
  ctx.fillStyle = color;
  ctx.fillRect(300-(size/2), 200-(size/2), size, size);
  ctx.fill();
}

let size: number = 400;
let j: number = 0;
for (let i: number = 0; i < 40; i++){
  let colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  squareDrawing(size, colors[j]);
  size -= 10;
  j++;
  j === 6 ? j = 0 : '';
}
