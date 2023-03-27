/**
 * 
 * This funtion print the pyramid of number count
 * 
 *   1     
    222    
   33333   
  4444444  
 555555555 
66666666666
 */

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let nums = `${i}`.repeat(i * 2 - 1);
    console.log(spaces + nums + spaces);
  }
}

pyramid(6);
