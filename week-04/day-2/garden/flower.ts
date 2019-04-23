'use strict';

import { Plant } from './plant'

export class Flower extends Plant{
  constructor(color: string, criticalWaterAmount?: number, waterAbsorbanceEfficieny?: number){
    super(color, criticalWaterAmount, waterAbsorbanceEfficieny);
  }

  watering(amountOfWater: number):void {
    super.watering(amountOfWater);
    this.needToWater = this.amountOfWater > this.criticalWaterAmount ? this.needToWater = false : this.needToWater = true;
  }
}

// let f: Flower = new Flower('red', 10, 0.4);
// console.log(f);
// f.watering(1000);
// console.log(f);
