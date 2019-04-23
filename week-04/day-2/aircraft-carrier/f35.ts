'use strict';

import { Aircraft } from './aircraft'

export class F35 extends Aircraft {
  constructor(maxAmmo: number = 12, baseDamage: number = 50, priorityForFillQueue: boolean = true) {
    super(maxAmmo, baseDamage, priorityForFillQueue);
  }
}
