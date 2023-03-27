const pageCount = (n, p) => {
  let count = Math.abs(n - p);
  if (n % 2 === 0) {
    if (Math.floor(count / 2) === 0) {
      return Math.floor(count / 2);
    } else {
      return Math.floor(count / 2) - 1;
    }
  } else {
    return Math.floor(count / 2);
  }
};

console.log(pageCount(5, 1));
