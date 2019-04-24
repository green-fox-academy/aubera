'use strict';

interface Comparable {
  compareTo(other: Comparable): number;
  name: string;
  completed: boolean;
}

class Thing implements Comparable {
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
    if (this.completed < other.completed) {
      return -1;
    }
    if (this.completed > other.completed) {
      return 1;
    }
    return 0;
  }
}

let things: Thing[] = [];
things.push(new Thing('milk'));
things.push(new Thing('bread'));
things.push(new Thing('tea'));
things.push(new Thing('cheese'));
things.push(new Thing('butter'));
things.push(new Thing('carrot'));

things[1].complete();
things[4].complete();

console.log(things.sort(function(a: Thing, b: Thing): number {
  return a.compareTo(b);
}));
