/**
 * isPrime will return the number is prime number or not
 *
 *Ex n = 12 it will return 12 isn't prime.
 *
 */

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return n + " isn't Prime ";
    }
  }
  return n + " is Prime ";
};

// console.log(isPrime(11));
