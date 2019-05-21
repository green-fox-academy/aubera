//jshint esversion:6
document.getElementsByTagName('h1')[0].style.color = 'red';
const container = document.querySelector('.container');

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = console.log;
xhr.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+Apollo+11&api-key=MY_API_KEY', true);
xhr.send(null);
xhr.onload = (data) => {
  // JSON.parse(data.target.response).response.docs;
  for (let i = 0; i < JSON.parse(data.target.response).response.docs.length; i++){
    articleAdder(JSON.parse(data.target.response).response.docs[i], i);
  }

};

function articleAdder(obj, num){
  let article = document.createElement('article');
  article.classList.add(num+1);
  let h3 = document.createElement('h3');
  h3.innerHTML = '<a href="' + obj.web_url + '">' + obj.headline.main + '</a>';
  let pSnippet = document.createElement('p');
  pSnippet.textContent = obj.snippet;
  let pDate = document.createElement('p');
  pDate.textContent = obj.pub_date;
  article.appendChild(h3);
  article.appendChild(pSnippet);
  article.appendChild(pDate);
  container.appendChild(article);
}
