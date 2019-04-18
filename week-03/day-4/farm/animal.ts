'use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

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
