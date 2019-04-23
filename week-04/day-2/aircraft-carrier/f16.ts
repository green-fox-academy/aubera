'use strict';

import { Aircraft } from './aircraft'

export class F16 extends Aircraft {
  constructor(maxAmmo?: number, baseDamage?: number, priorityForFillQueue?: boolean) {
    super(maxAmmo, baseDamage, priorityForFillQueue);
  }
}
