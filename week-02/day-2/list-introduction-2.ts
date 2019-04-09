'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = [];
listB = listB.concat(listA);
console.log(listA.includes('Durian'));
listB.splice(3, 1);
listA.splice(3, 0, 'Kiwi');
console.log(listA.length > listB.length ? 'list A is longer' : 'list B is longer');
console.log(`This is the index of Avocado: ${listA.indexOf('Avocado')}`);
console.log(`This is the index of Durian: ${listA.indexOf('Durian')}`);
listB.push('Passion Fruit', 'Pummelo');
console.log(listA[2]);
