const deletingNum = (x, n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (x !== i) {
      str += i;
    }
  }
  return str;
};
console.log(deletingNum(2, 6));
