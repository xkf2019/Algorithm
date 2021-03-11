/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let len = nums.length
  if (len < 3) return true
  let count = 0
  for (let i = 1; i < len; i++) {
      const x = nums[i]
      const y = nums[i - 1]
      if (x < y) {
          count++
          if (count > 1) {
              return false
          }
          if (i > 1 && x < nums[i - 2]) {
              nums[i] = y
          }
      } 
  }
  return true
};