'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangler(posX: number, posY: number, size: number): any {
  if (size < 20) {
    return
  }
  ctx.strokeStyle = '#F1D1B5';
  ctx.beginPath();
  ctx.moveTo(posX, posY);
  ctx.lineTo(posX + size, posY);
  ctx.lineTo(posX + (size / 2), posY + size);
  ctx.lineTo(posX, posY);
  ctx.stroke();
  ctx.moveTo(posX + (size / 2), posY);
  ctx.lineTo(posX + (size * 3 / 4), posY + (size / 2));
  ctx.lineTo(posX + (size / 4), posY + (size / 2));
  ctx.lineTo(posX + (size / 2), posY);
  ctx.stroke();
  triangler(posX + (size / 2), posY, (size / 2));
  triangler(posX, posY, (size / 2));
  triangler(posX + (size / 4), posY + (size / 2), (size / 2));
}

triangler(0, 0, 600);
