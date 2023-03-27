const divisibleSumPairs = (n, k, ar) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      if (i === j) {
        j++;
      }
      sum = ar[i] + ar[j];
      if (sum % k === 0) {
        console.log(ar[i], ar[j], sum);
      }
    }
  }
  return count;
};

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
