var genres = document.getElementById("genre-input");

genres.addEventListener("change", function() {
  filterMovies(genres.value);
});

function filterMovies(filter) {
  var movieOptions = document.querySelectorAll("datalist")[1].querySelectorAll('option');
  if (filter != '') {
    for (let i = 0; i < movieOptions.length; i++) {
      movieOptions[i].removeAttribute('disabled');
      if (!movieOptions[i].classList.contains(filter)) {
        movieOptions[i].setAttribute('disabled', '');
      }
    }
  } else {
    for (let i = 0; i < movieOptions.length; i++) {
      movieOptions[i].removeAttribute('disabled');
    }
  }
}