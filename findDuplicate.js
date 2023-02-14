/*
   we want find the how many time 1 is in the array
  Ex1 : x= 1 , array =  [1, 1, 2, 12, 4];
    we want to print x is found 2 times

      Ex1 : x= 1 , array =  [1, 2, 12, 4];
    we want to print x is found 1 times

*/

const findDuplicateCount = (x, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      count++;
    }
  }
  if (count >= 0) {
    if (count === 1) {
      return "x is found " + count + " time";
    } else {
      return "x is found " + count + " times";
    }
  } else {
    return "x is not found";
  }
};

// console.log(findDuplicateCount(1, [1, 1, 2, 12, 4]));

exports.findDuplicateCount = findDuplicateCount;
