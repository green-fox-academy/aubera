'use strict';

export class Plant {
  color: string;
  amountOfWater: number = 0;
  criticalWaterAmount: number;
  waterAbsorbanceEfficieny: number;
  needToWater: boolean = true;

  constructor(color: string, criticalWaterAmount: number = 5, waterAbsorbanceEfficieny: number = 0.75) {
    this.color = color;
    this.criticalWaterAmount = criticalWaterAmount;
    this.waterAbsorbanceEfficieny = waterAbsorbanceEfficieny;
  }

  watering(amountOfWater: number): void {
    this.amountOfWater += (amountOfWater * this.waterAbsorbanceEfficieny);
  }
}

// let p: Plant = new Plant('blue')
// console.log(p)
