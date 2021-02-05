/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ans = nums[0]
  let imax = nums[0]
  let imin = nums[0]
  for (let i = 1; i < nums.length; i++) {
      let imx = imax
      let imi = imin
      imax = Math.max(imx * nums[i],  nums[i] * imi, nums[i])
      imin = Math.min(nums[i] * imi, imx * nums[i], nums[i])
      ans = Math.max(imax, ans)
  }
  return ans
};