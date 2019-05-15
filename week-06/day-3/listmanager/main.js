//jshint esversion: 6

// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

const body = document.querySelector('body');
const list = ['bread', 'milk', 'orange', 'tomato'];

var container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

function createFirstTable(){
  var table = document.createElement('div');
  for (let i in list){
    var item = document.createElement('div');
    item.innerHTML = list[i];
    table.appendChild(item);
  }
  table.classList.add('table', 'border');
  container.appendChild(table);
}

function createButtons(){
  var buttons = document.createElement('div');
  var up = document.createElement('button');
  up.innerHTML = 'Up';
  up.classList.add('button');
  buttons.appendChild(up);
  var right = document.createElement('button');
  right.innerHTML = '>';
  right.classList.add('button');
  buttons.appendChild(right);
  var remove = document.createElement('button');
  remove.innerHTML = 'X';
  remove.classList.add('button');
  buttons.appendChild(remove);
  var down = document.createElement('button');
  down.innerHTML = 'Down';
  down.classList.add('button');
  buttons.appendChild(down);
  buttons.classList.add('table');
  container.appendChild(buttons);
}

function createSecondTable(){
  var table = document.createElement('div');
  for (let i in list){
    var item = document.createElement('div');
    table.appendChild(item);
  }
  table.classList.add('table', 'border');
  container.appendChild(table);
}

createFirstTable();
createButtons();
createSecondTable();
