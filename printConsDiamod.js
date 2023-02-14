/**
 * printDimond print a dimond like this
 * 1   
  1 2  
 1 2 3
  1 2
   1
 * */
function printconseDiamond(n) {
  let str = " ";
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    str += i + " ";
    arr.push(str);
    console.log(spaces + str + spaces);
  }
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    console.log(spaces + arr[i - 1]);
  }
}

printconseDiamond(3);
