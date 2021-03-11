/**
 * jump-game
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxStep = 0
  let i = 0
  while (i <= maxStep) {
      if (maxStep >= nums.length - 1) return true
      maxStep = Math.max(maxStep, i + nums[i])
      i++
  }
  return false
};