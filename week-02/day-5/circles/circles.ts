'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function circler(posX: number, posY: number, size: number): any {
  if (size < 10) {
    return
  }
  let h: number = size
  ctx.strokeStyle = '#F34573';
  ctx.beginPath();
  ctx.arc(posX, posY, size, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(posX + Math.cos(30 * Math.PI / 180) * (size / 2), posY + Math.sin(30 * Math.PI / 180) * (size / 2), size / 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(posX - Math.cos(30 * Math.PI / 180) * (size / 2), posY + Math.sin(30 * Math.PI / 180) * (size / 2), size / 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(posX, posY - Math.sin(30 * Math.PI / 180) * (size), size / 2, 0, 2 * Math.PI);
  ctx.stroke();

  circler(posX + Math.cos(30 * Math.PI / 180) * (size / 2), posY + Math.sin(30 * Math.PI / 180) * (size / 2), size / 2);
  circler(posX - Math.cos(30 * Math.PI / 180) * (size / 2), posY + Math.sin(30 * Math.PI / 180) * (size / 2), size / 2);
  circler(posX, posY - Math.sin(30 * Math.PI / 180) * (size), size / 2);
}

circler(300, 300, 300);
