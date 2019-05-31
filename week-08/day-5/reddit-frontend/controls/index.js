const posts = document.querySelector(".posts");

window.onload = getAllPosts('posts/', 'feri');

function getAllPosts(what, who) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/' + what, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('username', who);
  xhr.send();
  xhr.onload = (data) => {
    listPosts(JSON.parse(data.target.response));
  };
}

function listPosts(list) {
  let responseDataKeys = ['post_id', 'title', 'url', 'timestamp', 'score', 'owner_name', 'vote'];
  for (let i = 0; i < list.length; i++) {
    let post = document.createElement('div');
    post.setAttribute('id', list[i].post_id);

    let voting = document.createElement('div');
    voting.classList.add('voting');

    let upvote = document.createElement('div');
    let up = document.createElement('button');
    up.setAttribute('id', 'up');
    up.textContent = '+';
    upvote.appendChild(up);

    let downvote = document.createElement('div');
    let down = document.createElement('button');
    down.setAttribute('id', 'down');
    down.textContent = '-';
    downvote.appendChild(down);

    let score = document.createElement('div');
    score.textContent = list[i].score;
    voting.appendChild(upvote);
    voting.appendChild(score);
    voting.appendChild(downvote);

    let anchor = document.createElement('a');
    anchor.textContent = list[i].title;
    anchor.setAttribute('href', list[i].url);
    let timeAndOwner = document.createElement('p');
    timeAndOwner.textContent = checkTime(list[i].timestamp, list[i].username);

    post.appendChild(voting);
    post.appendChild(anchor);
    post.appendChild(timeAndOwner);

    posts.appendChild(post);
  }
}

function checkTime(postTime, username){
  let actualDate = Date.now()/1000;
  let creationDate;
  let timeElapsedInSeconds = (actualDate - postTime);
  if (Math.floor(timeElapsedInSeconds / 604800) > 0){
    creationDate = Math.floor(timeElapsedInSeconds / 604800) + ' weeks ago';
  } else if (Math.floor(timeElapsedInSeconds / 86400) > 0){
    creationDate = Math.floor(timeElapsedInSeconds / 86400) + ' days ago';
  } else if (Math.floor(timeElapsedInSeconds / 3600) > 0){
    creationDate = Math.floor(timeElapsedInSeconds / 3600)  + ' hours ago';
  } else if (Math.floor(timeElapsedInSeconds / 60) > 0){
    creationDate = Math.round(timeElapsedInSeconds / 60) + ' minutes ago';
  } else {
    creationDate = Math.round(timeElapsedInSeconds) + ' seconds ago';
  }
  return `Submitted ${creationDate} by ${username}`;
}