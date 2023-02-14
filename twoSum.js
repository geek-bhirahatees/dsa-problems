/**
 * This funtions return array in that aray have two numbers if you add the num you will get a target
 *
 * Ex nums = [0, 1, 99, 92, 93, 29] , target = 30
 *
 * Expected output [1,29]
 *
 */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          console.log(nums);
          return [i, j];
        }
      }
    }
  }
}
console.log(twoSum([0, 1, 99, 92, 93, 29], 30));
