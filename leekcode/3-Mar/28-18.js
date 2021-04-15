/**
 * 18. 四数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const ans = []
  if (nums.length < 4) return ans
  nums = nums.sort((a, b) => a - b)
  for(let j = 0; j < nums.length; j++) {
      if (j > 0 && nums[j] === nums[j-1]) continue
      let l = j + 1, r = nums.length - 1, t = target - nums[j]
      threeSum(nums,l, r, t, ans, nums[j])
  }
  return ans

};

function threeSum(nums,l,r, target,ans, fir) {
  for(let i = l; i <= r; i++) {
      if (i > l && nums[i] === nums[i-1]) continue
      let left = i + 1
      let right = r
      while(left < right) {
          const sum = nums[left] + nums[right] + nums[i]
          if (sum === target) {
              ans.push([fir, nums[i], nums[left++], nums[right--]])
              while(left < right && nums[left] === nums[left - 1]) left++
              while(left < right && nums[right] === nums[right + 1]) right--
          } else if (sum > target) {
              right--
          } else {
              left++
          }
      }
  }
}