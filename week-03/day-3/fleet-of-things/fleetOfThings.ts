import { Thing } from './thing';
import { Fleet } from './fleet';

'use strict';

class FleetOfThings {
  fleet: Fleet;

  constructor(todos: string[]) {
    let fleet = new Fleet;
    for (let i: number = 0; i < toDos.length; i++) {
      fleet.add(new Thing(todos[i]));
    }
    this.fleet = fleet;
  }

  completer(str: string): void {
    for (let i: number = 0; i < this.fleet.getThings().length; i++) {
      if (str === this.fleet.getThings()[i].getName()) {
        this.fleet.getThings()[i].complete();
      }
    }
  }

  print(): void {
    for (let i: number = 1; i <= this.fleet.getThings().length; i++) {
      console.log(`${i}. [${this.fleet.getThings()[i-1].getCompleted() ? 'X' : ' '}] ${this.fleet.getThings()[i-1].getName()}`)
    }
  }

}

let toDos: string[] = ['Get milk', 'Remove the obstacles', 'Stand up', 'Eat lunch'];

let fleetOfThings: FleetOfThings = new FleetOfThings(toDos);
fleetOfThings.completer('Stand up');
fleetOfThings.completer('Eat lunch');
fleetOfThings.print();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */
