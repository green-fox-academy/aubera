'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function squareGrid(posX: number, posY: number, size: number, thickness: number: color): any {
  if (size < 50) {
    return
  }
  ctx.strokeStyle = '#d7f7f5';
  ctx.lineWidth = thickness;
  ctx.strokeRect(posX + (size / 4), posY + (size / 4), size / 2, size / 2);
  ctx.stroke();
  squareGrid(posX + size / 2, posY + size / 2, size / 2, thickness / 2);
  squareGrid(posX, posY, size / 2, thickness / 2);
  squareGrid(posX + size / 2, posY, size / 2, thickness / 2);
  squareGrid(posX, posY + size / 2, size / 2, thickness / 2);
}

squareGrid(0, 0, 600, 15);
