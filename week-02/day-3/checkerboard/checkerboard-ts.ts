'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function squareDrawer(x: number, y: number, z: number, w: number) {
  ctx.fillStyle = 'black';
  ctx.fillRect(x, y, z, w);
  ctx.fill();
}

let posX: number = 0;
let posY: number = 0;
let size: number = 100;
function checkerboard() {
  for (let i: number = 1; i <= (400 / size); i++) {
    if (i % 2) {
      posX = 0;
      for (let j: number = 0; j < (600 / (size * 2)); j++) {
        squareDrawer(posX, posY, size, size);
        posX += (size * 2);
      }
    } else {
      posX = size;
      for (let k: number = 0; k < (600 / (size * 2)); k++) {
        squareDrawer(posX, posY, size, size);
        posX += (size * 2);
      }
    }
    posY += size;
  }
}

checkerboard();
