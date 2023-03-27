/*
 *We want to find a given element in arr.
 * x = 7 ; a = [1,2,3,4,5,6,7,8]
 * if the element in the arr we shout print "x is in the arr"
 */

const linearSearch = (arr, x) => {
  for (let i = 0; i <= arr.length; i++) {
    if (x === arr[i]) {
      return x + " is found in a array";
    }
  }
  return x + " is not found in a array";
};

// It's the forEach() method for linearSearch

const forEachMethod = (arr, x) => {
  let output = x + " is not found in a array";
  arr.forEach((element) => {
    if (x === element) {
      output = x + " is found in a array";
    }
  });
  return output;
};

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(forEachMethod([1, 2, 3, 4, 5, 6, 7, 8], 10));
