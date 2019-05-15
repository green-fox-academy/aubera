//jshint esversion: 6

// Remove the king from the list.
// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content. -->

const planetData = [{
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

var list = document.querySelector('ul');
var king = document.querySelector('li');
list.removeChild(king);
for (var i in planetData){
  if (planetData[i].asteroid){
    let item = document.createElement('li');
    item.innerHTML = planetData[i].content;
    item.classList.add(planetData[i].category);
    list.appendChild(item);
  }
}
