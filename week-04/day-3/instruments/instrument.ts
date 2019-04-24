'use strict';

abstract class Instrument {
  protected abstract name: string;
  abstract play(): void;
}

export abstract class StringedInstrument extends Instrument {
  abstract numberOfStrings: number;
  abstract whatSound: string;

  sound(): string {
    return this.whatSound;
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}
