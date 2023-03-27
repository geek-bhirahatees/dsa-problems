/**
 * This funtions print a staircase like this
 *
 * Ex = 6
 * 
 *        1 
        2 1 
      3 2 1
    4 3 2 1
  5 4 3 2 1
6 5 4 3 2 1
 *
 */

function reverseStaircase(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    let num = n;
    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        str += num + " ";
      } else {
        str += "  ";
        if (num <= 9) {
          str += "";
        }
      }
      num--;
    }
    console.log(str);
  }
}

// reverseStaircase(6);

// Write your code here
function HashreverseStaircase(n) {
  let result = "";
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

console.log(HashreverseStaircase(5));
