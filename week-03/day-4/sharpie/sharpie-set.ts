'use strict';
import { Sharpie } from './sharpie'

class SharpieSet{
  sharpies: Sharpie[] = [];

  constructor(sharpies: Sharpie[]){
    this.sharpies = sharpies;
  }

  countUsable(): string {
    let counter: number = 0;
    this.sharpies.map(sharpie => sharpie.inkAmount !== 0 ? counter++ : '');
    return `The number of Sharpies still usable: ${counter}`;
  }

  removeTrash(): string {
    this.sharpies = this.sharpies.filter(sharpie => sharpie.inkAmount !== 0);
    return `Total number of Sharpies still usable: ${this.sharpies.length}`;
  }
}

function initializeSharpie(): Sharpie[] {
  return [
    new Sharpie('green', 10),
    new Sharpie('blue', 10),
    new Sharpie('yellow', 20),
    new Sharpie('pink', 20),
    new Sharpie('black', 20)
  ];
}

let firstSetOfSharpies: SharpieSet = new SharpieSet(initializeSharpie());

console.log(firstSetOfSharpies.countUsable());
firstSetOfSharpies.sharpies[1].inkAmount = 1;
firstSetOfSharpies.sharpies[1].use();
console.log(firstSetOfSharpies.sharpies[1]);
console.log(firstSetOfSharpies.countUsable());
console.log(firstSetOfSharpies.sharpies.length);
console.log(firstSetOfSharpies.removeTrash());
console.log(firstSetOfSharpies.sharpies.length);
