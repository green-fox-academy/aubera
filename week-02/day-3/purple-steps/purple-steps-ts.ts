'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSquareDrawer (x: number, y: number){
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 20, 20);
  ctx.fill();
}

let pos: number = 0;
for (let i: number = 0; i < 20; i++){
  purpleSquareDrawer(pos, pos);
  pos += 20;
}
