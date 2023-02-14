/**
 *
 * This funtion print a number like a staircase
 *
 * Ex n = 5
 *
1 
  2 
    3
      4
        5
          4
            3
              2
                1
 */

const printNums = (n) => {
  let space = "";
  let j = n - 1;
  for (let i = 1; i <= n * 2 - 1; i++) {
    let str = "";
    if (i <= n) {
      str = space + i + " ";
      space += "  ";
    } else {
      str = space + j + " ";
      space += "  ";
      j--;
    }
    console.log(str);
  }
};

printNums(5);
