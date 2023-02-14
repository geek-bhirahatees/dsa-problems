/**
 * printDimond print a dimond like this
 *  1     
   2 2    
  3 3 3
 4 4 4 4
5 5 5 5 5
 4 4 4 4
  3 3 3
   2 2
    1
 * */

function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let nums = `${i} `.repeat(i * 1);
    console.log(spaces + nums + spaces);
  }
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let nums = `${i} `.repeat(i);
    console.log(spaces + nums + spaces);
  }
}

printDiamond(5);
