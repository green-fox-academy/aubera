'use strict';

import { Flyable } from './flyable'
import { Vehicle } from './vehicle'

class Helicopter extends Vehicle implements Flyable{
  make: string;
  model: string;
  yearOfProduction: string;

  constructor(make: string, model: string, yearOfProduction: string){
    super();
    this.make = make;
    this.model = model
    this.yearOfProduction = yearOfProduction;
  }

  land(): void{
    console.log('Landing!')
  }

  fly(): void{
    console.log('Flying!')
  }
  takeOff(): void{
    console.log('Taking off!')
  }
}
