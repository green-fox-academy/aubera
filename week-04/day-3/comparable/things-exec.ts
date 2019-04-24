'use strict';

import { Thing } from './thing'

function sortByCompleted(arr: Thing[]){
  let completed: Thing[] = [];
  let uncompleted: Thing[] = [];
  completed = arr.filter(thing => thing.completed);
  uncompleted = arr.filter(thing => !thing.completed);
  completed.sort(function(a: Thing, b: Thing): number {
    return a.compareTo(b);
  });
  uncompleted.sort(function(a: Thing, b: Thing): number {
    return a.compareTo(b);
  });
  arr = uncompleted.concat(completed);
  return arr;
}

let things: Thing[] = [];
things.push(new Thing('milk'));
things.push(new Thing('bread'));
things.push(new Thing('tea'));
things.push(new Thing('cheese'));
things.push(new Thing('butter'));
things.push(new Thing('carrot'));

things[1].complete();
things[3].complete();

console.log(sortByCompleted(things));

for (let thing of things) {
  thing.printAllFields();
}
