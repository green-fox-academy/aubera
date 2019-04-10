'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function purpleSquareDrawer (x: number, y: number, z: number, w: number){
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, z, w);
  ctx.fill();
}

let pos: number = 0;
let initSize: number = 10;
let actualSize: number = 0;
for (let i: number = 1; i < 20; i++){
  actualSize = initSize * i;
  purpleSquareDrawer(pos, pos, actualSize, actualSize);
  pos += actualSize;
}
