/*
 * We want to find the second maxmium number in a =[2,7,6,4,34,2,1]
 * maximum is in a = 7
 */

const funtions_module = require("./maxInArr");

const secondeMax = (arr) => {
  let firstMax = funtions_module.maxInArr(arr);
  arr.splice(arr.indexOf(firstMax), 1);
  return funtions_module.maxInArr(arr);
};

// console.log(secondeMax([34, 123, 6767653, 124, 14, 5785, 214567]));
