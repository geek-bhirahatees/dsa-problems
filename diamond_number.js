/* 
printReverseDiamond funtions print diamod likke this
    1 
   1 2 
  1 2 3
 1 2 3 4
  3 2 1
   2 1
    1    
*/

//this functions used to print a number in reverse ex: 4 3 2 1
function reverseNum(n) {
  let str = "";
  for (let i = n; i >= 1; i--) {
    str += i + " ";
  }
  return str;
}
//this funtion is the main funtion to prin diamond
function printreverseDiamond(n) {
  let str = " ";
  for (let i = 1; i <= n; i++) {
    //repeat is a builtin method used to give a multiple items in same value
    let spaces = " ".repeat(n - i);
    str += i + " ";
    console.log(spaces + str);
  }
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i + 1);
    //reverseNum is the function to return number reversely
    console.log(spaces + reverseNum(i));
  }
}

printreverseDiamond(4);
