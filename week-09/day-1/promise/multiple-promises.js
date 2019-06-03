function all(promise1, promise2) {
  counter = 0;
  promise1.then(counter++);
  promise2.then(counter++);
  Promise.all([promise1, promise2]).then(function(values) {
    console.log(values);
  });
  if (counter >= 2) {
    // let promise = new Promise(function(resolve, rejected) {
    //   resolve(function() {
    //   });
    //   rejected(new Error('valami'));
    // });
    // return promise;
  }
}

all(getPromise1(), getPromise2()).then(console.log);