'use strict';


// Do we have milk on the list?
// Do we have bananas on the list?

let list: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken']

function shoppingList(list: string[], item: string) {
  if (list.indexOf(item) !== -1) {
    console.log('This item is already on the list.');
  } else {
    console.log('This item is not on the list.');
  }
}

shoppingList(list, 'milk');
shoppingList(list, 'bananas');
