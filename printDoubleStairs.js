/**
 * This funtion merge a two staircasr like this
 * Ex  n = 5
 *
 *1               1 
  1 2           2 1 
  1 2 3       3 2 1
  1 2 3 4   4 3 2 1
  1 2 3 4 5 4 3 2 1
 *
 */

const getSpace = (n) => {
  let str = "";
  for (let i = 0; i < n * 4; i++) {
    str += " ";
  }
  return str;
};

const printStairs = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
  }
  return str;
};

function reversePrintNum(n) {
  let str = "";
  for (let i = n; i > 0; i--) {
    str += i + " ";
  }
  // console.log(str);
  return str;
}

// console.log(reversePrintNum(2));

// console.log(printStairs(5));

const printDoubleStairs = (n) => {
  let num = "";
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i < n) {
      str += printStairs(i) + getSpace(n - i - 1) + "  " + reversePrintNum(i);
    } else {
      str += printStairs(i) + getSpace(n - i - 1) + reversePrintNum(i - 1);
    }
    console.log(str);
  }
};

printDoubleStairs(5);
