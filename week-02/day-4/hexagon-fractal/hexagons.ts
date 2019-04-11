'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(posX, posY, size) {
  if (size < 10) {
    return
  }
  ctx.beginPath();
  ctx.moveTo(posX, posY);
  ctx.lineTo(posX + size, posY);
  ctx.lineTo(posX + (size * 1.5), posY + size);
  ctx.lineTo(posX + size, posY + (2 * size));
  ctx.lineTo(posX, posY + (2 * size));
  ctx.lineTo(posX - (size * 0.5), posY + size);
  ctx.lineTo(posX, posY);
  ctx.stroke();
  drawHexagon(posX, posY, (size / 2);
  drawHexagon(posX , posY + size, (size / 2);
  drawHexagon(posX + (size * 0.75) , posY + (size / 2), (size / 2);
}
drawHexagon(150, 0, 300)
