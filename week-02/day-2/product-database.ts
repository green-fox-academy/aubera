'use strict';

let list: any = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
}

function calulations (list: any, item: string) {
  if (list.hasOwnProperty(item)){
    console.log(`The price of the ${item} is ${list[item]}.`);
  } else {
    console.log(`There is no such item.`);
  }
  let expensiveItem: number = 0;
  let cheapItem: number = list[Object.keys(list)[0]];
  let sum: number = 0;
  let under300: number[] = [];
  let exactly125: number[] = [];
  for (let i: number = 0; i < Object.keys(list).length; i++){
    expensiveItem > list[Object.keys(list)[i]] ? expensiveItem : expensiveItem = list[Object.keys(list)[i]];
    cheapItem < list[Object.keys(list)[i]] ? cheapItem : cheapItem = list[Object.keys(list)[i]];
    sum += list[Object.keys(list)[i]];
    list[Object.keys(list)[i]] < 300 ? under300.push(list[Object.keys(list)[i]]) : '';
    list[Object.keys(list)[i]] === 125 ? exactly125.push(list[Object.keys(list)[i]]) : '';
  }
  console.log(`This was the  most expensive item: ${expensiveItem}`);
  console.log(`This is the average price ${Math.round(sum/Object.keys(list).length)}`)
  console.log(`${under300.length} item(s) was/were under 300.`);
  console.log(`${exactly125.length} item(s) was/were exactly 125.`);
  console.log(`This was the  least expensive item: ${cheapItem}`);
}

calulations(list, 'Fish');
