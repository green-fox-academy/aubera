'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(a: string = 'Welcome ', b: number = 2, c: any = ' my function') {
  console.log(a + b + c);
}

printParams();
