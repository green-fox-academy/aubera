//jshint esversion: 6

const table = document.querySelector('table');
const button = document.querySelector('button');
const category = document.querySelector('input[name="category"]');
const publisher = document.querySelector('input[name="publisher"]');
const price = document.querySelector('input[name="price"]');
const greater = document.querySelector('input[name="greater"]');
const less = document.querySelector('input[name="less"]');
var bookProperties = ['book_name', 'aut_name', 'cate_descrip', 'pub_name', 'book_price'];

window.onload = ajaxRequest('booktitles');
button.onclick = () => {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  ajaxRequest(generateSearchQuery());
};

function ajaxRequest(what) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/' + what, true);
  xhr.send(null);
  xhr.onload = (data) => {
    listBooks(JSON.parse(data.target.response), bookProperties);
  };
}

function listBooks(list, names) {
  for (let i = 0; i < list.length; i++) {
    var tr = document.createElement('tr');
    for (let j = 0; j < names.length; j++) {
      var td = document.createElement('td');
      td.textContent = list[i][names[j]];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function generateSearchQuery(){
  var queryString = 'booktitles?';
  if (category.value){
    queryString += 'category=' + category.value;
  }
  if (publisher.value){
    queryString += '&publisher=' + publisher.value;
  }
  if (greater.checked){
    queryString += '&pgt=' + price.value;
  }
  if (less.checked){
    queryString += '&plt=' + price.value;
  }
  return queryString;
}
