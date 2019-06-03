var promise = new Promise(function(fulfill, rejected){
  fulfill('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');