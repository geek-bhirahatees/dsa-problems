const missTheNum = (x, n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i !== x) {
      str += " " + i;
    }
  }
  return str;
};
console.log(missTheNum(5, 10));
