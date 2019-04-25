'use strict';

export class Animal {
  name: string;
  hunger: number;
  thirst: number;

  constructor(name: string, hunger: number = 50, thirst: number = 50) {
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.thirst++;
    this.hunger++;
  }
}
