//jshint esversion: 6

const names = document.querySelector('.names');
const movies = document.querySelector('.movies');
const button = document.getElementsByTagName('button')[0];
const inputField = document.getElementsByTagName('input')[0];
const films = [
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Force Awakens'
];

button.onclick = (event) => {
  event.preventDefault();
  emptyCharacterList();
  emptyMovieList();
  searchSWAPI(inputField.value);
};

function searchSWAPI(term) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://swapi.co/api/people/?search=' + term + ';', true);
  xhr.send(null);
  xhr.onload = (data) => {
    var filmsAndCharacters = [];
    for (let i = 0; i < JSON.parse(data.target.response).results.length; i++) {
      filmsAndCharacters.push(saveNameAndMovies(JSON.parse(data.target.response).results[i], i));
      createCharacterList(JSON.parse(data.target.response).results[i], filmsAndCharacters);
    }
  };
}

function saveNameAndMovies(item, num) {
  let characterInFilms = [];
  let character = {};
  for (let j = 0; j < item.films.length; j++) {
    characterInFilms.push(item.films[j][27]);
  }
  character.name = item.name;
  character.films = characterInFilms;
  return character;
}

function createCharacterList(item, db) {
  let element = document.createElement('li');
  element.textContent = item.name;
  element.onclick = () => {
    emptyMovieList();
    movieList( db, item.name);
  };
  names.appendChild(element);
}

function movieList(db, charName) {
  for (let i = 0; i < db.length; i++) {
    console.log(charName);
    console.log(db[i].name);
    if (db[i].name === charName) {
      for (let j = 0; j < db[i].films.length; j++) {
        let element = document.createElement('li');
        element.textContent = films[db[i].films[j] - 1];
        movies.appendChild(element);
      }
    }
  }
}

function emptyMovieList() {
  while (movies.firstChild) {
    movies.removeChild(movies.firstChild);
  }
}

function emptyCharacterList() {
  while (names.firstChild) {
    names.removeChild(names.firstChild);
  }
}
