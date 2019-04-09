'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

function separator() {
  console.log('+--------------------+---------------+----------+');
}

function header() {
  console.log('| Ingredient         | Needs cooling | In stock |');
}

function elements(list: any[]) {
  let line: string = '';
  let space: any = ' ';
  for (let i: number = 0; i < list.length; i++) {
    line += '| ' + list[i].name;
    for (let j: number = 0; j < 19 - list[i].name.length; j++) {
      line += ' ';
    }
		list[i].needsCooling === true ? line += '| Yes           ' : line += '| No            ';
		list[i].inStock !== 0 ? line += `| ${list[i].inStock}        |` : line += `| -        |`;
		i === 7 ? '' : 	line += '\n';
  }
  console.log(line);
}


separator();
header();
separator();
elements(ingredients);
separator();
