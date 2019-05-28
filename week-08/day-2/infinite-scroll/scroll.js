let scrollOffset = 300;

window.onload = () => {
  let randomNumber = Math.random()*30;
  appendDivs(randomNumber);
};

window.addEventListener("scroll", function (event) {
  if (this.scrollY >= scrollOffset){
    scrollOffset += 300;
    appendDivs(10);
  }
  if (this.scrollY <= 300){
    insertDivs(10);
  }
  console.log(scrollY);
});

function appendDivs(numberOfDivsToCreate){
  for (let i = 0; i < numberOfDivsToCreate; i++){
    let div = document.createElement('div');
    div.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.appendChild(div);
  }
}

function insertDivs(numberOfDivsToCreate){
  for (let i = 0; i < numberOfDivsToCreate; i++){
    let div = document.createElement('div');
    div.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.insertBefore(div, document.body.firstChild);
  }
}
