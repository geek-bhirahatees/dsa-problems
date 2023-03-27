/*
 * We want to find the minimum number in a =[2,7,6,4,34,2,1]
 * minimum is in a = 34
 */

const minInArr = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

// console.log(minInArr([-1, -12, -21312, -123543, -345636, -1423325]));

exports.minInArr = minInArr;
