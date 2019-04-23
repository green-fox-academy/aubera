'use strict';

import { F16 } from './f16'
import { F35 } from './f35'

class Carrier {
  aircrafts: any[] = [];
  ammoStorage: number;
  healthPoint: number;
  actualAmmoStorage: number;
  totalDamage: number = 0;

  constructor(ammoStorage: number, healthPoint: number) {
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
    this.actualAmmoStorage = ammoStorage
  }

  add(aircraft: F16 | F35): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    let totalAmmoNeeded: number = 0;
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      totalAmmoNeeded += (this.aircrafts[i].maxAmmo - this.aircrafts[i].ammoStorage);
    }
    if (totalAmmoNeeded > this.ammoStorage) {
      let priorityQueue: any[] = [];
      priorityQueue = this.aircrafts.sort(function(a, b) { return a.priorityForFillQueue - b.priorityForFillQueue }).reverse();
      console.log(priorityQueue);
      for (let i: number = 0; i < this.aircrafts.length; i++) {
        this.actualAmmoStorage = priorityQueue[i].refill(this.actualAmmoStorage);
      }
    } else {
      for (let i: number = 0; i < this.aircrafts.length; i++) {
        this.actualAmmoStorage = this.aircrafts[i].refill(this.actualAmmoStorage);
      }
    }
  }

  fight(otherCarrier: Carrier): void {
    let otherTotalDamage: number = 0;
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      this.totalDamage += this.aircrafts[i].fight();
      // this.aircrafts[i].fight();
    }
    for (let i: number = 0; i < otherCarrier.aircrafts.length; i++) {
      otherTotalDamage += otherCarrier.aircrafts[i].fight();
    }
    otherCarrier.healthPoint -= this.totalDamage;
    this.healthPoint -= otherTotalDamage;
  }

  // calculateDamage(): number {
  //   let totalDamage: number = 0;
  //   for (let i: number = 0; i < this.aircrafts.length; i++) {
  //     totalDamage += this.aircrafts[i].fight();
  //   }
  //   return totalDamage;
  // }

  getStatus(): string {
    let statusInfo: string = '';
    if (this.healthPoint > 0) {
      statusInfo += `HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.actualAmmoStorage}, Total damage: ${this.totalDamage}\nAircrafts:`;
      for (let i: number = 0;  i < this.aircrafts.length; i++) {
        statusInfo += `\nType: ${this.aircrafts[i].getType()}, Ammo: ${this.aircrafts[i].maxAmmo}, Base damage: ${this.aircrafts[i].baseDamage}, All damage: ${this.aircrafts[i].baseDamage * this.aircrafts[i].maxAmmo}`;
      }
    } else {
      statusInfo += 'It\'s dead Jim :(';
    }
    return statusInfo;
  }
}

let carr: Carrier = new Carrier(2000, 5000);
let carr2: Carrier = new Carrier(2000, 5000);
carr.add(new F16);
carr.add(new F16);
carr.add(new F16);
carr.add(new F35);
carr.add(new F35);
carr2.add(new F35);
carr2.add(new F35);
carr2.add(new F35);
carr2.add(new F16);
carr2.add(new F16);
console.log(carr);
carr.fill();
carr2.fill();
carr.fight(carr2);
console.log(carr.getStatus());
