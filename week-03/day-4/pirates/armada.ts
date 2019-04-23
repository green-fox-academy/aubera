'use strict';

import { Ship } from './ship'
import { Pirate } from './pirate'
import { BattleApp } from './battle-app'

export class Armada {
  ships: Ship[] = [];
  maxShipNumber: number = 10;


  fillArmada(): void {
    let names: string[] = ['Black Pearl', 'Jolly Roger', 'Adventure Galley', 'Queen Anne’s Revenge', 'Fancy', 'Whydah', 'Royal Fortune', 'Bachelor\'s Delight', 'Golden Hind', 'Roebuck', 'Satisfaction', 'New York Revenge', 'The Golden Fleece', 'CSS Alabama', 'The Dainty', 'The Falcon', 'Happy Delivery', 'Rising Sun', 'Speaker', 'Revenge'];
    for (let i: number = 0; i < Math.floor(Math.random() * this.maxShipNumber) + 1; i++) {
      this.ships.push(new Ship(names[Math.floor(Math.random() * names.length) + 1]));
      this.ships[i].fillShip();
    }
  }

  war(otherArmada: Armada): boolean {
    let thisActualShip: number = 0;
    let otherActualShip: number = 0;
    let thisArmadaIsWarWinner: boolean = false;
    while (thisActualShip !== this.ships.length - 1 && otherActualShip !== otherArmada.ships.length - 1) {
      if (this.ships[thisActualShip].battle(otherArmada.ships[otherActualShip])) {
        otherActualShip++;
      } else {
        thisActualShip++;
      }
      thisActualShip < this.ships.length - 1 ? thisArmadaIsWarWinner = true : thisArmadaIsWarWinner = false;
    }
    return thisArmadaIsWarWinner;
  }
}

let fisrtArmada: Armada = new Armada();
let secondArmada: Armada = new Armada();
fisrtArmada.fillArmada();
secondArmada.fillArmada();

console.log(fisrtArmada.war(secondArmada));
