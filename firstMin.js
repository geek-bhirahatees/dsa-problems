const function_module = require("./minInArr");

const firstMin = (arr) => {
  let firstInd = arr[0];
  let min = function_module.minInArr(arr);
  let index = arr.indexOf(min);
  arr[0] = min;
  arr[index] = firstInd;
  return arr;
};

// console.log(firstMin([48, 1, 4, 7]));
