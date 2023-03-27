/*
   we want find the how many time 1 ,2, 3 are in the array
  Ex1 : x= [1, 2, 3] , array =  [1, 2, 2, 3, 3, 3, 4, 5, 6, 7];
  
  expected output is [ 'x is found 1 time', 'x is found 2 times', 'x is found 3 times' ]
   

*/

const funtions_module = require("./findDuplicate");

const findDuplicateCountInArr = (x, arr) => {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(funtions_module.findDuplicateCount(x[i], arr));
  }
  return result;
};

console.log(findDuplicateCountInArr([1, 2, 3], [1, 2, 2, 3, 3, 3, 4, 5, 6, 7]));
