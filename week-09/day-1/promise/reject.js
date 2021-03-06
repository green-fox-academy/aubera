
var promise = new Promise(function(fulfill, reject) {
  setTimeout(function() {
      reject(new Error('REJECTED!'));
    }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise
  .then(data => {
    console.log(data);
  }, error => {
    onReject(error);
  });