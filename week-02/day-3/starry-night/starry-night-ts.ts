'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function squareDrawer(loop: number) {
  for (let i: number = 0; i < loop; i++) {
    let randX: number = 600 * Math.random();
    let randY: number = 400 * Math.random();
    let col: number = Math.random() * 255;
    ctx.fillStyle = `rgb(${col},${col},${col})`;
    ctx.fillRect(randX, randY, 3, 3);
    ctx.fill();
  }
}

squareDrawer(100);
