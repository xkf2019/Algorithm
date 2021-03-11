/**
 * 53. 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0
  let ans = nums[0]
  nums.forEach(val => {
      pre = Math.max(pre + val, val)
      ans = Math.max(pre, ans)
  })
  return ans
};