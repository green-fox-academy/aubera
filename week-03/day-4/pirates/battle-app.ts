'use strict';

import { Ship } from './ship'
import { Pirate } from './pirate'

export class BattleApp {

  battleApp(){
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
  }
}

let battleApp: BattleApp = new BattleApp();
battleApp.battleApp();
