const extraLongFactorials = (n) => {
  let factorial = n;
  for (let i = n - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial.toLocaleString("fullwide", { useGrouping: false });
};
console.log(extraLongFactorials(25));
