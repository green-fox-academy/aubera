const button = document.querySelector('button');
const div = document.querySelector('.jokes');
const url = 'http://api.icndb.com/jokes/random';

button.addEventListener('click', (e) => {
  fetch(url)
  .then(response => response.json())
  .then(myJson => {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = myJson.value.joke;
    console.log(paragraph);
    console.log(div);
    div.appendChild(paragraph);
  });
});