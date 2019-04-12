'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(posX: number, posY: number, size: number): any {
  if (size < 3) {
    return
  }
  ctx.strokeStyle = '#3426a4';
  ctx.beginPath();
  ctx.moveTo(posX, posY);
  ctx.lineTo(posX + size, posY);
  ctx.lineTo(posX + (size * 1.5), posY + size);
  ctx.lineTo(posX + size, posY + (2 * size));
  ctx.lineTo(posX, posY + (2 * size));
  ctx.lineTo(posX - (size * 0.5), posY + size);
  ctx.lineTo(posX, posY);
  ctx.stroke();
  drawHexagon(posX, posY, size / 3);
  drawHexagon(posX + (size * 2 / 3), posY, size / 3);
  drawHexagon(posX - (size / 3), posY + (size * 2 / 3), size / 3);
  drawHexagon(posX + size, posY + (size * 2 / 3), size / 3);
  drawHexagon(posX, posY + (size * 4 / 3), size / 3);
  drawHexagon(posX + (size * 2 / 3), posY + (size * 4 / 3), size / 3);
}
drawHexagon(150, 0, 300);
