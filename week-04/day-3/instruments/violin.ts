'use strict';

import { StringedInstrument } from './instrument'

export class Violin extends StringedInstrument {
  name: string;
  numberOfStrings: number;
  whatSound: string;

  constructor(numberOfStrings: number = 4, name: string = 'Violin', whatSound: string = 'Screech') {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = name;
    this.whatSound = whatSound;
  }
}
