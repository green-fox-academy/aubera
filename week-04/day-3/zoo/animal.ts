'use strict';

export abstract class Animal{
  abstract name: string;
  abstract age: number;
  abstract isAlive: boolean;
  abstract lifeExpectancy: number;

  getName(): string {
    return this.name;
  }
  abstract breed(): string;
  extinct(): void {
    console.log(`${this.name}s are extinct. :(`);
  }
}

export abstract class Egglayers extends Animal{
  breed(): string{
    return 'laying eggs.';
  }
}
