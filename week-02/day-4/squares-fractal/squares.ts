'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function verticalLiner(posX: number, posY: number, size: number): any {
  if (size < 8) {
    return
  }
  for (let i: number = 1; i < 3; i++) {
    ctx.moveTo(posX + (size * (i / 3)), posY);
    ctx.lineTo(posX + (size * (i / 3)), posY + size);
    ctx.moveTo(posX, posY + (size * (i / 3)));
    ctx.lineTo(posX + size, posY + (size * (i / 3)));
    ctx.stroke();
  }
  verticalLiner(posX + (size / 3), posY, (size / 3), (size / 3));
  verticalLiner(posX + (2 * size / 3), posY + (size / 3), (size / 3), (size / 3));
  verticalLiner(posX + (size / 3), posY + (2 * size / 3), (size / 3), (size / 3));
  verticalLiner(posX, posY + (size / 3), (size / 3), (size / 3));

}

verticalLiner(0, 0, 600);
