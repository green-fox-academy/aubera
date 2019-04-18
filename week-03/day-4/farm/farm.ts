'use strict';
import { Animal } from './animal'

class Farm {
  animals: Animal[] = new Array(10);

  constructor(animals: Animal[]): void {
    this.animals = animals;
  }

  breed(name: string): void {
    this.animals.length < 10 ? this.animals.push(new Animal(name)) : console.log('Sorry, there is no more space in the farm. ;(');
  }

  slaughter(): void {
    let leastHunger: number = this.animals[0].hunger;
    let counter: number = 0;
    for (let i: number = 0; i < this.animals.length;  i++) {
      if (this.animals[i].hunger < leastHunger) {
        leastHunger = this.animals[i].hunger;
        counter = i;
      }
    }
    this.animals.splice(counter, 1);
  }
}

function initializeFarm(): Animal[] {
  return [
    new Animal('Masni'),
    new Animal('Riley'),
    new Animal('Muffin'),
    new Animal('Furkesz'),
  ]
}

let myFirstFarm: Farm = new Farm(initializeFarm());

myFirstFarm.animals[2].hunger = 35;
myFirstFarm.slaughter();
console.log(myFirstFarm.animals.length);
