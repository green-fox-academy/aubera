function parsePromised(input){
  return new Promise(function(fulfill, rejected){
    try {
      fulfill(JSON.parse(input));
    } catch (e) {
      rejected(console.log(e.message));
    }
  });
}

parsePromised(process.argv[2]);