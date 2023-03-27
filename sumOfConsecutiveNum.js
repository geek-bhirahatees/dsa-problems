const function_module = require("./maxInArr");

const sumOfConsecutiveNum = (arr, n) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      //   console.log(sum, result);
      sum += arr[j];
      if (arr[j] === undefined) {
        console.log(result);
        result.pop();
        return function_module.maxInArr(result);
      }
    }
    result.push(sum);
    // console.log(sum, result);
  }
  return function_module.maxInArr(result);
};

console.log(sumOfConsecutiveNum([4, 5, 10, 11, 1, 2, 3], 5));
