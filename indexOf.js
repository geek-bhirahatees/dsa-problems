/**
 * This funtion like builtin method index of it will return the index of the element
 *
 * Ex value = [0,1,2,3,4,5] , n = 2
 *
 * Expected output 2
 */

function indexOf(value, n) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === n) {
      return i;
    }
  }
}

console.log(indexOf("nanthagopal", "g"));
