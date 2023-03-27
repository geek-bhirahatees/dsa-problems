const containsDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

const singleNumber = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i !== arr.includes(j)) {
        console.log(i, j);
        return i;
      }
    }
  }
  return false;
};

const printdtstarDiamond = (n) => {
  for (let i = 0; i <= n; i++) {
    let str;
    if (i === 0) {
    }
  }
};

// console.log(singleNumber([2, 2, 1, 1]));
