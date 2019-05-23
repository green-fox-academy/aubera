//jshint esversion: 6

const booklist = document.querySelector('ul');

window.onload(ajaxRequest('booktitles'));

function ajaxRequest(what) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/' + what, true);
  xhr.send(null);
  xhr.onload = (data) => {
    listBooktitles(JSON.parse(data.target.response));
  };
}

function listBooktitles(list) {
  for (let i = 0; i < list.length; i++) {
    var li = document.createElement('li');
    li.textContent = list[i].book_name;
    booklist.appendChild(li);
  }
}
