const findCount = (arr, x) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      count++;
    }
  }
  return count;
};
const birthdayCakeCandles = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(findCount(arr, arr[i]));
    // console.log(findCount(arr, arr[i]));
  }
  let max = result[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < result[i]) {
      max = result[i];
    }
  }
  return max;
};

console.log(birthdayCakeCandles([3, 3, 1, 2]));
