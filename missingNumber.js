/**
 * In this funtion return the array of missing numbers
 *
 * Ex nums = [9, 2, 3, 5, 7, 0, 1]
 *
 * Expected output [4,6]
 *
 */
const findDisappearedNumbers = (nums) => {
  let result = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nums.includes(i) === false) {
      result.push(i);
    }
  }
  return result;
};

console.log(findDisappearedNumbers([9, 2, 3, 5, 7, 0, 1]));
