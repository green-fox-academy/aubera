'use strict';

import { Plant } from './plant'

export class Tree extends Plant{
  constructor(color: string, criticalWaterAmount?: number, waterAbsorbanceEfficieny?: number){
    super(color, criticalWaterAmount, waterAbsorbanceEfficieny);
  }

  watering(amountOfWater: number):void {
    super.watering(amountOfWater);
    this.needToWater = this.amountOfWater > this.criticalWaterAmount ? this.needToWater = false : this.needToWater = true;
  }
}
