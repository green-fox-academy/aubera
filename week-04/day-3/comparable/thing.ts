'use strict';

interface Comparable {
  compareTo(other: Comparable): number;
  name: string;
  completed: boolean;
}

export class Thing implements Comparable {
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

  compareTo(other: Comparable) {
    if (this.name < other.name) {
      return -1;
    }
    if (this.name > other.name) {
      return 1;
    }
    return 0;
  }
}
