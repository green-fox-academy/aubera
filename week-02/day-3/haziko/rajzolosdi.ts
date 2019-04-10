'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.height = 600;
canvas.width = 600;

const ctx = canvas.getContext('2d');

//house
ctx.fillStyle = 'grey';
ctx.fillRect(100, 300, 400, 300);

//roof
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(300, 200);
ctx.lineTo(500, 300);
ctx.lineTo(100, 300);
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

//door
ctx.fillStyle = 'brown';
ctx.fillRect(300, 400, 100, 400);
ctx.fillStyle = 'black';
ctx.fillRect(300, 500, 20, 10);

//bushes
ctx.beginPath();
ctx.fillStyle = 'green';

for (let i: number = 50; i <= 600; i += 100) {
  if (i !== 350) {
    ctx.arc(i, 600, 50, Math.PI, Math.PI * 2);
    ctx.fill();
  }
}

//sun
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(0, 0, 50, 0, Math.PI / 2);
ctx.lineTo(0, 0);
ctx.fill();

ctx.arc(100, 100, 50, 0, 1);
ctx.lineTo(0, 0);
ctx.fill();

console.log(Math.PI);
