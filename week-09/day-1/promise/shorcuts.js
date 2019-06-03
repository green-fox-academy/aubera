var promise = new Promise(function(fulfill, reject) {
  fulfill('SOME SECRET');
  reject(new Error('SOME ERROR'));
});

function onRejected(error){
  console.log(error.message);
}

var promise = Promise.resolve('OTHER SECRET');

var promise = Promise.reject(new Error('OTHER ERROR'));

promise.then(console.log);
promise.catch(onRejected);