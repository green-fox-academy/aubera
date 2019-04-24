'use strict';

import { Comparable } from './comparable'
import { Printable } from '../printable/printable'

export class Thing implements Comparable, Printable {
  name: string;
  completed: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  compareTo(other: Thing): number {
    if (this.name < other.name) {
      return -1;
    }
    if (this.name > other.name) {
      return 1;
    }
    return 0;
  }

  printAllFields(): void{
    console.log(this.name, this.completed);
  }
}
