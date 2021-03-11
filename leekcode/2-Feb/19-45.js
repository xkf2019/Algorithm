/**
 * jump-game-ii
 * 跳跃游戏 II
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const len = nums.length
  let end = 0
  let maxP = nums[0]
  let steps = 0
  for (let i = 0; i < len - 1; i++) {
      maxP = Math.max(maxP, i + nums[i])
      if (end === i) {
          end = maxP
          steps++
      }
  }
  return steps
};