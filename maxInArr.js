/*
 * We want to find the maxmium number in a =[2,7,6,4,34,2,1]
 * maximum is in a = 34
 */

const maxInArr = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(maxInArr([34, 123, 6767, 124, 14, 475785, 214567, 0987611]));

exports.maxInArr = maxInArr;
