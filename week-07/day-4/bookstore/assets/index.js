//jshint esversion: 6

const table = document.querySelector('table');
var bookProperties = ['book_name', 'aut_name', 'cate_descrip', 'pub_name', 'book_price'];

window.onload = ajaxRequest('booktitles');

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
      console.log(j);
      var td = document.createElement('td');
      td.textContent = list[i][names[j]];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
