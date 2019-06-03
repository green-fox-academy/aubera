function attachTitle(firstargument){
  return 'DR. ' + firstargument;
}

let promise = new Promise(function(fulfill, rejected){
  fulfill('MANHATTAN');
});

promise
  .then(attachTitle)
  .then(console.log);