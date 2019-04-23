'use strict';

import { Tree } from './tree'
import { Flower } from './flower'

export class Garden {
  flowers: Flower[] = [];
  trees: Tree[] = [];

  watering(amountOfWater: number): void {
    let plantsToWater: any[] = [];
    plantsToWater.push(this.flowers.filter(flower => flower.needToWater), this.trees.filter(tree => tree.needToWater));
    for (let i: number = 0; i < plantsToWater.length; i++) {
      for (let j: number = 0; j < plantsToWater[i].length; j++){
        plantsToWater[i][j].watering(amountOfWater / plantsToWater.length);
      }
    }
    console.log(`\nWatering with ${amountOfWater}`);
  }

  plantFlower(flower: Flower): void {
    this.flowers.push(flower);
  }

  plantTree(tree: Tree): void {
    this.trees.push(tree);
  }

  info(): void {
    for (let i: number = 0; i < this.flowers.length; i++) {
      console.log(`The ${this.flowers[i].color} Flower ${this.flowers[i].needToWater ? 'needs water' : 'doesn\'t need water'}`);
    }
    for (let j: number = 0; j < this.trees.length; j++) {
      console.log(`The ${this.trees[j].color} Tree ${this.trees[j].needToWater ? 'needs water' : 'doesn\'t need water'}`);
    }
  }
}
