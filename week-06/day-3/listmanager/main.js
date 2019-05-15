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

const list = ['bread', 'milk', 'orange', 'tomato', 'cheese', 'carrot', 'salad'];

const body = document.querySelector('body');
var container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

createFirstTable();
createButtons();
createSecondTable();
selectFirstItem();

var up = document.querySelector('.up');
var down = document.querySelector('.down');
var right = document.querySelector('.right');
var remove = document.querySelector('.remove');

up.onclick = () => {
  moveUp();
};

down.onclick = () => {
  moveDown();
};

remove.onclick = () => {
  removeItem();
};

right.onclick = () => {
  moveItem();
};

function createFirstTable() {
  var table = document.createElement('div');
  for (let i in list) {
    var item = document.createElement('div');
    item.innerHTML = list[i];
    item.classList.add('item');
    table.appendChild(item);
  }
  table.classList.add('table', 'border', 'first');
  container.appendChild(table);
}

function createButtons() {
  var buttons = document.createElement('div');
  var up = document.createElement('button');
  up.innerHTML = 'Up';
  up.classList.add('button', 'up');
  buttons.appendChild(up);
  var right = document.createElement('button');
  right.innerHTML = '>';
  right.classList.add('button', 'right');
  buttons.appendChild(right);
  var remove = document.createElement('button');
  remove.innerHTML = 'X';
  remove.classList.add('button', 'remove');
  buttons.appendChild(remove);
  var down = document.createElement('button');
  down.innerHTML = 'Down';
  down.classList.add('button', 'down');
  buttons.appendChild(down);
  buttons.classList.add('table', 'buttons');
  container.appendChild(buttons);
}

function createSecondTable() {
  var table = document.createElement('div');
  for (let i in list) {
    var item = document.createElement('div');
    table.appendChild(item);
  }
  table.classList.add('table', 'border', 'second');
  container.appendChild(table);
}

function selectFirstItem() {
  var first = document.querySelector('.first').querySelector('.item');
  first.classList.add('selected');
}

function moveUp() {
  var items = document.querySelector('.first').querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('selected') && i > 0) {
      items[i - 1].classList.add('selected');
      items[i].classList.remove('selected');
    }
  }
}

function moveDown() {
  var items = document.querySelector('.first').querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('selected') && i < items.length - 1) {
      items[i + 1].classList.add('selected');
      items[i].classList.remove('selected');
      break;
    }
  }
}

function removeItem() {
  var table = document.querySelector('.first');
  var selected = document.querySelector('.selected');
  try {
    table.removeChild(selected);
    selectFirstItem();
  } catch (e) {}
}

function moveItem() {
  var table = document.querySelector('.first');
  var secondTable = document.querySelector('.second');
  var selected = document.querySelector('.selected');
  try {
    selected.classList.remove('selected');
    secondTable.appendChild(selected);
    selectFirstItem();
  } catch (e) {}
}
