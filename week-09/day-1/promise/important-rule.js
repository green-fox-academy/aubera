function alwaysThrows(){
  let error = new Error("OH NOES");
  return error.message;
}

function iterate(input){
  console.log(input);
  return input + 1;
}

Promise.resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then()
  .then()
  .then()
  .then()
  .catch(error => console.log(error));