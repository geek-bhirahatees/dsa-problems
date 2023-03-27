const miniMaxSum = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
      console.log(sum);
    }
    result.push(sum);
  }
  return result;
};

console.log(miniMaxSum([5, 5, 5, 5, 5]));
