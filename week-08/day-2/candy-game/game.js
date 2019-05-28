const createCandies = document.querySelector('.create-candies');
const createLollipops = document.querySelector('.buy-lollypops');
const makeCandyRain = document.querySelector('.candy-machine');
const candies = document.querySelector('.candies');
const lollipops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
let candyCount = 0;
let lollipopCount = 3;

createCandies.addEventListener('click', ()=>{
  addCandies(1);
});

createLollipops.addEventListener('click', ()=>{
  if (candyCount >= 100){
    lollipopCount++;
    lollipops.textContent += '🍭';
    addCandies(-100);
  }
  if (lollipopCount >= 10) {
    setInterval(() => {
      addCandies(1);
    }, 1000);
    speed.textContent = 1 / 1000 * 1000;
  }
});

makeCandyRain.addEventListener('click', ()=>{
  setInterval(() => {
    addCandies(1);
  }, 100);
  speed.textContent = 1 / 100 * 1000;
});

function addCandies(numerOfCandyToAdd){
  candyCount += numerOfCandyToAdd;
  candies.textContent = candyCount;
}



