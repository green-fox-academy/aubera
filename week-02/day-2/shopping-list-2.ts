'use strict';

let database: any = {
  'Milk' : 1.07,
  'Rice' : 1.59,
  'Eggs' : 3.14,
  'Cheese' : 12.60,
  'Chicken Breasts' : 9.40,
  'Apples' : 2.31,
  'Tomato' : 2.58,
  'Potato' : 1.75,
  'Onion' : 1.10,
}

let shoppingListBob: any = {
  'Milk' : 3,
  'Rice' : 2,
  'Eggs' : 2,
  'Cheese' : 1,
  'Chicken Breasts' : 4,
  'Apples' : 1,
  'Tomato' : 2,
  'Potato' : 1,
}

let shoppingListAlice: any = {
  'Rice' : 1,
  'Eggs' : 5,
  'Chicken Breasts' : 2,
  'Apples' : 1,
  'Tomato' : 10,
}

function totalBill(db: any, list: any) {
  let bill: number = 0;
  for (let i: number = 0; i < Object.keys(list).length; i++){
    bill += db[Object.keys(list)[i]] * list[Object.keys(list)[i]];
  }
  return bill;
}

function compare(listA: any, listB: any, item: string){
  let quantA: number = 0;
  let quantB: number = 0;
  let prodCountA: number = 0;
  let prodCountB: number = 0;
  let itemCountA: number = 0;
  let itemCountB: number = 0;
  for (let i: number = 0; i < Object.keys(listA).length; i++){
    Object.keys(listA)[i] === item ? quantA = listA[Object.keys(listA)[i]] : '';
    itemCountA += listA[Object.keys(listA)[i]];
    prodCountA++;
  }
  for (let i: number = 0; i < Object.keys(listB).length; i++){
    Object.keys(listB)[i] === item ? quantB = listB[Object.keys(listB)[i]] : '';
    itemCountB += listB[Object.keys(listB)[i]];
    prodCountB++;
  }
  quantA > quantB ? console.log(`Alice brought more ${item}.`) : console.log(`Bob brought more ${item}.`);
  prodCountA > prodCountB ? console.log(`Alice brought more different products.`) : console.log(`Bob brought more different products.`);
  itemCountA > itemCountB ? console.log(`Alice brought more items.`) : console.log(`Bob brought more items.`);
}

console.log(`This is what Bob paid: ${totalBill(database, shoppingListBob)}`);
console.log(`This is what Alice paid: ${totalBill(database, shoppingListAlice)}`);
// compare(shoppingListAlice, shoppingListBob, 'Rice');
compare(shoppingListAlice, shoppingListBob, 'Potato');
