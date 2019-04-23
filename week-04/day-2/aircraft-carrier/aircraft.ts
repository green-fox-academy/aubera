'use strict';

export class Aircraft{
  maxAmmo: number;
  baseDamage: number;
  ammoStorage: number = 0;
  priorityForFillQueue: boolean;

  constructor(maxAmmo: number = 8, baseDamage: number = 30, priorityForFillQueue: boolean = false){
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.priorityForFillQueue = priorityForFillQueue;
  }

  fight(): number{
    let damagePoint: number = this.baseDamage * this.ammoStorage;
    this.ammoStorage = 0;
    return damagePoint;
  }

  refill(amountToRefill: number): number{
    if (amountToRefill >= this.maxAmmo){
      this.ammoStorage += this.maxAmmo;
      amountToRefill -= this.maxAmmo;
    } else {
      this.ammoStorage += amountToRefill;
      amountToRefill = 0;
    }
    return amountToRefill;
  }

  getType(): string{
    return this.constructor.name;
  }

  getStatus(): string{
    return `Type ${this.getType()}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight}`;
  }

  isPriority(): boolean{
    return this.priorityForFillQueue;
  }
}

// let a: Aircraft = new Aircraft();
// console.log(a.getType());
