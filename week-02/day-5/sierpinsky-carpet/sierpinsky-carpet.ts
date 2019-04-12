'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function verticalLiner(posX: number, posY: number, size: number): any {
  if (size < 10) {
    return
  }
  // ctx.fillStyle = #352961;
  ctx.fillStyle = 'DarkSlateBlue ';
  ctx.fillRect(posX + (size / 3), posY + (size / 3), size / 3, size / 3);
  ctx.fillRect(posX + (size / 9), posY + (size / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size * 4 / 9), posY + (size / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size * 7 / 9), posY + (size / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size / 9), posY + (size * 4 / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size * 7 / 9), posY + (size * 4 / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size / 9), posY + (size * 7 / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size * 4 / 9), posY + (size * 7 / 9), size / 9, size / 9);
  ctx.fillRect(posX + (size * 7 / 9), posY + (size * 7 / 9), size / 9, size / 9);

  verticalLiner(posX, posY, (size / 3), (size / 3));
  verticalLiner(posX + (size / 3), posY, (size / 3), (size / 3));
  verticalLiner(posX + (size * 2 / 3), posY, (size / 3), (size / 3));
  verticalLiner(posX, posY + (size / 3), (size / 3), (size / 3));
  verticalLiner(posX + (size * 2 / 3), posY + (size / 3), (size / 3), (size / 3));
  verticalLiner(posX, posY + (size * 2 / 3), (size / 3), (size / 3));
  verticalLiner(posX + (size / 3), posY + (size * 2 / 3), (size / 3), (size / 3));
  verticalLiner(posX + (size * 2 / 3), posY + (size * 2 / 3), (size / 3), (size / 3));

}

verticalLiner(0, 0, 600);
