'use strict';
import { Pirate } from './pirate'

class Ship {
  crew: Pirate[] = [];
  maxCrewCapacity: number = 10;
  name: string;
  battleWinner: boolean = false;
  score: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  fillShip(): void {
    for (let i: number = 0; i < Math.floor(Math.random() * this.maxCrewCapacity) + 1; i++) {
      this.crew.push(new Pirate());
    }
    this.crew[0].isCaptain = true;
  }

  status(): void {
    let consumedRumByCaptain: number = this.crew[0].intoxicationLevel;
    let captainSatus: string = this.crew[0].isDead ? 'dead' : this.crew[0].isPassedOut ? 'passed out' : 'normal';
    let numberOfAlivePirates: number = this.crew.filter(pirate => !pirate.isDead).length;
    console.log(`This is PirateShip ::${this.name}:: \nIt has a captain, who consumed ${consumedRumByCaptain} rum(s) and is in the state of ${captainSatus}.\nIt has also ${numberOfAlivePirates} pirates alive. `)
  }

  battle(ship: Ship): boolean {
    this.getScore();
    ship.getScore();
    console.log(this.score);
    console.log(ship.score);
    if (this.score > ship.score) {
      this.winnerDrinksRum();
      ship.loserLostCrew();

    } else if (this.score < ship.score) {
      this.loserLostCrew();
      ship.winnerDrinksRum();
    }
    return this.battleWinner;
  }

  getScore(): void {
    let score: number = this.crew.filter(pirate => !pirate.isDead).length - this.crew[0].intoxicationLevel;
    this.score = score;
  }

  winnerDrinksRum(): void {
    this.battleWinner = true;
    for (let i: number = 0; i < this.crew.length; i++) {
      let randNum: number = Math.floor(Math.random() * this.maxCrewCapacity) + 1;
      this.crew[i].drinkSomeRum(randNum);
    }
  }

  loserLostCrew(): void {
    let randNum: number = Math.floor(Math.random() * this.crew.length);
    let randArr: number[] = [];
    for (let i: number = 0; i < randNum; i++) {
      randArr.push(Math.floor(Math.random() * this.crew.length));
    }
    for (let j: number = 0; j < randArr.length; j++){
      this.crew[randArr[j]].isDead = true;
    }
  }
}

let firstShip: Ship = new Ship('Black Pearl');
let otherShip: Ship = new Ship('Jolly Roger')
firstShip.fillShip();
otherShip.fillShip();
firstShip.status();
otherShip.status();
console.log('---------------');
firstShip.battle(otherShip);
firstShip.status();
otherShip.status();
