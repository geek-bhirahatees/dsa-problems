/**
 * This funtion return m is the multiple of n
 *
 * Ex n = 10 , m = 2
 *
 * Expected output 10 is the multiple of 2
 */

const isMultipleOf = (n, m) => {
  if (m % n == 0) {
    return n + " is a multiple of " + m;
  } else {
    return n + " is not a multiple of " + m;
  }
};

console.log(isMultipleOf(17, 3));
