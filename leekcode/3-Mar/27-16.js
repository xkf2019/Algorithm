/**
 * 16. 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => a - b)
  const len = nums.length
  let ans = 0, dif = Infinity
  for(let i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue
      let left = i + 1
      let right = len - 1
      while(left < right) {
          const sum = nums[left] + nums[right] + nums[i]
          if (sum === target) {
              return sum
          } else if (sum > target) {
              if (sum - target < dif) {
                  ans = sum
                  dif = sum - target
              }
              right--
          } else {
              if (target - sum < dif) {
                  ans = sum
                  dif = target - sum
              }
              left++
          }
      }
  }
  return ans
};