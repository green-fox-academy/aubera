'use strict';

import { StringedInstrument } from './instrument'

export class ElectricGuitar extends StringedInstrument {
  name: string;
  numberOfStrings: number;
  whatSound: string;

  constructor(numberOfStrings: number = 6, name: string = 'Electric Guitar', whatSound: string = 'Twang') {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = name;
    this.whatSound = whatSound;
  }
}
