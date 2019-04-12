'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTree(startX, startY, len, angle) {
  ctx.beginPath();
  ctx.save();

  ctx.strokeStyle = '#f8b739';
  ctx.translate(startX, startY); //makes the start point the 0:0 of the coordinate system
  ctx.rotate(angle * Math.PI / 180); // rotate the canvas
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if (len < 10) {
    ctx.restore();
    return;
  }
  drawTree(0, -len / 1.3, len * 0.71, -30);
  drawTree(0, -len / 1.1, len * 0.72, 0)
  drawTree(0, -len / 1.3, len * 0.71, 30);

  ctx.restore();
}

drawTree(300, 450, 100, 0);
