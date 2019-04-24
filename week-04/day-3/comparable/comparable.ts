'use strict';

export interface Comparable {
  compareTo(other: Comparable): number;
  values?: number[];
  name?: string;
}
