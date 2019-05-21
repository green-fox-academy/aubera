//jshint esversion: 6
const button = document.getElementsByTagName('button')[0];
const iFrame = document.getElementsByTagName('iframe')[0];

button.onclick = (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = console.log;
  xhr.open('GET', 'http://api.ipapi.com/' + document.querySelector('input').value + '?access_key=c255bae3f57af63b9621f054081b4366', true);
  xhr.send(null);
  xhr.onload = function(data) {
    if (JSON.parse(data.target.response).city != null){
      mapAPICaller(JSON.parse(data.target.response).city);
    } else if (JSON.parse(data.target.response).location.capital != null){
      mapAPICaller(JSON.parse(data.target.response).location.capital);
    } else {
      mapAPICaller(JSON.parse(data.target.response).country_name);
    }
    console.log(JSON.parse(data.target.response));
  };
};

function mapAPICaller(obj){
  iFrame.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAS-HpV459V-m1VsG_Zkbt2sdTeZpF9nOA&q=' + obj);
}
