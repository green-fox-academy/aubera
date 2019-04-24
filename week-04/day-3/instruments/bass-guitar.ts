'use strict';

import { StringedInstrument } from './instrument'

export class BassGuitar extends StringedInstrument {
  name: string;
  numberOfStrings: number;
  whatSound: string;

  constructor(numberOfStrings: number = 4, name: string = 'Bass Guitar', whatSound: string = 'Duum-duum-duum') {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = name;
    this.whatSound = whatSound;
  }
}
